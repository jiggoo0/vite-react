"use client";

import { FC } from "react";
import { CheckCircleIcon } from "lucide-react";
import clsx from "clsx";

interface FeatureListProps {
  /** เพิ่ม Tailwind class ภายนอก */
  className?: string;
}

const features: string[] = [
  "วิเคราะห์และปรับโปรไฟล์ลูกค้าแบบมืออาชีพ",
  "บริการดูแลเอกสารครบวงจร ยื่นตรงธนาคาร/สถานทูต",
  "สลิปสมจริง ตรวจสอบได้จริง พร้อม QR Code",
  "ระบบหลังบ้านและ AI ดูแลกลุ่มลูกค้า",
  "บริการระดับสูงสุด ทั้งด้านเอกสารและภาพลักษณ์",
];

const FeatureList: FC<FeatureListProps> = ({ className }) => (
  <section
    aria-labelledby="feature-list-title"
    role="region"
    className={clsx("mt-8", className)}
  >
    <h3 id="feature-list-title" className="sr-only">
      จุดเด่นของบริการ
    </h3>

    <ul className="space-y-3" aria-label="รายการจุดเด่นของบริการทั้งหมด">
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex items-start space-x-3 rounded-md p-2 
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 
                     transition-colors hover:bg-base-200 dark:hover:bg-gray-800"
          tabIndex={0}
        >
          <CheckCircleIcon
            className="mt-0.5 h-5 w-5 text-green-500 flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-base text-base-content/80">{feature}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default FeatureList;
