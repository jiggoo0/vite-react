// src/Home/components/SellingPoints/SellingPoints.tsx
"use client";

import { FC } from "react";
import { motion, Variants } from "framer-motion";
import { sellingPointsData } from "./points";

// =======================
// Framer Motion Variants
// =======================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// =======================
// SellingPoints Component
// =======================
/**
 * SellingPoints
 * -------------------------
 * ✅ แสดง Selling Points ของบริการ
 * ✅ Responsive + Accessible + Professional UI
 * ✅ ใช้ animation fade-up + scale hover
 */
const SellingPoints: FC = () => (
  <motion.section
    className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    aria-label="Selling Points"
  >
    {sellingPointsData.map(({ id, icon: Icon, title, description }) => (
      <motion.article
        key={id}
        className="flex flex-col items-center gap-5 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary outline-none"
        variants={itemVariants}
        whileHover={{ y: -6, scale: 1.03 }}
        tabIndex={0}
        role="group"
        aria-labelledby={`point-title-${id}`}
      >
        {/* Icon */}
        <motion.div
          className="flex items-center justify-center rounded-full p-4 bg-gradient-to-tr from-primary/20 to-secondary/20 shadow-inner"
          whileHover={{ scale: 1.2, rotate: 10 }}
          aria-hidden="true"
        >
          <Icon className="h-10 w-10 text-current" />
        </motion.div>

        {/* Title */}
        <h3
          id={`point-title-${id}`}
          className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white"
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{description}</p>
      </motion.article>
    ))}
  </motion.section>
);

SellingPoints.displayName = "SellingPoints";

export default SellingPoints;
