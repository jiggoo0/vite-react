"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DriverLicensePreviewWithActions from "./DriverLicensePreviewWithActions";
import { driverLicenseFields } from "@/config/driverLicenseConfig";
// generate default data ตาม field ids
const defaultDriverLicenseData = driverLicenseFields.reduce((acc, field) => {
    acc[field.id] = "";
    return acc;
}, {});
const DriverLicensePage = () => {
    return (_jsxs("div", { className: "min-h-screen bg-gray-100 p-6 flex flex-col items-center", children: [_jsx("h1", { className: "text-3xl font-bold mb-6 text-center", children: "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E43\u0E1A\u0E02\u0E31\u0E1A\u0E02\u0E35\u0E48" }), _jsx(DriverLicensePreviewWithActions, { data: defaultDriverLicenseData })] }));
};
export default DriverLicensePage;
