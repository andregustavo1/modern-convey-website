
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Fale com Mario Cleber</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-marioBlue/10 flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-marioBlue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                <a 
                  href="https://wa.me/5571981115885" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-marioBlue transition-colors"
                >
                  (71) 98111-5885
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-marioGreen/10 flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-marioGreen" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">E-mail</h3>
                <a 
                  href="mailto:mmcleber@hotmail.com" 
                  className="text-gray-600 hover:text-marioGreen transition-colors"
                >
                  mmcleber@hotmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-marioBlue/10 flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-marioBlue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Localização</h3>
                <p className="text-gray-600">Lauro de Freitas - Bahia</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-marioGreen/10 flex items-center justify-center mr-4">
                <Instagram className="w-6 h-6 text-marioGreen" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Instagram</h3>
                <a 
                  href="https://instagram.com/mariocleber.ofc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-marioGreen transition-colors"
                >
                  @mariocleber.ofc
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31198.908633996906!2d-38.32769282425849!3d-12.894417544015591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7163539759d7243%3A0xf0b44ee89f095142!2sLauro%20de%20Freitas%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1717188115948!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
