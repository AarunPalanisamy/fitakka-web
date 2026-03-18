import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import WaitlistSection from '@/components/WaitlistSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-brand-bg text-white selection:bg-brand-purple/30">
      <div className="bg-grid"></div>
      
      <Navbar />
      
      <HeroSection />
      
      <ScrollReveal>
        <FeatureGrid />
      </ScrollReveal>
      
      <ScrollReveal>
        <WaitlistSection />
      </ScrollReveal>
      
      <Footer />
    </main>
  );
}
