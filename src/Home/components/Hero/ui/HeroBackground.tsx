"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroBackgroundProps {
  className?: string;
}

/** =======================
 * Hero Background Component
 * ======================= */
const HeroBackground = ({ className = "" }: HeroBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transformations
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yDots = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      {/* 🔵 Blue Glow Blob (Parallax) */}
      <motion.div
        style={{ y: yGlow }}
        className="
          absolute -top-32 left-1/2 -translate-x-1/2 
          w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] 
          rounded-full bg-blue-500/20 blur-3xl z-10
        "
      />

      {/* 🟣 Dot Grid Pattern (Parallax) */}
      <motion.div
        style={{ y: yDots }}
        className="
          absolute inset-0 
          bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] 
          [background-size:30px_30px] 
          opacity-10 
          z-20
        "
      />

      {/* 🖼️ Optimized Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <picture>
          <source srcSet="/images/hero-bg.webp" type="image/webp" />
          <img
            src="/images/hero-bg.webp"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            aria-hidden="true"
          />
        </picture>
      </div>

      {/* 🌈 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-base-100/80 via-transparent to-base-100/60 z-30" />
    </motion.div>
  );
};

export default HeroBackground;
