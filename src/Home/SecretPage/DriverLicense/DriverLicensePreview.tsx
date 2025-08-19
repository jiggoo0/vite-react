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
 * แสดงใบขับขี่จำลองโดยใช้ driverLicenseConfig สำหรับตำแหน่งและสไตล์ field
 */
const DriverLicensePreview: FC<DriverLicensePreviewProps> = ({ data }) => {
  return (
    <div
      id="driver-license-preview"
      className="relative overflow-hidden rounded-xl border border-gray-300 shadow-lg bg-white"
      style={{
        width: driverLicenseConfig.cardWidth,
        height: driverLicenseConfig.cardHeight,
        backgroundImage: `url(${driverLicenseConfig.bgDefault})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Photo */}
      {data.photo && driverLicenseConfig.fields.photo && (
        <img
          src={data.photo}
          alt="Driver"
          className="absolute rounded-md object-cover"
          style={{
            top: driverLicenseConfig.fields.photo.top,
            left: driverLicenseConfig.fields.photo.left,
            width: driverLicenseConfig.fields.photo.width,
            height: driverLicenseConfig.fields.photo.height,
          }}
        />
      )}

      {/* Text Fields */}
      {(
        Object.keys(driverLicenseConfig.fields) as DriverLicenseFieldKeys[]
      ).map((key) => {
        if (key === "photo") return null;
        const config = driverLicenseConfig.fields[key];
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
