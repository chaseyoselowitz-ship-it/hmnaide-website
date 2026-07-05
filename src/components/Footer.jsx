import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-top">
      <div className="container">
        <div className="grid">
          <div className="footer-col" style={{ gridColumn: 'span 6' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo size={64} />
            </div>
            <p className="footer-tag">Strength · Mobility · Recovery</p>
            <p className="footer-loc">South Florida &rarr; In person</p>
            <p className="footer-loc">Remote &rarr; Worldwide</p>
          </div>
          <div className="footer-col">
            <div className="footer-header">Explore</div>
            <a href="#approach" className="footer-link">Approach</a>
            <a href="#results" className="footer-link">Results</a>
            <a href="#workshops" className="footer-link">Workshops</a>
            <a href="#faq" className="footer-link">FAQ</a>
          </div>
          <div className="footer-col">
            <div className="footer-header">Connect</div>
            <a
              href="https://www.hmnaide.clinic/book-appointment"
              className="footer-link"
            >
              Book Appointment
            </a>
            <a href="https://www.hmnaide.clinic/contact" className="footer-link">
              Contact
            </a>
            <a
              href="https://www.instagram.com/hmnaide.clinic"
              className="footer-link"
            >
              Instagram
            </a>
            <a href="https://www.youtube.com/@hmnaide" className="footer-link">
              YouTube
            </a>
          </div>
        </div>
        <div
          className="border-top"
          style={{
            marginTop: '4rem',
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.7rem',
          }}
        >
          <span>©2026 HMN AIDE</span>
          <span>HMNAIDE.CLINIC</span>
        </div>
      </div>
    </footer>
  );
}
