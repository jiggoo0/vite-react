"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
/**
 * DocumentDownload
 * -------------------------
 * Form สำหรับตรวจสอบรหัสเอกสารและแสดงผลดาวน์โหลด
 */
const DocumentDownload = () => {
    const [docCode, setDocCode] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        if (!docCode.trim()) {
            setError("กรุณากรอกรหัสเอกสาร");
            return;
        }
        setLoading(true);
        try {
            // 🔹 ตัวอย่างเรียก API หรือเช็ครหัสจริงกับ ADMIN
            await new Promise((res) => setTimeout(res, 800));
            const isValid = docCode === "ADMIN123"; // ตัวอย่างเช็ครหัส
            if (isValid)
                setSuccess(true);
            else
                setError("รหัสเอกสารถูกต้องไม่ถูกต้อง กรุณาลองใหม่");
        }
        catch {
            setError("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs(motion.section, { className: "max-w-lg mx-auto p-6 bg-base-100 rounded-xl shadow-lg", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" }, "aria-labelledby": "document-download-title", children: [_jsx("h2", { id: "document-download-title", className: "text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100", children: "\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E49\u0E32\u0E07\u0E07\u0E32\u0E19" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", noValidate: true, children: [_jsx("label", { htmlFor: "doc-code", className: "block font-medium text-gray-700 dark:text-gray-300", children: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23" }), _jsx("input", { id: "doc-code", type: "text", value: docCode, onChange: (e) => setDocCode(e.target.value), placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E08\u0E32\u0E01 ADMIN", className: "input input-bordered w-full focus:ring focus:ring-primary focus:outline-none transition-all duration-200 dark:bg-gray-800 dark:text-gray-100", "aria-describedby": "doc-code-note", required: true, autoComplete: "off" }), _jsx("button", { type: "submit", className: "btn btn-primary w-full flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2", disabled: loading, "aria-label": "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23", children: loading ? (_jsx("span", { className: "loading loading-spinner loading-sm" })) : ("ตรวจสอบรหัสเอกสาร") })] }), error && (_jsx(motion.p, { className: "text-error text-center mt-4 font-semibold", role: "alert", "aria-live": "assertive", initial: { opacity: 0 }, animate: { opacity: 1 }, children: error })), success && (_jsx(motion.p, { className: "text-success text-center mt-4 font-semibold", role: "alert", "aria-live": "polite", initial: { opacity: 0 }, animate: { opacity: 1 }, children: "\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u2705 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 ADMIN" })), _jsx("p", { id: "doc-code-note", className: "mt-6 text-center text-sm text-gray-500 dark:text-gray-400 italic", children: "*\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38: \u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D ADMIN \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19" })] }));
};
export default DocumentDownload;
