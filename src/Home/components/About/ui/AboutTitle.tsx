// ✅ src/Home/components/About/ui/AboutTitle.tsx — Production-Ready Title Component

"use client";

import { motion } from "framer-motion";

/**
 * ✅ AboutTitle
 *
 * - หัวข้อหลักของเซกชัน About
 * - ใช้ animation เพื่อความน่าสนใจ
 * - ใช้ gradient brand color
 * - รองรับ Responsive Layout และ A11y
 */
const AboutTitle = () => {
  return (
    <motion.h2
      id="about-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-base-content"
      aria-label="หัวข้อ JP Visual & Docs"
    >
      <span className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        JP Visual & Docs
      </span>
    </motion.h2>
  );
};

export default AboutTitle;
