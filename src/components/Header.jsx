import { useEffect, useState } from 'react';
import Logo from './Logo';
import { CALENDLY_URL, openCalendly } from '../calendly.js'

const MOBILE_QUERY = '(max-width: 768px)';

// The lockup drops from 56px to 40px on phones. Passing the size in keeps the
// img width/height attributes honest, so index.css needs no !important override.
function useIsMobile() {
  const [mobile, setMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setMobile(e.matches);
    mq.addEventListener('change', onChange);
    setMobile(mq.matches);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return mobile;
}

export default function Header() {
  const mobile = useIsMobile();
  return (
    <header>
      <a href="/" className="logo-link" aria-label="HMN AIDE home">
        <Logo size={mobile ? 40 : 56} variant="white" />
      </a>
      <nav className="nav-group">
        <a href="/#approach" className="btn-pill">Approach</a>
        <a href="/#results" className="btn-pill">How I measure</a>
        <a href="/#who" className="btn-pill">Who it&rsquo;s for</a>
        <a href="https://hmnaide.substack.com/" className="btn-pill">
          Newsletter
        </a>
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
