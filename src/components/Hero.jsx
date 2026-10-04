import DitherCanvas from './DitherCanvas';
import { CALENDLY_URL, openCalendly } from '../calendly.js'

export default function Hero() {
  return (
    <section className="hero">
      <DitherCanvas />
      <div className="container">
        <span className="label">HMN AIDE · pronounced: human aid</span>
        <h1 className="hero-title">REALLY GOOD<br />RECOVERY.</h1>
        <p className="hero-sub">
          Aches, injuries, and slow recovery don&rsquo;t fix themselves with
          rest. You train your way out. Custom 1:1 strength and mobility
          coaching, for everyday athletes up to world champions.
        </p>
        <div className="hero-ctas">
          <a
            href={CALENDLY_URL}
            onClick={openCalendly}
            className="link-small link-small--primary"
          >
            BOOK YOUR CALL ⊕
          </a>
          {/* Phones only: the mobile header has no room for the Pricing pill */}
          <a href="/pricing" className="link-small hero-pricing">
            SEE PRICING →
          </a>
        </div>
        <span className="hero-micro">
          South Florida in person · Worldwide remote
        </span>
      </div>
    </section>
  );
}
