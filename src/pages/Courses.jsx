import { GlassCard } from '../components/common/GlassCard';

export const Courses = () => {
  const courses = [
    {
      id: 'infantil',
      title: 'Curso Infantil',
      age: '7 a 9 anos',
      duration: '48 aulas/ano',
      description: 'Base do raciocínio matemático com ludicidade',
    },
    {
      id: 'pre-adolescentes',
      title: 'Pré-Adolescentes',
      age: '10 a 12 anos',
      duration: '48 aulas/ano',
      description: 'Transição para abstração e consolidação de bases',
    },
    {
      id: 'adolescentes',
      title: 'Adolescentes',
      age: '13 a 15 anos',
      duration: '48 aulas/ano',
      description: 'Álgebra com significado e preparação para Ensino Médio',
    },
    {
      id: 'ensino-medio',
      title: 'Ensino Médio',
      age: '16 a 18 anos',
      duration: '48 aulas/ano',
      description: 'Preparação para ENEM, vestibulares e ensino superior',
    },
    {
      id: 'vestibular',
      title: 'Preparatório Vestibular',
      age: 'Vestibulandos e Concurseiros',
      duration: '48 aulas/ano (1h15)',
      description: 'Revisão completa com questões reais de ENEM, vestibulares e concursos',
    },
  ];

  return (
    <div className="pt-32 math-bg min-h-screen">
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-deep">
              Nossos <span className="gradient-text">Cursos</span>
            </h1>
            <p className="text-xl text-primary-deep/70 max-w-3xl mx-auto">
              Metodologia ELC® adaptada para cada fase do desenvolvimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <a key={course.id} href={`/cursos/${course.id}`}>
                <GlassCard hover className="h-full">
                  <h3 className="text-2xl font-bold mb-2 text-accent-yellow">
                    {course.title}
                  </h3>
                  <p className="text-accent-purple mb-2">{course.age}</p>
                  <p className="text-sm text-primary-deep/60 mb-4">{course.duration}</p>
                  <p className="text-primary-deep/80">
                    {course.description}
                  </p>
                  <div className="mt-4 text-accent-purple font-semibold">
                    Ver detalhes →
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
