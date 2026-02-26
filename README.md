# Conta Que Vai - Website

Site institucional da Conta Que Vai, desenvolvido com React, Vite e Tailwind CSS.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utility-first
- **JavaScript** - Linguagem de programação

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/          # Componentes reutilizáveis
│   │   ├── Button.jsx
│   │   └── GlassCard.jsx
│   ├── layout/          # Componentes de layout
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Link.jsx
│   └── sections/        # Seções das páginas
│       ├── Hero.jsx
│       ├── Features.jsx
│       └── Courses.jsx
├── pages/               # Páginas principais
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Method.jsx
│   └── Contact.jsx
├── styles/              # Estilos globais
├── utils/               # Funções utilitárias
├── App.jsx              # Componente principal
├── main.jsx             # Entry point
└── index.css            # Estilos globais + Tailwind
```

## 🎨 Design System

O site segue o design system da Conta Que Vai:

### Cores Principais
- **Azul Profundo**: `#0D2B5B` - Cor principal
- **Azul Médio**: `#1E4FA3` - Botões e destaques
- **Amarelo Vibrante**: `#FFC400` - CTAs e energia
- **Roxo**: `#7A3DFF` - Elementos secundários
- **Verde**: `#00C896` - Indicadores positivos
- **Vermelho**: `#FF3B3B` - Elementos de operação

### Componentes Principais

#### GlassCard
Cartões com efeito glassmorphism:
```jsx
<GlassCard hover>
  Conteúdo
</GlassCard>
```

#### Button
Botões com variantes:
```jsx
<Button variant="primary">Texto</Button>
<Button variant="secondary">Texto</Button>
```

## 🛠️ Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse: `http://localhost:5173`

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## 🎯 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Navegação entre páginas
- ✅ Efeitos glassmorphism
- ✅ Animações suaves
- ✅ Formulário de contato
- ✅ Componentes reutilizáveis
- ✅ Totalmente componentizado

## 📄 Páginas

1. **Home** - Apresentação e destaques
2. **Sobre** - História e valores da empresa
3. **Método ELC** - Explicação detalhada da metodologia
4. **Contato** - Formulário e informações de contato

## 🎨 Customização

Para customizar cores e estilos, edite:
- `tailwind.config.js` - Configuração do Tailwind
- `src/index.css` - Estilos globais

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Próximos Passos

- [ ] Integração com backend
- [ ] Sistema de roteamento avançado (React Router)
- [ ] Animações mais complexas (Framer Motion)
- [ ] SEO otimizado
- [ ] Analytics
- [ ] Blog/Notícias

## 📝 Licença

© 2024 Conta Que Vai - Método ELC®. Todos os direitos reservados.
