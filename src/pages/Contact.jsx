import { useState } from 'react';
import { GlassCard } from '../components/common/GlassCard';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é *${formData.name}*%0A%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5535998500813?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 math-bg min-h-screen">
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-deep">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-primary-deep/70">
              Agende uma aula experimental gratuita e transforme sua relação com a matemática
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-accent-purple">☎</div>
                  <div>
                    <h3 className="font-bold text-accent-yellow mb-2">Telefone</h3>
                    <a href="tel:+5535984197011" className="text-primary-deep/70 hover:text-accent-purple transition-colors">
                      (35) 98419-7011
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-accent-purple">✉</div>
                  <div>
                    <h3 className="font-bold text-accent-yellow mb-2">WhatsApp</h3>
                    <a 
                      href="https://wa.me/5535998500813?text=Olá! Gostaria de saber mais sobre o Método ELC." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-deep/70 hover:text-accent-purple transition-colors"
                    >
                      (35) 99850-0813
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-accent-purple">@</div>
                  <div>
                    <h3 className="font-bold text-accent-yellow mb-2">Email</h3>
                    <a href="mailto:contato@contaquevai.com.br" className="text-primary-deep/70 hover:text-accent-purple transition-colors">
                      contato@contaquevai.com.br
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-accent-purple">⏰</div>
                  <div>
                    <h3 className="font-bold text-accent-yellow mb-2">Horário</h3>
                    <p className="text-primary-deep/70">Segunda a Sexta: 8h às 20h</p>
                    <p className="text-primary-deep/70">Sábado: 8h às 14h</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="font-bold text-accent-purple mb-4">Por que escolher a Conta Que Vai?</h3>
                <ul className="space-y-2 text-primary-deep/70 text-sm">
                  <li>✓ Metodologia autoral comprovada</li>
                  <li>✓ Aulas personalizadas (máx. 3 alunos)</li>
                  <li>✓ Acompanhamento individualizado</li>
                  <li>✓ Resultados mensuráveis</li>
                  <li>✓ Aula experimental gratuita</li>
                </ul>
              </GlassCard>
            </div>

            <GlassCard>
              <h2 className="text-2xl font-bold mb-6 text-accent-yellow">
                Envie sua Mensagem
              </h2>
              <p className="text-primary-deep/70 mb-6 text-sm">
                Preencha o formulário abaixo e você será direcionado para o WhatsApp com sua mensagem pronta!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary-deep">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-primary-deep/20 rounded-lg focus:outline-none focus:border-accent-purple transition-colors text-primary-deep"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-primary-deep">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-primary-deep/20 rounded-lg focus:outline-none focus:border-accent-purple transition-colors text-primary-deep"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-primary-deep">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-white border border-primary-deep/20 rounded-lg focus:outline-none focus:border-accent-purple transition-colors resize-none text-primary-deep"
                    placeholder="Conte-nos sobre suas necessidades..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-purple text-white px-6 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:bg-accent-red hover:scale-105 flex items-center justify-center gap-3"
                >
                  <span>Enviar via WhatsApp</span>
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-primary-deep/60">
                <p>Ao enviar, você será redirecionado para o WhatsApp</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};
