"use client";

import { motion } from "framer-motion";

/**
 * ✅ AboutQuote Component
 * - Fade-in + slide-up animation
 * - Responsive typography
 * - Accessible via aria-label
 */
const AboutQuote = () => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-24 px-4 text-center max-w-3xl mx-auto"
      aria-label="คติประจำทีม JP Visual & Docs"
    >
      <blockquote className="relative border-l-4 border-primary pl-6 text-base md:text-lg italic text-base-content/80 leading-relaxed">
        {/* Decorative Quote Mark */}
        <span className="absolute -top-6 left-0 text-6xl text-primary/20 select-none">“</span>

        <span className="relative z-10 text-xl md:text-2xl font-semibold">
          ยินดีร่วมงานทุกสาย วงการกฎข้อแรกของเราคือ{" "}
          <span className="text-primary">ความลับของลูกค้า</span>
        </span>
      </blockquote>
    </motion.figure>
  );
};

export default AboutQuote;
