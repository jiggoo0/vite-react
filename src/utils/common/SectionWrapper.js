"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/utils/cn";
/**
 * 🧱 SectionWrapper
 *
 * - ครอบเนื้อหาแต่ละ Section และควบคุม max width
 * - รองรับ Responsive padding (mobile → desktop)
 * - ปรับใช้ semantic tag และ accessibility ได้
 */
const SectionWrapper = ({ children, className, as: Tag = "section", id, ariaLabel, }) => {
    return (_jsx(Tag, { id: id, "aria-label": ariaLabel, className: cn("w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8", className), children: children }));
};
export default SectionWrapper;
