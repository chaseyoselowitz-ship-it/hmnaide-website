// v8 · founder credibility, placed before the philosophy (the founder is the
// product). Photo left, story right, credential strip underneath. The full
// long-form story lives on the About page.
const CREDS = [
  'Certified Strength & Conditioning Specialist (NSCA)',
  'Doctor of Physical Therapy candidate',
  'B.S. Kinesiology',
  'BJJ brown belt · IBJJF Pan American champion · still competing',
  'Coaches UFC, ADCC, and IBJJF competitors alongside everyday athletes',
];

export default function About() {
  return (
    <section id="about" className="section border-top">
      <div className="container">
        <span className="label">About</span>
        <div className="about-grid">
          <div className="about-media">
            <img
              className="about-photo"
              src="/chase.png"
              alt="Chase Yoselowitz, founder of HMN AIDE"
            />
          </div>
          <div className="about-copy">
            <h2 className="section-head">Why I built this.</h2>
            <p>
              In 2022 I blew my back out training for Pan Ams. The ER found
              nothing wrong, gave me pain meds, and sent me home. What got me
              back wasn&rsquo;t rest. It was training: progressive load, week
              after week.
            </p>
            <p>
              Most trainers are afraid of injuries. Most clinics are afraid of
              hard training. HMN AIDE is built in the gap between them: training
              that pushes you, grounded in rehab science.
            </p>
            <p className="about-name">Chase Yoselowitz, CSCS · Founder</p>
          </div>
        </div>
        <ul className="about-creds">
          {CREDS.map((c) => (
            <li className="about-cred" key={c}>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
