// src/Home/components/UserBoard/TrustBadge.tsx
"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { fadeUpItem } from "./motionConfig";

interface TrustBadgeProps {
  /** 🔹 จำนวนที่แสดง */
  count: number;
  /** 💬 Label ของ badge */
  label: string;
  /** ✨ className เพิ่มเติมสำหรับ custom styling */
  className?: string;
}

/**
 * 🛡️ TrustBadge
 *
 * - แสดง badge ขนาดเล็กสำหรับ metric/trust count
 * - รองรับ hover + tap animation
 * - Accessibility: role="status", aria-live, aria-label
 */
const TrustBadge: FC<TrustBadgeProps> = ({ count, label, className }) => (
  <motion.div
    variants={fadeUpItem}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 250, damping: 20 }}
    className={cn(
      "flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-900 font-semibold shadow-sm rounded-sm",
      className
    )}
    role="status"
    aria-roledescription="statistic"
    aria-live="polite"
    aria-label={`${count}+ ${label}`}
    tabIndex={0}
  >
    <span className="text-lg font-bold">{count}+</span>
    <span className="text-sm">{label}</span>
  </motion.div>
);

export default TrustBadge;