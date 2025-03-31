
import React from 'react';

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-marioBlue to-marioGreen opacity-90"
      ></div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Junte-se a Esta Luta pelos Trabalhadores
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Faça parte deste movimento por mais direitos, melhores condições de trabalho e uma representação sindical forte e atuante.
          </p>
          <a 
            href="https://wa.me/5571981115885" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-marioBlue hover:bg-white/90 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-block shadow-lg"
          >
            Fale Diretamente com Mario Cleber
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
