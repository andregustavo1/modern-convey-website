
import React from 'react';

const TimelineSection = () => {
  return (
    <section id="trajetoria" className="section bg-grayLight">
      <div className="container">
        <h2 className="section-title">Trajetória de Luta e Conquistas</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="timeline-item" style={{ "--order": "1" } as React.CSSProperties}>
            <h3 className="text-xl font-bold text-marioBlue mb-2">Formação e Início de Carreira</h3>
            <p className="text-gray-600 mb-3">
              Formação acadêmica como professor pelo ICEIA e capacitação profissional como motorista pelo SEST SENAT, consolidando uma base de conhecimento técnico e prático no setor de transporte.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-gray-700 italic">
                "O conhecimento é a base para qualquer transformação social significativa."
              </p>
            </div>
          </div>
          
          <div className="timeline-item" style={{ "--order": "2" } as React.CSSProperties}>
            <h3 className="text-xl font-bold text-marioGreen mb-2">Ingresso na Luta Sindical</h3>
            <p className="text-gray-600 mb-3">
              Início da atuação no movimento sindical dos trabalhadores rodoviários, marcado pelo engajamento nas causas coletivas e pelo desenvolvimento de liderança junto à base.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-gray-700 italic">
                "A união dos trabalhadores é a maior força de transformação das relações de trabalho."
              </p>
            </div>
          </div>
          
          <div className="timeline-item" style={{ "--order": "3" } as React.CSSProperties}>
            <h3 className="text-xl font-bold text-marioBlue mb-2">Presidência do Sindicato</h3>
            <p className="text-gray-600 mb-3">
              Ascensão à presidência do Sindicato dos Trabalhadores Rodoviários da Região Metropolitana de Salvador, iniciando uma gestão marcada por conquistas significativas para a categoria.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-gray-700 italic">
                "Liderar é servir, e servir é estar atento às necessidades daqueles que confiaram em você."
              </p>
            </div>
          </div>
          
          <div className="timeline-item" style={{ "--order": "4" } as React.CSSProperties}>
            <h3 className="text-xl font-bold text-marioGreen mb-2">Projetos Futuros</h3>
            <p className="text-gray-600 mb-3">
              Planejamento e desenvolvimento de novos projetos para ampliar a representatividade e os benefícios para os trabalhadores, com foco em inovação, sustentabilidade e inclusão social.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="text-gray-700 italic">
                "O futuro se constrói com ações no presente, guiadas por uma visão clara e pelo compromisso com os valores que nos definem."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
