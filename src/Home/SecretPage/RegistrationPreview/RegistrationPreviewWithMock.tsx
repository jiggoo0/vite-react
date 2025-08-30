"use client";

import { FC } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import RegistrationPreview, { RegistrationPreviewProps } from "./RegistrationPreview";
import mockRegistrationData from "@__mocks__/mockRegistrationData";

const RegistrationPreviewWithMock: FC = () => {
  const handleDownloadPNG = async () => {
    const element = document.getElementById("registration-preview");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "registration-preview.png";
    link.click();
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById("registration-preview");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [(canvas.width * 72) / 96, (canvas.height * 72) / 96],
    });

    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      0,
      (canvas.width * 72) / 96,
      (canvas.height * 72) / 96
    );
    pdf.save("registration-preview.pdf");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="mb-6 text-3xl font-bold text-center">ตัวอย่างใบทะเบียนพาณิชย์</h1>

      <div id="registration-preview">
        <RegistrationPreview {...(mockRegistrationData as RegistrationPreviewProps)} />
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button className="btn btn-primary" onClick={handleDownloadPNG}>
          ดาวน์โหลด PNG
        </button>
        <button className="btn btn-primary" onClick={handleDownloadPDF}>
          ดาวน์โหลด PDF
        </button>
      </div>
    </div>
  );
};

export default RegistrationPreviewWithMock;
