
import React from 'react';
import { Users, GraduationCap, Vote, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Quem é Mario Cleber</h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
          <div className="w-full md:w-1/3 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1287&auto=format&fit=crop" 
              alt="Mario Cleber em atividade sindical" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-2/3 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <p className="text-lg text-gray-700 mb-6">
              Mario Cleber de Menezes Costa de Souza é um líder comprometido com a defesa dos direitos trabalhistas e o bem-estar da comunidade de Lauro de Freitas, Bahia. Com formação acadêmica pelo ICEIA e qualificação profissional pelo SEST SENAT, atua como presidente do Sindicato dos Trabalhadores Rodoviários da Região Metropolitana de Salvador.
            </p>
            <p className="text-lg text-gray-700">
              Sua trajetória é marcada pela dedicação à causa dos trabalhadores rodoviários e pela busca constante de melhorias nas condições de trabalho da categoria. Com experiência política e forte conexão com a comunidade local, Mario Cleber representa uma liderança que une conhecimento técnico e sensibilidade social.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="card opacity-0 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-marioBlue/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-marioBlue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experiência Sindical</h3>
              <p className="text-gray-600">Liderança atuante no movimento sindical dos rodoviários.</p>
            </div>
          </div>
          
          <div className="card opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-marioGreen/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-marioGreen" />
              </div>
              <h3 className="text-xl font-bold mb-2">Formação Acadêmica</h3>
              <p className="text-gray-600">Professor formado pelo ICEIA e motorista qualificado pelo SEST SENAT.</p>
            </div>
          </div>
          
          <div className="card opacity-0 animate-slide-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-marioBlue/10 flex items-center justify-center mb-4">
                <Vote className="w-8 h-8 text-marioBlue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Atuação Política</h3>
              <p className="text-gray-600">Experiência na defesa de políticas públicas para os trabalhadores.</p>
            </div>
          </div>
          
          <div className="card opacity-0 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-marioGreen/10 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-marioGreen" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compromisso Social</h3>
              <p className="text-gray-600">Forte conexão e trabalho junto à comunidade de Lauro de Freitas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
