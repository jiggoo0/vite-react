"use client";

import { FC } from "react";
import { DriverLicenseData } from "./types/driverLicense";
import { exportCardAsPNG, exportCardAsPDF } from "@/utils/exportCard";
import DriverLicensePreview from "./DriverLicensePreview";

interface DriverLicensePreviewWithActionsProps {
  data: DriverLicenseData;
}

/**
 * DriverLicensePreviewWithActions
 * แสดงใบขับขี่พร้อมปุ่ม export PNG/PDF
 */
const DriverLicensePreviewWithActions: FC<DriverLicensePreviewWithActionsProps> = ({ data }) => {
  const handleExportPNG = () =>
    exportCardAsPNG("driver-license-preview", "driver-license.png");

  const handleExportPDF = () =>
    exportCardAsPDF("driver-license-preview", "driver-license.pdf", true);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      {/* Preview */}
      <DriverLicensePreview data={data} />

      {/* Export Actions */}
      <div className="flex gap-4 mt-4">
        <button
          type="button"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={handleExportPNG}
        >
          ดาวน์โหลด PNG
        </button>
        <button
          type="button"
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
          onClick={handleExportPDF}
        >
          ดาวน์โหลด PDF (A4)
        </button>
      </div>
    </div>
  );
};

DriverLicensePreviewWithActions.displayName = "DriverLicensePreviewWithActions";
export default DriverLicensePreviewWithActions;