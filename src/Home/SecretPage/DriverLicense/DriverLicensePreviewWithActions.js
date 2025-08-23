"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { exportCardAsPNG, exportCardAsPDF } from "@/utils/exportCard";
import DriverLicensePreview from "./DriverLicensePreview";
/**
 * DriverLicensePreviewWithActions
 * แสดงใบขับขี่พร้อมปุ่ม export PNG/PDF
 */
const DriverLicensePreviewWithActions = ({ data }) => {
    const handleExportPNG = () => exportCardAsPNG("driver-license-preview", "driver-license.png");
    const handleExportPDF = () => exportCardAsPDF("driver-license-preview", "driver-license.pdf", true);
    return (_jsxs("div", { className: "flex flex-col items-center gap-6 w-full max-w-3xl", children: [_jsx(DriverLicensePreview, { data: data }), _jsxs("div", { className: "flex gap-4 mt-4", children: [_jsx("button", { type: "button", className: "bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700", onClick: handleExportPNG, children: "\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14 PNG" }), _jsx("button", { type: "button", className: "bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500", onClick: handleExportPDF, children: "\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14 PDF (A4)" })] })] }));
};
DriverLicensePreviewWithActions.displayName = "DriverLicensePreviewWithActions";
export default DriverLicensePreviewWithActions;
