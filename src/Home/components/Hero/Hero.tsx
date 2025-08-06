"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeroBackground, HeroBadge, HeroStats } from "./index";

/**
 * 🏠 Hero Section — JP Visual & Docs
 *
 * - Section แรกของ Landing Page
 * - ใช้ framer-motion เพิ่ม animation
 * - Responsive + A11y
 */
const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0f0f0f] py-20 sm:py-28 text-white"
      role="region"
      aria-label="JP Visual & Docs Hero Section"
    >
      {/* 🎨 Background Layer */}
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* 🏷️ Badge */}
        <HeroBadge />

        {/* 📢 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight"
        >
          เนียนทุกงาน โปรทุกขั้นตอน
        </motion.h1>

        {/* 📝 Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-xl text-neutral-400 text-base sm:text-lg"
        >
          JP Visual & Docs ทีมเบื้องหลังมืออาชีพ ช่วยให้คุณดูโปรแบบไวที่สุด
        </motion.p>

        {/* 🔘 Call-To-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4"
          role="group"
          aria-label="Hero CTA Buttons"
        >
          {/* CTA: ไปยัง portfolio section */}
          <a
            href="#portfolio"
            className="btn px-6 py-3 text-sm font-semibold rounded-xl border border-neutral-700 bg-transparent text-white hover:bg-neutral-800 transition duration-200 focus:outline-none focus:ring focus:ring-white/40"
          >
            ดูผลงาน
          </a>

          {/* ✅ CTA: ไปยังฟอร์มประเมิน */}
          <Link
            to="/form"
            className="btn px-6 py-3 text-sm font-semibold rounded-xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition duration-200 focus:outline-none focus:ring focus:ring-green-500/40"
          >
            ประเมินเบื้องต้นฟรี
          </Link>
        </motion.div>

        {/* 📊 Feature Stats */}
        <HeroStats />
      </div>
    </section>
  );
};

export default Hero;
