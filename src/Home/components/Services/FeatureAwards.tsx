"use client";

import { FC } from "react";
import { BadgeCheck, ShieldCheck, Award } from "lucide-react";

/**
 * 🏆 FeatureAwards
 *
 * - แสดงรางวัลหรือการรับรองคุณภาพที่ลูกค้าเชื่อถือ
 * - เพิ่มความน่าเชื่อถือให้กับบริการ
 * - รองรับ A11y, Dark Mode และ Responsive
 */
const awards = [
  {
    icon: <BadgeCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "การันตีความสำเร็จลูกค้า",
    description: "มีลูกค้าอนุมัติจริงมากกว่า 4,000 รายทั่วประเทศ",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "ความปลอดภัยของข้อมูล",
    description: "จัดเก็บและใช้งานข้อมูลภายใต้นโยบายความปลอดภัยสูงสุด",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: "บริการมืออาชีพ",
    description: "ทีมงานมีประสบการณ์ตรงกับธนาคารและสถานทูต",
  },
];

const FeatureAwards: FC = () => {
  return (
    <section
      aria-labelledby="awards-title"
      role="region"
      className="mt-12"
    >
      <h3 id="awards-title" className="sr-only">
        จุดเด่นและรางวัล
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((award, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 rounded-xl border border-base-300 bg-base-100 p-4 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary"
            role="listitem"
            tabIndex={0}
          >
            <div className="shrink-0">{award.icon}</div>
            <div>
              <h4 className="text-base font-semibold text-base-content">
                {award.title}
              </h4>
              <p className="text-sm text-base-content/70">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureAwards;