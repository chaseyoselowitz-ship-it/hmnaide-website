import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

// Submissions are sent through Formspree. Replace YOUR_FORM_ID below with the
// ID from your own Formspree form (see the setup steps Chase was given).
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

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
          <p className="label">Contact</p>
          <h1 className="section-head">Let&rsquo;s talk.</h1>
          <div className="rule-accent" />
          <p className="contact-intro">
            Questions about training, workshops, or working together? Send a note
            and Chase will get back to you.
          </p>

          {status === 'success' ? (
            <div className="contact-success">
              <p className="contact-success-title">Message sent.</p>
              <p>Thanks for reaching out &mdash; you&rsquo;ll hear back soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-field">
                <span className="contact-field-label">Name</span>
                <input type="text" name="name" required autoComplete="name" />
              </label>
              <label className="contact-field">
                <span className="contact-field-label">Email</span>
                <input type="email" name="email" required autoComplete="email" />
              </label>
              <label className="contact-field">
                <span className="contact-field-label">Message</span>
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
                  Something went wrong. Please try again, or email us directly.
                </p>
              )}
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
