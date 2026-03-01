import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B5ED7",
          light: "#3B82F6",
          dark: "#0A4DB8",
          hover: "#083A8F",
          50: "#EFF6FF",
        },
        secondary: {
          DEFAULT: "#1e3a5f",
          light: "#2d5986",
          dark: "#0f2440",
          hover: "#0a1a2e",
        },
        accent: {
          DEFAULT: "#0d9488",
          light: "#14b8a6",
          dark: "#0f766e",
        },
        neutral: {
          DEFAULT: "#6b7280",
          light: "#d1d5db",
          dark: "#374151",
          background: "#f8fafc",
          surface: "#ffffff",
          text: "#1e293b",
          "text-light": "#4B5563",
          border: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "heading-1": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-2": ["2.25rem", { lineHeight: "1.3", fontWeight: "700" }],
        "heading-3": ["1.875rem", { lineHeight: "1.4", fontWeight: "600" }],
        "heading-4": ["1.5rem", { lineHeight: "1.5", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        section: "5rem",
        "section-sm": "3rem",
        container: "1.5rem",
      },
      backgroundImage: {
        "gradient-icon":
          "linear-gradient(to bottom right, #E0F2FE, #BAE6FD)",
      },
    },
  },
  plugins: [],
};

export default config;
