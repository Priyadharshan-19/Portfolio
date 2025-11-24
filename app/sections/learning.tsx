"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/section-wrapper";

const list = [
  "Generative AI & advanced ML for creative apps",
  "Stock market technology and algorithmic trading",
  "Edge computing with smart IoT data workflows"
];

export default function Learning() {
  return (
    <SectionWrapper id="learning" title="What I’m learning now">
      <motion.ul
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="glass space-y-2 rounded-2xl p-5 text-sm text-slate-300"
      >
        {list.map((item) => (
          <li key={item} className="flex items-center justify-between">
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </li>
        ))}
      </motion.ul>
    </SectionWrapper>
  );
}