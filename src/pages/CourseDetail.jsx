import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';

export const CourseDetail = ({ courseId }) => {
  const coursesData = {
    'infantil': {
      title: 'Curso Infantil',
      age: '7 a 9 anos',
      duration: '48 aulas/ano (1 aula por semana)',
      objective: 'Desenvolver relação positiva e significativa com a matemática, construindo base sólida de raciocínio lógico-matemático.',
      cycles: [
        { name: 'Ciclo 1', focus: 'Base do Raciocínio Matemático' },
        { name: 'Ciclo 2', focus: 'Operações Fundamentais com Sentido' },
        { name: 'Ciclo 3', focus: 'Multiplicação, Divisão e Raciocínio' },
        { name: 'Ciclo 4', focus: 'Aplicação, Consolidação e Autonomia' },
      ],
      elcApplication: {
        entendimento: 'Uso de materiais concretos, histórias lúdicas e conexão com experiências cotidianas',
        logica: 'Perguntas que estimulam pensamento, verbalização do raciocínio e jogos que desenvolvem lógica',
        construcao: 'Passos muito pequenos (baby steps), revisão lúdica constante e celebração de conquistas',
      },
    },
    'pre-adolescentes': {
      title: 'Pré-Adolescentes',
      age: '10 a 12 anos',
      duration: '48 aulas/ano (1 aula por semana)',
      objective: 'Consolidar bases fundamentais e preparar para conteúdos abstratos, promovendo compreensão profunda e autonomia.',
      cycles: [
        { name: 'Ciclo 1', focus: 'Fundamentos e Organização do Raciocínio' },
        { name: 'Ciclo 2', focus: 'Multiplicação, Divisão e Problemas' },
        { name: 'Ciclo 3', focus: 'Frações, Decimais e Proporcionalidade' },
        { name: 'Ciclo 4', focus: 'Geometria, Medidas e Consolidação' },
      ],
      elcApplication: {
        entendimento: 'Transição gradual do concreto para abstrato, contextualização relevante e múltiplas representações',
        logica: 'Desenvolvimento de raciocínio estruturado, argumentação matemática e análise crítica',
        construcao: 'Progressão respeitando pré-requisitos, consolidação antes de avançar e autonomia crescente',
      },
    },
    'adolescentes': {
      title: 'Adolescentes',
      age: '13 a 15 anos',
      duration: '48 aulas/ano (1 aula por semana)',
      objective: 'Desenvolver pensamento matemático abstrato, dominar álgebra elementar e preparar para Ensino Médio.',
      cycles: [
        { name: 'Ciclo 1', focus: 'Fundamentos, Linguagem Matemática e Lógica' },
        { name: 'Ciclo 2', focus: 'Álgebra, Equações e Proporcionalidade' },
        { name: 'Ciclo 3', focus: 'Geometria, Medidas e Relações Espaciais' },
        { name: 'Ciclo 4', focus: 'Funções, Estatística e Consolidação' },
      ],
      elcApplication: {
        entendimento: 'Abstração com significado, contextualização relevante e conexões entre áreas da matemática',
        logica: 'Raciocínio dedutivo formal, demonstrações matemáticas e argumentação rigorosa',
        construcao: 'Progressão respeitando abstração, consolidação de pré-requisitos e autonomia intelectual plena',
      },
    },
    'ensino-medio': {
      title: 'Ensino Médio',
      age: '16 a 18 anos',
      duration: '48 aulas/ano (1 aula por semana)',
      objective: 'Preparar para ENEM, vestibulares e ensino superior com domínio completo dos conteúdos e estratégias de prova.',
      cycles: [
        { name: 'Ciclo 1', focus: 'Fundamentos e Álgebra Avançada' },
        { name: 'Ciclo 2', focus: 'Geometria e Trigonometria' },
        { name: 'Ciclo 3', focus: 'Análise Combinatória e Probabilidade' },
        { name: 'Ciclo 4', focus: 'Tópicos Avançados e Preparação Final' },
      ],
      elcApplication: {
        entendimento: 'Compreensão profunda de conceitos complexos, conexões interdisciplinares e aplicações práticas',
        logica: 'Resolução estratégica de questões, análise de alternativas e raciocínio avançado',
        construcao: 'Revisão espiral, prática intensiva e simulados progressivos',
      },
    },
    'vestibular': {
      title: 'Preparatório Vestibular',
      age: 'Vestibulandos e Concurseiros',
      duration: '48 aulas/ano (1h15 por aula)',
      objective: 'Revisar, consolidar e aprofundar todos os conteúdos de matemática exigidos em vestibulares, concursos públicos e ENEM, desenvolvendo raciocínio lógico, estratégias de resolução e autonomia para enfrentar questões de alta complexidade.',
      cycles: [
        { name: 'Trimestre 1', focus: 'Fundamentos e Álgebra Básica' },
        { name: 'Trimestre 2', focus: 'Geometria e Trigonometria' },
        { name: 'Trimestre 3', focus: 'Análise Combinatória, Probabilidade e Estatística' },
        { name: 'Trimestre 4', focus: 'Tópicos Avançados e Preparação Final' },
      ],
      elcApplication: {
        entendimento: 'Revisão conceitual profunda (não apenas fórmulas), explicação detalhada de como e porque, conexões entre tópicos',
        logica: 'Raciocínio estratégico para questões, análise de alternativas, identificação de pegadinhas e múltiplas formas de resolver',
        construcao: 'Progressão do básico ao avançado, revisão espiral constante, prática intensiva com questões reais e simulados progressivos',
      },
    },
  };

  const course = coursesData[courseId];

  if (!course) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <p className="text-2xl text-primary-deep">Curso não encontrado</p>
      </div>
    );
  }

  return (
    <div className="pt-32 math-bg min-h-screen">
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a href="/cursos" className="text-accent-purple hover:text-accent-red transition-colors">
              ← Voltar para Cursos
            </a>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary-deep">
              {course.title}
            </h1>
            <p className="text-2xl text-accent-purple mb-2">{course.age}</p>
            <p className="text-primary-deep/70">{course.duration}</p>
          </div>

          <GlassCard className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-accent-yellow">Objetivo do Curso</h2>
            <p className="text-primary-deep/80 leading-relaxed">{course.objective}</p>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-accent-purple">Estrutura - 4 Ciclos Trimestrais</h2>
            <div className="space-y-4">
              {course.cycles.map((cycle, index) => (
                <div key={index} className="border-l-4 border-accent-yellow pl-4">
                  <h3 className="font-bold text-primary-deep">{cycle.name}</h3>
                  <p className="text-primary-deep/70">{cycle.focus}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center gradient-text">
              Aplicação do Método ELC®
            </h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img src="/assets/e.png" alt="Entendimento" className="w-12 h-12" />
                  <h3 className="text-xl font-bold text-accent-yellow">Entendimento</h3>
                </div>
                <p className="text-primary-deep/80 pl-15">{course.elcApplication.entendimento}</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img src="/assets/l.png" alt="Lógica" className="w-12 h-12" />
                  <h3 className="text-xl font-bold text-accent-purple">Lógica</h3>
                </div>
                <p className="text-primary-deep/80 pl-15">{course.elcApplication.logica}</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img src="/assets/c.png" alt="Construção" className="w-12 h-12" />
                  <h3 className="text-xl font-bold text-accent-red">Construção</h3>
                </div>
                <p className="text-primary-deep/80 pl-15">{course.elcApplication.construcao}</p>
              </div>
            </div>
          </GlassCard>

          <div className="text-center">
            <Button href="/contato">
              Agende uma Aula Experimental
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
