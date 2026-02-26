import { GlassCard } from '../components/common/GlassCard';

export const Method = () => {
  const pillars = [
    {
      letter: 'E',
      image: '/src/assets/e.png',
      title: 'Entendimento',
      color: 'text-accent-yellow',
      description: 'Compreensão Real dos Conceitos',
      points: [
        'O aluno entende O QUÊ está sendo estudado',
        'Compreende POR QUÊ aquele conteúdo existe',
        'Descobre COMO ele se conecta com outros conceitos',
        'Identifica ONDE aplicar na prática',
      ],
      benefits: [
        'Redução de bloqueios',
        'Menor insegurança',
        'Independência da memorização',
        'Motivação intrínseca',
      ],
    },
    {
      letter: 'L',
      image: '/src/assets/l.png',
      title: 'Lógica',
      color: 'text-accent-purple',
      description: 'Desenvolvimento do Raciocínio Matemático',
      points: [
        'Análise crítica de problemas',
        'Tomada de decisão consciente',
        'Argumentação matemática',
        'Resolução por raciocínio, não decoração',
      ],
      benefits: [
        'Autonomia intelectual',
        'Confiança no próprio raciocínio',
        'Flexibilidade cognitiva',
        'Metacognição desenvolvida',
      ],
    },
    {
      letter: 'C',
      image: '/src/assets/c.png',
      title: 'Construção',
      color: 'text-accent-red',
      description: 'Progressão Estruturada do Conhecimento',
      points: [
        'Conteúdos organizados progressivamente',
        'Avanço em pequenas etapas (baby steps)',
        'Base sólida antes de novos conceitos',
        'Revisão contínua e integrada',
      ],
      benefits: [
        'Redução de sobrecarga cognitiva',
        'Vitórias frequentes',
        'Identificação rápida de dificuldades',
        'Respeito a ritmos diferentes',
      ],
    },
  ];

  return (
    <div className="pt-32 math-bg min-h-screen">
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Logo */}
            <div className="flex justify-center md:justify-end">
              <img src="/src/assets/logo elc.png" alt="Método ELC" className="w-full max-w-md" />
            </div>

            {/* Texto */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-deep">
                Método <span className="gradient-text">ELC®</span>
              </h1>
              <p className="text-2xl text-primary-deep/80 mb-4 font-medium">
                Entendimento • Lógica • Construção
              </p>
              <p className="text-xl text-primary-deep/70">
                Uma metodologia autoral que transforma a relação do aluno com a matemática 
                através de três pilares fundamentais integrados
              </p>
            </div>
          </div>

          <GlassCard className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-accent-yellow">
              Por que o Método ELC é Diferente?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-accent-red">Ensino Tradicional</h3>
                <div className="space-y-2 text-primary-deep/70">
                  <p>❌ Fórmula → Repetição → Memorização</p>
                  <p>❌ Foco em velocidade</p>
                  <p>❌ Decoreba sem compreensão</p>
                  <p>❌ Ansiedade e bloqueios</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-accent-purple">Método ELC®</h3>
                <div className="space-y-2 text-primary-deep">
                  <p>✓ Entendimento → Lógica → Construção</p>
                  <p>✓ Respeito ao ritmo individual</p>
                  <p>✓ Compreensão profunda</p>
                  <p>✓ Confiança e autonomia</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="space-y-12">
            {pillars.map((pillar, index) => (
              <GlassCard key={index} hover>
                <div className="flex items-start gap-6">
                  <img src={pillar.image} alt={pillar.title} className="w-20 h-20 object-contain" />
                  <div className="flex-1">
                    <h3 className={`text-3xl font-bold mb-2 ${pillar.color}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-xl text-primary-deep/80 mb-6 font-medium">{pillar.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-accent-yellow">Princípios:</h4>
                        <ul className="space-y-2 text-primary-deep/70">
                          {pillar.points.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-accent-yellow">Benefícios:</h4>
                        <ul className="space-y-2 text-primary-deep/70">
                          {pillar.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">✓</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">
              Fundamentação Científica
            </h2>
            <p className="text-primary-deep/80 mb-6 text-center">
              O Método ELC se baseia em pesquisas consolidadas da ciência da aprendizagem:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-primary-deep/70">
              <div>• Teoria da Aprendizagem Significativa (David Ausubel)</div>
              <div>• Construtivismo (Jean Piaget)</div>
              <div>• Zona de Desenvolvimento Proximal (Lev Vygotsky)</div>
              <div>• Ciência Cognitiva Moderna</div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};
