/** Shape of everything the site renders. Each locale must provide all of it, checked by the compiler. */

export type Link = Readonly<{ label: string; href: string }>;
export type Period = Readonly<{ start: string; end: string | null }>;

/** Facts about a role that don't change with language. */
export type RoleBase = Readonly<{
  id: string;
  company: string;
  period: Period;
  stack: readonly string[];
}>;

/** The words that describe a role. */
export type RoleCopy = Readonly<{
  title: string;
  location: string;
  note?: string;
  summary: string;
  highlights: readonly string[];
}>;

export type Role = RoleBase & RoleCopy;

export type SkillGroup = Readonly<{ name: string; items: readonly string[] }>;
export type Publication = Readonly<{ title: string; venue: string; year?: number; href: string }>;
export type Fact = Readonly<{ value: number; suffix: string; label: string }>;
export type NavItem = Readonly<{ id: "work" | "about" | "skills" | "research" | "contact"; label: string }>;

export type Content = Readonly<{
  meta: Readonly<{ title: string; description: string; ogLocale: string }>;
  dates: Readonly<{ months: readonly string[]; now: string }>;
  nav: Readonly<{ items: readonly NavItem[]; label: string; language: string; skip: string }>;
  profile: Readonly<{
    name: string;
    fullName: string;
    role: string;
    location: string;
    email: string;
    resume: string;
    links: readonly Link[];
  }>;
  hero: Readonly<{
    availability: string;
    headline: string;
    intro: string;
    emailCta: string;
    resumeCta: string;
    facts: readonly Fact[];
  }>;
  work: Readonly<{
    title: string;
    intro: string;
    current: string;
    at: string;
    stack: string;
    showDetails: string;
    hideDetails: string;
    roles: readonly Role[];
  }>;
  about: Readonly<{
    title: string;
    paragraphs: readonly string[];
    photoAlt: string;
    education: Readonly<{ degree: string; school: string; period: string }>;
  }>;
  skills: Readonly<{ title: string; intro: string; groups: readonly SkillGroup[] }>;
  research: Readonly<{ title: string; intro: string; openPaper: string; publications: readonly Publication[] }>;
  contact: Readonly<{
    title: string;
    body: string;
    copy: Readonly<{ idle: string; copied: string; failed: string }>;
    resumeLink: string;
  }>;
}>;
