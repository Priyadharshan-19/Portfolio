"use client";

import { motion } from "framer-motion";
// ❌ REMOVED: import ParticleBackground from "../components/ParticleBackground"; // REMOVE THIS IMPORT

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* ❌ REMOVED: <ParticleBackground /> 
          The particles are fixed globally in layout.tsx at z-index -2.
      */}
      
      {/* ✅ Z-INDEX FIX: Changed -z-10 to -z-[1] (or -z-1)
          This layer is now at z-index -1, sitting above the particles (z-index -2).
      */}
      <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),#020617)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-28 pb-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1"
        >
          {/* ... Your content here (tag, name, description, buttons) ... */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
            Full‑Stack · IoT · Blockchain
          </div>
          
          <div className="space-y-4">
            {/* ... Name and Title ... */}
            <div className="reveal-line">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              >
                <span className="block text-slate-300">Hi, I&apos;m</span>
                <span className="block text-gradient">Priyadharshan&nbsp;M</span>
              </motion.h1>
            </div>
            {/* ... Description and Buttons ... */}
            <div className="reveal-line">
              <motion.p
                initial={{ y: 32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
                className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-slate-400"
              >
                Full‑Stack · IoT & Blockchain Developer
              </motion.p>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="max-w-xl text-sm sm:text-base text-slate-300"
            >
              Enthusiastic B.E. CSE student who loves building real‑world projects in
              full‑stack, IoT, and blockchain – from sensor data pipelines to
              decentralized systems.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {/* ... Buttons ... */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent via-neon to-accent px-6 py-2.5 text-sm font-medium text-slate-950 shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/Priya_Dharshan_Tech_Resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-950/60 px-6 py-2.5 text-sm font-medium text-slate-200 backdrop-blur hover:border-neon hover:text-neon"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center"
        >
          {/* ... Contact Card ... */}
          <div className="relative h-64 w-64 glass rounded-3xl">
            <div className="relative z-10 flex h-full flex-col justify-between px-6 py-6 text-xs text-slate-300">
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Education
                </p>
                <p>B.E. CSE · SNS College of Technology · CGPA 8.83</p>
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Current focus
                </p>
                <p>Full‑Stack apps · IoT systems · Blockchain & smart contracts</p>
              </div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Fast‑learning & adaptable</span>
                <span>Startup‑ready mindset</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}