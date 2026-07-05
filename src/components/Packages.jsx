const PACKAGES = [
  {
    n: '01',
    title: 'The Program',
    body: 'I build your custom plan. You run it on your own, anywhere, on your schedule.',
  },
  {
    n: '02',
    title: 'Remote Coaching',
    body: 'The custom plan plus ongoing coaching, check-ins, and progress reviews. From anywhere in the world.',
  },
  {
    n: '03',
    title: 'Hybrid & In-Person',
    body: 'Train with me in South Florida. Mix self-guided days with in-person sessions, or go fully in-person.',
  },
];

export default function Packages() {
  return (
    <section id="packages" className="section border-top">
      <div className="container">
        <span className="label">Packages</span>
        <h2 className="section-head">Three ways to train.</h2>
        <div className="package-grid">
          {PACKAGES.map((p) => (
            <article className="package-card" key={p.n}>
              <span className="package-n">{p.n}</span>
              <h3 className="package-title">{p.title}</h3>
              <p className="package-body">{p.body}</p>
            </article>
          ))}
        </div>
        <p className="package-note">
          Every package starts with the same assessment. Nothing is pre-written.
        </p>
      </div>
    </section>
  );
}
