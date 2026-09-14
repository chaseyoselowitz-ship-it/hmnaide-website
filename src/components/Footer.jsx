import Logo from './Logo';
import { CALENDLY_URL, openCalendly } from '../calendly.js'

// Scope statement. Required verbatim in every page's footer (market-intel/scope-guardrails.md).
// Do not paraphrase, split, or restyle it into the low-opacity bottom bar.
const SCOPE_SENTENCE =
  'I am a strength and conditioning coach. I am not a licensed physical therapist, chiropractor, or physician. I do not diagnose or treat medical conditions.';

export default function Footer() {
  return (
    <footer className="border-top">
      <div className="container">
        <div className="grid">
          <div className="footer-col" style={{ gridColumn: 'span 6' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo size={64} />
            </div>
            <p className="footer-tag">
              Strength and conditioning coaching for people who train BJJ and run a business.
            </p>
            <p className="footer-loc">
              In person in South Florida. Boca Raton, Palm Beach, and Broward.
            </p>
            <p className="footer-loc">
              Remote for clients outside South Florida, and for the weeks you travel to compete or work.
            </p>
          </div>
          <div className="footer-col">
            <div className="footer-header">Explore</div>
            <a href="/#approach" className="footer-link">Approach</a>
            <a href="/#results" className="footer-link">How I measure</a>
            <a href="/#packages" className="footer-link">The program</a>
            <a href="/#who" className="footer-link">Who it&rsquo;s for</a>
            <a href="/#workshops" className="footer-link">Workshops</a>
            <a href="/#faq" className="footer-link">FAQ</a>
            <a href="https://hmnaide.substack.com/" className="footer-link">Newsletter</a>
          </div>
          <div className="footer-col">
            <div className="footer-header">Connect</div>
            <a
              href={CALENDLY_URL}
              onClick={openCalendly}
              className="footer-link"
            >
              Apply for a call
            </a>
            <a href="/contact-us?about=workshop" className="footer-link">
              Host a workshop
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
        <p
          className="footer-scope"
          style={{
            marginTop: '3rem',
            maxWidth: '60ch',
            color: 'var(--w-body)',
            lineHeight: 1.6,
          }}
        >
          {SCOPE_SENTENCE}
        </p>
        <div
          className="border-top"
          style={{
            marginTop: '2rem',
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.7rem',
          }}
        >
          <span>©2026 HMN AIDE</span>
          <span>Chase Yoselowitz, CSCS</span>
        </div>
      </div>
    </footer>
  );
}
