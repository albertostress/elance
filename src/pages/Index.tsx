
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MenuGallery from '@/components/MenuGallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <MenuGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
