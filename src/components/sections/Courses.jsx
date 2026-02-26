import { GlassCard } from '../common/GlassCard';
import { Button } from '../common/Button';

export const Courses = () => {
  const courses = [
    {
      id: 'infantil',
      title: 'Curso Infantil',
      age: '7 a 9 anos',
      description: 'Base do raciocínio matemático com ludicidade',
    },
    {
      id: 'pre-adolescentes',
      title: 'Pré-Adolescentes',
      age: '10 a 12 anos',
      description: 'Transição para abstração e consolidação de bases',
    },
    {
      id: 'adolescentes',
      title: 'Adolescentes',
      age: '13 a 15 anos',
      description: 'Álgebra com significado e preparação para Ensino Médio',
    },
    {
      id: 'ensino-medio',
      title: 'Ensino Médio',
      age: '16 a 18 anos',
      description: 'Preparação para ENEM, vestibulares e ensino superior',
    },
    {
      id: 'vestibular',
      title: 'Preparatório Vestibular',
      age: 'Vestibulandos',
      description: 'Revisão completa para ENEM, vestibulares e concursos',
    },
  ];

  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-deep">
          Cursos para <span className="gradient-text">Todas as Idades</span>
        </h2>
        <p className="text-xl text-primary-deep/70 max-w-2xl mx-auto">
          Metodologia adaptada para cada fase do desenvolvimento
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <a key={index} href={`/cursos/${course.id}`}>
            <GlassCard hover className="h-full">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-accent-yellow">
                  {course.title}
                </h3>
                <p className="text-sm text-accent-purple mb-4">{course.age}</p>
                <p className="text-primary-deep/70 text-sm">
                  {course.description}
                </p>
                <div className="mt-4 text-accent-purple font-semibold text-sm">
                  Ver detalhes →
                </div>
              </div>
            </GlassCard>
          </a>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href="/contato">
          Agende uma Aula Experimental
        </Button>
      </div>
    </section>
  );
};
