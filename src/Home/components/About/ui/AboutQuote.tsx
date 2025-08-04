// ✅ src/Home/components/About/ui/AboutQuote.tsx — Production-Ready Quote Component

"use client";

import { motion } from "framer-motion";

/**
 * ✅ AboutQuote
 *
 * - แสดงข้อความไฮไลต์หรือแนวคิดหลักจากทีมงาน JP Visual & Docs
 * - มี animation แบบ smooth เมื่อ scroll เข้าสู่ viewport
 * - รองรับ responsive และ A11y
 */
const AboutQuote = () => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-24 px-4 text-center max-w-3xl mx-auto"
    >
      <blockquote
        className="relative border-l-4 border-primary pl-6 text-base md:text-lg italic 
                   text-base-content/70 leading-relaxed"
        aria-label="คติประจำทีม JP Visual & Docs"
      >
        <span className="text-xl md:text-2xl text-base-content/80 font-medium">
          “ยินดีร่วมงานทุกสาย วงการกฎข้อแรกของเราคือ ความลับของลูกค้า”
        </span>
      </blockquote>
    </motion.figure>
  );
};

export default AboutQuote;
