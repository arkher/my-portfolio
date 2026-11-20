import { links, person, publicationLinks, withRoleCopy } from "./shared";
import type { Content } from "./types";

export const pt = {
  meta: {
    title: `${person.name} · Tech Lead e Engenheiro de Software Sênior`,
    description:
      "Tech Lead e Engenheiro de Software Sênior que constrói produtos web e mobile com React, React Native, Next.js e TypeScript.",
    ogLocale: "pt_BR",
  },
  dates: {
    months: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
    now: "atual",
  },
  nav: {
    label: "Principal",
    language: "Idioma",
    skip: "Pular para o conteúdo",
    items: [
      { id: "work", label: "Trajetória" },
      { id: "about", label: "Sobre" },
      { id: "skills", label: "Skills" },
      { id: "research", label: "Pesquisa" },
      { id: "contact", label: "Contato" },
    ],
  },
  profile: {
    ...person,
    role: "Tech Lead e Engenheiro de Software Sênior",
    location: "São Luís, MA · trabalhando remotamente",
    resume: "/Paulo_Gomes_Curriculo.pdf",
    links,
  },
  hero: {
    availability: "Tech Lead e Engenheiro de Software Sênior, disponível para vagas remotas",
    headline: "Construo produtos web e mobile confiáveis e lidero os times que os entregam.",
    intro:
      "Tech Lead com mais de 7 anos em React, React Native, Next.js e TypeScript. Hoje lidero uma plataforma de saúde para uma empresa americana. Antes disso: fintech, plataformas conversacionais e um app de varejo usado por mais de um milhão de pessoas.",
    emailCta: "Mande um e-mail",
    resumeCta: "Baixar currículo",
    facts: [
      { value: 7, suffix: "+", label: "anos entregando web e mobile" },
      { value: 1, suffix: "M+", label: "clientes em um app que construí" },
      { value: 3, suffix: "", label: "engenheiros liderados na plataforma atual" },
    ],
  },
  work: {
    title: "Onde trabalhei",
    intro:
      "Sete anos entre saúde, fintech, plataformas conversacionais e varejo, a maior parte remota para empresas americanas.",
    current: "Atual",
    at: "na",
    stack: "Tecnologias",
    showDetails: "Ver detalhes",
    hideDetails: "Ocultar detalhes",
    roles: withRoleCopy({
      everbetter: {
        title: "Tech Lead",
        location: "Brentwood, EUA · Remoto",
        summary:
          "Lidero a direção técnica de uma plataforma de saúde: um app para pacientes com integração a dispositivos de medição e assistente com IA, e um app web para clínicos.",
        highlights: [
          "Conduzo a arquitetura e a priorização técnica de APIs e aplicações frontend.",
          "Cuido de identidade e controle de acesso com Auth0, atendendo à LGPD e à GDPR.",
          "Criei uma pipeline de CI/CD com testes e builds para as lojas, transformando a publicação manual em uma única etapa.",
          "Contratado diretamente pela EverBetter depois de liderar o projeto pela Jobsity.",
        ],
      },
      jobsity: {
        title: "Tech Lead",
        note: "Cliente: EverBetter",
        location: "Remoto",
        summary:
          "Liderei um time de até três desenvolvedores na construção de um app em React Native para clínicas médicas de uma empresa de saúde americana.",
        highlights: [
          "Integrei Auth0 e Solid (Inrupt) para uma identidade com foco em privacidade.",
          "Projetei a arquitetura do app com MobX e MMKV, melhorando o carregamento e o uso offline.",
          "Entreguei agendamento de consultas e mensagens em tempo real entre médico e paciente.",
          "Construí um design system acessível e fui mentor do time com code reviews e documentação.",
        ],
      },
      zbra: {
        title: "Desenvolvedor Frontend Sênior",
        note: "Contrato",
        location: "Remoto",
        summary: "Contrato curto construindo uma plataforma de pagamentos com Next.js e TypeScript.",
        highlights: [
          "Configurei um monorepo NX para padronizar ferramentas e estrutura dos projetos.",
          "Introduzi Storybook e next-intl para componentes reutilizáveis e multilíngues.",
        ],
      },
      juvo: {
        title: "Engenheiro de Software Sênior",
        location: "EUA · Remoto",
        summary: "Construí produtos de crédito ao consumidor e o backoffice que os opera.",
        highlights: [
          "Liderei uma plataforma de backoffice em Next.js que apoia a operação diária.",
          "Desenvolvi funcionalidades centrais de empréstimo e crédito com foco em correção.",
          "Entreguei funcionalidades web e mobile em React, TypeScript e Flutter.",
        ],
      },
      blip: {
        title: "Engenheiro de Software",
        location: "Belo Horizonte · Remoto",
        summary: "Desenvolvi módulos web em arquitetura de microfrontends e fluxos de chatbot na plataforma Blip.",
        highlights: [
          "Apoiei a migração para arquiteturas e padrões modernos.",
          "Fui mentor de devs júnior e pleno; defini padrões de desenvolvimento e documentação.",
        ],
      },
      pulse: {
        title: "Desenvolvedor Full Stack",
        location: "São Luís",
        summary: "Construí um app de marketing e vendas em React Native usado por mais de um milhão de clientes.",
        highlights: [
          "Projetei e documentei o design system da empresa com Storybook.",
          "Construí sistemas internos de gestão de contratos com fornecedores, do front ao back.",
          "Integrei os apps a microsserviços Node.js; adicionei testes com Jest e Testing Library.",
        ],
      },
      nca: {
        title: "Cientista de Dados",
        note: "Meio período",
        location: "São Luís",
        summary: "Previ processos judiciais de consumidores com aprendizado de máquina para reduzir riscos de uma concessionária.",
        highlights: ["Construí modelos preditivos com XGBoost e TensorFlow e apresentei os resultados aos stakeholders."],
      },
    }),
  },
  about: {
    title: "Um pouco sobre mim",
    photoAlt: "Paulo Gomes em sua mesa de trabalho",
    paragraphs: [
      "Comecei num laboratório de pesquisa da UFMA, prevendo processos judiciais com aprendizado de máquina. Depois me apaixonei pela parte do software que as pessoas de fato tocam, e desde então construo interfaces.",
      "Hoje trabalho de ponta a ponta: arquitetura de APIs e frontends, autenticação e controle de acesso, design systems e CI/CD que coloca builds na App Store e no Google Play sem ninguém clicar em nada. Me importo com código que a próxima pessoa consiga ler, e com times que entregam sem drama.",
    ],
    education: {
      degree: "Bacharelado em Ciência da Computação",
      school: "Universidade Federal do Maranhão (UFMA)",
      period: "2016 – 2021",
    },
  },
  skills: {
    title: "Com o que trabalho",
    intro: "As ferramentas que uso toda semana, agrupadas pelo problema que resolvem.",
    groups: [
      { name: "Frontend e mobile", items: ["React", "Next.js", "React Native", "TypeScript", "Flutter", "Tailwind CSS"] },
      { name: "Arquitetura", items: ["Microfrontends", "Clean Architecture", "SOLID", "Monorepos (NX)", "Design systems"] },
      { name: "Estado e dados", items: ["Redux", "MobX", "Zustand", "MMKV", "PostgreSQL"] },
      { name: "Qualidade", items: ["Jest", "Testing Library", "TDD", "Storybook", "Acessibilidade"] },
      { name: "Plataforma", items: ["Auth0", "OAuth", "RBAC", "CI/CD", "Docker", "Node.js", "Azure"] },
      { name: "Liderança", items: ["Direção técnica", "Mentoria", "Code review", "Documentação"] },
    ],
  },
  research: {
    title: "Pesquisa",
    intro:
      "Antes do frontend, passei dois anos em pesquisa com aprendizado de máquina. Alguns dos artigos que saíram dessa época.",
    openPaper: "Abrir artigo",
    publications: [
      {
        title: "Diagnóstico de COVID-19 em imagens de raio-X de tórax usando redes neurais residuais",
        venue: "UFMA · trabalho de conclusão de curso",
        href: publicationLinks.covid,
      },
      {
        title: "Predição de ações judiciais de consumidores não cadastrados: uma abordagem para o problema de classes desbalanceadas",
        venue: "ERCEMAPI · SBC",
        href: publicationLinks.unbalanced,
      },
      {
        title: "Predição de ações judiciais no setor elétrico por falta de fornecimento de energia usando regressão logística",
        venue: "SBAI",
        year: 2019,
        href: publicationLinks.electricity,
      },
    ],
  },
  contact: {
    title: "Procurando um tech lead ou um engenheiro sênior?",
    body: "Estou aberto a vagas remotas. Me conte sobre o time e o desafio, e respondo em até dois dias.",
    copy: { idle: "Copiar e-mail", copied: "E-mail copiado", failed: "Não deu para copiar, selecione o endereço" },
    resumeLink: "Currículo (PDF)",
  },
} as const satisfies Content;
