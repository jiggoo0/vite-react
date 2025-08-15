"use client";

import { FC } from "react";
import { BadgeCheck, ShieldCheck, Award } from "lucide-react";

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

const FeatureAwards: FC = () => (
  <section aria-labelledby="awards-title" role="region" className="mt-12">
    {/* Hidden heading for accessibility */}
    <h3 id="awards-title" className="sr-only">
      จุดเด่นและรางวัล
    </h3>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {awards.map(({ icon, title, description }, index) => (
        <article
          key={index}
          tabIndex={0}
          role="listitem"
          className="flex items-start space-x-4 rounded-xl border border-base-300 
                     bg-base-100 p-5 shadow-sm transition-shadow duration-300
                     hover:shadow-md focus-within:ring-2 focus-within:ring-primary
                     focus:outline-none"
        >
          <div className="flex-shrink-0">{icon}</div>
          <div>
            <h4 className="text-base font-semibold text-base-content">
              {title}
            </h4>
            <p className="text-sm text-base-content/70">{description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FeatureAwards;
