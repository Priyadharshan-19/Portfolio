"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/section-wrapper";

const skills = [
  {
    category: "Programming",
    items: ["Python (Flask)", "Java", "HTML", "CSS", "DBMS"]
  },
  {
    category: "Tools & Platforms",
    items: ["IoT & Embedded Systems", "Ganache (Blockchain)", "n8n", "FlutterFlow"]
  },
  {
    category: "Domains",
    items: [
      "Full‑Stack Development",
      "IoT data pipelines",
      "Blockchain & Smart Contracts (basics)",
      "UI/UX Designing"
    ]
  }
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((s, i) => (
          <motion.div
            key={s.category}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="group glass rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold">{s.category}</h3>
              <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-accent to-neon opacity-80 group-hover:opacity-100" />
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between rounded-md bg-slate-900/50 px-2 py-1.5 transition-colors hover:bg-slate-900/80"
                >
                  <span>{item}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-neon/70" />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}