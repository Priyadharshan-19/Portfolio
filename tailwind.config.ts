// priya-portfolio/tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  // FIX: Expanding glob patterns to include all JS/TS extensions 
  // to ensure Tailwind finds class usage and generates the CSS.
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#020617",
        "bg-alt": "#030712",
        accent: "#60A5FA", // Blue-like color
        neon: "#38BDF8"   // Cyan/Sky-blue color
      },
      boxShadow: {
        glow: "0 0 40px rgba(56,189,248,0.35)"
      }
    }
  },
  plugins: []
};

export default config;