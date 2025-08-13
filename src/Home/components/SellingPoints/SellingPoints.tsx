import React from "react";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";

const points = [
  {
    id: 1,
    icon: <ShieldCheckIcon className="h-8 w-8 text-green-500" />,
    title: "ความลับปลอดภัย",
    description: "ข้อมูลและเอกสารของคุณถูกเก็บเป็นความลับอย่างเข้มงวด",
  },
  {
    id: 2,
    icon: <BoltIcon className="h-8 w-8 text-yellow-400" />,
    title: "งานไวใน 24 ชม.",
    description: "บริการรวดเร็ว พร้อมส่งงานภายใน 24 ชั่วโมง",
  },
  {
    id: 3,
    icon: <CheckCircleIcon className="h-8 w-8 text-blue-500" />,
    title: "พร้อมลุยทุกเคส",
    description: "ทีมงานมืออาชีพพร้อมรับทุกโจทย์และความต้องการ",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SellingPoints() {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {points.map(({ id, icon, title, description }) => (
        <motion.div
          key={id}
          className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          variants={itemVariants}
        >
          {icon}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
