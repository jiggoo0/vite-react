// src/utils/exportCard.ts
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Export a DOM element as PNG
 * @param elementId - The ID of the DOM element to export
 * @param fileName - ชื่อไฟล์ PNG
 */
export const exportCardAsPNG = async (
  elementId: string,
  fileName = "idcard.png"
) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id '${elementId}' not found`);
    return;
  }

  try {
    const canvas = await html2canvas(element, { scale: 2 });
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = fileName;
    link.click();
  } catch (err) {
    console.error("Failed to export PNG:", err);
  }
};

/**
 * Export a DOM element as PDF
 * @param elementId - The ID of the DOM element to export
 * @param fileName - ชื่อไฟล์ PDF
 */
export const exportCardAsPDF = async (
  elementId: string,
  fileName = "idcard.pdf"
) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id '${elementId}' not found`);
    return;
  }

  try {
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(fileName);
  } catch (err) {
    console.error("Failed to export PDF:", err);
  }
};
