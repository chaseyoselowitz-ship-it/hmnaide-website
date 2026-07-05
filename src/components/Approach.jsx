const TILES = [
  {
    title: 'Strength',
    body: 'Get strong enough that nothing in your day feels heavy.',
  },
  {
    title: 'Mobility that lasts',
    body: 'Flexibility built with weights, so it sticks. Stretching alone doesn’t.',
  },
  {
    title: 'Fits your life',
    body: 'A full plan for normal weeks, a short one for busy weeks. You never fall off.',
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
              Most coaches train symptoms.<br />
              <span className="highlight--accent">We train systems.</span>
            </h2>
            <p>
              Aches and injuries usually mean one thing: your body is
              under-built for what you ask of it. Training fixes that.
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
              Six questions to ask any coach, including me &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
