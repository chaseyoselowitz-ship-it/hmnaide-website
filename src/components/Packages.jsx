import { useEffect, useState } from 'react';
import { CALENDLY_URL, openCalendly } from '../calendly.js';

// One program, three prices. Tier names and cadences match the Stripe catalog
// (loaded 2026-09-08) so the card matches the receipt. The shared list sits
// above the cards so "Everything above" never forward-references.
const SHARED = [
  'Programming built around your week, and rebuilt when travel, a competition, or a heavy stretch at work moves it.',
  'A weekly check-in and two 30-minute video calls a month.',
  'Text access on a dedicated business line.',
  'I own the tracking and the log. A session I am not at costs you one text with the loads.',
  'A quarterly retest and program reset. The next block is built from what the retest says.',
];

const TIERS = [
  {
    n: '01',
    title: 'Hybrid Coaching 2x',
    price: '$850 a month',
    body: 'Everything above, plus two in-person sessions a month in South Florida. The most time in the room with me that I sell.',
  },
  {
    n: '02',
    title: 'Hybrid Coaching',
    price: '$685 a month',
    body: 'Everything above, plus one in-person session a month in South Florida. The calls and the text line carry the weeks in between.',
  },
  {
    n: '03',
    title: 'Remote Coaching',
    price: '$515 a month',
    body: 'Everything above, run over video and text. For the client outside South Florida, or the one who is on the road more than he is home. Same program, same quarterly retest. No community feed, and the same one person the whole way.',
  },
];

const BONUSES = [
  'A check-in after a competition or a big work event. The week after a hard one is where most plans fall apart, so that week gets rebuilt with me, not guessed at.',
  'Technique and position breakdown sessions, in the room on a Hybrid tier and on video on Remote. The person building your strength work is the same person looking at the positions it is built for.',
  'Priority scheduling and rebooking around business travel. When the trip moves, the in-person session moves with it on Hybrid, and the calls move with it on Remote.',
  'Early access to my BJJ-specific research takes: what the studies on grapplers say, and what I change in a block because of them.',
];

const DESKTOP = '(min-width: 769px)';

export default function Packages() {
  // The bonus block is open on desktop and collapsed on a phone, so the offer
  // block on mobile reads label, head, intro, shared list, cards, rates, note,
  // pill. Rendered closed first, then opened once we know the width.
  const [bonusOpen, setBonusOpen] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia(DESKTOP);
    setBonusOpen(mq.matches);
    const onChange = (e) => setBonusOpen(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <section id="packages" className="section border-top">
      <div className="container">
        <span className="label">The Anti-Fragile Operator Program</span>
        <p className="package-descriptor">
          1:1 strength and mobility coaching for the business owner who trains
          BJJ, built so a hard week leaves you more capable than it found you,
          and carried by me so it stays off your mind.
        </p>
        <h2 className="section-head">One program. Three prices.</h2>
        <p className="package-intro">
          Every tier is the same program. What changes is how often you are in
          the room with me in South Florida. Prices are monthly and sit next to
          what they buy.
        </p>
        <h3 className="package-shared-head">On every tier</h3>
        <ul className="package-shared">
          {SHARED.map((line) => (
            <li className="package-shared-item" key={line}>
              {line}
            </li>
          ))}
        </ul>
        <div className="package-grid">
          {TIERS.map((p) => (
            <article className="package-card" key={p.n}>
              <span className="package-n">{p.n}</span>
              <h3 className="package-title">{p.title}</h3>
              <p className="package-price">{p.price}</p>
              <p className="package-body">{p.body}</p>
            </article>
          ))}
        </div>
        <details
          className="package-bonus"
          open={bonusOpen}
          onToggle={(e) => setBonusOpen(e.currentTarget.open)}
        >
          <summary className="package-bonus-head">Also in every tier</summary>
          <ul className="package-bonus-list">
            {BONUSES.map((line) => (
              <li className="package-bonus-item" key={line}>
                {line}
              </li>
            ))}
          </ul>
        </details>
        <p className="package-rates">
          These are founding rates. The first clients through go before the
          numbers exist, so they pay less than the people who come after them,
          and their retests become the numbers those people read before they
          decide.
        </p>
        <p className="package-note">
          Every tier starts in the same place: a call, then a testing session,
          then your first block. Nothing is pre-written.
        </p>
        <div className="package-cta">
          <a
            href={CALENDLY_URL}
            onClick={openCalendly}
            className="btn-pill btn-pill--primary"
          >
            Apply for a call
          </a>
        </div>
      </div>
    </section>
  );
}
