"use client";

import { FC } from "react";
import DriverLicensePreview, { DriverLicenseData } from "./DriverLicensePreview";

interface Props {
  className?: string;
  isBlurred?: boolean;
  data: DriverLicenseData; // ต้องส่งครบทุก field
  onEdit?: () => void;
  onDownload?: () => void;
}

const DriverLicensePreviewWithActions: FC<Props> = ({
  className,
  isBlurred,
  data,
  onEdit,
  onDownload,
}) => {
  return (
    <div className={className}>
      <DriverLicensePreview isBlurred={isBlurred} data={data} />

      <div className="flex gap-2 mt-4">
        {onEdit && (
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500"
            onClick={onEdit}
          >
            แก้ไข
          </button>
        )}
        {onDownload && (
          <button
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500"
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