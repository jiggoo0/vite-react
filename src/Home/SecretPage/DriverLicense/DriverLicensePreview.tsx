"use client";

import { FC, memo } from "react";
import { exportCardAsPDF, exportCardAsPNG } from "@/utils/exportCard";

/**
 * Type ของใบขับขี่
 */
export interface DriverLicenseData {
  fullName: string; // ชื่อ-นามสกุล
  idNumber: string; // เลขบัตรประชาชน / ใบขับขี่
  dob: string; // วันเกิด
  issueDate: string; // วันออกบัตร
  expiryDate: string; // วันหมดอายุ
  address: string; // ที่อยู่
  photo?: string; // URL รูปถ่าย (optional)
  licenseType: string; // ประเภทใบขับขี่
  bloodType: string; // หมู่เลือด
}

export type DriverLicensePreviewData = DriverLicenseData;

interface Props {
  data: DriverLicenseData;
  className?: string;
  isBlurred?: boolean;
}

const DriverLicensePreview: FC<Props> = ({ data, className = "", isBlurred = false }) => {
  const blurClass = isBlurred ? "filter blur-sm" : "";
  const cardId = "driver-license-preview-card";

  const handleDownloadPNG = async () => {
    await exportCardAsPNG(cardId, "driver_license.png");
  };

  const handleDownloadPDF = async () => {
    await exportCardAsPDF(cardId, "driver_license.pdf");
  };

  return (
    <div className={`${className}`}>
      <div
        id={cardId}
        className={`${blurClass} p-4 bg-white shadow rounded-md transition-filter duration-300`}
      >
        <h2 className="text-xl font-semibold mb-2">ตัวอย่างใบขับขี่</h2>

        {data.photo && (
          <img
            src={data.photo}
            alt="License Photo"
            className="w-32 h-32 object-cover object-center mb-4 rounded-md"
          />
        )}

        <p>
          <strong>ชื่อ-นามสกุล:</strong> {data.fullName}
        </p>
        <p>
          <strong>เลขบัตร/ใบขับขี่:</strong> {data.idNumber}
        </p>
        <p>
          <strong>วันเกิด:</strong> {data.dob}
        </p>
        <p>
          <strong>วันออกบัตร:</strong> {data.issueDate}
        </p>
        <p>
          <strong>วันหมดอายุ:</strong> {data.expiryDate}
        </p>
        <p>
          <strong>ที่อยู่:</strong> {data.address}
        </p>
        <p>
          <strong>ประเภทใบขับขี่:</strong> {data.licenseType}
        </p>
        <p>
          <strong>หมู่เลือด:</strong> {data.bloodType}
        </p>
      </div>

      {!isBlurred && (
        <div className="flex gap-2 mt-4">
          <button
            type="button"
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500 transition"
            onClick={handleDownloadPNG}
          >
            ดาวน์โหลด PNG
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500 transition"
            onClick={handleDownloadPDF}
          >
            ดาวน์โหลด PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(DriverLicensePreview);
