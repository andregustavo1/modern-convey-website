
import React from 'react';
import { Users, Megaphone, FileText, Radio, HandHelp } from 'lucide-react';

const AreasSection = () => {
  return (
    <section id="atuacao" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Áreas de Atuação</h2>
        
        <div className="space-y-8">
          <div className="card flex flex-col md:flex-row items-center opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="w-full md:w-1/4 flex justify-center mb-6 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-marioBlue/10 flex items-center justify-center">
                <Users className="w-10 h-10 text-marioBlue" />
              </div>
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold mb-3">Liderança Sindical</h3>
              <p className="text-gray-600">
                Como presidente do Sindicato dos Trabalhadores Rodoviários da Região Metropolitana de Salvador, Mario Cleber lidera negociações coletivas, representação jurídica e assistencial, além de promover a organização e mobilização da categoria para a defesa de seus direitos.
              </p>
            </div>
          </div>
          
          <div className="card flex flex-col md:flex-row items-center opacity-0 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="w-full md:w-1/4 flex justify-center mb-6 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-marioGreen/10 flex items-center justify-center">
                <Megaphone className="w-10 h-10 text-marioGreen" />
              </div>
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold mb-3">Atividade Política</h3>
              <p className="text-gray-600">
                Atuação política voltada para a defesa dos interesses dos trabalhadores e da comunidade, com participação em debates sobre políticas públicas de transporte, mobilidade urbana e direitos trabalhistas.
              </p>
            </div>
          </div>
          
          <div className="card flex flex-col md:flex-row items-center opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="w-full md:w-1/4 flex justify-center mb-6 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-marioBlue/10 flex items-center justify-center">
                <FileText className="w-10 h-10 text-marioBlue" />
              </div>
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold mb-3">Defesa dos Direitos dos Trabalhadores</h3>
              <p className="text-gray-600">
                Trabalho constante na promoção e proteção dos direitos trabalhistas, com acompanhamento de processos, orientação jurídica e negociação de acordos e convenções coletivas que beneficiem a categoria.
              </p>
            </div>
          </div>
          
          <div className="card flex flex-col md:flex-row items-center opacity-0 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="w-full md:w-1/4 flex justify-center mb-6 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-marioGreen/10 flex items-center justify-center">
                <Radio className="w-10 h-10 text-marioGreen" />
              </div>
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold mb-3">Comunicação e Mídia</h3>
              <p className="text-gray-600">
                Utilização de diversos canais de comunicação para informar e mobilizar a categoria, além de dar visibilidade às demandas dos trabalhadores rodoviários junto à sociedade e aos poderes constituídos.
              </p>
            </div>
          </div>
          
          <div className="card flex flex-col md:flex-row items-center opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="w-full md:w-1/4 flex justify-center mb-6 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-marioBlue/10 flex items-center justify-center">
                <HandHelp className="w-10 h-10 text-marioBlue" />
              </div>
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold mb-3">Projetos Sociais</h3>
              <p className="text-gray-600">
                Desenvolvimento e apoio a iniciativas sociais que beneficiam não apenas os trabalhadores rodoviários, mas também suas famílias e a comunidade em geral, com foco em educação, saúde e qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
