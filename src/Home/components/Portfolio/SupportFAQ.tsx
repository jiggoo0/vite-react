"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
export { default as FilterButton } from "./ui/FilterButton";

export interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqs: FAQItem[] = [
  {
    question: "รับแก้ Statement หรือสลิปไหม?",
    answer: [
      "รับแก้ได้ทั้งหมดครับ แต่ต้องแยกประเด็นให้ชัดเจนก่อนว่า “สามารถแก้ในระบบได้หรือไม่” เช่น ระบบทะเบียนพาณิชย์ หรือ Statement ในระบบธนาคาร",
      "บางครั้งเอกสารแก้ได้ แต่ระบบไม่ให้แก้ ข้อมูลจะไม่อัปเดตจริง การแก้ไขในระบบจึงต้องอาศัยความรู้เฉพาะด้านและการเข้าถึงสิทธิ์อย่างถูกต้อง",
      "ผมพูดในนามตัวเองเท่านั้น ข้อมูลของผู้อื่นผมไม่สามารถยืนยันได้",
    ],
  },
  {
    question: "สามารถแก้ Statement ทั้งไฟล์หรือทั้งเดือนได้ไหม?",
    answer: [
      "ช่วง 8 ปีที่แล้ว ทำได้ทั้งไฟล์หรือทั้งเดือน เพราะระบบยังไม่ได้ออกแบบป้องกันรัดตัวมากเท่าปัจจุบัน",
      "ปัจจุบัน แม้เพียงยอดเดียวก็เสี่ยงมาก การแก้ข้อมูลใหญ่ ๆ มักติดขัดจากหลายปัจจัย เช่น การตรวจสอบระบบอัตโนมัติและความระมัดระวังของเจ้าหน้าที่",
    ],
  },
  {
    question: "ความเสี่ยงคืออะไร?",
    answer: [
      "ความเสี่ยงหลักคือ “คนในระบบ” และ “ระบบอัตโนมัติ”",
      "หากเกิดเหตุไม่คาดคิด เช่น คนในหยุดทำกลางทาง หรือระบบตรวจสอบพบความผิดปกติ เราไม่สามารถแก้ไขหรือเรียกร้องอะไรได้",
      "ความเสี่ยงนี้สูงถึงขั้นมีผลทางกฎหมายต่อผู้เกี่ยวข้อง",
    ],
  },
  {
    question: "มีกรณีใดที่สามารถทำได้ไหม?",
    answer: [
      "มีครับ แต่เป็นกรณี “Accident” จริง เช่น ต้องแก้ไขยอด 1–2 รายการให้ถูกต้องในระบบ",
      "กรณีนี้สามารถทำได้ แต่ค่าใช้จ่ายสูงและต้องมีความระมัดระวังสูง เพราะการแก้ไขใด ๆ ที่กระทบกับระบบการเงินต้องมีความแม่นยำสูง",
    ],
  },
  {
    question: "ทำไมคนอื่นบอกว่าทำได้?",
    answer: [
      "ข้อมูลของคนอื่นเราไม่สามารถรู้ได้ บางคนอาจทำได้แต่มีความเสี่ยงสูงมาก",
      "ทุกข้อมูลที่ผมแจ้งเป็นข้อมูลจริงจากประสบการณ์ของผม ผู้ที่อ่านควรใช้ดุลพินิจและวิเคราะห์ความเป็นไปได้",
    ],
  },
  {
    question: "การแก้ไขมีประโยชน์ไหม?",
    answer: [
      "ส่วนใหญ่ไม่คุ้มค่า เช่น ต้องการเดิน Statement 3 เดือน แต่ได้เพียง 3 รายการ การแก้ไขเพียงเล็กน้อยไม่ช่วยให้เกิดผลทางธุรกิจหรือการเงินที่ชัดเจน",
    ],
  },
  {
    question: "ปลอมเอกสารหรือจัดหาไอเท็มได้ไหม?",
    answer: [
      "ปลอมเอกสารหรือเทคนิคปลอมในปัจจุบันทำได้ยากมาก ระบบธนาคารและระบบทะเบียนพาณิชย์ออกแบบมาตรวจสอบความถูกต้องและป้องกันการแก้ไขที่ไม่ชอบด้วยกฎหมาย",
      "ยังสามารถจัดหา ‘ไอเท็ม’ เพื่อให้ผู้ถือเอกสารเป็นเจ้าของเพื่อนำไปประกอบข้อมูลได้ วิธีนี้เป็นการใช้ช่องว่างของระบบโดยไม่แก้ไขข้อมูลหลัก",
    ],
  },
  {
    question: "สรุปรับปลอมหรือทำจริง?",
    answer: [
      "รับทำทุกอย่างที่เป็นเอกสารและให้ข้อมูลที่ตรงไปตรงมากับคุณ",
      "อาศัยคนที่มีประสบการณ์ มีความรู้เทคนิค และเข้าใจโครงสร้างระบบ การทำงานนี้ไม่สามารถทำคนเดียวได้",
      "หากคุณติดขัดสภาพคล่อง ต้องการหาทางออก แนะนำหาที่ปรึกษาที่มีข้อมูลชัดเจนและอธิบายตัวแปร ผลลัพธ์ให้คุณได้จริง",
      "การทำงานต้องเดินไปทิศทางเดียวกัน คุณต้องตัดสินใจก่อนที่จะจ้างงาน",
    ],
  },
  {
    question: "ข้อคิดสำหรับผู้อ่าน",
    answer: [
      "การแก้ไขเอกสารในระบบสมัยนี้ไม่ใช่เรื่องง่าย ความเสี่ยงสูงทั้งด้านกฎหมายและระบบ",
      "การเข้าใจระบบ การประเมินความเสี่ยง และรู้ว่า “อะไรทำได้–ไม่ได้” คือความรู้สำคัญที่จะปกป้องตัวเอง",
      "สุดท้าย ต้องใช้ดุลพินิจในการเลือกผู้ให้บริการ และตัดสินใจก่อนจ้างงาน",
    ],
  },
];

const SupportFAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-16 bg-base-200 text-base-content">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          คำถามที่พบบ่อย (FAQ)
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold text-lg md:text-xl">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-700 dark:text-gray-300 space-y-2 text-sm md:text-base leading-relaxed"
                  >
                    {Array.isArray(faq.answer)
                      ? faq.answer.map((line, i) => <p key={i}>{line}</p>)
                      : <p>{faq.answer}</p>}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportFAQ;