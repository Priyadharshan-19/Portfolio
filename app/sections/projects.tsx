"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/section-wrapper";

const projects = [
  {
    title: "VisionGuard-AI",
    description:
      "AI-based adversarial attack detection with explainability overlays, integrated with a local LLM for real-time monitoring and high-accuracy alerts.",
    tech: ["Python (Flask)", "PyTorch", "Computer Vision", "Local LLM"],
    github: "https://github.com/Priyadharshan-19/VisionGuard-AI",
    demo: "https://www.linkedin.com/posts/priya-dharshan-52b42132b_artificialintelligence-machinelearning-computervision-activity-7395857412571750400-Lr2F"
  },
  {
    title: "Smart Canteen Token Queue System",
    description:
      "Automation solution for canteen queue management using sensors, cloud triggers, and n8n workflows to optimize waiting time.",
    tech: ["IoT Sensors", "Cloud Triggers", "n8n Automation"],
    github: "https://github.com/Priyadharshan-19/Smart-Canteen-Token-Queue-System",
    demo: "https://www.linkedin.com/posts/priya-dharshan-52b42132b_flask-python-fullstackdevelopment-activity-7389336210374176768-MG0c"
  },
  {
    title: "Flood Detection System",
    description:
      "IoT-based early-warning system with real-time water-level monitoring and automatic alert generation to improve safety.",
    tech: ["IoT & Embedded", "Cloud", "Real-time Data Streams"],
    github: "https://github.com/Priyadharshan-19/flood-detection-system",
    demo: "https://www.linkedin.com/posts/priya-dharshan-52b42132b_iot-floodwarningsystem-esp32-activity-7390056966741684224-kjRu"
  },
  {
    title: "Blockchain-Based Blue Carbon Registry",
    description:
      "Decentralized carbon tracking system on Ethereum (Ganache) that improves transparency and secures environmental data storage.",
    tech: ["Ganache", "Smart Contracts (basics)", "Blockchain"],
    github: "https://github.com/Priyadharshan-19/Blockchain-Based-Blue-Carbon-Registry",
    demo: "https://www.linkedin.com/posts/priya-dharshan-52b42132b_iot-blockchain-esp32-activity-7376566253613715456-tNfW"
  }
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900/70 via-slate-950/80 to-slate-950 border border-slate-800/80"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-transparent to-neon/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-5">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-slate-100">
                  {p.title}
                </h3>

                <p className="mb-3 text-xs text-slate-300">{p.description}</p>

                {/* Tech Stack */}
                <div className="mb-3 flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-900/70 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons Row */}
              <div className="mt-2 flex gap-3 text-xs">
                {/* GitHub Button (Adjusted padding to match the new demo button) */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-600/80 bg-slate-950/60 px-5 py-2 font-medium text-slate-200 transition hover:border-neon hover:text-neon"
                >
                  GitHub
                </a>

                {/* UPDATED: Project Showcase Button with Demo Button Style */}
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-accent to-neon px-5 py-2 font-medium text-slate-950 shadow-glow transition hover:-translate-y-0.5"
                >
                  Project Showcase
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}