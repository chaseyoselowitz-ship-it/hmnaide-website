import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { CALENDLY_URL, openCalendly } from '../calendly.js'

// Submissions are sent through Formspree (form ID mbdvwzek).
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdvwzek';

// Same URL the footer uses. The visible text is always the word Instagram,
// never the handle.
const INSTAGRAM_URL = 'https://www.instagram.com/hmnaide.clinic';

// The three lanes a message can arrive in. /contact-us?about=<value>
// preselects one (Workshops button -> workshop, FAQ capture -> cleared).
const LANES = ['workshop', 'question', 'cleared'];

const PLACEHOLDERS = {
  '': 'Write it the way you would text it.',
  workshop:
    'The school or event, where it is, roughly when, how many people, and what they train.',
  question:
    'Ask it the way you would text it. Nothing about what hurts; that is a call, not a form.',
  cleared:
    'Who you are seeing and roughly when you expect to be cleared. Nothing about what hurts; that stays between you and them.',
};

export default function ContactUs() {
  // idle | submitting | success | error
  const [status, setStatus] = useState('idle');
  // '' | workshop | question | cleared
  const [about, setAbout] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const lane = new URLSearchParams(window.location.search).get('about');
    if (LANES.includes(lane)) setAbout(lane);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.target;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        // Keep what was typed so a retry costs nothing.
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <Header />
      <main className="contact-page">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-left">
              <p className="label">Contact</p>
              <h1 className="section-head">Write to me.</h1>
              <div className="rule-accent" />
              <p className="contact-intro">
                Three kinds of message land here. You run an academy, a gym, or
                an event and want a mobility workshop on your mat. You have a
                question about coaching that you want answered before you apply.
                Or you are not cleared to train yet and want me to check back in
                when you are. Whichever it is, it comes to me, not a front desk,
                and I answer by email.
              </p>

              <div className="contact-coaching" style={{ marginBottom: '3rem' }}>
                <div className="rule-accent" />
                <p className="contact-alt" style={{ margin: '1.5rem 0 1rem' }}>
                  Ready for coaching? Skip the form.
                </p>
                <div
                  className="contact-coaching-actions"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <a
                    href={CALENDLY_URL}
                    onClick={openCalendly}
                    className="btn-pill btn-pill--primary"
                  >
                    Apply for a call
                  </a>
                  <a href="/#packages" className="link-small">
                    See the program and prices
                  </a>
                </div>
                <p
                  className="contact-coaching-what"
                  style={{
                    color: 'var(--w-body)',
                    maxWidth: '48ch',
                    marginTop: '1.25rem',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                  }}
                >
                  You fill in an application: name, email, phone, a few lines
                  on where you are with training and what you want, and a
                  budget question. The call comes after it, you and me, about
                  your week and whether this is a fit.
                </p>
              </div>

              {status === 'success' ? (
                <div className="contact-success">
                  <p className="contact-success-title">Sent.</p>
                  <p>
                    It is in my inbox and I answer by email, so watch for a reply
                    from HMN AIDE. If what you actually want is coaching, the
                    faster route is the call.
                  </p>
                  <p style={{ marginTop: '1rem' }}>
                    <a
                      className="contact-alt-link"
                      href={CALENDLY_URL}
                      onClick={openCalendly}
                    >
                      Apply for a call
                    </a>
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="_subject"
                    value={'HMN AIDE contact: ' + about}
                  />
                  <label className="contact-field">
                    <span className="contact-field-label">Name</span>
                    <input type="text" name="name" required autoComplete="name" />
                  </label>
                  <label className="contact-field">
                    <span className="contact-field-label">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                    />
                  </label>
                  <label className="contact-field">
                    <span className="contact-field-label">What is this about?</span>
                    <select
                      name="about"
                      required
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    >
                      <option value="">Pick one</option>
                      <option value="workshop">
                        A mobility workshop at my academy, gym, or event
                      </option>
                      <option value="question">
                        A question about coaching before I apply
                      </option>
                      <option value="cleared">
                        I am not cleared to train yet. Check back in with me.
                      </option>
                    </select>
                  </label>
                  <label className="contact-field">
                    <span className="contact-field-label">Your message</span>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      placeholder={PLACEHOLDERS[about]}
                    />
                  </label>
                  <button
                    type="submit"
                    className="btn-pill btn-pill--primary contact-submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending' : 'Send'}
                  </button>
                  {status === 'error' && (
                    <p className="contact-error">
                      That did not send. Try again in a minute, or send me a DM
                      on{' '}
                      <a className="contact-alt-link" href={INSTAGRAM_URL}>
                        Instagram
                      </a>
                      .
                    </p>
                  )}
                </form>
              )}
            </div>

            <div className="contact-right">
              <img
                className="contact-image"
                src="/workshop-event.webp"
                srcSet="/workshop-event-700.webp 700w, /workshop-event.webp 1206w"
                sizes="(max-width: 860px) 100vw, 50vw"
                width="1206"
                height="1726"
                decoding="async"
                alt="Chase leading a mobility workshop at a live event"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
