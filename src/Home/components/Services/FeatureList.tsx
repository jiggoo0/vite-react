"use client";

import { FC } from "react";
import { CheckCircleIcon } from "lucide-react";
import clsx from "clsx";

interface FeatureListProps {
  className?: string;
}

const features: string[] = [
  "ช่วยปรับโปรไฟล์ลูกค้าให้ตรงเกณฑ์ธนาคาร/สถานทูต",
  "ดูแลเอกสารครบทุกขั้นตอน ส่งตรงถึงที่",
  "สมจริงพร้อม QR Code",
  "ระบบหลังบ้าน + AI จัดการลูกค้าให้สะดวก",
  "บริการระดับมืออาชีพ ทั้งเอกสารและภาพลักษณ์",
];

const FeatureList: FC<FeatureListProps> = ({ className }) => (
  <section role="region" aria-labelledby="feature-list-title" className={clsx("mt-8", className)}>
    <h3 id="feature-list-title" className="sr-only">
      จุดเด่นบริการของเรา
    </h3>

    <ul aria-label="รายการจุดเด่นของบริการทั้งหมด" className="space-y-3">
      {features.map((feature, idx) => (
        <li
          key={idx}
          tabIndex={0}
          className={clsx(
            "flex items-start gap-2 p-3 rounded-lg transition-colors duration-200 ease-in-out",
            "hover:bg-gray-100 dark:hover:bg-gray-800",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
          )}
        >
          <CheckCircleIcon
            className="mt-1 h-5 w-5 text-green-500 flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-base text-gray-700 dark:text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
  </section>
);

FeatureList.displayName = "FeatureList";

export default FeatureList;
