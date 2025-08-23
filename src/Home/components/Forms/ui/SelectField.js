"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const InputField = forwardRef(({ label, name, error = null, required, className = "", ...rest }, ref) => {
    return (_jsxs("div", { className: `flex flex-col ${className}`, children: [_jsxs("label", { htmlFor: name, className: "mb-1 font-medium text-gray-700", children: [label, " ", required && _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { id: name, name: name, ref: ref, required: required, className: `px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
            ${error ? "border-red-500" : "border-gray-300"}`, ...rest }), error && _jsx("span", { className: "mt-1 text-sm text-red-500", children: error })] }));
});
InputField.displayName = "InputField";
export default InputField;
