"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";
import { CheckCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string[] | ReactNode; // รองรับทั้ง string array และ JSX
}

export interface ComplianceFAQProps {
  className?: string;
  items?: FAQItem[];
  headline?: string;
  subline?: string;
}

// รวม FAQ ทั้งสองชุดเข้าด้วยกัน
const defaultFAQ: FAQItem[] = [
  {
    question: "งานแบบไหนที่เราไม่ทำ?",
    answer: (
      <>
        ❌ <span className="font-semibold">งานผิดกฎหมาย</span>,{" "}
        <span className="font-semibold">ละเมิดสิทธิ์</span> หรือ{" "}
        <span className="font-semibold">หลอกลวง</span> เราไม่รับ รวมถึงงานที่ฝ่าฝืนเงื่อนไขแพลตฟอร์ม
      </>
    ),
  },
  {
    question: "ส่งงานแล้วปลอดภัยยังไง?",
    answer: (
      <>
        🔒 ส่งผ่านลิงก์จำกัดเวลา พร้อมระบบล็อกและตรวจสอบการเข้าถึง ไม่มีใครขโมยข้อมูลได้
      </>
    ),
  },
  {
    question: "ข้อมูลลูกค้าเก็บยังไง?",
    answer: (
      <>
        🗄 เก็บเท่าที่จำเป็น แล้วลบหรือทำให้ไม่ระบุตัวตนหลังงานเสร็จตามข้อตกลง
      </>
    ),
  },
  {
    question: "แก้ไขงานได้กี่รอบ?",
    answer: (
      <>
        🔄 ระบุชัดเจนก่อนเริ่มงาน เน้นแก้จุดสำคัญ รอบแก้เพิ่มเติมคิดตามจริง
      </>
    ),
  },
  {
    question: "รับแก้ Statement หรือสลิปไหม?",
    answer: [
      "รับแก้ได้ทั้งหมดครับ แต่ต้องแยกประเด็นให้ชัดก่อนว่า “สามารถแก้ในระบบได้หรือไม่” เช่น ระบบทะเบียนพาณิชย์ หรือ Statement ในระบบธนาคาร",
      "บางครั้งเอกสารแก้ได้ แต่ระบบไม่ให้แก้ ข้อมูลจะไม่อัปเดตจริง การแก้ไขในระบบต้องอาศัยความรู้เฉพาะด้านและการเข้าถึงสิทธิ์อย่างถูกต้อง",
      "ผมพูดในนามตัวเองเท่านั้น ข้อมูลของผู้อื่นผมไม่สามารถยืนยันได้",
    ],
  },
  {
    question: "สามารถแก้ Statement ทั้งไฟล์หรือทั้งเดือนได้ไหม?",
    answer: [
      "ช่วง 8 ปีที่แล้ว ทำได้ทั้งไฟล์หรือทั้งเดือน เพราะระบบยังไม่ได้ออกแบบป้องกันเข้มขนาดนี้",
      "ปัจจุบัน แม้เพียงยอดเดียวก็เสี่ยงมาก การแก้ข้อมูลใหญ่ ๆ มักติดขัดจากหลายปัจจัย เช่น ระบบตรวจสอบอัตโนมัติและความระมัดระวังของเจ้าหน้าที่",
    ],
  },
  {
    question: "ความเสี่ยงคืออะไร?",
    answer: [
      "ความเสี่ยงหลักคือ “คนในระบบ” และ “ระบบอัตโนมัติ”",
      "หากเกิดเหตุไม่คาดคิด เช่น คนในหยุดทำกลางทาง หรือระบบตรวจพบความผิดปกติ เราไม่สามารถแก้ไขหรือเรียกร้องอะไรได้",
      "ความเสี่ยงนี้สูงถึงขั้นมีผลทางกฎหมายต่อผู้เกี่ยวข้อง",
    ],
  },
  {
    question: "สรุปรับปลอมหรือทำจริง?",
    answer: [
      "รับทำทุกอย่างที่เป็นเอกสารและข้อมูลตรงไปตรงมาที่สุด",
      "อาศัยคนมีประสบการณ์ ความรู้เทคนิค และเข้าใจโครงสร้างระบบ การทำงานนี้ต้องทีมงาน",
      "หากติดขัดสภาพคล่อง ต้องการทางออก แนะนำหาที่ปรึกษาที่ชัดเจนและอธิบายตัวแปร ผลลัพธ์ให้คุณได้จริง",
      "การทำงานต้องเดินไปทิศทางเดียวกัน คุณต้องตัดสินใจก่อนจ้างงาน",
    ],
  },
];

const ComplianceFAQ: FC<ComplianceFAQProps> = ({
  className,
  items,
  headline = "คำถามที่พบบ่อยเกี่ยวกับบริการของเรา",
  subline = "เราโปร่งใส ปลอดภัย และเข้าใจง่าย",
}) => {
  const faqData = items?.length ? items : defaultFAQ;

  return (
    <section
      role="region"
      aria-labelledby="compliance-faq-title"
      className={clsx("py-16 md:py-20", className)}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="compliance-faq-title" className="text-3xl md:text-4xl font-bold text-primary">
            {headline}
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-400">{subline}</p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4 md:space-y-6">
          {faqData.map((item, idx) => (
            <details
              key={idx}
              className="group border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 p-5 transition-shadow hover:shadow-lg"
            >
              <summary
                className="cursor-pointer flex items-center gap-2 font-medium text-base md:text-lg list-none focus:outline-none focus:ring-2 focus:ring-primary rounded"
                aria-label={`Toggle FAQ: ${item.question}`}
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>{item.question}</span>
                <span className="ml-auto transform transition-transform duration-300 group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <div className="mt-3 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                {Array.isArray(item.answer)
                  ? item.answer.map((line, lineIdx) => <p key={lineIdx}>{line}</p>)
                  : item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceFAQ;