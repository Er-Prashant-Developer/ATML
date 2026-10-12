import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { EquipmentShowcase } from './components/EquipmentShowcase';
import { TestingProcess } from './components/TestingProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { IndustriesServed } from './components/IndustriesServed';
import { StandardsCompliance } from './components/StandardsCompliance';
import { FutureCapabilities } from './components/FutureCapabilities';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { LegalModal } from './components/Modals/LegalModal';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [preselectedTest, setPreselectedTest] = useState(null);
  const [preselectedCategory, setPreselectedCategory] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);

  const handleSelectTestForQuote = (test, category) => {
    setPreselectedTest(test);
    setPreselectedCategory(category);
    // Smooth scroll to contact form
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const navOffset = 80;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const navOffset = 80;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      const navOffset = 80;
      const elementPosition = servicesElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-graphite-50 text-graphite-900 selection:bg-safety-500 selection:text-white flex flex-col font-sans">
      {/* Animated Laboratory Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Animated Laboratory Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Main Content – rendered only after preloader finishes */}
      {!isLoading && (
        <>
          {/* Sticky Navigation */}
          <Navbar onRequestQuoteScroll={scrollToContact} />

          {/* Main Content Sections */}
          <main className="flex-grow">
            <Hero 
              onExploreServices={scrollToServices} 
              onRequestQuote={scrollToContact} 
            />
            <AboutSection />
            <ServicesSection onSelectTestForQuote={handleSelectTestForQuote} />
            <EquipmentShowcase />
            <TestingProcess />
            <WhyChooseUs />
            <IndustriesServed />
            <StandardsCompliance />
            <FutureCapabilities />
            <GallerySection />
            <FaqSection />
            <ContactSection 
              preselectedTest={preselectedTest} 
              preselectedCategory={preselectedCategory} 
            />
          </main>

          {/* Floating Action Button */}
          <WhatsAppButton />

          {/* Comprehensive Footer */}
          <Footer onOpenLegalModal={setLegalModalType} />

          {/* Legal Modals (Privacy Policy / Terms of Service) */}
          {legalModalType && (
            <LegalModal 
              type={legalModalType} 
              onClose={() => setLegalModalType(null)} 
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
