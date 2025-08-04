"use client";

import { motion } from "framer-motion";

interface HeroBackgroundProps {
  className?: string;
}

/**
 * 🎨 HeroBackground
 *
 * - องค์ประกอบภาพพื้นหลังของ Hero section
 * - มี glowing effect, grid pattern และภาพประกอบ background
 * - รองรับ animation ด้วย Framer Motion
 * - Responsive และ web-optimized พร้อม fallback
 * - ไม่มีผลกับ interaction (pointer-events-none)
 */
const HeroBackground = ({ className = "" }: HeroBackgroundProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      {/* 🔵 Blue Glow Blob */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] 
                   sm:w-[50vw] sm:h-[50vw] rounded-full bg-blue-500/20 blur-3xl z-10"
      />

      {/* 🟣 Dot Grid Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] 
                   [background-size:30px_30px] opacity-10 z-20"
      />

      {/* 🖼️ Optimized Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <picture>
          <source srcSet="/images/hero-bg.webp" type="image/webp" />
          <img
            src="/images/hero-bg.webp"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            aria-hidden="true"
          />
        </picture>
      </div>
    </motion.div>
  );
};

export default HeroBackground;
