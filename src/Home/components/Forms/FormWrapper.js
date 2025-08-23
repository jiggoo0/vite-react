"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import clsx from "clsx";
const FormWrapper = ({ title = "ฟอร์ม", description = "", children, onSubmit, className, submitLabel = "บันทึก", }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    /**
     * Handle form submit
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            if (onSubmit)
                await onSubmit();
            setSuccess("บันทึกข้อมูลสำเร็จ");
        }
        catch (err) {
            if (err instanceof Error)
                setError(err.message);
            else
                setError("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { className: clsx("p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-colors", className), children: [title && (_jsx("h2", { className: "text-xl font-bold mb-2 text-gray-900 dark:text-gray-100", children: title })), description && (_jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: description })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [children, loading && (_jsx("p", { className: "text-blue-500 animate-pulse", children: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25..." })), error && _jsx("p", { className: "text-red-500 animate-fadeIn", children: error }), success && _jsx("p", { className: "text-green-500 animate-fadeIn", children: success }), _jsx("div", { children: _jsx("button", { type: "submit", disabled: loading, className: clsx("px-4 py-2 rounded-lg text-white transition-colors", loading
                                ? "bg-blue-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700"), children: loading ? "กำลังบันทึก..." : submitLabel }) })] })] }));
};
export default FormWrapper;
