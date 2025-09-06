"use client";

import { FC, memo, useCallback } from "react";
import { exportCardAsPDF, exportCardAsPNG } from "@/utils/exportCard";
import { driverLicenseFields } from "@/config/driverLicenseConfig";
import type { DriverLicenseData } from "@/Home/AdminTools/DriverLicense/types/driverLicense";

interface Props {
  data: DriverLicenseData;
  className?: string;
  isBlurred?: boolean;
  cardId?: string; // allow external control
}

const DriverLicensePreview: FC<Props> = ({
  data,
  className = "",
  isBlurred = false,
  cardId = "driver-license-preview-card",
}) => {
  const blurClass = isBlurred ? "filter blur-sm" : "";

  const handleDownloadPNG = useCallback(
    async () => await exportCardAsPNG(cardId, "driver_license.webp"),
    [cardId]
  );

  const handleDownloadPDF = useCallback(
    async () => await exportCardAsPDF(cardId, "driver_license.pdf"),
    [cardId]
  );

  return (
    <div className={className}>
      <div
        id={cardId}
        className={`${blurClass} p-4 bg-white shadow rounded-md transition duration-300`}
      >
        <h2 className="text-xl font-semibold mb-2">ตัวอย่างใบขับขี่</h2>

        {data.photo && (
          <img
            src={data.photo}
            alt="License Photo"
            className="w-32 h-32 object-cover object-center mb-4 rounded-md"
          />
        )}

        <dl className="space-y-1">
          {driverLicenseFields
            .filter((f) => f.id !== "photo")
            .map((field) => {
              const value = data[field.id as keyof DriverLicenseData];
              return (
                <div key={field.id} className="flex gap-2">
                  <dt className="font-semibold min-w-[120px]">{field.label || field.id}:</dt>
                  <dd>{value}</dd>
                </div>
              );
            })}
        </dl>
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
