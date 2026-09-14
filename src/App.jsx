import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import WhoItsFor from './components/WhoItsFor';
import Packages from './components/Packages';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Approach from './components/Approach';
import WontGet from './components/WontGet';
import Results from './components/Results';
import Workshops from './components/Workshops';
import FAQ from './components/FAQ';
import VisualSection from './components/VisualSection';
import Footer from './components/Footer';

// One DOM order for both widths, chosen for the phone: who it is for, then the
// offer and price, then the steps, then the founder and the method. SocialProof
// is the coach strip directly under the hero; Results replaces the unmounted
// Testimonials in the #results slot.
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <SocialProof />
      <WhoItsFor />
      <Packages />
      <HowItWorks />
      <About />
      <Approach />
      <WontGet />
      <Results />
      <Workshops />
      <FAQ />
      <VisualSection />
      <Footer />
    </>
  );
}
