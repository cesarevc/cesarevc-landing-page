"use client";

import { useEffect, useRef } from "react";
import { ProjectsContent } from "../types/types";

type ProjectsProps = {
  projects: ProjectsContent;
};

const IconGitHub = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const IconExternal = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects({ projects }: ProjectsProps) {
  const { num, label, heading, githubLink, githubHref, featuredLabel, items } = projects;

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    el.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-[4%] relative" ref={sectionRef}>
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto">
        <p className="section-label reveal">
          <span style={{ color: "#2a2a58" }}>{num}</span> {label}
        </p>
        <h2 className="section-title reveal delay-100">{heading}</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((p, i) => (
            <div
              key={p.title}
              className={`reveal delay-${(i + 1) * 100} relative overflow-hidden rounded-xl flex flex-col group`}
              style={{
                background: p.featured ? "#0d0d18" : "#0a0a14",
                border: p.featured
                  ? `1px solid ${p.accentColor}28`
                  : "1px solid #1a1a2a",
                transition: "transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
                boxShadow: p.featured
                  ? `0 0 40px ${p.accentColor}08`
                  : "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = `${p.accentColor}50`;
                el.style.boxShadow = `0 12px 40px rgba(0,0,0,0.5), 0 0 50px ${p.accentColor}12`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = p.featured ? `${p.accentColor}28` : "#1a1a2a";
                el.style.boxShadow = p.featured ? `0 0 40px ${p.accentColor}08` : "none";
              }}
            >
              {/* Featured top bar */}
              {p.featured && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${p.accentColor}70, transparent)`,
                    boxShadow: `0 0 10px ${p.accentColor}40`,
                  }}
                />
              )}

              {/* Code snippet background decoration */}
              {p.snippet && (
                <div
                  className="absolute inset-0 font-mono pointer-events-none overflow-hidden select-none"
                  style={{
                    fontSize: "0.6rem",
                    lineHeight: 1.6,
                    padding: "0.75rem 1rem",
                    color: p.accentColor,
                    opacity: 0.04,
                    paddingTop: "3.5rem",
                    whiteSpace: "pre",
                  }}
                >
                  {p.snippet}
                </div>
              )}

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1 relative z-10">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  {/* Icon circle */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{
                      background: `${p.accentColor}10`,
                      border: `1px solid ${p.accentColor}20`,
                    }}
                  >
                    {p.title.includes("E-com") ? "🛒" : p.title.includes("AI") ? "🤖" : "📊"}
                  </div>

                  {/* Links + badge */}
                  <div className="flex items-center gap-1.5">
                    {p.featured && (
                      <span
                        className="text-[0.6rem] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mr-1"
                        style={{
                          background: `${p.accentColor}15`,
                          color: p.accentColor,
                          border: `1px solid ${p.accentColor}30`,
                        }}
                      >
                        {featuredLabel}
                      </span>
                    )}
                    <a
                      href={p.github}
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150"
                      style={{ color: "#404060", background: "#0d0d1a" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = p.accentColor;
                        (e.currentTarget as HTMLElement).style.background = `${p.accentColor}15`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#404060";
                        (e.currentTarget as HTMLElement).style.background = "#0d0d1a";
                      }}
                    >
                      <IconGitHub />
                    </a>
                    <a
                      href={p.demo}
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150"
                      style={{ color: "#404060", background: "#0d0d1a" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = p.accentColor;
                        (e.currentTarget as HTMLElement).style.background = `${p.accentColor}15`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#404060";
                        (e.currentTarget as HTMLElement).style.background = "#0d0d1a";
                      }}
                    >
                      <IconExternal />
                    </a>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#c0c0e0] mb-2 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#4a4a70" }}>
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="tag tag-sm">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects link */}
        <div className="reveal delay-400 flex justify-center mt-12">
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost gap-3 font-mono text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            {githubLink}
          </a>
        </div>
      </div>
    </section>
  );
}
