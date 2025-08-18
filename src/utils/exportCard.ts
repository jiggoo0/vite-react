import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * 🔹 renderElementToCanvas
 * แปลง HTML element เป็น canvas
 * - รองรับ scale, retina, และ CORS
 * @param elementId - id ของ element ที่ต้องการแปลง
 * @param scale - ค่าขยาย (default 2) เพื่อความคมชัด
 * @returns HTMLCanvasElement หรือ null
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
      backgroundColor: null, // รองรับ transparent background
    });
  } catch (error: unknown) {
    console.error("[exportCard] Failed to render element:", error);
    alert("ไม่สามารถสร้างภาพจาก element นี้ได้");
    return null;
  }
};

/**
 * 🔹 exportCardAsPNG
 * ดาวน์โหลด element เป็นไฟล์ PNG
 * @param elementId - id ของ element
 * @param fileName - ชื่อไฟล์ PNG
 */
export const exportCardAsPNG = async (
  elementId: string,
  fileName = "idcard.png"
): Promise<void> => {
  const canvas = await renderElementToCanvas(elementId);
  if (!canvas) return;

  try {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = fileName;
    link.click();
  } catch (error) {
    console.error("[exportCard] PNG download failed:", error);
    alert("เกิดข้อผิดพลาดในการดาวน์โหลด PNG");
  }
};

/**
 * 🔹 exportCardAsPDF
 * ดาวน์โหลด element เป็นไฟล์ PDF
 * - useA4 = true: ขนาด A4
 * - useA4 = false: ขนาดตาม element
 * @param elementId - id ของ element
 * @param fileName - ชื่อไฟล์ PDF
 * @param useA4 - เลือก export เป็น A4 หรือขนาด element
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
    // Export ขนาด A4
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // คำนวณสัดส่วนเพื่อให้พอดีกับหน้า A4
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
    // Export ขนาดตาม element
    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? "landscape" : "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(fileName);
  }
};
