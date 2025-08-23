"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// Config และ Types
import { driverLicenseCardConfig, driverLicenseFields } from "@config/driverLicenseConfig";
// Component
import Card from "../ui/Card/Card";
import Button from "../ui/Button/Button";
// Mock Data
import mockDriverLicenseData from "@__mocks__/mockDriverLicenseData";
const SecureExportConsole = ({ data = mockDriverLicenseData, }) => {
    const cardRef = useRef(null);
    const exportPNG = async () => {
        if (!cardRef.current)
            return;
        const canvas = await html2canvas(cardRef.current, { scale: 2 });
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "driver_license.png";
        link.click();
    };
    const exportPDF = async () => {
        if (!cardRef.current)
            return;
        const canvas = await html2canvas(cardRef.current, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("l", "px", [
            parseInt(driverLicenseCardConfig.cardWidth, 10),
            parseInt(driverLicenseCardConfig.cardHeight, 10),
        ]);
        pdf.addImage(imgData, "PNG", 0, 0, parseInt(driverLicenseCardConfig.cardWidth, 10), parseInt(driverLicenseCardConfig.cardHeight, 10));
        pdf.save("driver_license.pdf");
    };
    return (_jsxs("div", { className: "flex flex-col items-center gap-4", children: [_jsx(Card, { ref: cardRef, className: "relative overflow-hidden shadow-xl", style: {
                    width: driverLicenseCardConfig.cardWidth,
                    height: driverLicenseCardConfig.cardHeight,
                    backgroundImage: `url(${driverLicenseCardConfig.bgDefault})`,
                    backgroundSize: "cover",
                }, children: driverLicenseFields.map((field) => {
                    const value = data[field.id] || "";
                    if (field.type === "photo" && typeof value === "string" && value) {
                        return (_jsx("img", { src: value, alt: "photo", style: {
                                position: "absolute",
                                top: field.top,
                                left: field.left,
                                width: field.width,
                                height: field.height,
                                objectFit: "cover",
                            } }, field.id));
                    }
                    return (_jsx("span", { style: {
                            position: "absolute",
                            top: field.top,
                            left: field.left,
                            fontSize: field.fontSize,
                            fontWeight: field.fontWeight,
                            width: field.width,
                        }, children: String(value) }, field.id));
                }) }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { onClick: exportPNG, children: "Export PNG" }), _jsx(Button, { onClick: exportPDF, children: "Export PDF" })] })] }));
};
export default SecureExportConsole;
