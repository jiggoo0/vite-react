// src/Home/components/UserBoard/TrustBadges.tsx
"use client";

import { FC, ReactElement } from "react";
import { ShieldCheckIcon, CheckBadgeIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";

// Badge type
interface Badge {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
}

// Data for trust badges
const badges: Badge[] = [
  {
    id: 1,
    icon: <ShieldCheckIcon className="h-10 w-10 text-green-500" />,
    title: "Verified Security",
    description: "Our platform ensures top-level security for your data and transactions.",
  },
  {
    id: 2,
    icon: <CheckBadgeIcon className="h-10 w-10 text-blue-500" />,
    title: "Certified Service",
    description: "We are certified by industry standards for reliability and quality.",
  },
  {
    id: 3,
    icon: <SparklesIcon className="h-10 w-10 text-yellow-400" />,
    title: "Premium Experience",
    description: "We provide a premium, smooth, and trusted experience for all users.",
  },
];

// Container animation for staggering children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

// Individual badge animation
const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const TrustBadges: FC = () => (
  <motion.section
    className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    aria-label="Trust Badges"
  >
    {badges.map(({ id, icon, title, description }) => (
      <motion.article
        key={id}
        className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary outline-none"
        variants={badgeVariants}
        whileHover={{ y: -5, scale: 1.04 }}
        tabIndex={0}
        role="group"
        aria-labelledby={`badge-title-${id}`}
      >
        <motion.div
          className="flex items-center justify-center rounded-full p-4 bg-gradient-to-tr from-primary/20 to-secondary/20 shadow-inner"
          whileHover={{ scale: 1.2, rotate: 15 }}
          aria-hidden="true"
        >
          {icon}
        </motion.div>

        <h3
          id={`badge-title-${id}`}
          className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white"
        >
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
          {description}
        </p>
      </motion.article>
    ))}
  </motion.section>
);

export default TrustBadges;