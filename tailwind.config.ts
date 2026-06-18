import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 24px 90px rgba(0, 0, 0, 0.45)",
        soft: "0 18px 60px rgba(0, 0, 0, 0.28)",
      },
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        coal: "rgb(var(--color-coal) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        elevated: "rgb(var(--color-elevated) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        brand: {
          red: "rgb(var(--color-brand-red) / <alpha-value>)",
          redDark: "rgb(var(--color-brand-red-dark) / <alpha-value>)",
        },
        monexity: {
          green: "rgb(var(--color-monexity-green) / <alpha-value>)",
          blue: "rgb(var(--color-monexity-blue) / <alpha-value>)",
        },
        whatsapp: "rgb(var(--color-whatsapp) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
