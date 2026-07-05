const TILES = [
  {
    title: 'Strength',
    body: 'Heavy things stop being events. Everything in your day becomes sub-maximal.',
  },
  {
    title: 'Range you own',
    body: 'Mobility built like strength: loaded, at end range. Not stretching that changes nothing.',
  },
  {
    title: 'Fits your calendar',
    body: 'Two gears: standard week and travel week. Never to failure. You have a job tomorrow.',
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
            <figure className="founder">
              <div className="founder-avatar">
                <img src="/chase.png" alt="Chase Yoselowitz" />
              </div>
              <figcaption className="founder-caption">
                <span className="founder-name">Chase Yoselowitz</span>
                <span className="founder-role">Founder of HMN AIDE</span>
              </figcaption>
            </figure>
          </div>
          <div className="approach-copy">
            <h2 className="claim">
              Most coaches train symptoms.<br />
              <span className="highlight--accent">We train systems.</span>
            </h2>
            <p>
              You&rsquo;re not broken. You&rsquo;re under-built for the life
              you&rsquo;re asking your body to live. The fix isn&rsquo;t more
              passive treatment. It&rsquo;s load, applied intelligently, through
              full range of motion.
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
