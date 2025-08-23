// src/Home/components/Forms/IdCardFormWithOCR.tsx
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import clsx from "clsx";
import IdCardPreview from "./IdCardPreview";
// =======================
// OCR Mock (แทน driverLicenseOcr)
// =======================
const mockOCR = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "สมชาย",
                surname: "ใจดี",
                idNumber: "1234567890123",
                dob: "1990-01-01",
                issueDate: "2020-01-01",
                expiryDate: "2030-01-01",
            });
        }, 1500);
    });
};
// =======================
// Main Component
// =======================
const IdCardFormWithOCR = ({ className }) => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        idNumber: "",
        dob: "",
        issueDate: "",
        expiryDate: "",
    });
    const [ocrLoading, setOcrLoading] = useState(false);
    const handleOCR = async () => {
        setOcrLoading(true);
        const data = await mockOCR();
        setFormData(data);
        setOcrLoading(false);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", formData);
    };
    return (_jsxs("div", { className: clsx("space-y-6", className), children: [_jsxs("form", { onSubmit: handleSubmit, className: "bg-white p-6 rounded-xl shadow-md space-y-4", children: [_jsx("h2", { className: "text-xl font-semibold", children: "\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19 (OCR)" }), _jsx("button", { type: "button", onClick: handleOCR, className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors", children: ocrLoading ? "กำลังอ่านข้อมูล..." : "Simulate OCR" }), _jsx("input", { type: "text", name: "name", placeholder: "\u0E0A\u0E37\u0E48\u0E2D", value: formData.name, onChange: handleChange, className: "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" }), _jsx("input", { type: "text", name: "surname", placeholder: "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", value: formData.surname, onChange: handleChange, className: "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" }), _jsx("input", { type: "text", name: "idNumber", placeholder: "\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19", value: formData.idNumber, onChange: handleChange, className: "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" }), _jsx("input", { type: "date", name: "dob", placeholder: "\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14", value: formData.dob, onChange: handleChange, className: "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" }), _jsx("input", { type: "date", name: "issueDate", placeholder: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E01\u0E1A\u0E31\u0E15\u0E23", value: formData.issueDate, onChange: handleChange, className: "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" }), _jsx("input", { type: "date", name: "expiryDate", placeholder: "\u0E27\u0E31\u0E19\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38", value: formData.expiryDate, onChange: handleChange, className: "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" }), _jsx("button", { type: "submit", className: "w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors", children: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01" })] }), _jsx(IdCardPreview, { data: formData, className: "mx-auto" })] }));
};
export default IdCardFormWithOCR;
