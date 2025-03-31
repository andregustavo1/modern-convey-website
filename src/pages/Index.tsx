
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CommitmentSection from '../components/CommitmentSection';
import AreasSection from '../components/AreasSection';
import TimelineSection from '../components/TimelineSection';
import ContactSection from '../components/ContactSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Animação das seções ao rolar a página
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
          section.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Inicial check para animar seções já visíveis
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <CommitmentSection />
        <AreasSection />
        <TimelineSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
