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
    <ul
      className="space-y-3"
      role="list"
      aria-label="รายการจุดเด่นของบริการทั้งหมด"
    >
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-3" role="listitem">
          <CheckCircleIcon
            className="mt-0.5 h-5 w-5 text-green-500"
            aria-hidden="true"
          />
          <span className="text-base text-base-content/80">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;