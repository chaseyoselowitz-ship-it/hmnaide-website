import { CALENDLY_URL, openCalendly } from '../calendly.js'

const STEPS = [
  {
    n: '01',
    title: 'Book',
    body: 'Pick a time and fill in a short form. Two minutes.',
  },
  {
    n: '02',
    title: 'Talk',
    body: 'A free call about your goals, your history, and what you’ve tried.',
  },
  {
    n: '03',
    title: 'Assess',
    body: 'In person or on video. Your program comes from this.',
  },
  {
    n: '04',
    title: 'Train and recover',
    body: 'Your first week of programming arrives within days.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section border-top">
      <div className="container">
        <span className="label">The Process</span>
        <h2 className="section-head">How we work.</h2>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="how-cta">
          <a
            href={CALENDLY_URL}
          onClick={openCalendly}
            className="btn-pill btn-pill--primary"
          >
            Book your call ⊕
          </a>
        </div>
      </div>
    </section>
  );
}
