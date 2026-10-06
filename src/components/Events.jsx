import Header from './Header';
import Footer from './Footer';
import { EVENTS, EVENT_MINUTES } from '../events.js';

const TZ = 'America/New_York';

// Dates are stored as plain 'YYYY-MM-DD' local days; parse at noon so the
// weekday never slips a day across time zones.
const toDay = (iso) => new Date(`${iso}T12:00:00`);

const fmt = (iso, opts) =>
  toDay(iso).toLocaleDateString('en-US', { timeZone: TZ, ...opts });

function formatTime(hhmm) {
  if (!hhmm) return 'Time TBA';
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return m ? `${h12}:${String(m).padStart(2, '0')} ${suffix}` : `${h12} ${suffix}`;
}

function formatTimes(e) {
  if (!e.time) return 'Time TBA';
  return e.endTime
    ? `${formatTime(e.time)} to ${formatTime(e.endTime)}`
    : formatTime(e.time);
}

function place(e) {
  return e.city ? `${e.venue}, ${e.city}` : e.venue;
}

function directionsUrl(e) {
  const q = [e.venue, e.city || 'South Florida', 'FL'].join(' ');
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

// Google Calendar "add event" link. Timed events use local wall-clock time
// plus ctz; events without a time become all-day.
function calendarUrl(e) {
  const day = e.date.replaceAll('-', '');
  let dates;
  if (e.time) {
    const toMins = (hhmm) => {
      const [h, m] = hhmm.split(':').map(Number);
      return h * 60 + m;
    };
    const start = toMins(e.time);
    const end = e.endTime ? toMins(e.endTime) : start + EVENT_MINUTES;
    const hhmm = (mins) =>
      `${String(Math.floor(mins / 60)).padStart(2, '0')}${String(mins % 60).padStart(2, '0')}00`;
    dates = `${day}T${hhmm(start)}/${day}T${hhmm(end)}`;
  } else {
    const next = toDay(e.date);
    next.setDate(next.getDate() + 1);
    dates = `${day}/${next.toISOString().slice(0, 10).replaceAll('-', '')}`;
  }
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `HMN AIDE: ${e.title} at ${e.venue}`,
    dates,
    ctz: TZ,
    location: place(e),
    details: `${e.access === 'ticketed' ? 'Mobility with HMN AIDE.' : 'Free mobility workshop with HMN AIDE.'} https://hmnaide.clinic/events`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

function AccessTag({ access }) {
  if (access === 'ticketed') return <span className="event-tag">Ticketed</span>;
  return access === 'members' ? (
    <span className="event-tag">Members only</span>
  ) : (
    <span className="event-tag event-tag--open">Open to all</span>
  );
}

function EventActions({ event }) {
  if (event.access === 'members') {
    return (
      <p className="event-note">For {event.venue} members.</p>
    );
  }
  return (
    <div className="event-actions">
      {event.access === 'ticketed' && (
        <a
          className="btn-pill btn-pill--primary"
          href={event.ticketUrl}
          target="_blank"
          rel="noreferrer"
        >
          Get tickets
        </a>
      )}
      {event.date && (
        <a
          className={`btn-pill${event.access === 'ticketed' ? '' : ' btn-pill--primary'}`}
          href={calendarUrl(event)}
          target="_blank"
          rel="noreferrer"
        >
          Add to calendar
        </a>
      )}
      <a
        className="btn-pill"
        href={directionsUrl(event)}
        target="_blank"
        rel="noreferrer"
      >
        Directions
      </a>
    </div>
  );
}

function EventRow({ event }) {
  return (
    <li className="event-row">
      <div className="event-date">
        {event.date ? (
          <>
            <span className="event-day">{fmt(event.date, { day: 'numeric' })}</span>
            <span className="event-dow">
              {fmt(event.date, { weekday: 'short', month: 'short' })}
            </span>
          </>
        ) : (
          <span className="event-day event-day--tba">TBA</span>
        )}
      </div>
      <div className="event-main">
        <div className="event-meta">
          <AccessTag access={event.access} />
          <span>{event.date ? formatTimes(event) : 'Date TBA'}</span>
        </div>
        <h3 className="event-title">{event.title}</h3>
        <p className="event-place">{place(event)}</p>
      </div>
      <EventActions event={event} />
    </li>
  );
}

export default function Events() {
  const today = new Date().toLocaleDateString('en-CA', { timeZone: TZ });
  const upcoming = EVENTS.filter((e) => !e.date || e.date >= today).sort(
    (a, b) => (a.date || '9999').localeCompare(b.date || '9999'),
  );

  // Group into months, keeping undated events in their own group at the end.
  const groups = [];
  for (const e of upcoming) {
    const key = e.date ? fmt(e.date, { month: 'long', year: 'numeric' }) : 'Date to be confirmed';
    const last = groups[groups.length - 1];
    if (last && last.key === key) last.events.push(e);
    else groups.push({ key, events: [e] });
  }

  return (
    <>
      <Header />
      <main className="events-page">
        <div className="container">
          <h1 className="section-head events-head">Upcoming workshops.</h1>
          <div className="rule-accent" />
          <p className="events-intro">
            Free mobility workshops across South Florida.
          </p>

          {upcoming.length === 0 ? (
            <p className="events-empty">
              No workshops scheduled right now. Check back soon, or follow{' '}
              <a href="https://www.instagram.com/hmnaide.clinic">@hmnaide.clinic</a>{' '}
              for new dates.
            </p>
          ) : (
            groups.map((g) => (
              <section key={g.key} className="event-group">
                <h2 className="event-group-head">{g.key}</h2>
                <ul className="event-list">
                  {g.events.map((e) => (
                    <EventRow key={e.id} event={e} />
                  ))}
                </ul>
              </section>
            ))
          )}

          <section className="events-host border-top">
            <div>
              <span className="label">Host one</span>
              <p className="events-host-copy">
                Want a free mobility workshop at your gym, club or event?
              </p>
            </div>
            <a href="/contact-us" className="btn-pill btn-pill--primary">
              Get in touch
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
