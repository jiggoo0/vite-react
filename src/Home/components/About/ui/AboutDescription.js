"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, easeOut } from "framer-motion";
// ======================= Variants =======================
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
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
            content: "รวมทีมตัวจริงที่เชี่ยวชาญงานออกแบบและสร้างภาพลักษณ์ดิจิทัล ให้ธุรกิจดูมืออาชีพ มีมาตรฐาน น่าเชื่อถือ และปลอดภัยต่อการทำงาน",
        },
        {
            type: "p",
            content: "แม้ธุรกิจจะอยู่นอกระบบกฎหมายทั่วไป แต่เราทำให้มันดูดีได้ในแบบที่หาไม่ได้จาก Google หรือ YouTube การันตีด้วยประสบการณ์ในวงการมากกว่า 8 ปี",
        },
        { type: "small", content: "ผมไม่ใช่คนเก่ง แต่ทีมงานผมเก่งแน่นอน" },
    ];
    return (_jsx("section", { id: "about-description", role: "region", "aria-labelledby": "about-description-title", className: "text-center max-w-3xl mx-auto space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300", children: texts.map((item, i) => (_jsxs(motion.div, { custom: i, variants: fadeInUp, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: [item.type === "blockquote" && (_jsx("blockquote", { id: i === 0 ? "about-description-title" : undefined, className: "text-lg md:text-xl font-medium leading-relaxed text-base-content/80", children: item.content })), item.type === "label" && (_jsx("p", { className: "text-sm md:text-base font-semibold uppercase tracking-wide text-base-content/60", children: item.content })), item.type === "p" && (_jsx("p", { className: "leading-relaxed text-base-content/60", children: item.content })), item.type === "small" && (_jsx("p", { className: "text-sm italic leading-snug text-base-content/50", children: item.content }))] }, i))) }));
};
export default AboutDescription;
