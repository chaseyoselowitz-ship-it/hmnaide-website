const TILES = [
  {
    title: 'Strength through full range',
    body: 'Mobility is built under weight here, so the range you gain holds when a bigger man is on top of you. Stretching alone does not survive contact.',
  },
  {
    title: 'Numbers decide the block',
    body: 'Every quarter you retest: grip strength, the loads you move, and the range you hold under them. The next block is written from those numbers.',
  },
  {
    title: 'Built around your week',
    body: 'A full week when the calendar is normal and a short one when it is not. A trip, a competition, a quarter close: you text the business line, the block changes, and you keep going.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section border-top">
      <div className="container">
        <div className="grid">
          <div style={{ gridColumn: 'span 3' }}>
            <span className="label">The HMN AIDE Approach</span>
            <div className="rule-accent" />
          </div>
          <div className="approach-copy">
            <h2 className="claim">
              Hurt is not harm.<br />
              <span className="highlight--accent">Telling them apart is my job.</span>
            </h2>
            <p>
              Most of what your body says during a hard week is hurt, and hurt
              is a signal you can train with. Harm is a load the tissue cannot
              carry yet, and it needs a doctor before it needs a coach. You
              learned that split on the mats: a tight position is uncomfortable
              and you work through it, a locked armbar is a tap. The rule here
              is simple. If it settles by the next morning, we keep loading it.
              If it keeps climbing or shows up somewhere new, I back the load
              off and you see a doctor before we load it again. You do not make
              that call alone at 6 a.m. with a full day ahead of you. I make
              it, on a rule, and the block changes the same day.
            </p>

            <div className="approach-tiles">
              {TILES.map((t) => (
                <div className="approach-tile" key={t.title}>
                  <h4 className="approach-tile-title">{t.title}</h4>
                  <p className="approach-tile-body">{t.body}</p>
                </div>
              ))}
            </div>

            <a href="#faq" className="approach-link">
              Seven questions worth asking before you apply &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
