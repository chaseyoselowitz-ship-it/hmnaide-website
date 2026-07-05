import DitherCanvas from './DitherCanvas';

export default function Hero() {
  return (
    <section className="hero">
      <DitherCanvas />
      <div className="container">
        <span className="label">HMN AIDE · pronounced: human aid</span>
        <h1 className="hero-title">REALLY GOOD<br />RECOVERY.</h1>
        <p className="hero-support">Train First, Worry Never.</p>
        <p className="hero-sub">
          Recovery you build with load. Strength and mobility for high achievers
          whose bodies have started sending invoices.
        </p>
        <a
          href="https://form.typeform.com/to/EiFyHacn"
          className="link-small link-small--primary"
        >
          START YOUR APPLICATION ⊕
        </a>
        <span className="hero-micro">
          South Florida in person · Worldwide remote
        </span>
      </div>
    </section>
  );
}
