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
    a: "งานที่ผิดกฎหมาย/ละเมิดสิทธิ์/หลอกลวงเชิงอาชญากรรม เราปฏิเสธทันที รวมถึงงานที่ฝ่าฝืนแพลตฟอร์มหรือเงื่อนไขผู้ให้บริการ",
  },
  {
    q: "การส่งมอบปลอดภัยอย่างไร?",
    a: "ส่งผ่านลิงก์แบบจำกัดเวลา มีการป้องกันด้วยโทเคนและบันทึกกิจกรรมเข้าถึงเพื่อความโปร่งใส",
  },
  {
    q: "ข้อมูลลูกค้าถูกเก็บอย่างไร?",
    a: "เราเก็บเท่าที่จำเป็นต่อการทำงาน ลบหรือทำให้เป็นนิรนามเมื่องานเสร็จตาม SLA ภายในระยะเวลาที่กำหนด",
  },
  {
    q: "รอบแก้/ขอบเขตการแก้ไขเป็นอย่างไร?",
    a: "ระบุชัดเจนก่อนเริ่มงาน โดยเน้นแก้จุดสำคัญตามตกลง รอบแก้เพิ่มเติมคิดตามจริง",
  },
];

const ComplianceFAQ: FC<ComplianceFAQProps> = ({
  className,
  items,
  headline = "ข้อกำกับและเงื่อนไข (Compliance)",
  subline = "โปร่งใสและปลอดภัย เพื่อความสบายใจของทุกฝ่าย",
}) => {
  const data = items?.length ? items : defaultFAQ;
  return (
    <section className={clsx("py-12 md:py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">{headline}</h2>
          <p className="opacity-80 mt-2">{subline}</p>
        </div>
        <div className="join join-vertical w-full">
          {data.map((qa, i) => (
            <div
              key={i}
              className="collapse collapse-arrow join-item bg-base-200"
            >
              <input type="checkbox" aria-label={`toggle-faq-${i}`} />
              <div className="collapse-title text-base md:text-lg font-medium">
                {qa.q}
              </div>
              <div className="collapse-content">
                <p className="opacity-80">{qa.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceFAQ;
