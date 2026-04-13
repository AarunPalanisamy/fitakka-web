import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemsSection from '@/components/ProblemsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import NudgesSection from '@/components/NudgesSection';
import CardsShowcaseSection from '@/components/CardsShowcaseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WaitlistSection from '@/components/WaitlistSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative font-nunito selection:bg-purple/30">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <HowItWorksSection />
      <NudgesSection />
      <CardsShowcaseSection />
      <TestimonialsSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
