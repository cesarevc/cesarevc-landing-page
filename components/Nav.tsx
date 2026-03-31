"use client";

import { useState, useEffect } from "react";
import { NavContent } from "../types/types";

type NavProps = {
  nav: NavContent;
};

export default function Nav({ nav }: NavProps) {
  const { title, links, cta } = nav;
  const { name, domain, initial } = title;

  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...links.map((l) => l.id)];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-35% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [links]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center px-[4%] py-4 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(8,8,14,0.88)] backdrop-blur-2xl border-b border-[#18182a]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#hero" className="mr-auto group flex items-center gap-2.5">
        <span
          className="w-7 h-7 rounded-md flex items-center justify-center font-mono text-xs font-black text-white shrink-0"
          style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}
        >
          {initial}
        </span>
        <span className="font-mono font-bold text-base">
          <span className="text-[#e8e8f0] group-hover:text-white transition-colors duration-200">
            {name}
          </span>
          <span
            className="text-transparent"
            style={{
              background: "linear-gradient(90deg, #6366f1, #06b6d4)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            {domain}
          </span>
        </span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex list-none gap-1 mr-6">
        {links.map((l, i) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 block rounded-md ${
                activeSection === l.id
                  ? "text-[#e8e8f0]"
                  : "text-[#7070a0] hover:text-[#b8b8d8]"
              }`}
            >
              <span
                className="absolute -bottom-0 left-4 right-4 h-px rounded-full transition-all duration-300"
                style={{
                  background:
                    activeSection === l.id
                      ? "linear-gradient(90deg, #6366f1, #06b6d4)"
                      : "transparent",
                  boxShadow:
                    activeSection === l.id
                      ? "0 0 8px rgba(99,102,241,0.7)"
                      : "none",
                  opacity: activeSection === l.id ? 1 : 0,
                }}
              />
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="hidden md:inline-flex btn btn-primary text-sm gap-1.5"
      >
        <span className="font-mono text-[#a5b4fc] text-xs">{cta}</span>
      </a>

      {/* Burger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className={`block w-5 h-0.5 bg-[#e8e8f0] rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-[#e8e8f0] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-[#e8e8f0] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-[61px] left-0 right-0 border-b border-[#18182a] px-[4%] py-5 flex flex-col gap-0 z-50"
          style={{ background: "#08080e", backdropFilter: "blur(20px)" }}
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`py-3.5 text-sm font-medium flex items-center gap-3 border-b border-[#14142a] last:border-0 transition-colors ${
                activeSection === l.id ? "text-accent" : "text-[#7070a0]"
              }`}
            >
              <span className="font-mono text-[#2a2a48] text-xs">0{i + 1}</span>
              {l.label}
              {activeSection === l.id && (
                <span
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-accent"
                  style={{ boxShadow: "0 0 6px rgba(99,102,241,0.8)" }}
                />
              )}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
