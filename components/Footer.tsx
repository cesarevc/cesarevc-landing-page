import { FooterContent } from "../types/types";

type FooterProps = {
  footer: FooterContent;
};

export default function Footer({ footer }: FooterProps) {
  const { logo, tagline, copyright, navItems, socials } = footer;

  return (
    <footer
      className="relative py-10 px-[4%]"
      style={{ borderTop: "1px solid #12122a" }}
    >
      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <a href="#hero" className="flex items-center gap-2 group">
            <span
              className="w-6 h-6 rounded flex items-center justify-center font-mono text-[0.65rem] font-black text-white shrink-0"
              style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}
            >
              {logo.initial}
            </span>
            <span className="font-mono font-bold text-sm">
              <span className="text-[#9090b8] group-hover:text-white transition-colors duration-200">
                {logo.name}
              </span>
              <span
                className="text-transparent"
                style={{
                  background: "linear-gradient(90deg, #6366f1, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                {logo.domain}
              </span>
            </span>
          </a>
          <p
            className="font-mono flex items-center gap-1.5"
            style={{ fontSize: "0.6rem", color: "#202040" }}
          >
            <span style={{ color: "#6366f1" }}>❯</span>
            {tagline}
          </p>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium transition-colors duration-200 hover:text-[#7070a0]"
              style={{ color: "#282845" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Socials + copyright */}
        <div className="flex flex-col items-center sm:items-end gap-2.5">
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:text-[#818cf8]"
                style={{
                  color: "#2a2a50",
                  background: "rgba(18,18,38,0.6)",
                  border: "1px solid #18183a",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p
            className="font-mono"
            style={{ fontSize: "0.6rem", color: "#181830" }}
          >
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
