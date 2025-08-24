"use client";

import { FC, useMemo } from "react";
import DriverLicensePreviewWithActions from "./DriverLicensePreviewWithActions";
import { driverLicenseFields } from "@/config/driverLicenseConfig";
import { DriverLicenseData } from "./types/driverLicense";

/**
 * DriverLicensePage
 * -------------------------
 * Page แสดงตัวอย่างใบขับขี่
 * - รองรับ preview + export PNG/PDF
 * - responsive, flat UI
 */
const DriverLicensePage: FC = () => {
  // สร้าง default data memoized
  const defaultDriverLicenseData: DriverLicenseData = useMemo(
    () =>
      driverLicenseFields.reduce((acc, field) => {
        acc[field.id as keyof DriverLicenseData] = "";
        return acc;
      }, {} as DriverLicenseData),
    []
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        ตัวอย่างใบขับขี่
      </h1>

      {/* Driver License Preview with Export Actions */}
      <DriverLicensePreviewWithActions data={defaultDriverLicenseData} />
    </div>
  );
};

DriverLicensePage.displayName = "DriverLicensePage";

export default DriverLicensePage;