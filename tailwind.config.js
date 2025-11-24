// priya-portfolio/tailwind.config.js (RENAME and use this content)

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    // Use generic file paths to cover all bases
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#020617",
        "bg-alt": "#030712",
        accent: "#60A5FA", 
        neon: "#38BDF8" 
      },
      boxShadow: {
        glow: "0 0 40px rgba(56,189,248,0.35)"
      }
    }
  },
  plugins: [],
};