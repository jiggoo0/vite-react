"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock4, Zap } from "lucide-react";

/** =======================
 * Hero Stats Data
 * ======================= */
const stats = [
  {
    icon: ShieldCheck,
    color: "text-green-500",
    label: "ความลับปลอดภัย",
  },
  {
    icon: Clock4,
    color: "text-yellow-400",
    label: "งานไวใน 24 ชม.",
  },
  {
    icon: Zap,
    color: "text-blue-500",
    label: "พร้อมลุยทุกเคส",
  },
];

/** =======================
 * Framer Motion Variants
 * ======================= */
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

/** =======================
 * HeroStats Component
 * ======================= */
const HeroStats: FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      role="list"
      aria-label="จุดเด่นของทีม JP Visual & Docs"
      className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4"
    >
      {stats.map(({ icon: Icon, color, label }, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          role="listitem"
          tabIndex={0}
          className="
            flex flex-col items-center gap-3 
            rounded-3xl border border-neutral-700 
            bg-neutral-900/90 px-8 py-6 shadow-lg text-center
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            transition-shadow duration-300 hover:shadow-xl cursor-pointer
          "
        >
          <Icon className={`${color} w-8 h-8`} strokeWidth={2.2} aria-hidden="true" />
          <span className="text-base font-semibold text-white whitespace-nowrap">{label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
