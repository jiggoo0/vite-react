"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

/** =======================
 * Hero Badge Component
 * ======================= */
const HeroBadge: FC = () => {
  return (
    <motion.div
      role="status"
      aria-label="พร้อมลุยแบบมืออาชีพ"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="
        inline-flex items-center gap-2 rounded-full
        border border-green-500/30 bg-neutral-900/60
        px-4 py-1 text-sm text-white shadow-lg
        backdrop-blur-md
      "
    >
      <BadgeCheck
        className="w-4 h-4 text-green-400 shrink-0"
        strokeWidth={2.2}
        aria-hidden="true"
      />
      <span className="font-medium tracking-tight whitespace-nowrap">พร้อมลุยแบบมืออาชีพ</span>
    </motion.div>
  );
};

export default HeroBadge;
