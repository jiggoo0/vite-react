"use client";

import { FC } from "react";
import DriverLicensePreviewWithActions from "./DriverLicensePreviewWithActions";
import { driverLicenseFields } from "@/config/driverLicenseConfig";
import { DriverLicenseData } from "./types/driverLicense";

// generate default data ตาม field ids
const defaultDriverLicenseData: DriverLicenseData = driverLicenseFields.reduce(
  (acc, field) => {
    acc[field.id as keyof DriverLicenseData] = "";
    return acc;
  },
  {} as DriverLicenseData
);

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

export default DriverLicensePage;