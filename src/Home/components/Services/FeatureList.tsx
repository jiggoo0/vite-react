"use client";

import { FC } from "react";
import { CheckCircleIcon } from "lucide-react";

/**
 * 📌 FeatureList
 *
 * - ใช้แสดงจุดเด่นของบริการแบบรายการ
 * - สามารถวางร่วมกับ Section บริการหรือ Hero
 * - รองรับ A11y, Dark Mode, และ Responsive
 */
const features: string[] = [
  "วิเคราะห์และปรับโปรไฟล์ลูกค้าแบบมืออาชีพ",
  "บริการดูแลเอกสารครบวงจร ยื่นตรงธนาคาร/สถานทูต",
  "สลิปสมจริง ตรวจสอบได้จริง พร้อม QR Code",
  "ระบบหลังบ้านและ AI ดูแลกลุ่มลูกค้า",
  "บริการระดับสูงสุด ทั้งด้านเอกสารและภาพลักษณ์",
];

const FeatureList: FC = () => {
  return (
    <section
      aria-labelledby="feature-list-title"
      role="region"
      className="mt-8"
    >
      <h3 id="feature-list-title" className="sr-only">
        จุดเด่นของบริการ
      </h3>

      <ul
        className="space-y-3"
        role="list"
        aria-label="รายการจุดเด่นของบริการทั้งหมด"
      >
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 rounded-md p-1 transition-all"
            role="listitem"
            tabIndex={0}
          >
            <CheckCircleIcon
              className="mt-0.5 h-5 w-5 text-green-500 shrink-0"
              aria-hidden="true"
            />
            <span className="text-base text-base-content/80">{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeatureList;
