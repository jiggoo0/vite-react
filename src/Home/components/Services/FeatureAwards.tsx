"use client";

import { FC } from "react";
import { BadgeCheck, ShieldCheck, Award } from "lucide-react";
import clsx from "clsx";

interface FeatureAwardsProps {
  className?: string;
}

const awards = [
  {
    icon: <BadgeCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "เอกสารถูกต้อง",
    description: "เอกสารทุกชิ้นตรวจสอบได้จริง ทำงานตรงตามมาตรฐาน",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "ข้อมูลปลอดภัย",
    description: "ข้อมูลคุณปลอดภัย 100% ดูแลเหมือนของเราเอง",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "ทีมงานเชี่ยวชาญ",
    description: "ประสบการณ์ 8-9 ปี ทำงานเฉพาะทาง ได้รับการยอมรับ",
  },
  {
    icon: <BadgeCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "บริการเฉพาะตัว",
    description: "งานที่ต้องใช้ความชำนาญ เหมาะกับคนที่อยากได้ผลลัพธ์จริง",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "ชัดเจนเรื่องข้อจำกัด",
    description: "แจ้งข้อจำกัดและความเสี่ยงตรงไปตรงมา ให้คุณตัดสินใจง่าย",
  },
];

const FeatureAwards: FC<FeatureAwardsProps> = ({ className }) => {
  return (
    <section role="region" aria-labelledby="awards-title" className={clsx("mt-12", className)}>
      <h3 id="awards-title" className="sr-only">
        จุดเด่นทีมงานและบริการ
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map(({ icon, title, description }, idx) => (
          <article
            key={idx}
            tabIndex={0}
            role="listitem"
            className={clsx(
              "flex items-start space-x-3 p-4 rounded-xl border border-gray-200 bg-white dark:bg-gray-800",
              "shadow-sm transition-shadow duration-300 ease-in-out",
              "hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus:outline-none"
            )}
          >
            <div className="flex-shrink-0">{icon}</div>
            <div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h4>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureAwards;
