"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock4, Zap } from "lucide-react";

/**
 * 📊 HeroStats — จุดเด่นของ JP Visual & Docs
 *
 * - ใช้ icon สื่อสารความสามารถหลัก
 * - มี animation ลื่นไหลด้วย Framer Motion
 * - รองรับ ARIA / Responsive / Theming
 */
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

const HeroStats: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      role="list"
      aria-label="จุดเด่นของทีม JP Visual & Docs"
      className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4"
    >
      {stats.map(({ icon: Icon, color, label }, index) => (
        <div
          key={index}
          role="listitem"
          className="
            flex flex-col items-center gap-2 
            rounded-2xl border border-neutral-800 
            bg-neutral-900/80 px-6 py-5 shadow text-center
          "
        >
          <Icon
            className={`${color} w-6 h-6`}
            strokeWidth={2.2}
            aria-hidden="true"
          />
          <span className="text-sm font-medium text-white whitespace-nowrap">
            {label}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export default HeroStats;