import React from "react";
import {
  NavContent,
  HeroContent,
  AboutContent,
  SkillsContent,
  ProjectsContent,
  ContactContent,
  FooterContent,
} from "../types/types";

// ─── Nav ─────────────────────────────────────────────────────────────────────

const nav: NavContent = {
  title: { name: "cesarevc", domain: ".dev", initial: "C" },
  links: [
    { href: "#about",    label: "Sobre mí",  id: "about"    },
    { href: "#skills",   label: "Skills",    id: "skills"   },
    { href: "#projects", label: "Proyectos", id: "projects" },
    { href: "#contact",  label: "Contacto",  id: "contact"  },
  ],
  cta: "Hablemos",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

const hero: HeroContent = {
  statusPill: { path: "~/portfolio", branch: "develop" },
  greeting: "Hola, soy",
  name: "César",
  titleFull: "Desarrollador\nde Software",
  titleLines: ["Desarrollador", "de Software"],
  bio: "Tengo más de 6 años de experiencia en el desarrollo de software principalmente en el sector financiero.",
  ctaPrimary:   { label: "Ver proyectos", href: "#projects" },
  ctaSecondary: { label: "Contactar",     href: "#contact"  },
  scrollLabel: "scroll",
  tags: ["JavaScript", "TypeScript", "Java", "React", "Angular", "Node.js", "AWS", "Docker", "Kubernetes", "Git"],
  codeFragments: [
    { text: "async function deploy() {",         x:  4, y: 18, delay: 0.0, dur:  8 },
    { text: "git push origin main --force",      x: 68, y: 26, delay: 1.5, dur: 10 },
    { text: "npm run build && npm start",        x:  8, y: 66, delay: 2.8, dur:  9 },
    { text: "const res = await fetch(url)",      x: 60, y: 74, delay: 0.8, dur: 11 },
    { text: "docker compose up --build -d",      x: 36, y: 89, delay: 3.5, dur:  8 },
    { text: "SELECT * FROM users LIMIT 100",     x: 76, y: 50, delay: 1.8, dur: 12 },
    { text: "import { useEffect } from 'react'", x: 14, y: 44, delay: 4.2, dur:  9 },
    { text: "kubectl apply -f deployment.yml",   x: 46, y: 10, delay: 2.2, dur: 10 },
  ],
  card: {
    filename: "developer.ts",
    varName:  "cesar",
    role:     "Software Developer",
    focus:    "Full Stack",
    stack:    ["React", "Node", "AWS", "Git"],
    passion:  "Crash Prod",
    errors:   "0 errores",
  },
};

// ─── About ───────────────────────────────────────────────────────────────────

const about: AboutContent = {
  num:           "01.",
  label:         "Sobre mí",
  heading:       "Código con propósito,",
  headingAccent: "soluciones que duran",
  bio1: "Soy desarrollador de software con experiencia construyendo productos digitales desde cero. Me especializo en el desarrollo full stack, trabajando tanto en interfaces de usuario intuitivas como en backends robustos y escalables.",
  bio2: "Me apasiona resolver problemas complejos con soluciones elegantes. Trabajo de forma colaborativa, con atención al detalle y siempre aprendiendo nuevas tecnologías.",
  stats: [
    { num: "3+",  label: "Años de experiencia" },
    { num: "20+", label: "Proyectos entregados" },
    { num: "10+", label: "Clientes satisfechos" },
  ],
  terminalCmd: "git log --oneline --graph",
  commits: [
    { hash: "a3f8c12", type: "feat",     typeColor: "#22c55e", msg: "lanzar carrera como desarrollador full stack",     time: "hace 3 años"   },
    { hash: "b7e2f40", type: "feat",     typeColor: "#22c55e", msg: "dominar React, Node.js y arquitectura REST",        time: "hace 2.5 años" },
    { hash: "c9d1a35", type: "refactor", typeColor: "#f59e0b", msg: "migrar de jQuery a componentes modernos",           time: "hace 2 años"   },
    { hash: "d4f8b22", type: "feat",     typeColor: "#22c55e", msg: "adoptar Docker, AWS y pipelines de CI/CD",          time: "hace 1.5 años" },
    { hash: "e1c7d90", type: "feat",     typeColor: "#22c55e", msg: "integrar IA — Claude API + OpenAI en producción",  time: "hace 8 meses"  },
    { hash: "f5a2e67", type: "build",    typeColor: "#6366f1", msg: "construyendo el próximo gran proyecto...",          time: "ahora · HEAD", isHead: true },
  ],
};

// ─── Skills ──────────────────────────────────────────────────────────────────

const skills: SkillsContent = {
  num:         "02.",
  label:       "Tecnologías",
  heading:     "Mi stack técnico",
  extrasLabel: "También con →",
  groups: [
    {
      title:  "Frontend",
      accent: "#60a5fa",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      skills: ["React / Next.js", "JavaScript / TypeScript", "HTML5 / CSS3 / Tailwind", "React Native"],
    },
    {
      title:  "Backend",
      accent: "#34d399",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      skills: ["Node.js / Express", "Python / Django / FastAPI", "PostgreSQL / MySQL / MongoDB", "Redis / APIs REST / GraphQL"],
    },
    {
      title:  "DevOps & Tools",
      accent: "#c084fc",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ),
      skills: ["Docker / CI/CD pipelines", "AWS / GCP / Vercel", "Git / GitHub / Linux", "IA / Claude API / OpenAI"],
    },
  ],
  extras: ["Webpack", "Vite", "Prisma", "Jest", "Cypress", "Figma", "Redux", "Zustand", "Jira", "Swagger"],
};

