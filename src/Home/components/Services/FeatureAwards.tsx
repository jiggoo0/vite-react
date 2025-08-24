"use client";

import { FC } from "react";
import { BadgeCheck, ShieldCheck, Award } from "lucide-react";
import clsx from "clsx";

interface FeatureAwardsProps {
  /** สามารถเพิ่ม Tailwind class ภายนอกได้ */
  className?: string;
}

const awards = [
  {
    icon: <BadgeCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "ความถูกต้องสูง",
    description:
      "ทุกเอกสารที่จัดทำมีมาตรฐานสูง ตรวจสอบได้จริง มูลค่ากว่า 4,000 งาน",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "ความปลอดภัยสูงสุด",
    description: "ข้อมูลลูกค้าปลอดภัย 100% และมีระบบรักษาความลับขั้นสูง",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "รางวัลและการรับรอง",
    description: "ได้รับการรับรองและรางวัลจากองค์กรชั้นนำ ทั้งในและต่างประเทศ",
  },
];

const FeatureAwards: FC<FeatureAwardsProps> = ({ className }) => {
  return (
    <section
      role="region"
      aria-labelledby="awards-title"
      className={clsx("mt-12", className)}
    >
      <h3 id="awards-title" className="sr-only">
        รางวัลและการรับรอง
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map(({ icon, title, description }, idx) => (
          <article
            key={idx}
            tabIndex={0}
            role="listitem"
            className={clsx(
              "flex items-start space-x-4 p-5 rounded-xl border border-gray-200 bg-white dark:bg-gray-800",
              "shadow-sm transition-shadow duration-300 ease-in-out",
              "hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus:outline-none"
            )}
          >
            <div className="flex-shrink-0">{icon}</div>
            <div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                {title}
              </h4>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureAwards;
