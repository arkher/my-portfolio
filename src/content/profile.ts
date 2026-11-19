/**
 * Single source of truth for the site's content.
 * Everything is declared as deeply readonly data so components stay pure:
 * they receive values and render them, never mutate them.
 */

export type Link = Readonly<{ label: string; href: string }>;

export type Role = Readonly<{
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  period: Readonly<{ start: string; end: string | null }>;
  location: string;
  note?: string;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
}>;

export type SkillGroup = Readonly<{ name: string; items: readonly string[] }>;

export type Publication = Readonly<{
  title: string;
  venue: string;
  year?: number;
  href: string;
}>;

export const profile = {
  name: "Paulo Gomes",
  fullName: "Paulo Ricardo Gomes",
  role: "Tech Lead & Senior Software Engineer",
  location: "São Luís, Brazil · working remotely",
  email: "paulo.rgomes22@gmail.com",
  headline: "I build web and mobile products people rely on, and lead the teams that ship them.",
  intro:
    "Tech Lead with 7+ years in React, React Native, Next.js and TypeScript. Today I lead a healthcare platform for a US company. Before that: fintech, conversational platforms and a retail app used by more than a million people.",
  resume: "/Paulo_Gomes_CV.pdf",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/paulo-ricardo-gomes/" },
    { label: "GitHub", href: "https://github.com/arkher" },
  ] satisfies readonly Link[],
} as const;

export const facts = [
  { value: 7, suffix: "+", label: "years shipping web and mobile" },
  { value: 1, suffix: "M+", label: "customers on an app I built" },
  { value: 3, suffix: "", label: "engineers led on my current platform" },
] as const;

export const about = [
  "I started in a research lab at UFMA, predicting lawsuits with machine learning. Then I fell for the part of software people actually touch, and have been building interfaces ever since.",
  "These days I work end to end: architecture for APIs and frontends, auth and access control, design systems, and CI/CD that puts builds in the App Store and Google Play without anyone clicking around. I care about code that the next person can read, and teams that ship without drama.",
] as const;

