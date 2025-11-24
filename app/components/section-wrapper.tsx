"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * A wrapper component for application sections.
 * It provides responsive padding, centering, and applies a fade-in animation
 * when the section scrolls into view using Framer Motion.
 *
 * @param id - The HTML ID attribute for the section, used for navigation.
 * @param title - The title displayed at the top of the section.
 * @param children - The content of the section.
 */
export default function SectionWrapper({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Framer Motion wrapper for the content, applying a fade-in-up animation on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section Title with responsive font sizing and a custom 'text-gradient' class (assumed defined elsewhere) */}
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold tracking-tight text-gradient">
          {title}
        </h2>
        {/* The main content of the section */}
        {children}
      </motion.div>
    </section>
  );
}