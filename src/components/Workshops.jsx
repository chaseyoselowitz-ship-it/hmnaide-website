import { useState } from 'react';

export default function Workshops() {
  // The image renders directly (lazy, sized) and swaps to the placeholder only
  // if the file fails to load. No Image() preload, so nothing is fetched twice.
  const [hasImg, setHasImg] = useState(true);

  return (
    <section id="workshops" className="section border-top">
      <div className="container">
        <div className="grid workshops-grid">
          <div className="workshops-media">
            {hasImg ? (
              <img
                className="workshops-img"
                src="/workshop-event.webp"
                srcSet="/workshop-event-700.webp 700w, /workshop-event.webp 1206w"
                sizes="(max-width: 768px) 165px, 33vw"
                width="1206"
                height="1726"
                loading="lazy"
                decoding="async"
                alt="HMN AIDE mobility workshop event"
                onError={() => setHasImg(false)}
              />
            ) : (
              <div className="media-placeholder">
                <span>Event photo</span>
              </div>
            )}
          </div>
          <div className="workshops-copy">
            <span className="label">Mobility Workshops for Grapplers</span>
            <div className="rule-accent" />
            <p>
              A session on your academy&rsquo;s own mat, built around the positions jiu-jitsu folds you into: hips, low back,
              shoulders, neck. It is loaded end-range work, not a stretching
              circuit, because a range you can only reach when nobody is
              pushing on you is a guard that only works in drilling.
            </p>
            <p>
              I run these at academies around South Florida, so if you train
              somewhere and want one, send me the academy and I will pitch the
              owner myself.
            </p>
            <a
              href="/contact-us?about=workshop"
              className="btn-pill btn-pill--primary"
            >
              Bring one to your academy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
