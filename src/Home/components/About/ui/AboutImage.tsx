"use client";

import { motion } from "framer-motion";

/**
 * 🖼️ AboutImage
 *
 * - แสดงลายเซ็นหรือภาพที่สื่อถึงความน่าเชื่อถือของ JP Visual & Docs
 * - รองรับ lazy-load, responsive, animation และ A11y
 */
const AboutImage = () => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="pt-6 text-center"
    >
      <img
        src="/signature.webp"
        alt="ลายเซ็นความน่าเชื่อถือของ JP Visual & Docs"
        className="mx-auto w-32 sm:w-40 md:w-48 opacity-80"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        ลายเซ็นแสดงถึงความน่าเชื่อถือและความเป็นมืออาชีพของทีมงาน
      </figcaption>
    </motion.figure>
  );
};

export default AboutImage;