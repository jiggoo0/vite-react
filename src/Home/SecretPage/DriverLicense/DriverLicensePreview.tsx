"use client";

import { FC, memo } from "react";
import {
  DriverLicenseData,
  DriverLicenseFieldKeys,
} from "./types/driverLicense";
import { driverLicenseConfig } from "./driverLicenseConfig";
import "@/styles/driverLicense.css";

interface DriverLicensePreviewProps {
  data: DriverLicenseData;
}

/**
 * DriverLicensePreview
 * แสดงใบขับขี่จำลองโดยใช้ driverLicenseConfig
 * สำหรับตำแหน่งและสไตล์ของแต่ละ field
 */
const DriverLicensePreview: FC<DriverLicensePreviewProps> = ({ data }) => {
  const { cardWidth, cardHeight, bgDefault, fields } = driverLicenseConfig;

  return (
    <div
      id="driver-license-preview"
      className="relative overflow-hidden rounded-xl border border-gray-300 shadow-lg bg-white"
      style={{
        width: cardWidth,
        height: cardHeight,
        backgroundImage: `url(${bgDefault})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Photo */}
      {data.photo && fields.photo && (
        <img
          src={data.photo}
          alt="Driver"
          className="absolute rounded-md object-cover"
          style={{
            top: fields.photo.top,
            left: fields.photo.left,
            width: fields.photo.width,
            height: fields.photo.height,
          }}
        />
      )}

      {/* Text Fields */}
      {(Object.keys(fields) as DriverLicenseFieldKeys[]).map((key) => {
        if (key === "photo") return null; // Photo แสดงแล้ว

        const config = fields[key];
        const value = (data[key] as string) || "";

        return (
          <span
            key={key}
            className="absolute font-sans"
            style={{
              top: config.top,
              left: config.left,
              fontSize: config.fontSize,
              fontWeight: config.fontWeight || "400",
              color: config.color || "#000",
              width: config.width,
              height: config.height,
            }}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
};

DriverLicensePreview.displayName = "DriverLicensePreview";

export default memo(DriverLicensePreview);