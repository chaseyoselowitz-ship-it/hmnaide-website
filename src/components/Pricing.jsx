import Header from './Header';
import Footer from './Footer';
import { TESTIMONIALS } from '../testimonials.js';
import { CALENDLY_URL, openCalendly } from '../calendly.js';

// Video testimonials, matched to the homepage quotes by name so the
// headline and role stay in one place (testimonials.js).
const VIDEOS = [
  { name: 'Jeff Smith', file: 'jeff-smith' },
  { name: 'Martin Corvetto', file: 'martin-corvetto' },
  { name: 'Jacque Amorim', file: 'jacqueline-amorim' },
].map((v) => ({ ...v, ...TESTIMONIALS.find((t) => t.name === v.name) }));

function JoinButton() {
  return (
    <a
      href={CALENDLY_URL}
      onClick={openCalendly}
      className="btn-pill btn-pill--primary"
    >
      Become a founding member
    </a>
  );
}

export default function Pricing() {
  return (
    <>
      <Header />
      <main className="pricing-page">
        <div className="container">
          <p className="label">Founding Members</p>
          <h1 className="section-head pricing-head">Founding membership.</h1>
          <div className="rule-accent" />

          <section className="offer" aria-label="Founding membership rates">
            <div className="offer-prices">
              <div className="offer-price">
                <span className="offer-when">Month 1</span>
                <p className="offer-amount">$300</p>
                <p className="offer-detail">4 sessions · $75 per session</p>
              </div>
              <div className="offer-price">
                <span className="offer-when">Month 2 onward</span>
                <p className="offer-amount">
                  $600<span className="offer-per">/month</span>
                </p>
                <p className="offer-detail">4 sessions · $150 per session</p>
                <p className="offer-term">Requires a 3-month commitment</p>
              </div>
            </div>

            <div className="offer-body">
              <JoinButton />
            </div>
          </section>

          <section className="vtest border-top">
            <span className="label">Client Results</span>
            <h2 className="section-head">Hear it from them.</h2>
            <div className="vtest-grid">
              {VIDEOS.map((v) => (
                <figure className="vtest-card" key={v.name}>
                  <video
                    className="vtest-video"
                    src={`/testimonials/${v.file}.mp4`}
                    poster={`/testimonials/${v.file}.jpg`}
                    controls
                    playsInline
                    preload="none"
                    aria-label={`${v.name} video testimonial`}
                  />
                  <figcaption className="vtest-cap">
                    <h3 className="tcard-headline">{v.headline}</h3>
                    <span className="tcard-name">{v.name}</span>
                    <span className="tcard-role">{v.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
