import { CALENDLY_URL, openCalendly } from '../calendly.js'

export default function VisualSection() {
  return (
    <section className="visual-section">
      <div className="visual-stack">
        <p className="visual-tagline">
          You run the business. I run your training.
        </p>
        <a
          href={CALENDLY_URL}
          onClick={openCalendly}
          className="circle-trigger circle-trigger--cta"
        >
          Apply for a call
        </a>
      </div>
    </section>
  );
}
