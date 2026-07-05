import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

// Submissions are sent through Formspree (form ID mbdvwzek).
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdvwzek';

export default function ContactUs() {
  // idle | submitting | success | error
  const [status, setStatus] = useState('idle');

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
              <p className="label">Workshops &amp; Events</p>
              <h1 className="section-head">Host a workshop.</h1>
              <div className="rule-accent" />
              <p className="contact-intro">
                Want to host a mobility workshop at your facility or event? Fill
                out the form below.
              </p>
              <p className="contact-alt">
                Looking to book coaching?{' '}
                <a
                  className="contact-alt-link"
                  href="https://form.typeform.com/to/EiFyHacn"
                >
                  Apply here.
                </a>
              </p>

              {status === 'success' ? (
                <div className="contact-success">
                  <p className="contact-success-title">Message sent.</p>
                  <p>
                    Thanks for reaching out &mdash; you&rsquo;ll hear back soon.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
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
                    <span className="contact-field-label">
                      Tell us about your event
                    </span>
                    <textarea name="message" rows={6} required />
                  </label>
                  <button
                    type="submit"
                    className="btn-pill btn-pill--primary contact-submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send message'}
                  </button>
                  {status === 'error' && (
                    <p className="contact-error">
                      Something went wrong. Please try again, or email us
                      directly.
                    </p>
                  )}
                </form>
              )}
            </div>

            <div className="contact-right">
              <img
                className="contact-image"
                src="/workshop-event.jpg"
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
