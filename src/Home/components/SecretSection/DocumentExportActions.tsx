"use client";

import { FC, useCallback } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface DocumentExportActionsProps {
  /** id ของ element ที่ต้องการ export */
  targetId?: string;
  /** margin รอบเอกสารเป็น mm */
  margin?: number;
}

const DocumentExportActions: FC<DocumentExportActionsProps> = ({
  targetId = "document-preview",
  margin = 10,
}) => {
  const exportAsPDF = useCallback(async () => {
    const element = document.getElementById(targetId);
    if (!element) return alert("ไม่พบเอกสารที่ต้องการ export");

    // clone element และ remove button ทุกตัว
    const clone = element.cloneNode(true) as HTMLElement;
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
    let yOffset = margin;

    while (remainingHeight > 0) {
      const pageHeight = pdf.internal.pageSize.getHeight() - 2 * margin;
      const drawHeight =
        remainingHeight > pageHeight ? pageHeight : remainingHeight;

      pdf.addImage(
        imgData,
        "PNG",
        margin,
        yOffset,
        pdfWidth,
        drawHeight,
        undefined,
        "FAST"
      );

      remainingHeight -= pageHeight;
      if (remainingHeight > 0) {
        pdf.addPage();
        yOffset = margin;
      }
    }

    pdf.save("document.pdf");
  }, [targetId, margin]);

  const exportAsPNG = useCallback(async () => {
    const element = document.getElementById(targetId);
    if (!element) return alert("ไม่พบเอกสารที่ต้องการ export");

    const clone = element.cloneNode(true) as HTMLElement;
    clone.querySelectorAll("button").forEach((btn) => btn.remove());

    const canvas = await html2canvas(clone, { scale: 2, useCORS: true });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "document.png";
    link.click();
  }, [targetId]);

  return (
    <div className="flex gap-4">
      <button
        onClick={exportAsPDF}
        className="px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        Export as PDF (A4)
      </button>
      <button
        onClick={exportAsPNG}
        className="px-4 py-2 bg-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-300 transition-colors"
      >
        Export as PNG
      </button>
    </div>
  );
};

DocumentExportActions.displayName = "DocumentExportActions";
export default DocumentExportActions;
