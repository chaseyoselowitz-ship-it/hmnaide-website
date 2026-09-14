import DitherCanvas from './DitherCanvas';
import { CALENDLY_URL, openCalendly } from '../calendly.js'

export default function Hero() {
  return (
    <section className="hero">
      <DitherCanvas />
      <div className="container">
        <span className="label">1:1 strength coaching for BJJ · South Florida</span>
        <h1 className="hero-title">YOU RUN THE BUSINESS.<br />I RUN YOUR TRAINING.</h1>
        <p className="hero-sub">
          Business, family, and mat time all want the same hours. I build your
          program and change it when your week changes. Every quarter we
          retest, and the numbers show what your body can carry now. You show
          up. The most you ever write me is a text with what you lifted.
        </p>
        <div className="hero-actions">
          <a
            href={CALENDLY_URL}
            onClick={openCalendly}
            className="btn-pill btn-pill--primary"
          >
            Apply for a call
          </a>
          <a href="/#packages" className="link-small">
            See the program and prices
          </a>
        </div>
        <p className="hero-what">
          You fill in an application: name, email, phone, a few lines on where
          you are with training and what you want, and a budget question. The
          call comes after it, you and me, about your week and whether this is
          a fit.
        </p>
        <span className="hero-micro">
          In person across Boca, Palm Beach, and Broward. Remote if you travel
          to compete or live outside South Florida.
        </span>
      </div>
    </section>
  );
}
