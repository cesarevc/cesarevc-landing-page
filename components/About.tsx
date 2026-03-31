"use client";

import { useEffect, useRef, useState } from "react";
import { AboutContent } from "../types/types";

type AboutProps = {
  about: AboutContent;
};

export default function About({ about }: AboutProps) {
  const { num, label, heading, headingAccent, bio1, bio2, stats, terminalCmd, commits } = about;

  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          el.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((item) => {
            item.classList.add("visible");
          });
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-[4%] relative" ref={sectionRef}>
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto">
        <p className="section-label reveal">
          <span style={{ color: "#2a2a58" }}>{num}</span> {label}
        </p>
        <h2 className="section-title reveal delay-100">
          {heading}
          <br />
          <span className="gradient-text">{headingAccent}</span>
        </h2>

        <div className="grid md:grid-cols-[1fr_0.7fr] gap-14 items-start">
          {/* Text content */}
          <div className="reveal delay-200">
            <p className="text-[#5e5e80] text-base leading-relaxed mb-5">{bio1}</p>
            <p className="text-[#5e5e80] text-base leading-relaxed mb-10">{bio2}</p>

            {/* Stats */}
            <div
              className="flex gap-10 pt-8 border-t"
              style={{ borderColor: "#14142a" }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity 0.5s ease ${0.35 + i * 0.12}s, transform 0.5s ease ${0.35 + i * 0.12}s`,
                  }}
                >
                  <span
                    className="block font-extrabold gradient-text leading-none mb-1.5"
                    style={{ fontSize: "2.4rem" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-xs" style={{ color: "#404068" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Git log visualization */}
          <div className="reveal-right delay-300">
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "#06060c",
                border: "1px solid #181828",
                boxShadow:
                  "0 12px 50px rgba(0,0,0,0.6), 0 0 50px rgba(99,102,241,0.05)",
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center gap-1.5 px-4 py-3 border-b"
                style={{ borderColor: "#141425", background: "#040408" }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef444460" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b60" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e60" }} />
                <span
                  className="font-mono text-[0.65rem] ml-2.5"
                  style={{ color: "#282848" }}
                >
                  {terminalCmd}
                </span>
              </div>

              {/* Commits */}
              <div className="px-4 py-3 space-y-0 font-mono text-xs">
                {commits.map((c, i) => (
                  <div
                    key={c.hash}
                    className="flex items-stretch gap-3 py-2.5 group"
                    style={{
                      borderBottom: i < commits.length - 1 ? "1px solid rgba(20,20,38,0.8)" : "none",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateX(0)" : "translateX(-10px)",
                      transition: `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s`,
                    }}
                  >
                    {/* Graph column */}
                    <div className="flex flex-col items-center shrink-0" style={{ width: 14 }}>
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0 mt-1"
                        style={{
                          background: c.typeColor,
                          boxShadow: `0 0 7px ${c.typeColor}90`,
                        }}
                      />
                      {i < commits.length - 1 && (
                        <div
                          className="w-px flex-1 mt-1"
                          style={{ background: "rgba(99,102,241,0.15)" }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span
                          className="text-[0.6rem] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider"
                          style={{
                            background: `${c.typeColor}14`,
                            color: c.typeColor,
                            border: `1px solid ${c.typeColor}28`,
                          }}
                        >
                          {c.type}
                        </span>
                        <span style={{ color: "#252548" }}>{c.hash}</span>
                        {c.isHead && (
                          <span
                            className="text-[0.58rem] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider"
                            style={{
                              background: "rgba(99,102,241,0.12)",
                              color: "#818cf8",
                              border: "1px solid rgba(99,102,241,0.25)",
                            }}
                          >
                            HEAD
                          </span>
                        )}
                      </div>
                      <p
                        className="text-[0.72rem] leading-snug transition-colors duration-200 group-hover:text-[#c0c0e0]"
                        style={{ color: "#7070a0" }}
                      >
                        {c.msg}
                      </p>
                      <span className="text-[0.6rem]" style={{ color: "#252548" }}>
                        {c.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prompt */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-t"
                style={{ borderColor: "#141425" }}
              >
                <span style={{ color: "#6366f1", fontSize: "0.75rem" }}>❯</span>
                <span className="font-mono text-[0.65rem]" style={{ color: "#282848" }}>
                  _<span className="cursor-line" style={{ height: "0.65em", width: "1px" }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
