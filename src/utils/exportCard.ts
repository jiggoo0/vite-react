// src/utils/exportCard.ts
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export type ThemeType = "light" | "dark" | "business";

const renderElementToCanvas = async (
  elementId: string,
  scale = 2,
  theme: ThemeType = "light"
): Promise<HTMLCanvasElement | null> => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`[exportCard] Element not found: id=${elementId}`);
    return null;
  }

  const previousTheme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", theme);

  try {
    const scaleFactor = scale * (window.devicePixelRatio || 1);
    return await html2canvas(element, {
      scale: scaleFactor,
      useCORS: true,
      logging: false,
      backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
      allowTaint: true,
    });
  } catch (err) {
    console.error("[exportCard] Failed to render element:", err);
    return null;
  } finally {
    document.documentElement.setAttribute("data-theme", previousTheme || "light");
  }
};

export const exportCardAsPNG = async (
  elementId: string,
  fileName = "idcard.png",
  theme: ThemeType = "light"
): Promise<void> => {
  const canvas = await renderElementToCanvas(elementId, 2, theme);
  if (!canvas) return;

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportCardAsPDF = async (
  elementId: string,
  fileName = "idcard.pdf",
  useA4 = false,
  theme: ThemeType = "light"
): Promise<void> => {
  const canvas = await renderElementToCanvas(elementId, 2, theme);
  if (!canvas) return;

  const imgData = canvas.toDataURL("image/png");

  try {
    let pdf: jsPDF;

    if (useA4) {
      pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
      const imgWidth = canvas.width * ratio;
      const imgHeight = canvas.height * ratio;
      const xOffset = (pageWidth - imgWidth) / 2;
      const yOffset = (pageHeight - imgHeight) / 2;
      pdf.addImage(imgData, "PNG", xOffset, yOffset, imgWidth, imgHeight);
    } else {
      pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? "landscape" : "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    }

    pdf.save(fileName);
  } catch (err) {
    console.error("[exportCard] PDF export failed:", err);
  }
};
