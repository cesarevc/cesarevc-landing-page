"use client";

import { useEffect, useRef } from "react";
import { SkillsContent } from "../types/types";

type SkillsProps = {
  skills: SkillsContent;
};

export default function Skills({ skills }: SkillsProps) {
  const { num, label, heading, extrasLabel, groups, extras } = skills;

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-24 px-[4%] relative"
      style={{ background: "#07070d" }}
      ref={sectionRef}
    >
      <div className="divider-glow absolute top-0 left-0 right-0" />

      {/* Subtle dot grid bg */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto relative">
        <p className="section-label reveal">
          <span style={{ color: "#2a2a58" }}>{num}</span> {label}
        </p>
        <h2 className="section-title reveal delay-100">{heading}</h2>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className={`reveal delay-${(i + 1) * 100} relative overflow-hidden rounded-xl p-6 group cursor-default`}
              style={{
                background: "#0d0d18",
                border: "1px solid #1e1e30",
                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${g.accent}35`;
                el.style.boxShadow = `0 8px 40px rgba(0,0,0,0.5), 0 0 50px ${g.accent}10`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#1e1e30";
                el.style.boxShadow = "none";
              }}
            >
              {/* Corner glow on hover */}
              <div
                className="absolute top-0 right-0 w-28 h-28 pointer-events-none opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 100% 0%, ${g.accent}18, transparent 70%)`,
                  transition: "opacity 0.3s ease",
                }}
              />

              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: `${g.accent}12`,
                    color: g.accent,
                    border: `1px solid ${g.accent}22`,
                  }}
                >
                  {g.icon}
                </div>
                <h3
                  className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                  style={{ color: g.accent }}
                >
                  {g.title}
                </h3>
              </div>

              {/* Skill list */}
              <ul className="space-y-3.5">
                {g.skills.map((s) => (
                  <li key={s} className="flex items-center gap-3 group/item">
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{
                        background: g.accent,
                        boxShadow: `0 0 5px ${g.accent}`,
                        opacity: 0.7,
                      }}
                    />
                    <span
                      className="text-sm font-mono transition-colors duration-200 group-hover/item:text-[#c0c0e0]"
                      style={{ color: "#6060a0" }}
                    >
                      {s}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${g.accent}40, transparent)`,
                  transition: "opacity 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>

        {/* Also worked with */}
        <div className="reveal delay-400 pt-2">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-4" style={{ color: "#282848" }}>
            {extrasLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {extras.map((t) => (
              <span key={t} className="tag tag-sm">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
