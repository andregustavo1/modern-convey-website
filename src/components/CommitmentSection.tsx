
import React from 'react';
import { Shield, Lightbulb, Users, Award } from 'lucide-react';

const CommitmentSection = () => {
  return (
    <section id="compromissos" className="section bg-grayLight">
      <div className="container">
        <h2 className="section-title">Compromissos e Valores</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Shield className="w-10 h-10 text-marioBlue" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Defesa dos Trabalhadores</h3>
                <p className="text-gray-600">
                  Comprometimento inabalável com os direitos e o bem-estar dos trabalhadores rodoviários, buscando melhores condições de trabalho e remuneração justa.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card opacity-0 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Lightbulb className="w-10 h-10 text-marioGreen" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Transparência na Gestão</h3>
                <p className="text-gray-600">
                  Administração transparente e participativa, com prestação de contas regular e tomada de decisões baseada no diálogo com a base.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Users className="w-10 h-10 text-marioBlue" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Compromisso com a Comunidade</h3>
                <p className="text-gray-600">
                  Atuação que transcende o ambiente sindical, com projetos e iniciativas voltadas para o desenvolvimento e bem-estar da comunidade local.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card opacity-0 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Award className="w-10 h-10 text-marioGreen" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Experiência Comprovada</h3>
                <p className="text-gray-600">
                  Anos de experiência no setor de transporte e na luta sindical, aliados à formação acadêmica e ao conhecimento técnico da área.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
