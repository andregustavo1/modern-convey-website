
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center bg-grayLight">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=1920&auto=format&fit=crop')" 
        }}
      />
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marioBlue mb-4">
            Mario Cleber
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
            Liderança e Compromisso
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Professor, Motorista, Sindicalista e Defensor dos Trabalhadores
          </p>
          <a 
            href="https://wa.me/5571981115885" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Entre em Contato
          </a>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div className="rounded-full overflow-hidden border-4 border-marioBlue shadow-2xl w-64 h-64 md:w-80 md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop" 
              alt="Mario Cleber" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
