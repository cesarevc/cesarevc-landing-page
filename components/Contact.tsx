"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { ContactContent } from "../types/types";

type ContactProps = {
  contact: ContactContent;
};

export default function Contact({ contact }: ContactProps) {
  const { num, label, heading, desc, availability, form, contacts } = contact;

  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);
  const [focused,   setFocused]   = useState<string | null>(null);
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3500);
    }, 1200);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "rgba(8,8,18,0.8)",
    border: `1px solid ${focused === field ? "#6366f1" : "#1e1e30"}`,
    borderRadius: 8,
    padding: "0.75rem 1rem",
    color: "#e8e8f0",
    fontSize: "0.875rem",
    fontFamily: "var(--font-inter)",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    boxShadow: focused === field
      ? "0 0 0 3px rgba(99,102,241,0.12), 0 0 24px rgba(99,102,241,0.06)"
      : "none",
  });

  return (
    <section
      id="contact"
      className="py-24 px-[4%] relative"
      style={{ background: "#07070d" }}
      ref={sectionRef}
    >
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto">
        <p className="section-label reveal">
          <span style={{ color: "#2a2a58" }}>{num}</span> {label}
        </p>
        <h2 className="section-title reveal delay-100">{heading}</h2>
        <p
          className="text-base -mt-8 mb-12 max-w-lg reveal delay-200"
          style={{ color: "#404068" }}
        >
          {desc}
        </p>

        <div className="grid md:grid-cols-[1fr_0.75fr] gap-10 items-start">
          {/* ── Form ──────────────────────────────── */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 reveal delay-200">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.68rem] uppercase tracking-widest" style={{ color: "#38385a" }}>
                {form.name.label}
              </label>
              <input
                type="text"
                placeholder={form.name.placeholder}
                required
                style={inputStyle("name")}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.68rem] uppercase tracking-widest" style={{ color: "#38385a" }}>
                {form.email.label}
              </label>
              <input
                type="email"
                placeholder={form.email.placeholder}
                required
                style={inputStyle("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.68rem] uppercase tracking-widest" style={{ color: "#38385a" }}>
                {form.message.label}
              </label>
              <textarea
                rows={5}
                placeholder={form.message.placeholder}
                required
                style={{ ...inputStyle("message"), resize: "vertical" }}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <button
              type="submit"
              disabled={sending || submitted}
              className="btn w-full"
              style={{
                background: submitted
                  ? "#16a34a"
                  : sending
                  ? "rgba(99,102,241,0.65)"
                  : "#6366f1",
                color: "white",
                border: "none",
                cursor: sending || submitted ? "default" : "pointer",
                transition: "background 0.3s ease",
                fontSize: "0.875rem",
              }}
            >
              {submitted ? (
                <span className="flex items-center justify-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {form.submitted}
                </span>
              ) : sending ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white inline-block animate-spin" />
                  {form.sending}
                </span>
              ) : (
                form.submit
              )}
            </button>
          </form>

          {/* ── Info card ─────────────────────────── */}
          <div
            className="rounded-xl p-7 flex flex-col gap-5 reveal-right delay-300"
            style={{
              background: "#0d0d18",
              border: "1px solid #1e1e30",
            }}
          >
            {contacts.map((item) => (
              <div key={item.field} className="flex gap-4 items-start">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: "rgba(99,102,241,0.09)",
                    color: "#818cf8",
                    border: "1px solid rgba(99,102,241,0.15)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="font-mono text-[0.62rem] uppercase tracking-widest mb-1"
                    style={{ color: "#282848" }}
                  >
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.field !== "email" ? "_blank" : undefined}
                    rel={item.field !== "email" ? "noopener noreferrer" : undefined}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#9090c0" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#818cf8")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9090c0")}
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}

            {/* Availability */}
            <div
              className="flex items-center gap-3 pt-5 border-t"
              style={{ borderColor: "#12122a" }}
            >
              <span
                className="w-2 h-2 rounded-full bg-green-400 shrink-0"
                style={{ animation: "pulse2 2s infinite", boxShadow: "0 0 7px rgba(34,197,94,0.6)" }}
              />
              <span className="text-xs" style={{ color: "#2a6040" }}>
                {availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
