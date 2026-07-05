const STEPS = [
  {
    n: '01',
    title: 'Apply and talk',
    body: 'Application first, then a call on your history and goals.',
  },
  {
    n: '02',
    title: 'Get assessed',
    body: 'In person if you’re local, on video if you’re remote. Your program gets built from this, not from a template.',
  },
  {
    n: '03',
    title: 'Train and recover',
    body: 'First week of programming within days, progressed as you adapt.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section border-top">
      <div className="container">
        <span className="label">How it works</span>
        <h2 className="section-head">Three steps to get started.</h2>
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
            href="https://form.typeform.com/to/EiFyHacn"
            className="btn-pill btn-pill--primary"
          >
            Start your application ⊕
          </a>
        </div>
      </div>
    </section>
  );
}
