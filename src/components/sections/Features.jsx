import { GlassCard } from '../common/GlassCard';

export const Features = () => {
  const features = [
    {
      title: 'Entendimento',
      description: 'Compreensão profunda dos conceitos antes de fórmulas e procedimentos',
      color: 'text-accent-yellow'
    },
    {
      title: 'Lógica',
      description: 'Desenvolvimento do raciocínio matemático estruturado e consciente',
      color: 'text-accent-purple'
    },
    {
      title: 'Construção',
      description: 'Progressão gradual respeitando o ritmo individual de cada aluno',
      color: 'text-accent-red'
    },
  ];

  return (
    <section className="section-container math-bg">
      <div className="text-center mb-16">
        <img src="/src/assets/logo elc.png" alt="Método ELC" className="h-24 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-deep">
          O <span className="gradient-text">Método ELC®</span>
        </h2>
        <p className="text-xl text-primary-deep/70 max-w-2xl mx-auto">
          Uma abordagem revolucionária que transforma a relação do aluno com a matemática
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <GlassCard key={index} hover>
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-4 ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-primary-deep/70">
                {feature.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
