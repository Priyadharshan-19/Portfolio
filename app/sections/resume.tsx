"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/section-wrapper";

export default function Resume() {
  return (
    <SectionWrapper id="resume" title="Resume">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="glass flex flex-col gap-4 rounded-2xl p-6 text-sm text-slate-300"
      >
        <p>
          Download my technical resume below.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/Priya_Dharshan_Tech_Resume.pdf"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent via-neon to-accent px-6 py-2 text-sm font-medium text-slate-950 shadow-glow"
          >
            Download tech resume
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}