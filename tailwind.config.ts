import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg: "#0a0a0f",
        "bg-2": "#111118",
        surface: "#16161f",
        "surface-2": "#1e1e2a",
        border: "#2a2a3a",
        accent: "#6366f1",
        "accent-2": "#8b5cf6",
        "accent-3": "#06b6d4",
      },
      animation: {
        bounce2: "bounce2 2s infinite",
        pulse2: "pulse2 2s infinite",
      },
      keyframes: {
        bounce2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(34,197,94,0.4)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 0 6px rgba(34,197,94,0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
