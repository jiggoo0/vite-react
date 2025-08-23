"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useState, useEffect } from "react";
import clsx from "clsx";
const InputField = ({ label, name, value, type = "text", placeholder, required = true, onChange, }) => {
    const isTextArea = type === "textarea";
    const commonClass = "border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400";
    return (_jsxs("div", { className: "flex flex-col space-y-1", children: [_jsx("label", { htmlFor: name, className: "font-medium", children: label }), isTextArea ? (_jsx("textarea", { id: name, name: name, value: value, onChange: onChange, placeholder: placeholder, required: required, className: commonClass })) : (_jsx("input", { id: name, name: name, type: type, value: value, onChange: onChange, placeholder: placeholder, required: required, className: commonClass }))] }));
};
// =======================
// Helper: Validate ID number
// =======================
const validateIdNumber = (id) => /^\d{13}$/.test(id);
// =======================
// Main Component
// =======================
const IdCardFormWithOCR = ({ className }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        idNumber: "",
        birthDate: "",
        address: "",
    });
    const [ocrLoading, setOcrLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [error, setError] = useState(null);
    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    // =======================
    // OCR Simulation / Upload
    // =======================
    const handleFileChange = async (file) => {
        if (!file)
            return;
        const validTypes = ["image/png", "image/jpeg", "image/jpg"];
        if (!validTypes.includes(file.type)) {
            setError("รองรับเฉพาะไฟล์ PNG, JPG, JPEG");
            return;
        }
        setError(null);
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);
        setOcrLoading(true);
        // Simulate OCR
        setTimeout(() => {
            setFormData({
                fullName: "สมชาย ใจดี",
                idNumber: "1234567890123",
                birthDate: "1990-01-01",
                address: "123/45 ถนนสุขใจ แขวงสุขใจ เขตสุขใจ กรุงเทพฯ",
            });
            setOcrLoading(false);
        }, 1500);
    };
    const handleFileInputChange = (e) => {
        const file = e.target.files?.[0];
        if (file)
            handleFileChange(file);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file)
            handleFileChange(file);
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    // Cleanup object URL
    useEffect(() => {
        return () => {
            if (imagePreview)
                URL.revokeObjectURL(imagePreview);
        };
    }, [imagePreview]);
    // =======================
    // Form Submit
    // =======================
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        if (!validateIdNumber(formData.idNumber)) {
            setError("เลขบัตรประชาชนต้องมี 13 หลัก");
            return;
        }
        console.log("ID Card Form Submitted:", formData);
        alert("บันทึกข้อมูลเรียบร้อย!");
        // TODO: implement actual submit logic
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: clsx("bg-white rounded-xl shadow-md p-6 w-full space-y-6", className), children: [_jsx("h2", { className: "text-xl font-semibold", children: "\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19 (OCR)" }), _jsxs("div", { className: "flex flex-col space-y-2 border-dashed border-2 border-gray-300 rounded-md p-4 text-center cursor-pointer", onDrop: handleDrop, onDragOver: handleDragOver, children: [_jsx("label", { className: "font-medium", children: "\u0E04\u0E25\u0E34\u0E01\u0E2B\u0E23\u0E37\u0E2D\u0E27\u0E32\u0E07\u0E23\u0E39\u0E1B\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48" }), _jsx("input", { type: "file", accept: "image/*", onChange: handleFileInputChange, className: "hidden", id: "idCardUpload" }), _jsx("p", { className: "text-sm text-gray-500", children: "\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A PNG, JPG, JPEG" }), ocrLoading && _jsx("p", { className: "text-blue-500", role: "status", "aria-live": "polite", children: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2D\u0E48\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E32\u0E01\u0E20\u0E32\u0E1E..." }), imagePreview && _jsx("img", { src: imagePreview, alt: "Preview", className: "mt-2 max-h-40 object-contain rounded-md border" })] }), _jsx(InputField, { label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25", name: "fullName", value: formData.fullName, placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", onChange: handleChange }), _jsx(InputField, { label: "\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19", name: "idNumber", value: formData.idNumber, placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19", onChange: handleChange }), _jsx(InputField, { label: "\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14", name: "birthDate", type: "date", value: formData.birthDate, onChange: handleChange }), _jsx(InputField, { label: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48", name: "address", type: "textarea", value: formData.address, placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48", onChange: handleChange }), error && _jsx("p", { className: "text-red-600", role: "alert", children: error }), _jsx("button", { type: "submit", disabled: ocrLoading, className: clsx("w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors", "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1", ocrLoading && "opacity-50 cursor-not-allowed"), children: ocrLoading ? "กำลังประมวลผล..." : "บันทึก" })] }));
};
IdCardFormWithOCR.displayName = "IdCardFormWithOCR";
export default memo(IdCardFormWithOCR);
