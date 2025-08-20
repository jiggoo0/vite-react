// src/Home/components/UserBoard/MetricCard.tsx
"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeUpItem } from "./motionConfig";
import { IMetric } from "./types";

interface MetricCardProps {
  metric: IMetric;
}

/**
 * 📊 MetricCard
 *
 * - แสดงค่าตัวชี้วัด (Metric) ของผู้ใช้
 * - รองรับ hover animation, responsive typography, dark mode
 * - Accessibility: role="group" + aria-label
 */
const MetricCard: FC<MetricCardProps> = ({ metric }) => (
  <motion.div
    variants={fadeUpItem}
    whileHover={{ scale: 1.03 }}
    className="stat bg-base-200 dark:bg-zinc-800 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary"
    role="group"
    aria-label={`${metric.label}: ${metric.value}`}
    tabIndex={0}
  >
    {/* Label */}
    <dt className="stat-title text-sm md:text-base opacity-80">{metric.label}</dt>

    {/* Value */}
    <dd className="stat-value mt-2 text-lg md:text-2xl font-semibold">{metric.value}</dd>
  </motion.div>
);

export default MetricCard;