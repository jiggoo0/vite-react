// ✅ src/Home/components/Services/FeatureAwards.tsx — ความแข็งแกร่งที่ลูกค้าไว้วางใจ JP Visual & Docs

"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

/**
 * 🏆 FeatureAwards
 *
 * - แสดงความแข็งแกร่งเฉพาะทางที่ลูกค้าเลือกใช้เรา
 * - ใช้ก่อน Section รายการบริการ (Services)
 * - รองรับ animation และ a11y ครบถ้วน
 */

const awards: readonly string[] = [
  "ประสบการณ์ตรงในสายสีเทามากกว่า 8 ปี",
  "รู้ทันทุกช่องโหว่ทางเอกสาร และปรับตามบริบทได้จริง",
  "ไม่ถามเยอะ ไม่จุกจิก พร้อมลุยตั้งแต่นาทีแรก",
  "ส่งงานเร็วที่สุดในตลาด ใช้ระบบช่วยหลังบ้านลดเวลารอ"
];

const FeatureAwards: FC = () => {
  return (
    <motion.ul
      aria-label="ความแข็งแกร่งที่ลูกค้าไว้วางใจ"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {awards.map((text, index) => (
        <li
          key={index}
          role="listitem"
          className="flex items-start gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-4 shadow-md"
        >
          <BadgeCheck
            className="mt-1 h-5 w-5 shrink-0 text-primary"
            strokeWidth={2.2}
            aria-hidden="true"
          />
          <p className="text-sm text-white leading-relaxed">{text}</p>
        </li>
      ))}
    </motion.ul>
  );
};

export default FeatureAwards;
