"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
const defaultFAQ = [
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
const ComplianceFAQ = ({ className, items, headline = "ข้อกำกับและเงื่อนไข (Compliance)", subline = "โปร่งใสและปลอดภัย เพื่อความสบายใจของทุกฝ่าย", }) => {
    const data = items?.length ? items : defaultFAQ;
    return (_jsx("section", { className: clsx("py-12 md:py-16", className), children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [_jsx("h2", { className: "text-2xl md:text-3xl font-semibold", children: headline }), _jsx("p", { className: "mt-2 text-base text-base-content/80", children: subline })] }), _jsx("div", { className: "flex flex-col gap-4", children: data.map((qa, idx) => (_jsxs("details", { className: "group border border-base-300 rounded-xl bg-base-100 p-4 \n                         hover:shadow-md transition-shadow duration-300", children: [_jsxs("summary", { className: "cursor-pointer select-none text-base md:text-lg font-medium \n                           list-none marker:hidden flex justify-between items-center", "aria-label": `Toggle FAQ: ${qa.q}`, children: [qa.q, _jsx("span", { className: "ml-2 transition-transform duration-300 group-open:rotate-180", children: "\u25BC" })] }), _jsx("div", { className: "mt-2 text-base text-base-content/80 overflow-hidden transition-all duration-300 ease-in-out", children: _jsx("p", { children: qa.a }) })] }, idx))) })] }) }));
};
export default ComplianceFAQ;
