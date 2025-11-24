"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const nav = [
  "hero",
  "about",
  "skills",
  "projects",
  "achievements",
  "gallery",
  "learning",
  "resume",
  "contact",
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-30"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-neon shadow-glow" />
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-slate-300">
            Priya Dharshan
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-4 rounded-full bg-slate-900/70 px-5 py-2 text-[11px] text-slate-300 backdrop-blur">
          {nav.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="transition-colors hover:text-neon"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
