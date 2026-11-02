import { useEffect, useRef } from 'react';
import Logo from './Logo';
// Brevo's own subscription form, pasted from Brevo (Contacts > Forms > Share > Embed).
// Sign-ups only go through Brevo's form, with its consent box and double opt-in.
import brevoForm from '../brevo/elon-form.html?raw';

const STEPS = ['Question every rule', 'Delete', 'Simplify', 'Speed up', 'Automate'];

export default function ElonOptin() {
  const formRef = useRef(null);

  // Brevo's embed needs its own script once the form markup is on the page.
  useEffect(() => {
    if (!brevoForm.includes('sib-form')) return;
    window.LOCALE = 'en';
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = window.GENERIC_INVALID_MESSAGE = 'That does not look right. Please check it and try again.';
    window.REQUIRED_ERROR_MESSAGE = 'Please fill this in.';
    window.AUTOHIDE = Boolean(0);
    // Brevo's base styles for its messages, loaders and hidden fields
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://sibforms.com/forms/end-form/build/sib-styles.css';
    document.head.appendChild(css);
    const s = document.createElement('script');
    s.src = 'https://sibforms.com/forms/end-form/build/main.js';
    s.defer = true;
    document.body.appendChild(s);
    return () => { s.remove(); css.remove(); };
  }, []);

  return (
    <main className="optin">
      <a href="/" className="optin-logo" aria-label="HMN AIDE home">
        <Logo size={48} variant="white" />
      </a>

      <h1 className="optin-title">
        How to use Elon Musk&rsquo;s business method to <span>fix your training</span>
      </h1>

      <p className="optin-lede">
        Elon runs his companies on 5 steps. This free playbook runs them on your training week,
        so your plan fits your life and keeps you on the mat.
      </p>

      <ol className="optin-steps">
        {STEPS.map((s, i) => (
          <li key={s}>
            <span>0{i + 1}</span>
            {s}
          </li>
        ))}
      </ol>

      <section className="optin-form" ref={formRef} dangerouslySetInnerHTML={{ __html: brevoForm }} />

      <p className="optin-by">Chase Yoselowitz, CSCS</p>
    </main>
  );
}
