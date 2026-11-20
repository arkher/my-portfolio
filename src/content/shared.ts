import type { Link, Role, RoleBase, RoleCopy } from "./types";

/** Language-independent data shared by every locale. */

export const person = {
  name: "Paulo Gomes",
  fullName: "Paulo Ricardo Gomes",
  email: "paulo.rgomes22@gmail.com",
} as const;

export const links: readonly Link[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/paulo-ricardo-gomes/" },
  { label: "GitHub", href: "https://github.com/arkher" },
];

export const roleBases = [
  { id: "everbetter", company: "EverBetter", period: { start: "2026-02", end: null }, stack: ["React Native", "React", "Auth0", "CI/CD", "TypeScript"] },
  { id: "jobsity", company: "Jobsity", period: { start: "2025-01", end: "2026-01" }, stack: ["React Native", "Ignite", "MobX", "MMKV", "Next.js"] },
  { id: "zbra", company: "ZBRA", period: { start: "2024", end: "2025" }, stack: ["Next.js", "NX", "Storybook", "next-intl"] },
  { id: "juvo", company: "Juvo", period: { start: "2022-03", end: "2025-08" }, stack: ["Next.js", "React", "Flutter", "TypeScript"] },
  { id: "blip", company: "Take Blip", period: { start: "2022-01", end: "2023-03" }, stack: ["React", "TypeScript", "Microfrontends"] },
  { id: "pulse", company: "Pulse · Grupo Mateus", period: { start: "2020-02", end: "2022-04" }, stack: ["React Native", "Storybook", "Node.js", "Jest"] },
  { id: "nca", company: "NCA · UFMA", period: { start: "2018-10", end: "2020-02" }, stack: ["Python", "XGBoost", "TensorFlow"] },
] as const satisfies readonly RoleBase[];

export type RoleId = (typeof roleBases)[number]["id"];

/** Join each role's facts with its translated words. A missing translation fails to compile. */
export const withRoleCopy = (copy: Readonly<Record<RoleId, RoleCopy>>): readonly Role[] =>
  roleBases.map((base) => ({ ...base, ...copy[base.id] }));

export const publicationLinks = {
  covid: "https://rosario.ufma.br/jspui/handle/123456789/6382",
  unbalanced: "https://sol.sbc.org.br/index.php/ercemapi/article/view/8858",
  electricity:
    "https://proceedings.science/sbai-2019/trabalhos/predicao-de-acoes-judiciais-no-setor-eletrico-por-falta-de-fornecimento-de-energ",
} as const;
