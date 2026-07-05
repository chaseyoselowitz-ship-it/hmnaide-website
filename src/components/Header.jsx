import Logo from './Logo';

export default function Header() {
  return (
    <header>
      <a href="/" className="logo-link" aria-label="HMN AIDE — home">
        <Logo size={56} variant="white" />
      </a>
      <nav className="nav-group">
        <a href="/#approach" className="btn-pill">Approach</a>
        <a href="/#results" className="btn-pill">Results</a>
        <a href="/#who" className="btn-pill">Who it&rsquo;s for</a>
        <a href="https://form.typeform.com/to/EiFyHacn" className="btn-pill">
          Apply
        </a>
      </nav>
    </header>
  );
}
