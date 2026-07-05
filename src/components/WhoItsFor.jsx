const CARDS = [
  {
    title: 'The operator',
    body: 'A career that eats time. You want decades of strong, not a peak.',
  },
  {
    title: 'The rebuilder',
    body: 'Cleared, past the acute stage, done being told to rest.',
  },
  {
    title: 'The competitor',
    body: 'Grappler, lifter, racquet athlete. Durability decides how long you get.',
  },
];

export default function WhoItsFor() {
  return (
    <section id="who" className="section border-top">
      <div className="container">
        <span className="label">Who it&rsquo;s for</span>
        <div className="who-grid">
          {CARDS.map((c) => (
            <article className="who-card" key={c.title}>
              <h3 className="who-title">{c.title}</h3>
              <p className="who-body">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
