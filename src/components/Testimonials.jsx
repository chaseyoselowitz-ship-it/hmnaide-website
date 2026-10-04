import { TESTIMONIALS } from '../testimonials.js';

export default function Testimonials() {
  return (
    <section id="results" className="section border-top">
      <div className="container">
        <span className="label">Client Results</span>
        <h2 className="section-head">Real people. Real recovery. Real results.</h2>
        <p className="section-kicker">Nobody here was massaged back to health.</p>
        <div className="tcard-grid">
          {TESTIMONIALS.map((t) => (
            <figure className="tcard" key={t.name}>
              <div className="tcard-body">
                <span className="tcard-chip">{t.chip}</span>
                <h3 className="tcard-headline">{t.headline}</h3>
                <blockquote className="tcard-quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="tcard-cap">
                <span className="tcard-name">{t.name}</span>
                <span className="tcard-role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
