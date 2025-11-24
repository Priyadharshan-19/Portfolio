"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/section-wrapper";

export default function About() {
  return (
    <SectionWrapper id="about" title="About me">
      <div className="grid gap-8 md:grid-cols-[3fr,2fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-sm sm:text-base text-slate-300"
        >
          <p>
            I&apos;m an enthusiastic and fast‑learning B.E. CSE student who enjoys
            building real‑world projects for fun and for impact.
          </p>
          <p>
            I work with full‑stack development, IoT, and blockchain technologies,
            and I love exploring new tools and ways to connect hardware, data, and
            clean UI.
          </p>
          <p>
            Problem‑solving, experimenting with new ideas, and contributing to
            meaningful projects keep me motivated, especially in startup‑style
            environments.
          </p>
          <p>
            I&apos;m highly adaptable, a clear communicator, and comfortable taking
            projects from sensor level to cloud, dashboards, and smart contracts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-5 text-xs text-slate-300"
        >
          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-slate-400">
            Snapshot
          </p>
          <ul className="space-y-2">
            <li>• B.E. CSE · SNS College of Technology · 2024–Present</li>
            <li>• CGPA: 8.83</li>
            <li>• Full‑Stack · IoT & Embedded Systems · Blockchain (Ganache)</li>
            <li>• Python (Flask), Java, HTML, CSS, DBMS</li>
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}