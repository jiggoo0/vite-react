"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export const DocumentExportActions = ({ targetId = "document-preview", margin = 10, }) => {
    const exportAsPDF = async () => {
        const element = document.getElementById(targetId);
        if (!element)
            return alert("ไม่พบเอกสารที่ต้องการ export");
        const clone = element.cloneNode(true);
        clone.querySelectorAll("button").forEach((btn) => btn.remove());
        const canvas = await html2canvas(clone, { scale: 2, useCORS: true });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
        });
        const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        let remainingHeight = pdfHeight;
        let position = margin;
        while (remainingHeight > 0) {
            const pageHeight = pdf.internal.pageSize.getHeight() - 2 * margin;
            const height = remainingHeight > pageHeight ? pageHeight : remainingHeight;
            pdf.addImage(imgData, "PNG", margin, position, pdfWidth, height, undefined, "FAST");
            remainingHeight -= pageHeight;
            if (remainingHeight > 0)
                pdf.addPage();
            position = margin;
        }
        pdf.save("document.pdf");
    };
    const exportAsPNG = async () => {
        const element = document.getElementById(targetId);
        if (!element)
            return alert("ไม่พบเอกสารที่ต้องการ export");
        const clone = element.cloneNode(true);
        clone.querySelectorAll("button").forEach((btn) => btn.remove());
        const canvas = await html2canvas(clone, { scale: 2, useCORS: true });
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "document.png";
        link.click();
    };
    return (_jsxs("div", { className: "flex gap-4", children: [_jsx("button", { onClick: exportAsPDF, className: "px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors", children: "Export as PDF (A4)" }), _jsx("button", { onClick: exportAsPNG, className: "px-4 py-2 bg-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-300 transition-colors", children: "Export as PNG" })] }));
};
DocumentExportActions.displayName = "DocumentExportActions";
export default DocumentExportActions;
