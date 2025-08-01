
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StoreSection from '@/components/StoreSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <StoreSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
