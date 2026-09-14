import { CALENDLY_URL, openCalendly } from '../calendly.js';

// Founder credibility. Photo left, story right, credential chips underneath.
// Every fact here is on the live page or in the audit brief; nothing added.
const CREDS = [
  'Certified Strength & Conditioning Specialist (NSCA)',
  'B.S. Kinesiology',
  'BJJ brown belt · IBJJF Pan American champion · still competing',
  'Has coached UFC, ADCC, and IBJJF competitors',
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
              src="/chase.webp"
              srcSet="/chase-300.webp 300w, /chase.webp 416w"
              sizes="(max-width: 768px) 100vw, 40vw"
              width="416"
              height="520"
              loading="lazy"
              decoding="async"
              alt="Chase Yoselowitz, founder of HMN AIDE"
            />
          </div>
          <div className="about-copy">
            <h2 className="section-head">Why I built this.</h2>
            <p>
              In 2022 I blew my back out training for Pan Ams. The ER found
              nothing wrong, gave me pain meds, and sent me home. Nothing wrong
              is what a referee says when he restarts the match: it puts you
              back in the center of the mat and tells you nothing about how you
              win from there. What got me back was not rest. It was training,
              progressive load, week after week, and I still compete on that
              back.
            </p>
            <p>
              I run this business and I still compete, so I know the week you
              are describing from the inside: a camp, a client roster, and one
              body expected to show up for both. That is who I coach, in person
              across Boca Raton, Palm Beach, and Broward. The man who runs a
              business, trains BJJ, and wants his training built, logged, and
              adjusted by one person he trusts, so it stops taking up room in
              his head.
            </p>
            <p>
              Most trainers back off the moment something hurts, and most of
              what you get handed after that is too light to build anything. I
              coach the other way, and I made the calls I now make for you on
              my own back first: what to load, when to back off, and when a
              doctor needs to see it before I do. If that is the person you
              want, the next step is a call with me. Not a sales team. Me,
              asking about your week and what you want your body to do, and
              telling you straight whether this is a fit.
            </p>
            <a
              href={CALENDLY_URL}
              onClick={openCalendly}
              className="link-small"
            >
              Apply for a call
            </a>
            <p className="about-name">Chase Yoselowitz</p>
            <p className="about-role">
              CSCS · Founder, and the coach you work with
            </p>
            <ul className="about-creds">
              {CREDS.map((c) => (
                <li className="about-cred" key={c}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
