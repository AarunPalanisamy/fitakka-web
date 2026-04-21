import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemsSection from '@/components/ProblemsSection';
import GoalsSection from '@/components/GoalsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import NudgesSection from '@/components/NudgesSection';
import DemoSection from '@/components/DemoSection';
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
      <GoalsSection />
      <HowItWorksSection />
      <NudgesSection />
      <DemoSection />

      <CardsShowcaseSection />
      <TestimonialsSection />
      {/* <WaitlistSection /> */}
      <Footer />
    </main>
  );
}
