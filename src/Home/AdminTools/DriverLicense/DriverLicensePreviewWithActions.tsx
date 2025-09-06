"use client";

import { FC } from "react";
import DriverLicensePreview from "./DriverLicensePreview";
import type { DriverLicenseData } from "@/Home/AdminTools/DriverLicense/types/driverLicense"; // ✅ updated

interface Props {
  className?: string;
  isBlurred?: boolean;
  data: DriverLicenseData;
  onEdit?: () => void;
  onDownload?: () => void;
}

const DriverLicensePreviewWithActions: FC<Props> = ({
  className = "",
  isBlurred = false,
  data,
  onEdit,
  onDownload,
}) => {
  return (
    <div className={`${className} space-y-4`}>
      <DriverLicensePreview isBlurred={isBlurred} data={data} />

      <div className="flex gap-2">
        {onEdit && (
          <button
            type="button"
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500 transition-colors"
            onClick={onEdit}
          >
            แก้ไข
          </button>
        )}
        {onDownload && (
          <button
            type="button"
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500 transition-colors"
            onClick={onDownload}
          >
            ดาวน์โหลด
          </button>
        )}
      </div>
    </div>
  );
};

export default DriverLicensePreviewWithActions;
