// src/utils/exportCard.ts
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Export a DOM element as PNG
 * @param elementId - The ID of the DOM element to export
 * @param fileName - ชื่อไฟล์ PNG (default: idcard.png)
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
    // Render DOM element to canvas
    const canvas = await html2canvas(element, { scale: 2 });
    const dataUrl = canvas.toDataURL("image/png");

    // Trigger download
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = fileName;
    link.click();
  } catch (error: unknown) {
    console.error("Failed to export PNG:", error);
  }
};

/**
 * Export a DOM element as PDF
 * @param elementId - The ID of the DOM element to export
 * @param fileName - ชื่อไฟล์ PDF (default: idcard.pdf)
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
    // Render DOM element to canvas
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Initialize PDF with exact canvas dimensions
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    // Add image and save
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(fileName);
  } catch (error: unknown) {
    console.error("Failed to export PDF:", error);
  }
};
