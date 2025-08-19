import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * แปลง HTML element เป็น canvas
 */
const renderElementToCanvas = async (
  elementId: string,
  scale = 2
): Promise<HTMLCanvasElement | null> => {
  const element = document.getElementById(elementId);
  if (!element) {
    alert(`ไม่พบ element ที่มี id = ${elementId}`);
    return null;
  }

  try {
    const scaleFactor = scale * (window.devicePixelRatio || 1);
    return await html2canvas(element, {
      scale: scaleFactor,
      useCORS: true,
      logging: false,
      backgroundColor: null,
    });
  } catch (error: unknown) {
    console.error("[exportCard] Failed to render element:", error);
    alert("ไม่สามารถสร้างภาพจาก element นี้ได้");
    return null;
  }
};

/**
 * ดาวน์โหลด element เป็น PNG
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
 * ดาวน์โหลด element เป็น PDF
 */
export const exportCardAsPDF = async (
  elementId: string,
  fileName = "idcard.pdf",
  useA4 = false
): Promise<void> => {
  const canvas = await renderElementToCanvas(elementId);
  if (!canvas) return;

  const imgData = canvas.toDataURL("image/png");

  if (useA4) {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const ratio = Math.min(
      pageWidth / canvas.width,
      pageHeight / canvas.height
    );
    const imgWidth = canvas.width * ratio;
    const imgHeight = canvas.height * ratio;

    const xOffset = (pageWidth - imgWidth) / 2;
    const yOffset = (pageHeight - imgHeight) / 2;

    pdf.addImage(imgData, "PNG", xOffset, yOffset, imgWidth, imgHeight);
    pdf.save(fileName);
  } else {
    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? "landscape" : "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(fileName);
  }
};
