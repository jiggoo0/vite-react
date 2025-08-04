// ✅ src/Home/components/Services/FeatureList.tsx — แสดงจุดเด่นระบบ JP-System (Production Ready)

"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Eye, Workflow } from "lucide-react";

/**
 * 🧠 FeatureList
 *
 * - แสดงจุดเด่นของระบบ JP-System ที่ใช้จริงในหลังบ้าน
 * - รองรับ animation, responsive layout, และ A11y
 * - ใช้แสดงใน Services Section เพื่อเสริมความมั่นใจลูกค้า
 */

interface FeatureItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: readonly FeatureItem[] = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "ปลอดภัยทุกขั้นตอน",
    description: "เราให้ความสำคัญกับความลับและบริบทของงานแบบที่ไม่มีใครกล้าทำ"
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "ส่งงานตรงเวลา",
    description: "วางระบบหลังบ้านให้เร็ว ใช้งานง่าย พร้อมส่งมอบงานใน 24 ชั่วโมง"
  },
  {
    icon: <Workflow className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "ทำงานไว ไม่ถามซ้ำ",
    description: "ลดขั้นตอนที่ไม่จำเป็น พร้อมระบบ Dev-to-Dev ที่เข้าใจบริบทแบบสายลับ"
  },
  {
    icon: <Eye className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "เนียนทุกการใช้งาน",
    description: "ทุกชิ้นงานเหมือนจริง ตรวจสอบผ่านได้ และใช้งานในโลกจริงได้แบบไม่ขัดตา"
  }
];

const FeatureList: FC = () => {
  return (
    <motion.div
      aria-label="จุดเด่นของระบบ JP Visual & Docs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {features.map(({ icon, title, description }, index) => (
        <div
          key={index}
          role="listitem"
          className="flex flex-col items-start gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 shadow-md"
        >
          {icon}
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="text-sm text-base-content/70 leading-relaxed">{description}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default FeatureList;
