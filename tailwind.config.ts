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
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          dark: "#1d4ed8",
          hover: "#1e40af",
        },
        secondary: {
          DEFAULT: "#7c3aed",
          light: "#8b5cf6",
          dark: "#6d28d9",
          hover: "#5b21b6",
        },
        neutral: {
          DEFAULT: "#6b7280",
          light: "#9ca3af",
          dark: "#374151",
          background: "#f9fafb",
          surface: "#ffffff",
          text: "#111827",
          "text-light": "#6b7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
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
    },
  },
  plugins: [],
};

export default config;
