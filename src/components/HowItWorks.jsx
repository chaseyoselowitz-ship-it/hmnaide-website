import { CALENDLY_URL, openCalendly } from '../calendly.js'

const STEPS = [
  {
    n: '01',
    title: 'Apply',
    body: 'An application: name, email, phone, a few lines on where you are with training and what you want, and a budget question. The call comes after it, and the call is about you.',
  },
  {
    n: '02',
    title: 'Talk',
    body: 'A call about what you train, what your week already holds, and what you want to be able to do. We both decide if it is a fit.',
  },
  {
    n: '03',
    title: 'Test',
    // OPEN (Chase): does the Hybrid testing session (03) and the quarterly
    // retest (05) count as that month's in-person session, or sit on top of
    // it? Not stated here until he answers. When he does, mirror the answer in
    // Packages.jsx (tier cards) and FAQ 06.
    body: 'Your first session. On a Hybrid tier it is in person in South Florida; on Remote it runs on video. We put numbers on what you can load and through what range, and the program is built from those numbers.',
  },
  {
    n: '04',
    title: 'Train',
    body: 'I build the block, I tune it as your week changes, and I keep the log. When I am in the room I write it as we go. When I am not, you text me what you lifted and I write it in. You lift. I carry the clipboard.',
  },
  {
    n: '05',
    title: 'Retest',
    body: 'Every quarter, in person, or on video if you are remote. The same numbers measured again, and the next block reset against them.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section border-top">
      <div className="container">
        <span className="label">How it works</span>
        <h2 className="section-head">You show up. I own the rest.</h2>
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
            Apply for a call
          </a>
        </div>
      </div>
    </section>
  );
}
