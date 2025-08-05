"use client";

import { motion } from "framer-motion";

/**
 * 📄 AboutDescription
 *
 * - แสดงคำอธิบายธุรกิจ JP Visual & Docs
 * - รองรับ animation, semantic tag, A11y
 */
const AboutDescription = () => {
  return (
    <motion.section
      aria-labelledby="about-description"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300"
    >
      {/* ✅ Headline */}
      <blockquote
        id="about-description"
        className="text-lg md:text-xl font-medium leading-relaxed text-base-content/80"
      >
        “ทำธุรกิจสีเทาให้มีมาตรฐานระดับมืออาชีพ”
      </blockquote>

      {/* ✅ Brand Label */}
      <p className="leading-relaxed text-base-content/60 font-semibold uppercase tracking-wide">
        JP - VISUAL & DOCS
      </p>

      {/* ✅ Content */}
      <p className="leading-relaxed text-base-content/60">
        รวมตัวจริงของทีมงานเจ้าป่า เชี่ยวชาญ Application Mobile ทำธุรกิจสีเทาให้ดูมืออาชีพ มีมาตรฐาน
        น่าเชื่อถือ กล้าจ้างงาน และรับงานได้อย่างปลอดภัย
      </p>

      <p className="leading-relaxed text-base-content/60">
        แม้ธุรกิจยังผิดกฎหมาย แต่เราทำให้มันดูดีได้ในแบบที่ Google หรือ YouTube ไม่เคยสอน —
        หาจากที่อื่นไม่ได้แน่นอน และบางอย่างก็เปิดเผยทั้งหมดไม่ได้
        การันตีด้วยประสบการณ์ของทีมเจ้าป่าที่อยู่ในวงการมากว่า 8 ปี
      </p>

      {/* ✅ Personal Statement */}
      <p className="text-sm italic leading-snug text-base-content/50">
        ผมไม่ใช่คนเก่ง แต่ทีมงานผมเก่งแน่นอน
      </p>
    </motion.section>
  );
};

export default AboutDescription;