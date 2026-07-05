const CARDS = [
  {
    title: 'The Everyday Athlete',
    body: 'You train to stay strong, healthy, and capable for decades.',
  },
  {
    title: 'The Weekend Warrior',
    body: 'Your sport isn’t your job, but losing it isn’t an option.',
  },
  {
    title: 'The Competitor',
    body: 'You compete to win. Recovery keeps you winning longer.',
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
        <p className="who-note">
          Same system at every level. The program meets you where you are.
        </p>
      </div>
    </section>
  );
}
