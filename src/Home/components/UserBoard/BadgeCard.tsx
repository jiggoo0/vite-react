// src/Home/components/UserBoard/BadgeCard.tsx
"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { IBadge } from "./types";
import { fadeUpItem } from "./motionConfig";

interface BadgeCardProps {
  badge: IBadge;
}

/**
 * 🏅 BadgeCard
 *
 * - แสดง badge ของผู้ใช้ในรูปแบบการ์ด
 * - รองรับ hover animation, focus, dark mode
 * - Responsive typography
 */
const BadgeCard: FC<BadgeCardProps> = ({ badge }) => (
  <motion.article
    variants={fadeUpItem}
    whileHover={{ y: -5, scale: 1.04 }}
    className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow focus:outline-none focus:ring-2 focus:ring-primary"
    role="group"
    aria-labelledby={`badge-title-${badge.id}`}
    tabIndex={0}
  >
    {/* Icon */}
    <div className="flex items-center justify-center rounded-full p-4 bg-gradient-to-tr from-primary/20 to-secondary/20 shadow-inner">
      {badge.icon}
    </div>

    {/* Title */}
    <h3
      id={`badge-title-${badge.id}`}
      className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white"
    >
      {badge.title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base text-center">
      {badge.description}
    </p>
  </motion.article>
);

export default BadgeCard;