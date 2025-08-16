import { FC } from 'react';
import clsx from 'clsx';

type QA = { q: string; a: string };

export interface ComplianceFAQProps {
  className?: string;
  items?: QA[];
  headline?: string;
  subline?: string;
}

const defaultFAQ: QA[] = [
  {
    q: 'ขอบเขตงานที่ไม่รับทำมีอะไรบ้าง?',
    a: 'งานที่ผิดกฎหมาย/ละเมิดสิทธิ์/หลอกลวงเชิงอาชญากรรม เราปฏิเสธทันที รวมถึงงานที่ฝ่าฝืนแพลตฟอร์มหรือเงื่อนไขผู้ให้บริการ',
  },
  {
    q: 'การส่งมอบปลอดภัยอย่างไร?',
    a: 'ส่งผ่านลิงก์แบบจำกัดเวลา มีการป้องกันด้วยโทเคนและบันทึกกิจกรรมเข้าถึงเพื่อความโปร่งใส',
  },
  {
    q: 'ข้อมูลลูกค้าถูกเก็บอย่างไร?',
    a: 'เราเก็บเท่าที่จำเป็นต่อการทำงาน ลบหรือทำให้เป็นนิรนามเมื่องานเสร็จตาม SLA ภายในระยะเวลาที่กำหนด',
  },
  {
    q: 'รอบแก้/ขอบเขตการแก้ไขเป็นอย่างไร?',
    a: 'ระบุชัดเจนก่อนเริ่มงาน โดยเน้นแก้จุดสำคัญตามตกลง รอบแก้เพิ่มเติมคิดตามจริง',
  },
];

const ComplianceFAQ: FC<ComplianceFAQProps> = ({
  className,
  items,
  headline = 'ข้อกำกับและเงื่อนไข (Compliance)',
  subline = 'โปร่งใสและปลอดภัย เพื่อความสบายใจของทุกฝ่าย',
}) => {
  const data = items?.length ? items : defaultFAQ;

  return (
    <section className={clsx('py-12 md:py-16', className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">{headline}</h2>
          <p className="mt-2 text-base text-base-content/80">{subline}</p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {data.map((qa, idx) => (
            <details
              key={idx}
              className="group border border-base-300 rounded-xl bg-base-100 p-4 hover:shadow-md transition-shadow"
            >
              <summary
                className="cursor-pointer select-none text-base md:text-lg font-medium list-none marker:hidden flex justify-between items-center"
                aria-label={`Toggle FAQ: ${qa.q}`}
              >
                {qa.q}
                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-2 text-base text-base-content/80">{qa.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceFAQ;
