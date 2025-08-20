"use client";

import { FC } from "react";
import DriverLicensePreviewWithActions from "./DriverLicensePreviewWithActions";
import mockDriverLicenseData from "@__mocks__/mockDriverLicenseData";

/**
 * DriverLicensePage
 * หน้าแสดงตัวอย่างใบขับขี่
 */
const DriverLicensePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        ตัวอย่างใบขับขี่
      </h1>

      {/* Driver License Preview */}
      <DriverLicensePreviewWithActions data={mockDriverLicenseData} />
    </div>
  );
};

export default DriverLicensePage;