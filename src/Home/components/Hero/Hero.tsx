// src/Home/components/Hero/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { HeroBackground, HeroBadge, HeroStats } from "@/Home/components/Hero";
import CTAButtons from "@/Home/components/common/CTAButtons";

/** =======================
 * Hero Section Component
 * ======================= */
const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0f0f0f] py-20 sm:py-28 text-white"
      role="region"
      aria-label="JP Visual & Docs Hero Section"
    >
      {/* Background with Parallax */}
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Badge */}
        <HeroBadge />

        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight"
        >
          เนียนทุกงาน โปรทุกขั้นตอน
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="mx-auto max-w-xl text-neutral-400 text-base sm:text-lg"
        >
          JP Visual & Docs ทีมเบื้องหลังมืออาชีพ ช่วยให้คุณดูโปรแบบไวที่สุด
        </motion.p>

        {/* Call-to-Action Buttons */}
        <CTAButtons />

        {/* Hero Statistics */}
        <HeroStats />
      </div>
    </section>
  );
};

export default Hero;
