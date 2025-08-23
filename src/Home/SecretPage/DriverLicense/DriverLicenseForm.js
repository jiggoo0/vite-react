"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DriverLicensePreview from "./DriverLicensePreview";
import { driverLicenseFields, driverLicenseFormSchema, } from "@/config/driverLicenseConfig";
import { exportCardAsPNG, exportCardAsPDF } from "@/utils/exportCard";
import "@/styles/driverLicense.css";
const DriverLicenseForm = () => {
    const { handleSubmit, control, watch, formState: { errors }, } = useForm({
        resolver: zodResolver(driverLicenseFormSchema),
        defaultValues: Object.fromEntries(driverLicenseFields.map((f) => [f.id, ""])),
    });
    const formData = watch();
    const onSubmit = (data) => {
        console.log("Submitted data:", data);
    };
    const handleExportPNG = () => exportCardAsPNG("driver-license-preview", "driver-license.png");
    const handleExportPDF = () => exportCardAsPDF("driver-license-preview", "driver-license.pdf", true);
    return (_jsxs("div", { className: "p-6 bg-gray-50 min-h-screen flex flex-col gap-8", children: [_jsx("h1", { className: "text-2xl font-semibold text-center text-gray-800", children: "\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E43\u0E1A\u0E02\u0E31\u0E1A\u0E02\u0E35\u0E48\u0E08\u0E33\u0E25\u0E2D\u0E07" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 border border-gray-300", children: [driverLicenseFields.map((field) => {
                        const label = field.id
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (s) => s.toUpperCase());
                        return (_jsxs("div", { className: "flex flex-col", children: [_jsx("label", { className: "mb-1 font-medium text-gray-700", children: label }), _jsx(Controller, { name: field.id, control: control, render: ({ field: controllerField }) => {
                                        if (field.type === "photo") {
                                            return (_jsx("input", { type: "file", accept: "image/*", onChange: (e) => {
                                                    const file = e.target.files?.[0];
                                                    controllerField.onChange(file ? URL.createObjectURL(file) : "");
                                                }, className: "border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400" }));
                                        }
                                        if (field.type === "select" && field.options) {
                                            return (_jsxs("select", { ...controllerField, className: "border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400", children: [_jsx("option", { value: "", children: "\u0E40\u0E25\u0E37\u0E2D\u0E01..." }), field.options.map((opt) => (_jsx("option", { value: opt, children: opt }, opt)))] }));
                                        }
                                        return (_jsx("input", { ...controllerField, type: field.type === "date" ? "date" : "text", className: "border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400" }));
                                    } }), errors[field.id] && (_jsx("span", { className: "text-red-600 text-sm mt-1", children: errors[field.id]?.message }))] }, field.id));
                    }), _jsx("button", { type: "submit", className: "col-span-full bg-gray-800 text-white px-4 py-2 mt-4 hover:bg-gray-700", children: "Submit" })] }), _jsxs("div", { className: "flex flex-col items-center gap-4", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-800", children: "Preview" }), _jsx(DriverLicensePreview, { data: formData }), _jsxs("div", { className: "flex gap-4 mt-4", children: [_jsx("button", { type: "button", className: "bg-gray-800 text-white px-4 py-2 hover:bg-gray-700", onClick: handleExportPNG, children: "\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14 PNG" }), _jsx("button", { type: "button", className: "bg-gray-700 text-white px-4 py-2 hover:bg-gray-600", onClick: handleExportPDF, children: "\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14 PDF (A4)" })] })] })] }));
};
DriverLicenseForm.displayName = "DriverLicenseForm";
export default DriverLicenseForm;
