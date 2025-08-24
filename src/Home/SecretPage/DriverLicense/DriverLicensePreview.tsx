"use client";

import { FC, memo } from "react";

/**
 * Type ของใบขับขี่
 */
export interface DriverLicenseData {
  fullName: string;       // ชื่อ-นามสกุล
  idNumber: string;       // เลขบัตรประชาชน / ใบขับขี่
  dob: string;            // วันเกิด
  issueDate: string;      // วันออกบัตร
  expiryDate: string;     // วันหมดอายุ
  address: string;        // ที่อยู่
  photo?: string;         // URL รูปถ่าย (optional)
  licenseType: string;    // ประเภทใบขับขี่
  bloodType: string;      // หมู่เลือด
}

export type DriverLicensePreviewData = DriverLicenseData;

interface Props {
  data: DriverLicenseData;
  className?: string;
  isBlurred?: boolean;
}

const DriverLicensePreview: FC<Props> = ({ data, className, isBlurred }) => {
  const blurClass = isBlurred ? "filter blur-sm" : "";

  return (
    <div className={`${className ?? ""} ${blurClass} p-4 bg-white shadow rounded-md`}>
      <h2 className="text-xl font-semibold mb-2">ตัวอย่างใบขับขี่</h2>

      {data.photo && (
        <img
          src={data.photo}
          alt="License Photo"
          className="w-32 h-32 object-cover mb-4 rounded-md"
        />
      )}

      <p><strong>ชื่อ-นามสกุล:</strong> {data.fullName}</p>
      <p><strong>เลขบัตร/ใบขับขี่:</strong> {data.idNumber}</p>
      <p><strong>วันเกิด:</strong> {data.dob}</p>
      <p><strong>วันออกบัตร:</strong> {data.issueDate}</p>
      <p><strong>วันหมดอายุ:</strong> {data.expiryDate}</p>
      <p><strong>ที่อยู่:</strong> {data.address}</p>
      <p><strong>ประเภทใบขับขี่:</strong> {data.licenseType}</p>
      <p><strong>หมู่เลือด:</strong> {data.bloodType}</p>
    </div>
  );
};

export default memo(DriverLicensePreview);