export const roles: readonly Role[] = [
  {
    id: "everbetter",
    title: "Tech Lead",
    company: "EverBetter",
    period: { start: "2026-02", end: null },
    location: "Brentwood, TN · Remote",
    summary:
      "Leading the technical direction of a health platform: a patient app with health-device integrations and AI assistance, and a web app for clinicians.",
    highlights: [
      "Drive architecture and technical prioritization across APIs and frontend apps.",
      "Own identity and role-based access with Auth0, meeting LGPD/GDPR requirements.",
      "Built a CI/CD pipeline with automated tests and store builds, turning a manual release into one promotion step.",
      "Hired directly by EverBetter after leading the project through Jobsity.",
    ],
    stack: ["React Native", "React", "Auth0", "CI/CD", "TypeScript"],
  },
  {
    id: "jobsity",
    title: "Tech Lead",
    company: "Jobsity",
    note: "Client: EverBetter",
    period: { start: "2025-01", end: "2026-01" },
    location: "Remote",
    summary:
      "Led a team of up to three engineers building a medical clinics app in React Native for a US healthcare company.",
    highlights: [
      "Integrated Auth0 and Solid (Inrupt) for privacy-first identity.",
      "Designed client architecture with MobX and MMKV, improving load times and offline use.",
      "Delivered appointment scheduling and real-time doctor–patient messaging.",
      "Built an accessible design system and mentored engineers through reviews and docs.",
    ],
    stack: ["React Native", "Ignite", "MobX", "MMKV", "Next.js"],
  },
  {
    id: "zbra",
    title: "Senior Frontend Developer",
    company: "ZBRA",
    note: "Contract",
    period: { start: "2024", end: "2025" },
    location: "Remote",
    summary: "Short contract building a payments platform with Next.js and TypeScript.",
    highlights: [
      "Set up an NX monorepo to standardize tooling and project structure.",
      "Introduced Storybook and next-intl for reusable, multilingual components.",
    ],
    stack: ["Next.js", "NX", "Storybook", "next-intl"],
  },
  {
    id: "juvo",
    title: "Senior Software Engineer",
    company: "Juvo",
    period: { start: "2022-03", end: "2025-08" },
    location: "USA · Remote",
    summary: "Built consumer lending products and the back office that runs them.",
    highlights: [
      "Led a Next.js back-office platform supporting daily operations.",
      "Built core loan and credit features with a focus on correctness.",
      "Shipped web and mobile features in React, TypeScript and Flutter.",
    ],
    stack: ["Next.js", "React", "Flutter", "TypeScript"],
  },
  {
    id: "blip",
    title: "Software Engineer",
    company: "Take Blip",
    period: { start: "2022-01", end: "2023-03" },
    location: "Belo Horizonte · Remote",
    summary: "Built web modules in a microfrontend architecture and chatbot flows on the Blip platform.",
    highlights: [
      "Supported the migration to modern architectures and patterns.",
      "Mentored junior and mid-level engineers; set development standards and docs.",
    ],
    stack: ["React", "TypeScript", "Microfrontends"],
  },
  {
    id: "pulse",
    title: "Full Stack Developer",
    company: "Pulse · Grupo Mateus",
    period: { start: "2020-02", end: "2022-04" },
    location: "São Luís",
    summary: "Built a marketing and sales app in React Native used by more than a million customers.",
    highlights: [
      "Designed and documented the company's design system with Storybook.",
      "Built internal systems for supplier contract management, front to back.",
      "Integrated apps with Node.js microservices; added Jest and Testing Library coverage.",
    ],
    stack: ["React Native", "Storybook", "Node.js", "Jest"],
  },
  {
    id: "nca",
    title: "Data Scientist",
    company: "NCA · UFMA",
    note: "Part-time",
    period: { start: "2018-10", end: "2020-02" },
    location: "São Luís",
    summary: "Predicted consumer lawsuits with machine learning to help a utility reduce risk.",
    highlights: ["Built predictive models with XGBoost and TensorFlow and presented results to stakeholders."],
    stack: ["Python", "XGBoost", "TensorFlow"],
  },
];

export const skills: readonly SkillGroup[] = [
  {
    name: "Frontend & mobile",
    items: ["React", "Next.js", "React Native", "TypeScript", "Flutter", "Tailwind CSS"],
  },
  {
    name: "Architecture",
    items: ["Microfrontends", "Clean Architecture", "SOLID", "Monorepos (NX)", "Design systems"],
  },
  { name: "State & data", items: ["Redux", "MobX", "Zustand", "MMKV", "PostgreSQL"] },
  { name: "Quality", items: ["Jest", "Testing Library", "TDD", "Storybook", "Accessibility"] },
  { name: "Platform", items: ["Auth0", "OAuth", "RBAC", "CI/CD", "Docker", "Node.js", "Azure"] },
  { name: "Leadership", items: ["Technical direction", "Mentoring", "Code review", "Documentation"] },
];

export const publications: readonly Publication[] = [
  {
    title: "Diagnosis of COVID-19 on chest X-ray images using residual neural networks",
    venue: "UFMA · undergraduate thesis",
    href: "https://rosario.ufma.br/jspui/handle/123456789/6382",
  },
  {
    title: "Prediction of unregistered consumer lawsuits: an approach to the problem of unbalanced classes",
    venue: "ERCEMAPI · SBC",
    href: "https://sol.sbc.org.br/index.php/ercemapi/article/view/8858",
  },
  {
    title: "Prediction of lawsuits in the electricity sector due to lack of energy supply using logistic regression",
    venue: "SBAI",
    year: 2019,
    href: "https://proceedings.science/sbai-2019/trabalhos/predicao-de-acoes-judiciais-no-setor-eletrico-por-falta-de-fornecimento-de-energ",
  },
];

export const education = {
  degree: "B.Sc. in Computer Science",
  school: "Federal University of Maranhão (UFMA)",
  period: "2016 – 2021",
} as const;

export const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
] as const;
