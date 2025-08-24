"use client";

import { FC } from "react";
import clsx from "clsx";

type QA = { q: string; a: string };

export interface ComplianceFAQProps {
  className?: string;
  items?: QA[];
  headline?: string;
  subline?: string;
}

const defaultFAQ: QA[] = [
  {
    q: "ขอบเขตงานที่ไม่รับทำมีอะไรบ้าง?",
    a: "งานผิดกฎหมาย/ละเมิดสิทธิ์/หลอกลวง เราปฏิเสธทันที รวมถึงงานที่ฝ่าฝืนแพลตฟอร์มหรือเงื่อนไขผู้ให้บริการ",
  },
  {
    q: "การส่งมอบปลอดภัยอย่างไร?",
    a: "ส่งผ่านลิงก์แบบจำกัดเวลา มีการป้องกันด้วยโทเคนและบันทึกกิจกรรมเข้าถึงเพื่อความโปร่งใส",
  },
  {
    q: "ข้อมูลลูกค้าถูกเก็บอย่างไร?",
    a: "เก็บเท่าที่จำเป็น ลบหรือทำให้เป็นนิรนามเมื่องานเสร็จตาม SLA",
  },
  {
    q: "รอบแก้/ขอบเขตการแก้ไขเป็นอย่างไร?",
    a: "ระบุชัดเจนก่อนเริ่มงาน เน้นแก้จุดสำคัญ รอบแก้เพิ่มเติมคิดตามจริง",
  },
];

const ComplianceFAQ: FC<ComplianceFAQProps> = ({
  className,
  items,
  headline = "ข้อกำกับและเงื่อนไข (Compliance)",
  subline = "โปร่งใสและปลอดภัย เพื่อความสบายใจของทุกฝ่าย",
}) => {
  const faqData = items?.length ? items : defaultFAQ;

  return (
    <section className={clsx("py-16 md:py-20", className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {headline}
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-400">
            {subline}
          </p>
        </header>

        {/* FAQ List */}
        <div className="grid gap-4 md:gap-6">
          {faqData.map((item, idx) => (
            <details
              key={idx}
              className="group border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 p-5 transition-shadow hover:shadow-lg"
            >
              <summary
                className="cursor-pointer flex justify-between items-center font-medium text-base md:text-lg list-none focus:outline-none focus:ring-2 focus:ring-primary rounded"
                aria-label={`Toggle FAQ: ${item.q}`}
              >
                {item.q}
                <span className="ml-2 transform transition-transform duration-300 group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <div className="mt-2 text-base md:text-base leading-relaxed text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceFAQ;
