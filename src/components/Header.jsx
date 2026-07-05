import Logo from './Logo';

export default function Header() {
  return (
    <header>
      <Logo size={56} variant="white" />
      <nav className="nav-group">
        <a href="#approach" className="btn-pill">Approach</a>
        <a href="#results" className="btn-pill">Results</a>
        <a href="#who" className="btn-pill">Who it&rsquo;s for</a>
        <a href="https://www.hmnaide.clinic/book-appointment" className="btn-pill">
          Apply
        </a>
      </nav>
    </header>
  );
}
