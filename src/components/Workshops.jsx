import { useEffect, useState } from 'react';

const IMG = '/workshop-scale.jpg';

export default function Workshops() {
  // Preload to decide placeholder vs. real image. Reliable even under the dev
  // server's SPA fallback (an HTML response fails to decode as an image).
  const [hasImg, setHasImg] = useState(false);
  useEffect(() => {
    const im = new Image();
    im.onload = () => setHasImg(true);
    im.onerror = () => setHasImg(false);
    im.src = IMG;
  }, []);

  return (
    <section id="workshops" className="section section--emerald">
      <div className="container">
        <div className="grid workshops-grid">
          <div className="workshops-media">
            {hasImg ? (
              <img
                className="workshops-img"
                src={IMG}
                alt="HMN AIDE mobility workshop event"
              />
            ) : (
              <div className="media-placeholder">
                <span>Event photo</span>
              </div>
            )}
          </div>
          <div className="workshops-copy">
            <span className="label">Mobility Workshops</span>
            <div className="rule-accent" />
            <p>Mobility workshops for gyms, events, and teams.</p>
            <div className="workshops-actions">
              <a href="/events" className="btn-pill btn-pill--ink">
                See upcoming workshops
              </a>
              <a href="/contact-us" className="btn-pill btn-pill--outline-ink">
                Host one
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
