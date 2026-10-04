import Logo from './Logo';
import { CALENDLY_URL, openCalendly } from '../calendly.js'

export default function Header() {
  return (
    <header>
      <a href="/" className="logo-link" aria-label="HMN AIDE home">
        <Logo size={56} variant="white" />
      </a>
      <nav className="nav-group">
        <a href="/#approach" className="btn-pill">Approach</a>
        <a href="/#results" className="btn-pill">Results</a>
        <a href="/#who" className="btn-pill">Who it&rsquo;s for</a>
        <a href="https://hmnaide.substack.com/" className="btn-pill">
          Newsletter
        </a>
        <a href="/pricing" className="btn-pill">Pricing</a>
        <a
          href={CALENDLY_URL}
          onClick={openCalendly}
          className="btn-pill nav-apply"
        >
          Apply
        </a>
      </nav>
    </header>
  );
}
