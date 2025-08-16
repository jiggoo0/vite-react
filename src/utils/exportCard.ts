import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * 🔹 renderElementToCanvas
 *
 * - แปลง element เป็น canvas ด้วย html2canvas
 * - รองรับ scale และ CORS
 */
const renderElementToCanvas = async (
  elementId: string,
  scale = 2
): Promise<HTMLCanvasElement | null> => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`[exportCard] Element with id '${elementId}' not found`);
    return null;
  }

  try {
    return await html2canvas(element, { scale, useCORS: true, logging: false });
  } catch (error: unknown) {
    console.error("[exportCard] Failed to render element to canvas:", error);
    return null;
  }
};

/**
 * 🔹 exportCardAsPNG
 *
 * - ดาวน์โหลด element เป็นไฟล์ PNG
 */
export const exportCardAsPNG = async (
  elementId: string,
  fileName = "idcard.png"
): Promise<void> => {
  const canvas = await renderElementToCanvas(elementId);
  if (!canvas) return;

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = fileName;
  link.click();
};

/**
 * 🔹 exportCardAsPDF
 *
 * - ดาวน์โหลด element เป็นไฟล์ PDF
 * - orientation จะถูกตั้งตามขนาด canvas
 */
export const exportCardAsPDF = async (
  elementId: string,
  fileName = "idcard.pdf"
): Promise<void> => {
  const canvas = await renderElementToCanvas(elementId);
  if (!canvas) return;

  const pdf = new jsPDF({
    orientation: canvas.width > canvas.height ? "landscape" : "portrait",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(
    canvas.toDataURL("image/png"),
    "PNG",
    0,
    0,
    canvas.width,
    canvas.height
  );
  pdf.save(fileName);
};
