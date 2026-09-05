import { CALENDLY_URL, openCalendly } from '../calendly.js'

export default function VisualSection() {
  return (
    <section className="visual-section">
      <div className="visual-stack">
        <p className="visual-tagline">
          Really good recovery is the kind you built in advance.
        </p>
        <a
          href={CALENDLY_URL}
          onClick={openCalendly}
          className="circle-trigger circle-trigger--cta"
        >
          Start
        </a>
      </div>
    </section>
  );
}
