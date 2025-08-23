"use client";

import { FC } from "react";
import DriverLicensePreviewWithActions from "./DriverLicensePreviewWithActions";
import { driverLicenseFields } from "@/config/driverLicenseConfig";
import { DriverLicenseData } from "./types/driverLicense";

/**
 * สร้าง default data สำหรับ DriverLicense ตาม field config
 */
const defaultDriverLicenseData: DriverLicenseData = driverLicenseFields.reduce(
  (acc, field) => {
    acc[field.id as keyof DriverLicenseData] = "";
    return acc;
  },
  {} as DriverLicenseData
);

/**
 * DriverLicensePage
 * -------------------------
 * Page แสดงตัวอย่างใบขับขี่
 * - รองรับ preview + export PNG/PDF
 */
const DriverLicensePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        ตัวอย่างใบขับขี่
      </h1>

      {/* Driver License Preview with Export Actions */}
      <DriverLicensePreviewWithActions data={defaultDriverLicenseData} />
    </div>
  );
};

DriverLicensePage.displayName = "DriverLicensePage";

export default DriverLicensePage;