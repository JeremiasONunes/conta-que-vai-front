import { Button } from '../common/Button';
import { MathBackground } from '../common/MathBackground';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 math-bg">
      <MathBackground />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center md:justify-end">
            <img src="/assets/logo.png" alt="Conta Que Vai" className="w-full max-w-md" />
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-deep">
              Matemática que{' '}
              <span className="gradient-text">Transforma</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-deep/80 mb-8 font-medium">
              Desenvolva raciocínio lógico e confiança através do{' '}
              <span className="text-accent-purple font-bold">Método ELC®</span>
            </p>
            <p className="text-lg text-primary-deep/70 mb-12 font-medium">
              Entendimento • Lógica • Construção
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/contato">
                Comece Sua Jornada
              </Button>
              <Button variant="secondary" href="/metodo">
                Conheça o Método
              </Button>
            </div>
          </div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
            <div className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="text-4xl font-bold text-accent-red mb-2">70%</div>
              <p className="text-primary-deep/70">dos estudantes têm dificuldade em matemática</p>
            </div>
            <div className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="text-4xl font-bold text-accent-purple mb-2">100%</div>
              <p className="text-primary-deep/70">podem aprender com o método certo</p>
            </div>
            <div className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="text-4xl font-bold text-accent-yellow mb-2">ELC®</div>
              <p className="text-primary-deep/70">metodologia autoral comprovada</p>
            </div>
        </div>
      </div>
    </section>
  );
};
