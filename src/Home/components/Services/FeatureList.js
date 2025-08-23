"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircleIcon } from "lucide-react";
import clsx from "clsx";
const features = [
    "วิเคราะห์และปรับโปรไฟล์ลูกค้าแบบมืออาชีพ",
    "บริการดูแลเอกสารครบวงจร ยื่นตรงธนาคาร/สถานทูต",
    "สลิปสมจริง ตรวจสอบได้จริง พร้อม QR Code",
    "ระบบหลังบ้านและ AI ดูแลกลุ่มลูกค้า",
    "บริการระดับสูงสุด ทั้งด้านเอกสารและภาพลักษณ์",
];
const FeatureList = ({ className }) => (_jsxs("section", { "aria-labelledby": "feature-list-title", role: "region", className: clsx("mt-8", className), children: [_jsx("h3", { id: "feature-list-title", className: "sr-only", children: "\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23" }), _jsx("ul", { className: "space-y-3", "aria-label": "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14", children: features.map((feature, index) => (_jsxs("li", { tabIndex: 0, className: clsx("flex items-start space-x-3 rounded-md p-3 transition-colors duration-200 ease-in-out", "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80", "hover:bg-base-200 dark:hover:bg-gray-800"), children: [_jsx(CheckCircleIcon, { className: "mt-0.5 h-5 w-5 text-green-500 flex-shrink-0", "aria-hidden": "true" }), _jsx("span", { className: "text-base text-base-content/80", children: feature })] }, index))) })] }));
export default FeatureList;
