"use client";

import { useEffect, useState } from "react";
import { HeroContent } from "../types/types";

type HeroProps = {
  hero: HeroContent;
};

export default function Hero({ hero }: HeroProps) {
  const {
    statusPill, greeting, name, titleFull, titleLines,
    bio, ctaPrimary, ctaSecondary, scrollLabel, tags, codeFragments, card,
  } = hero;

  const [typed, setTyped] = useState<[string, string]>(["", ""]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    const t = setTimeout(() => {
      let idx = 0;
      const iv = setInterval(() => {
        idx++;
        const current = titleFull.slice(0, idx);
        const parts = current.split("\n");
        setTyped([parts[0] ?? "", parts[1] ?? ""]);
        if (idx >= titleFull.length) clearInterval(iv);
      }, 48);
      cleanup = () => clearInterval(iv);
    }, 700);
    return () => { clearTimeout(t); cleanup?.(); };
  }, [titleFull]);

  const line1Done  = typed[1] === titleLines[1];
  const activeLine: 0 | 1 = typed[1].length > 0 ? 1 : 0;

  return (
    <section
      id="hero"
      className="min-h-screen grid md:grid-cols-2 items-center px-[4%] pt-28 pb-16 gap-12 relative overflow-hidden"
    >
      {/* ── Background ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid-overlay w-full h-full" />

        {/* Primary glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: "0%", left: "10%", width: 780, height: 780,
            background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 60%)",
            animation: "glowPulse 7s ease-in-out infinite",
          }}
        />
        {/* Secondary glow */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: "-5%", right: "-5%", width: 520, height: 520,
            background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 60%)",
            animation: "glowPulse 9s ease-in-out infinite 3.5s",
          }}
        />

        {/* Floating code fragments */}
        {codeFragments.map((f, i) => (
          <span
            key={i}
            className="absolute font-mono text-[0.68rem] text-[#6366f1] whitespace-nowrap select-none hidden lg:block"
            style={{
              left: `${f.x}%`,
              top: `${f.y}%`,
              opacity: 0.045,
              animation: `float ${f.dur}s ease-in-out infinite ${f.delay}s`,
            }}
          >
            {f.text}
          </span>
        ))}

        {/* Horizontal scanline */}
        <div
          style={{
            position: "absolute",
            left: 0, right: 0, height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.1), rgba(6,182,212,0.08), transparent)",
            animation: "scanH 18s linear infinite 6s",
          }}
        />
      </div>

      {/* ── Content ───────────────────────────────── */}
      <div
        className="relative z-10"
        style={{ animation: "fadeInUp 0.7s ease forwards" }}
      >
        {/* Status pill */}
        <div
          className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full font-mono text-xs"
          style={{
            background: "rgba(34,197,94,0.06)",
            border: "1px solid rgba(34,197,94,0.2)",
            color: "#708090",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block shrink-0"
            style={{ animation: "pulse2 2s infinite", boxShadow: "0 0 7px rgba(34,197,94,0.65)" }}
          />
          <span>
            <span style={{ color: "#34d399" }}>{statusPill.path}</span>
            {" "} on {statusPill.branch} {'>'}
          </span>
        </div>

        {/* Greeting */}
        <p className="font-mono text-sm mb-1.5 tracking-wider" style={{ color: "#38385a" }}>
          <span style={{ color: "#6366f1" }}>{greeting}</span>
        </p>

        {/* Name */}
        <h1
          className="text-7xl md:text-8xl font-extrabold tracking-tight leading-none mb-3"
          style={{
            background: "linear-gradient(135deg, #818cf8 10%, #22d3ee 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 50px rgba(99,102,241,0.22))",
          }}
        >
          {name}
        </h1>

        {/* Typed subtitle */}
        <div
          className="font-extrabold tracking-tight text-[#b0b0cc] mb-7"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, minHeight: "3em" }}
        >
          {titleLines.map((line, i) => (
            <div key={i}>
              {typed[i]}
              {activeLine === i && (
                <span className="cursor-line" />
              )}
              {line1Done && i === 1 && activeLine !== 1 && (
                <span className="cursor-line" />
              )}
            </div>
          ))}
        </div>

        <p className="text-[#5e5e80] text-base max-w-md mb-8 leading-relaxed">
          {bio}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <a href={ctaPrimary.href}   className="btn btn-primary">{ctaPrimary.label}</a>
          <a href={ctaSecondary.href} className="btn btn-ghost">{ctaSecondary.label}</a>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      {/* ── Code Card ─────────────────────────────── */}
      <div
        className="hidden md:flex relative z-10 justify-end"
        style={{ animation: "fadeInUp 0.8s ease 0.35s both" }}
      >
        <div
          className="w-full max-w-[370px] rounded-xl overflow-hidden relative"
          style={{
            background: "#08080e",
            border: "1px solid #1e1e30",
            boxShadow:
              "0 20px 70px rgba(0,0,0,0.75), 0 0 80px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          {/* Top shimmer line */}
          <div
            className="absolute top-0 left-10 right-10 h-px pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.55), rgba(6,182,212,0.35), transparent)",
            }}
          />

          {/* Window chrome */}
          <div
            className="flex items-center gap-1.5 px-4 py-3 border-b"
            style={{ borderColor: "#141425", background: "#050508" }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: "#ef4444", boxShadow: "0 0 6px rgba(239,68,68,0.4)" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#f59e0b", boxShadow: "0 0 6px rgba(245,158,11,0.4)" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 6px rgba(34,197,94,0.4)" }} />
            <span className="font-mono text-[0.68rem] ml-3" style={{ color: "#30305a" }}>{card.filename}</span>
            <span className="ml-auto font-mono text-[0.6rem] px-2 py-0.5 rounded" style={{ background: "rgba(99,102,241,0.12)", color: "#6366f1" }}>TS</span>
          </div>

          {/* Code with line numbers */}
          <div className="flex overflow-auto">
            {/* Line numbers */}
            <div
              className="px-3 py-5 text-right select-none font-mono text-xs leading-7 shrink-0"
              style={{ color: "#252540", borderRight: "1px solid #12121e", minWidth: "2.5rem" }}
            >
              {[1,2,3,4,5,6,7,8,9,10].map((n) => <div key={n}>{n}</div>)}
            </div>

            {/* Code */}
            <pre className="px-5 py-5 font-mono text-sm leading-7 flex-1 m-0">
              <code>
                <span className="c-keyword">const </span>
                <span className="c-var">{card.varName}</span>
                <span className="c-punct"> = {"{"}</span>{"\n"}
                {"  "}<span className="c-prop">role</span><span className="c-punct">: </span><span className="c-string">&quot;{card.role}&quot;</span><span className="c-punct">,</span>{"\n"}
                {"  "}<span className="c-prop">focus</span><span className="c-punct">: </span><span className="c-string">&quot;{card.focus}&quot;</span><span className="c-punct">,</span>{"\n"}
                {"  "}<span className="c-prop">stack</span><span className="c-punct">: [</span>{"\n"}
                {"    "}<span className="c-string">&quot;{card.stack[0]}&quot;</span><span className="c-punct">, </span><span className="c-string">&quot;{card.stack[1]}&quot;</span><span className="c-punct">,</span>{"\n"}
                {"    "}<span className="c-string">&quot;{card.stack[2]}&quot;</span><span className="c-punct">, </span><span className="c-string">&quot;{card.stack[3]}&quot;</span>{"\n"}
                {"  "}<span className="c-punct">],</span>{"\n"}
                {"  "}<span className="c-prop">available</span><span className="c-punct">: </span><span className="c-keyword">true</span><span className="c-punct">,</span>{"\n"}
                {"  "}<span className="c-prop">passion</span><span className="c-punct">: </span><span className="c-string">&quot;{card.passion}&quot;</span>{"\n"}
                <span className="c-punct">{"}"}</span><span className="c-punct">;</span>
              </code>
            </pre>
          </div>

          {/* Status bar */}
          <div
            className="flex items-center justify-between px-4 py-2 font-mono border-t"
            style={{
              fontSize: "0.62rem",
              borderColor: "#141425",
              background: "#050508",
              color: "#252540",
            }}
          >
            <div className="flex items-center gap-3">
              <span style={{ color: "#6366f1" }}>TypeScript</span>
              <span>UTF-8</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Ln 10, Col 2</span>
              <span className="flex items-center gap-1.5" style={{ color: "#22c55e" }}>
                <span
                  className="w-1 h-1 rounded-full bg-green-500 inline-block"
                  style={{ boxShadow: "0 0 4px rgba(34,197,94,0.7)" }}
                />
                {card.errors}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        aria-label="Scroll"
        style={{ animation: "bounce2 2.5s infinite" }}
      >
        <span
          className="font-mono text-[0.58rem] tracking-widest uppercase"
          style={{ color: "#2a2a48" }}
        >
          {scrollLabel}
        </span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2a2a48" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
