
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 bg-white",
        scrolled && "shadow-md py-3"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-marioBlue">Mario Cleber</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('sobre')} 
            className="text-gray-700 hover:text-marioBlue transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('compromissos')} 
            className="text-gray-700 hover:text-marioBlue transition-colors"
          >
            Compromissos
          </button>
          <button 
            onClick={() => scrollToSection('atuacao')} 
            className="text-gray-700 hover:text-marioBlue transition-colors"
          >
            Áreas de Atuação
          </button>
          <button 
            onClick={() => scrollToSection('trajetoria')} 
            className="text-gray-700 hover:text-marioBlue transition-colors"
          >
            Trajetória
          </button>
          <button 
            onClick={() => scrollToSection('contato')} 
            className="text-gray-700 hover:text-marioBlue transition-colors"
          >
            Contato
          </button>
        </nav>
        
        <a 
          href="https://wa.me/5571981115885" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary text-sm"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
};

export default Header;
