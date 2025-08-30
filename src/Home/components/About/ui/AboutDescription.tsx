"use client";

import { motion, Variants, easeOut } from "framer-motion";

// ======================= Variants =======================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, delay: i * 0.1 },
  }),
};

// ======================= Component =======================
const AboutDescription = () => {
  const texts = [
    {
      type: "blockquote",
      content: "“ยกระดับธุรกิจเฉพาะทางให้มีมาตรฐานระดับมืออาชีพ”",
    },
    { type: "label", content: "JP - VISUAL & DOCS" },
    {
      type: "p",
      content:
        "รวมทีมตัวจริงที่เชี่ยวชาญงานออกแบบและสร้างภาพลักษณ์ดิจิทัล ให้ธุรกิจดูมืออาชีพ มีมาตรฐาน น่าเชื่อถือ และปลอดภัยต่อการทำงาน",
    },
    {
      type: "p",
      content:
        "แม้ธุรกิจจะอยู่นอกระบบกฎหมายทั่วไป แต่เราทำให้มันดูดีได้ในแบบที่หาไม่ได้จาก Google หรือ YouTube การันตีด้วยประสบการณ์ในวงการมากกว่า 8 ปี",
    },
    { type: "small", content: "ผมไม่ใช่คนเก่ง แต่ทีมงานผมเก่งแน่นอน" },
  ];

  return (
    <section
      id="about-description"
      role="region"
      aria-labelledby="about-description-title"
      className="text-center max-w-3xl mx-auto space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300"
    >
      {texts.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {item.type === "blockquote" && (
            <blockquote
              id={i === 0 ? "about-description-title" : undefined}
              className="text-lg md:text-xl font-medium leading-relaxed text-base-content/80"
            >
              {item.content}
            </blockquote>
          )}
          {item.type === "label" && (
            <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-base-content/60">
              {item.content}
            </p>
          )}
          {item.type === "p" && (
            <p className="leading-relaxed text-base-content/60">{item.content}</p>
          )}
          {item.type === "small" && (
            <p className="text-sm italic leading-snug text-base-content/50">{item.content}</p>
          )}
        </motion.div>
      ))}
    </section>
  );
};

export default AboutDescription;
