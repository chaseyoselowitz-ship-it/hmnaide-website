const CARDS = [
  {
    title: 'The owner who trains',
    body: 'You run a business and train BJJ a few nights a week, and by the time you get to your own training there is no decision-making left in you. You want the program built and adjusted before you have to ask.',
  },
  {
    title: 'The competitor who wants one corner',
    body: 'You already win, on the mats or in someone else’s corner, and the last thing you need is another specialist with an opinion. You want one coach who knows the sport from the inside and holds your numbers.',
  },
  {
    title: 'The owner who wants it off his desk',
    body: 'Your body has started costing you at work, and managing it is one more line on a desk that is already full. You want one coach who makes the call, is in the room as often as your tier puts him there, and keeps the log so you do not.',
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
          If the business, the family, and the mats are all fighting for the
          same hours, this was built for you. It is 1:1 coaching with no group
          feed to keep up with: I build the program and adjust it as your
          week moves.
        </p>
      </div>
    </section>
  );
}
