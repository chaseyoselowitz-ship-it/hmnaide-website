import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Approach from './components/Approach';
import WontGet from './components/WontGet';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import Workshops from './components/Workshops';
import FAQ from './components/FAQ';
import VisualSection from './components/VisualSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <SocialProof />
      <Approach />
      <WontGet />
      <Testimonials />
      <HowItWorks />
      <WhoItsFor />
      <Workshops />
      <FAQ />
      <VisualSection />
      <Footer />
      <SpeedInsights />
    </>
  );
}
