"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  {
    question: "ถาม: ใช้เวลานานแค่ไหนกว่าจะได้รับเอกสาร?",
    answer:
      "ตอบ: ปกติใช้เวลาประมาณ 3-5 วันทำการ ขึ้นอยู่กับความซับซ้อนของเอกสารที่ต้องจัดเตรียม",
  },
  {
    question: "ถาม: สามารถขอแก้ไขเอกสารได้ไหมหากพบข้อผิดพลาด?",
    answer:
      "ตอบ: ได้ เรามีบริการแก้ไขและปรับปรุงเอกสารตามคำขอภายในระยะเวลาที่ตกลงกัน",
  },
  {
    question: "ถาม: มีการรับประกันความถูกต้องของเอกสารหรือไม่?",
    answer:
      "ตอบ: เรารับประกันความสมบูรณ์ของข้อมูล แต่ไม่สามารถรับประกันผลการอนุมัติของธนาคารได้",
  },
  {
    question: "ถาม: ต้องเตรียมเอกสารอะไรบ้างก่อนติดต่อเรา?",
    answer:
      "ตอบ: กรุณาเตรียมข้อมูลส่วนตัวและเอกสารพื้นฐาน เช่น บัตรประชาชน สลิปเงินเดือน และรายงานบัญชีธนาคาร",
  },
  {
    question: "ถาม: มีค่าบริการอย่างไรและสามารถชำระเงินได้ช่องทางไหน?",
    answer:
      "ตอบ: ค่าบริการขึ้นอยู่กับประเภทเอกสาร สามารถชำระผ่านช่องทางธนาคารและพร้อมเพย์ตามที่แจ้งไว้ในใบเสนอราคา",
  },
  {
    question: "ถาม: เอกสารที่จัดทำสามารถใช้ยื่นได้ทุกธนาคารหรือไม่?",
    answer:
      "ตอบ: เอกสารจัดทำเพื่อให้เหมาะสมกับเงื่อนไขของธนาคารส่วนใหญ่ แต่แนะนำให้ตรวจสอบกับธนาคารเป้าหมายอีกครั้ง",
  },
  {
    question: "ถาม: หากต้องการคำปรึกษาเพิ่มเติมสามารถติดต่อได้ที่ไหน?",
    answer:
      "ตอบ: ติดต่อทีมงานผ่านช่องทาง LINE หรืออีเมลที่ระบุไว้ในเว็บไซต์ เรายินดีให้คำปรึกษาอย่างละเอียด",
  },
  {
    question: "ถาม: มีนโยบายการคืนเงินในกรณีไม่พอใจหรือไม่?",
    answer:
      "ตอบ: มีนโยบายคืนเงินในกรณีที่ไม่สามารถจัดทำเอกสารตามที่ตกลงไว้เท่านั้น โปรดติดต่อเราเพื่อแจ้งรายละเอียด",
  },
  {
    question:
      "ถาม: สามารถใช้บริการนี้สำหรับบุคคลทั่วไปหรือนิติบุคคลได้หรือไม่?",
    answer:
      "ตอบ: บริการรองรับทั้งบุคคลธรรมดาและนิติบุคคล กรุณาแจ้งข้อมูลเพื่อประเมินความเหมาะสม",
  },
];

const SupportFAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="support-faq" className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">คำถามที่พบบ่อย (FAQ)</h2>

      <ul className="space-y-2">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          return (
            <li
              key={index}
              className="border rounded-lg bg-base-200 shadow-sm overflow-hidden"
              role="listitem"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-primary"
                aria-expanded={isOpen}
              >
                <span className="font-semibold">{question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="px-4 pb-4 text-sm text-muted"
                  >
                    {answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SupportFAQ;
