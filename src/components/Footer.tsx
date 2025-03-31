
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-grayDark text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Mario Cleber</h2>
            <p className="text-gray-400">Liderança e Compromisso</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <div className="flex flex-col space-y-2">
              <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</a>
              <a href="#compromissos" className="text-gray-300 hover:text-white transition-colors">Compromissos</a>
              <a href="#atuacao" className="text-gray-300 hover:text-white transition-colors">Áreas de Atuação</a>
              <a href="#trajetoria" className="text-gray-300 hover:text-white transition-colors">Trajetória</a>
              <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/mariocleber.ofc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2025 Mario Cleber de Menezes Costa de Souza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
