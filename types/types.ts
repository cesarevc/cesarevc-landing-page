import { ReactNode } from "react";

// ─── Nav ─────────────────────────────────────────────────────────────────────

export type Title = {
  name: string;
  domain: string;
  initial: string;
};

export type NavLink = {
  href: string;
  label: string;
  id: string;
};

export type NavContent = {
  title: Title;
  links: NavLink[];
  cta: string;
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export type CodeFragment = {
  text: string;
  x: number;
  y: number;
  delay: number;
  dur: number;
};

export type HeroCard = {
  filename: string;
  varName: string;
  role: string;
  focus: string;
  stack: string[];
  passion: string;
  errors: string;
};

export type HeroContent = {
  statusPill: { path: string; branch: string };
  greeting: string;
  name: string;
  titleFull: string;
  titleLines: [string, string];
  bio: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  scrollLabel: string;
  tags: string[];
  codeFragments: CodeFragment[];
  card: HeroCard;
};

// ─── About ───────────────────────────────────────────────────────────────────

export type Stat = { num: string; label: string };

export type Commit = {
  hash: string;
  type: string;
  typeColor: string;
  msg: string;
  time: string;
  isHead?: boolean;
};

export type AboutContent = {
  num: string;
  label: string;
  heading: string;
  headingAccent: string;
  bio1: string;
  bio2: string;
  stats: Stat[];
  terminalCmd: string;
  commits: Commit[];
};

// ─── Skills ──────────────────────────────────────────────────────────────────

export type SkillGroup = {
  title: string;
  accent: string;
  icon: ReactNode;
  skills: string[];
};

export type SkillsContent = {
  num: string;
  label: string;
  heading: string;
  extrasLabel: string;
  groups: SkillGroup[];
  extras: string[];
};

// ─── Projects ────────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  featured: boolean;
  github: string;
  demo: string;
  accentColor: string;
  snippet: string | null;
};

export type ProjectsContent = {
  num: string;
  label: string;
  heading: string;
  githubLink: string;
  githubHref: string;
  featuredLabel: string;
  items: Project[];
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export type ContactItem = {
  field: string;
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
};

export type ContactContent = {
  num: string;
  label: string;
  heading: string;
  desc: string;
  availability: string;
  form: {
    name:    { label: string; placeholder: string };
    email:   { label: string; placeholder: string };
    message: { label: string; placeholder: string };
    submit:    string;
    sending:   string;
    submitted: string;
  };
  contacts: ContactItem[];
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

export type FooterNavItem = {
  label: string;
  href: string;
};

export type FooterContent = {
  logo: { name: string; domain: string; initial: string };
  tagline: string;
  copyright: string;
  navItems: FooterNavItem[];
  socials: SocialLink[];
};
