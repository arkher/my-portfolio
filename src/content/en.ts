import { links, person, publicationLinks, withRoleCopy } from "./shared";
import type { Content } from "./types";

export const en = {
  meta: {
    title: `${person.name} · Tech Lead & Senior Software Engineer`,
    description:
      "Tech Lead and Senior Software Engineer building web and mobile products with React, React Native, Next.js and TypeScript.",
    ogLocale: "en_US",
  },
  dates: {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    now: "Now",
  },
  nav: {
    label: "Main",
    language: "Language",
    skip: "Skip to content",
    items: [
      { id: "work", label: "Work" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "research", label: "Research" },
      { id: "contact", label: "Contact" },
    ],
  },
  profile: {
    ...person,
    role: "Tech Lead & Senior Software Engineer",
    location: "São Luís, Brazil · working remotely",
    resume: "/Paulo_Gomes_CV.pdf",
    links,
  },
  hero: {
    availability: "Tech Lead & Senior Software Engineer, open to remote roles",
    headline: "I build web and mobile products people rely on, and lead the teams that ship them.",
    intro:
      "Tech Lead with 7+ years in React, React Native, Next.js and TypeScript. Today I lead a healthcare platform for a US company. Before that: fintech, conversational platforms and a retail app used by more than a million people.",
    emailCta: "Email me",
    resumeCta: "Download résumé",
    facts: [
      { value: 7, suffix: "+", label: "years shipping web and mobile" },
      { value: 1, suffix: "M+", label: "customers on an app I built" },
      { value: 3, suffix: "", label: "engineers led on my current platform" },
    ],
  },
  work: {
    title: "Where I've worked",
    intro:
      "Seven years across healthcare, fintech, conversational platforms and retail, most of them remote for US companies.",
    current: "Current",
    at: "at",
    stack: "Stack",
    showDetails: "Show details",
    hideDetails: "Hide details",
    roles: withRoleCopy({
      everbetter: {
        title: "Tech Lead",
        location: "Brentwood, TN · Remote",
        summary:
          "Leading the technical direction of a health platform: a patient app with health-device integrations and AI assistance, and a web app for clinicians.",
        highlights: [
          "Drive architecture and technical prioritization across APIs and frontend apps.",
          "Own identity and role-based access with Auth0, meeting LGPD/GDPR requirements.",
          "Built a CI/CD pipeline with automated tests and store builds, turning a manual release into one promotion step.",
          "Hired directly by EverBetter after leading the project through Jobsity.",
        ],
      },
      jobsity: {
        title: "Tech Lead",
        note: "Client: EverBetter",
        location: "Remote",
        summary:
          "Led a team of up to three engineers building a medical clinics app in React Native for a US healthcare company.",
        highlights: [
          "Integrated Auth0 and Solid (Inrupt) for privacy-first identity.",
          "Designed client architecture with MobX and MMKV, improving load times and offline use.",
          "Delivered appointment scheduling and real-time doctor–patient messaging.",
          "Built an accessible design system and mentored engineers through reviews and docs.",
        ],
      },
      juvo: {
        title: "Senior Software Engineer",
        location: "USA · Remote",
        summary: "Built consumer lending products and the back office that runs them.",
        highlights: [
          "Led a Next.js back-office platform supporting daily operations.",
          "Built core loan and credit features with a focus on correctness.",
          "Shipped web and mobile features in React, TypeScript and Flutter.",
        ],
      },
      blip: {
        title: "Software Engineer",
        location: "Belo Horizonte · Remote",
        summary: "Built web modules in a microfrontend architecture and chatbot flows on the Blip platform.",
        highlights: [
          "Supported the migration to modern architectures and patterns.",
          "Mentored junior and mid-level engineers; set development standards and docs.",
        ],
      },
      pulse: {
        title: "Full Stack Developer",
        location: "São Luís",
        summary: "Built a marketing and sales app in React Native used by more than a million customers.",
        highlights: [
          "Designed and documented the company's design system with Storybook.",
          "Built internal systems for supplier contract management, front to back.",
          "Integrated apps with Node.js microservices; added Jest and Testing Library coverage.",
        ],
      },
      nca: {
        title: "Data Scientist",
        note: "Part-time",
        location: "São Luís",
        summary: "Predicted consumer lawsuits with machine learning to help a utility reduce risk.",
        highlights: ["Built predictive models with XGBoost and TensorFlow and presented results to stakeholders."],
      },
    }),
  },
  about: {
    title: "A bit about me",
    photoAlt: "Paulo Gomes at his desk",
    paragraphs: [
      "I started in a research lab at UFMA, predicting lawsuits with machine learning. Then I fell for the part of software people actually touch, and have been building interfaces ever since.",
      "These days I work end to end: architecture for APIs and frontends, auth and access control, design systems, and CI/CD that puts builds in the App Store and Google Play without anyone clicking around. I care about code that the next person can read, and teams that ship without drama.",
    ],
    education: {
      degree: "B.Sc. in Computer Science",
      school: "Federal University of Maranhão (UFMA)",
      period: "2016 – 2021",
    },
  },
  skills: {
    title: "What I work with",
    intro: "The tools I reach for every week, grouped by the problem they solve.",
    groups: [
      { name: "Frontend & mobile", items: ["React", "Next.js", "React Native", "TypeScript", "Flutter", "Tailwind CSS"] },
      { name: "Architecture", items: ["Microfrontends", "Clean Architecture", "SOLID", "Monorepos (NX)", "Design systems"] },
      { name: "State & data", items: ["Redux", "MobX", "Zustand", "MMKV", "PostgreSQL"] },
      { name: "Quality", items: ["Jest", "Testing Library", "TDD", "Storybook", "Accessibility"] },
      { name: "Platform", items: ["Auth0", "OAuth", "RBAC", "CI/CD", "Docker", "Node.js", "Azure"] },
      { name: "Leadership", items: ["Technical direction", "Mentoring", "Code review", "Documentation"] },
    ],
  },
  research: {
    title: "Research",
    intro: "Before frontend, I spent two years in machine learning research. A few of the papers that came out of it.",
    openPaper: "Open paper",
    publications: [
      {
        title: "Diagnosis of COVID-19 on chest X-ray images using residual neural networks",
        venue: "UFMA · undergraduate thesis",
        href: publicationLinks.covid,
      },
      {
        title: "Prediction of unregistered consumer lawsuits: an approach to the problem of unbalanced classes",
        venue: "ERCEMAPI · SBC",
        href: publicationLinks.unbalanced,
      },
      {
        title: "Prediction of lawsuits in the electricity sector due to lack of energy supply using logistic regression",
        venue: "SBAI",
        year: 2019,
        href: publicationLinks.electricity,
      },
    ],
  },
  contact: {
    title: "Hiring a tech lead or a senior engineer?",
    body: "I'm open to remote roles. Send a note with the team and the problem, and I'll reply within a couple of days.",
    copy: { idle: "Copy email", copied: "Email copied", failed: "Copy failed, select the address instead" },
    resumeLink: "Résumé (PDF)",
  },
} as const satisfies Content;
