"use client";

import { FC, memo, useRef } from "react";
import { MedicalCertificateData } from "./types/medicalCertificate";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface MedicalCertificateProps {
  data: MedicalCertificateData;
}

const defaultText = "—";
const withFallback = (value?: string) => value?.trim() || defaultText;

const MedicalCertificate: FC<MedicalCertificateProps> = ({ data }) => {
  const certRef = useRef<HTMLDivElement>(null);

  const {
    referenceNo,
    hospital,
    ministryOffice,
    date,
    doctorName,
    doctorLicenseNo,
    patientTitle,
    patientName,
    address,
    citizenId,
    examinedDate,
    diagnosis,
    doctorSummary,
    restFromDate,
    restToDate,
    otherNote,
    doctorSigner,
    patientSigner,
  } = data;

  // Download PNG
  const handleDownloadPNG = async () => {
    if (!certRef.current) return;
    const canvas = await html2canvas(certRef.current, { scale: 2 });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "medical-certificate.png";
    link.click();
  };

  // Download PDF
  const handleDownloadPDF = async () => {
    if (!certRef.current) return;
    const canvas = await html2canvas(certRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("medical-certificate.pdf");
  };

  return (
    <div className="space-y-4">
      <div
        ref={certRef}
        className="w-full h-full p-6 rounded-xl shadow-md bg-white relative overflow-hidden"
        style={{ minHeight: 400 }}
      >
        <h2 className="text-xl font-bold mb-4 text-center">ใบรับรองแพทย์</h2>

        <div className="space-y-2 text-gray-700">
          <p>
            <strong>เลขที่อ้างอิง:</strong> {withFallback(referenceNo)}
          </p>
          <p>
            <strong>โรงพยาบาล:</strong> {withFallback(hospital)}
          </p>
          <p>
            <strong>สำนักงานกระทรวง:</strong> {withFallback(ministryOffice)}
          </p>
          <p>
            <strong>วันที่ออก:</strong> {withFallback(date)}
          </p>
          <p>
            <strong>ชื่อแพทย์:</strong> {withFallback(doctorName)}
          </p>
          <p>
            <strong>หมายเลขใบอนุญาต:</strong> {withFallback(doctorLicenseNo)}
          </p>
          <p>
            <strong>ชื่อผู้ป่วย:</strong> {withFallback(patientTitle)} {withFallback(patientName)}
          </p>
          <p>
            <strong>ที่อยู่:</strong> {withFallback(address)}
          </p>
          <p>
            <strong>หมายเลขบัตรประชาชน:</strong> {withFallback(citizenId)}
          </p>
          <p>
            <strong>วันที่ตรวจ:</strong> {withFallback(examinedDate)}
          </p>
          <p>
            <strong>การวินิจฉัย:</strong> {withFallback(diagnosis)}
          </p>
          <p>
            <strong>สรุปความเห็นแพทย์:</strong> {withFallback(doctorSummary)}
          </p>
          <p>
            <strong>หยุดพัก:</strong> ตั้งแต่ {withFallback(restFromDate)} ถึง{" "}
            {withFallback(restToDate)}
          </p>
          {otherNote && (
            <p>
              <strong>อื่นๆ:</strong> {withFallback(otherNote)}
            </p>
          )}

          {/* Signatures */}
          <div className="mt-4 space-y-1">
            <p>
              <strong>แพทย์ลงชื่อ:</strong> {withFallback(doctorSigner)}
            </p>
            <p>
              <strong>ผู้ป่วยลงชื่อ:</strong> {withFallback(patientSigner)}
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Download PDF
        </button>
        <button
          onClick={handleDownloadPNG}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Download PNG
        </button>
      </div>
    </div>
  );
};

MedicalCertificate.displayName = "MedicalCertificate";

export default memo(MedicalCertificate);
