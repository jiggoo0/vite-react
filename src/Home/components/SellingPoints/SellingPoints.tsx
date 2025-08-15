"use client";

import React from "react";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";

interface Point {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const points: Point[] = [
  {
    id: 1,
    icon: <ShieldCheckIcon className="h-10 w-10 text-green-500" />,
    title: "ความลับปลอดภัย",
    description: "ข้อมูลและเอกสารของคุณถูกเก็บเป็นความลับอย่างเข้มงวด",
  },
  {
    id: 2,
    icon: <BoltIcon className="h-10 w-10 text-yellow-400" />,
    title: "งานไวใน 24 ชม.",
    description: "บริการรวดเร็ว พร้อมส่งงานภายใน 24 ชั่วโมง",
  },
  {
    id: 3,
    icon: <CheckCircleIcon className="h-10 w-10 text-blue-500" />,
    title: "พร้อมลุยทุกเคส",
    description: "ทีมงานมืออาชีพพร้อมรับทุกโจทย์และความต้องการ",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SellingPoints() {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      aria-label="จุดเด่นของบริการ"
    >
      {points.map(({ id, icon, title, description }) => (
        <motion.article
          key={id}
          className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary outline-none"
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          tabIndex={0}
        >
          <motion.div
            className="flex items-center justify-center rounded-full p-3 bg-gray-100 dark:bg-gray-700"
            whileHover={{ scale: 1.2 }}
            aria-hidden="true"
          >
            {icon}
          </motion.div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </motion.article>
      ))}
    </motion.section>
  );
}
