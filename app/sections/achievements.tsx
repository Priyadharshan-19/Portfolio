"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/section-wrapper";

const items = [
  {
    title: "Built 4+ real-world projects by 2nd year",
    detail:
      "Delivered multiple end-to-end solutions across AI, IoT, and blockchain with working prototypes and real data."
  },
  {
    title: "Active GitHub contributor",
    detail:
      "Frequently contributes to project repositories, improving code quality, documentation, and experimentation."
  },
  {
    title: "Sensor-to-Cloud Implementations",
    detail:
      "Implemented real-time data streams from IoT sensors to cloud platforms for monitoring and alerting."
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    detail:
      "Earned the industry-recognized Microsoft AI certification, demonstrating strong knowledge of machine learning, computer vision, NLP, responsible AI, and cloud-based AI workflows on Azure."
  }
];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" title="Achievements & highlights">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="glass rounded-2xl p-5 text-sm text-slate-300"
          >
            <h3 className="mb-1 text-sm font-semibold text-slate-100">
              {a.title}
            </h3>
            <p className="text-xs text-slate-300">{a.detail}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
