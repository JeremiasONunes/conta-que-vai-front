export const Footer = () => {
  return (
    <footer className="bg-white border-t border-primary-deep/10 mt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src="/src/assets/logo.png" alt="Conta Que Vai" className="h-12 mb-4" />
            <p className="text-primary-deep/70 mb-4">
              Transformando a relação dos alunos com a matemática através do Método ELC®
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-deep">Navegação</h4>
            <ul className="space-y-2 text-primary-deep/70">
              <li><a href="/" className="hover:text-accent-purple transition-colors">Home</a></li>
              <li><a href="/sobre" className="hover:text-accent-purple transition-colors">Sobre</a></li>
              <li><a href="/metodo" className="hover:text-accent-purple transition-colors">Método ELC</a></li>
              <li><a href="/contato" className="hover:text-accent-purple transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-deep">Contato</h4>
            <ul className="space-y-2 text-primary-deep/70">
              <li>
                <a href="tel:+5535984197011" className="hover:text-accent-purple transition-colors">
                  📞 (35) 98419-7011
                </a>
              </li>
              <li>
                <a href="https://wa.me/5535998500813" target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors">
                  💬 (35) 99850-0813
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-deep/10 mt-8 pt-8 text-center text-primary-deep/70">
          <p>&copy; 2026 Conta Que Vai. Método ELC® - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
