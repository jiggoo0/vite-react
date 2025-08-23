"use client";

import { FC, memo } from "react";
import { DriverLicenseData } from "./types/driverLicense";
import { exportCardAsPNG, exportCardAsPDF } from "@/utils/exportCard";
import DriverLicensePreview from "./DriverLicensePreview";

interface Props {
  data: DriverLicenseData;
}

/**
 * DriverLicensePreviewWithActions
 * -------------------------
 * แสดงใบขับขี่พร้อมปุ่ม export PNG/PDF
 */
const DriverLicensePreviewWithActions: FC<Props> = ({ data }) => {
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
          className="btn btn-primary"
          onClick={handleExportPNG}
          aria-label="ดาวน์โหลด PNG ใบขับขี่"
        >
          ดาวน์โหลด PNG
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleExportPDF}
          aria-label="ดาวน์โหลด PDF ใบขับขี่"
        >
          ดาวน์โหลด PDF (A4)
        </button>
      </div>
    </div>
  );
};

DriverLicensePreviewWithActions.displayName = "DriverLicensePreviewWithActions";

export default memo(DriverLicensePreviewWithActions);