export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-bg/90 py-6 text-center text-[11px] text-slate-500">
      <p>
        © {new Date().getFullYear()} Priya Dharshan · Built with Next.js, Tailwind,
        Framer Motion, GSAP, and Lenis.
      </p>
    </footer>
  );
}