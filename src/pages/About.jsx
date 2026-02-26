import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';

export const About = () => {
  return (
    <div className="pt-32 math-bg min-h-screen">
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <img src="/src/assets/logo.png" alt="Conta Que Vai" className="h-24 mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-deep">
              Sobre a <span className="gradient-text">Conta Que Vai</span>
            </h1>
            <p className="text-xl text-primary-deep/70 max-w-3xl mx-auto">
              Transformando a relação dos alunos com a matemática através do Método ELC®
            </p>
          </div>

          <GlassCard className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-accent-yellow">Quem Somos</h2>
            <p className="text-lg text-primary-deep/80 mb-4 leading-relaxed">
              A Conta Que Vai é uma empresa educacional especializada no ensino de matemática, 
              fundamentada em uma metodologia autoral que transforma a relação do aluno com a disciplina.
            </p>
            <p className="text-lg text-primary-deep/80 mb-4 leading-relaxed">
              Nascemos da observação de uma realidade preocupante: milhares de estudantes brasileiros 
              desenvolvem bloqueios, ansiedade e aversão à matemática devido a métodos de ensino inadequados, 
              focados em memorização mecânica e desconectados da compreensão real.
            </p>
            <p className="text-lg text-primary-deep/80 leading-relaxed">
              Nossa missão é desmistificar a matemática, tornando-a acessível, compreensível e, 
              acima de tudo, significativa para cada estudante.
            </p>
          </GlassCard>

          <GlassCard className="mb-12 bg-gradient-to-br from-accent-yellow/10 to-accent-purple/10">
            <h2 className="text-4xl font-bold mb-6 text-center gradient-text">O Problema que Resolvemos</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-accent-red mb-4">Dados Alarmantes</h3>
                <ul className="space-y-3 text-primary-deep/80">
                  <li>• Mais de 70% dos estudantes têm desempenho insuficiente em matemática (PISA)</li>
                  <li>• 50% dos alunos do ensino médio sofrem com ansiedade matemática</li>
                  <li>• Decoram fórmulas sem compreender aplicação</li>
                  <li>• Lacunas de aprendizado acumuladas</li>
                </ul>
              </div>
              <div className="bg-white/50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-accent-purple mb-4">Nossa Solução</h3>
                <ul className="space-y-3 text-primary-deep/80">
                  <li>✓ Compreensão antes de memorizar</li>
                  <li>✓ Ritmo que respeita individualidade</li>
                  <li>✓ Erro como parte natural do aprendizado</li>
                  <li>✓ Conexão com a vida real</li>
                  <li>✓ Acompanhamento próximo e humanizado</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary-deep">
              Método <span className="gradient-text">ELC®</span>
            </h2>
            <p className="text-xl text-center text-primary-deep/70 mb-12 max-w-3xl mx-auto">
              Nossa metodologia autoral fundamentada em ciência da aprendizagem
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <GlassCard className="text-center">
                <img src="/src/assets/e.png" alt="Entendimento" className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-accent-yellow mb-3">Entendimento</h3>
                <p className="text-primary-deep/80 leading-relaxed">
                  Compreensão profunda dos conceitos. O aluno entende o QUÊ, POR QUÊ, COMO e ONDE aplicar.
                </p>
              </GlassCard>

              <GlassCard className="text-center">
                <img src="/src/assets/l.png" alt="Lógica" className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-accent-purple mb-3">Lógica</h3>
                <p className="text-primary-deep/80 leading-relaxed">
                  Desenvolvimento do raciocínio matemático estruturado através de análise crítica e argumentação.
                </p>
              </GlassCard>

              <GlassCard className="text-center">
                <img src="/src/assets/c.png" alt="Construção" className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-accent-red mb-3">Construção</h3>
                <p className="text-primary-deep/80 leading-relaxed">
                  Progressão estruturada do simples ao complexo, com baby steps e revisão contínua.
                </p>
              </GlassCard>
            </div>

            <GlassCard className="mb-8">
              <h3 className="text-3xl font-bold mb-6 text-accent-yellow">Fundamentação Científica</h3>
              <p className="text-lg text-primary-deep/80 mb-4 leading-relaxed">
                O Método ELC® se baseia em pesquisas consolidadas da ciência da aprendizagem:
              </p>
              <ul className="space-y-3 text-primary-deep/80">
                <li className="flex items-start">
                  <span className="text-accent-yellow mr-3 mt-1">→</span>
                  <span><strong>Teoria da Aprendizagem Significativa (David Ausubel)</strong> — Novos conhecimentos se ancoram em conhecimentos prévios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-purple mr-3 mt-1">→</span>
                  <span><strong>Construtivismo (Jean Piaget)</strong> — O aluno constrói ativamente seu conhecimento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-red mr-3 mt-1">→</span>
                  <span><strong>Zona de Desenvolvimento Proximal (Lev Vygotsky)</strong> — Aprendizado ocorre com mediação adequada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-yellow mr-3 mt-1">→</span>
                  <span><strong>Ciência Cognitiva Moderna</strong> — Espaçamento, recuperação ativa e intercalação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-purple mr-3 mt-1">→</span>
                  <span><strong>Neurociência da Aprendizagem</strong> — Emoções positivas facilitam consolidação da memória</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h3 className="text-3xl font-bold mb-6 text-accent-purple">Como Funciona na Prática</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-accent-yellow pl-6">
                  <h4 className="text-xl font-bold text-primary-deep mb-2">Ensino Tradicional</h4>
                  <p className="text-primary-deep/70">Fórmula → Repetição → Memorização</p>
                </div>
                <div className="border-l-4 border-accent-purple pl-6">
                  <h4 className="text-xl font-bold text-primary-deep mb-2">Método ELC®</h4>
                  <p className="text-primary-deep/70">Entendimento → Lógica → Construção → Domínio Autônomo</p>
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-accent-red">Nossos Valores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-4 text-primary-deep/80">
                  <li className="flex items-start">
                    <span className="text-accent-yellow mr-3 text-xl">✓</span>
                    <div>
                      <strong className="text-primary-deep">Compreensão antes da memorização</strong>
                      <p className="text-sm mt-1">Priorizamos o entendimento profundo sobre a decoreba</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow mr-3 text-xl">✓</span>
                    <div>
                      <strong className="text-primary-deep">Respeito ao ritmo individual</strong>
                      <p className="text-sm mt-1">Cada aluno avança no seu tempo, sem pressão</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow mr-3 text-xl">✓</span>
                    <div>
                      <strong className="text-primary-deep">Acolhimento e confiança</strong>
                      <p className="text-sm mt-1">Ambiente seguro onde errar faz parte do aprender</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 text-primary-deep/80">
                  <li className="flex items-start">
                    <span className="text-accent-purple mr-3 text-xl">✓</span>
                    <div>
                      <strong className="text-primary-deep">Excelência pedagógica</strong>
                      <p className="text-sm mt-1">Compromisso com qualidade e atualização constante</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-purple mr-3 text-xl">✓</span>
                    <div>
                      <strong className="text-primary-deep">Aprendizagem significativa</strong>
                      <p className="text-sm mt-1">Conectamos matemática com a vida real do aluno</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-purple mr-3 text-xl">✓</span>
                    <div>
                      <strong className="text-primary-deep">Transparência e ética</strong>
                      <p className="text-sm mt-1">Comunicação clara e responsabilidade integral</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-accent-purple">Visão 2027</h2>
            <p className="text-lg text-primary-deep/80 mb-6 leading-relaxed">
              Ser referência nacional em educação matemática personalizada, reconhecida pela 
              excelência pedagógica e pelos resultados transformadores na vida dos alunos.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-accent-yellow/10 p-4 rounded-lg">
                <p className="text-primary-deep/80">→ Impactar mais de 1.000 alunos diretamente</p>
              </div>
              <div className="bg-accent-purple/10 p-4 rounded-lg">
                <p className="text-primary-deep/80">→ Formar rede de mentores certificados no Método ELC®</p>
              </div>
              <div className="bg-accent-red/10 p-4 rounded-lg">
                <p className="text-primary-deep/80">→ Expandir para outras disciplinas das ciências exatas</p>
              </div>
              <div className="bg-accent-yellow/10 p-4 rounded-lg">
                <p className="text-primary-deep/80">→ Desenvolver plataforma digital complementar às aulas</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-12 bg-gradient-to-br from-accent-purple/10 to-accent-yellow/10">
            <h2 className="text-4xl font-bold mb-6 text-center gradient-text">Diferenciais Pedagógicos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-primary-deep/20">
                    <th className="py-3 px-4 text-primary-deep">Aspecto</th>
                    <th className="py-3 px-4 text-accent-red">Ensino Tradicional</th>
                    <th className="py-3 px-4 text-accent-purple">Método ELC®</th>
                  </tr>
                </thead>
                <tbody className="text-primary-deep/80">
                  <tr className="border-b border-primary-deep/10">
                    <td className="py-3 px-4 font-semibold">Foco</td>
                    <td className="py-3 px-4">Memorização</td>
                    <td className="py-3 px-4 text-accent-purple font-semibold">Compreensão</td>
                  </tr>
                  <tr className="border-b border-primary-deep/10">
                    <td className="py-3 px-4 font-semibold">Ritmo</td>
                    <td className="py-3 px-4">Padronizado</td>
                    <td className="py-3 px-4 text-accent-purple font-semibold">Personalizado</td>
                  </tr>
                  <tr className="border-b border-primary-deep/10">
                    <td className="py-3 px-4 font-semibold">Abordagem</td>
                    <td className="py-3 px-4">Fórmulas e regras</td>
                    <td className="py-3 px-4 text-accent-purple font-semibold">Conceitos e raciocínio</td>
                  </tr>
                  <tr className="border-b border-primary-deep/10">
                    <td className="py-3 px-4 font-semibold">Ambiente</td>
                    <td className="py-3 px-4">Competitivo</td>
                    <td className="py-3 px-4 text-accent-purple font-semibold">Acolhedor e seguro</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Erro</td>
                    <td className="py-3 px-4">Punido</td>
                    <td className="py-3 px-4 text-accent-purple font-semibold">Ferramenta de aprendizado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-deep">
              Pronto para transformar sua relação com a matemática?
            </h2>
            <Button href="/contato">
              Agende uma Aula Experimental
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
