"use client";

import { FC } from "react";

const faqs = [
  {
    question: "ถาม: สามารถยื่นกู้โดยไม่ใช้เอกสารจริงได้ไหม?",
    answer:
      "ตอบ: ขึ้นอยู่กับธนาคารและโปรไฟล์คุณ เราช่วยจัดชุดเอกสารให้ดูสมบูรณ์ พร้อมทริคเพิ่มโอกาสผ่านสูงสุด ไม่รับประกันแต่ช่วยได้จริง",
  },
  {
    question: "ถาม: บริการนี้ผิดกฎหมายหรือเปล่า?",
    answer:
      "ตอบ: เราไม่ได้ปลอมเอกสารราชการโดยตรง แต่เป็นการเตรียมเอกสารเชิงเทคนิค โปรดใช้ด้วยวิจารณญาณ",
  },
  // ✅ เพิ่มคำถามเพิ่มเติมได้ตามต้องการ
];

const SupportFAQ: FC = () => {
  return (
    <section id="support-faq" className="space-y-6">
      <h2 className="text-xl font-bold text-primary">คำถามที่พบบ่อย (FAQ)</h2>

      <ul className="space-y-4">
        {faqs.map(({ question, answer }, index) => (
          <li
            key={index}
            className="rounded-lg bg-base-200 p-4 shadow-sm"
            role="listitem"
          >
            <h3 className="text-base font-semibold">{question}</h3>
            <p className="text-sm text-muted">{answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SupportFAQ;