// ─── Projects ────────────────────────────────────────────────────────────────

const projects: ProjectsContent = {
  num:          "03.",
  label:        "Proyectos",
  heading:      "Lo que he construido",
  githubLink:   "Ver todos los proyectos en GitHub",
  githubHref:   "https://github.com",
  featuredLabel: "Destacado",
  items: [
    {
      title: "E-commerce Platform",
      desc:  "Plataforma de comercio electrónico con carrito, pagos con Stripe, panel de administración y notificaciones en tiempo real.",
      tags:  ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      featured:    false,
      github:      "#",
      demo:        "#",
      accentColor: "#34d399",
      snippet:     null,
    },
    {
      title: "AI Chat Assistant",
      desc:  "Asistente conversacional con IA integrada usando Claude API, historial de conversaciones, soporte multi-idioma y contexto persistente.",
      tags:  ["React", "Python", "Claude API", "FastAPI"],
      featured:    true,
      github:      "#",
      demo:        "#",
      accentColor: "#818cf8",
      snippet: `const msg = await anthropic.messages.create({
  model: "claude-opus-4-6",
  messages: [{ role: "user",
    content: userInput }]
})`,
    },
    {
      title: "Dashboard Analytics",
      desc:  "Panel de analíticas en tiempo real con visualización de datos, reportes exportables y sistema de alertas automatizadas.",
      tags:  ["React", "D3.js", "MongoDB", "WebSockets"],
      featured:    false,
      github:      "#",
      demo:        "#",
      accentColor: "#f59e0b",
      snippet:     null,
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

const contact: ContactContent = {
  num:          "04.",
  label:        "Contacto",
  heading:      "Trabajemos juntos",
  desc:         "¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo? Hablemos.",
  availability: "Disponible para proyectos freelance y oportunidades full-time",
  form: {
    name:    { label: "Nombre",  placeholder: "Tu nombre"                    },
    email:   { label: "Email",   placeholder: "tu@email.com"                 },
    message: { label: "Mensaje", placeholder: "Cuéntame sobre tu proyecto..." },
    submit:    "Enviar mensaje",
    sending:   "Enviando...",
    submitted: "Mensaje enviado",
  },
  contacts: [
    {
      field: "email",
      label: "Email",
      value: "cesar@example.com",
      href:  "mailto:cesar@example.com",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      field: "github",
      label: "GitHub",
      value: "github.com/cesar",
      href:  "https://github.com/cesar",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      field: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/cesar",
      href:  "https://linkedin.com/in/cesar",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ],
};

// ─── Footer ──────────────────────────────────────────────────────────────────

const footer: FooterContent = {
  logo:      { name: "cesar", domain: ".dev", initial: "C" },
  tagline:   "construido con pasión y demasiado café",
  copyright: "© 2026 Cesar. Todos los derechos reservados.",
  navItems: [
    { label: "Sobre mí",  href: "#about"    },
    { label: "Skills",    href: "#skills"   },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto",  href: "#contact"  },
  ],
  socials: [
    {
      label: "GitHub",
      href:  "https://github.com/cesar",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href:  "https://linkedin.com/in/cesar",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ],
};

// ─── Global export ───────────────────────────────────────────────────────────

export const CONTENT = { nav, hero, about, skills, projects, contact, footer };
