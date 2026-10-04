import { useEffect } from 'react';
import Logo from './Logo';
import { CALENDLY_URL, openCalendly } from '../calendly.js'

export default function Header() {
  // The header is fixed and transparent over the hero. Once the page scrolls
  // it gets a dark backing (header.is-scrolled) so it never sits on top of
  // body copy.
  useEffect(() => {
    const header = document.querySelector('header');
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header>
      <a href="/" className="logo-link" aria-label="HMN AIDE home">
        <Logo size={56} variant="white" />
      </a>
      <nav className="nav-group">
        <a href="/#approach" className="btn-pill">Approach</a>
        <a href="/#results" className="btn-pill">Results</a>
        <a href="/#who" className="btn-pill">Who it&rsquo;s for</a>
        <a href="/events" className="btn-pill">Events</a>
        <a href="https://hmnaide.substack.com/" className="btn-pill">
          Newsletter
        </a>
        <a href="/pricing" className="btn-pill">Pricing</a>
        <a
          href={CALENDLY_URL}
          onClick={openCalendly}
          className="btn-pill nav-apply"
        >
          Book your call
        </a>
      </nav>
    </header>
  );
}
