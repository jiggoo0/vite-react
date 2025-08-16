"use client";

import { FC } from "react";
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
    title: "ความปลอดภัยของข้อมูล",
    description:
      "ข้อมูลลูกค้าและเอกสารถูกเก็บอย่างมั่นคง ปลอดภัยตามมาตรฐานสากล",
  },
  {
    id: 2,
    icon: <BoltIcon className="h-10 w-10 text-yellow-400" />,
    title: "งานไวใน 24 ชม.",
    description: "บริการรวดเร็ว ทันตามคิว และรองรับงานด่วน 24 ชั่วโมง",
  },
  {
    id: 3,
    icon: <CheckCircleIcon className="h-10 w-10 text-blue-500" />,
    title: "ความน่าเชื่อถือสูง",
    description: "ทีมงานมืออาชีพ พร้อมตรวจสอบคุณภาพทุกขั้นตอน",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SellingPoints: FC = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      aria-label="จุดเด่นและความสามารถของบริการ"
    >
      {points.map(({ id, icon, title, description }) => (
        <motion.article
          key={id}
          className="flex flex-col items-center gap-5 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary outline-none"
          variants={itemVariants}
          whileHover={{ y: -6, scale: 1.03 }}
          tabIndex={0}
          role="group"
          aria-labelledby={`point-title-${id}`}
        >
          <motion.div
            className="flex items-center justify-center rounded-full p-4 bg-gradient-to-tr from-primary/20 to-secondary/20 shadow-inner"
            whileHover={{ scale: 1.2, rotate: 10 }}
            aria-hidden="true"
          >
            {icon}
          </motion.div>

          <h3
            id={`point-title-${id}`}
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
};

export default SellingPoints;
