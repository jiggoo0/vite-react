"use client";

import { FC, memo } from "react";
import { DriverLicenseData } from "./types/driverLicense";
import { driverLicenseFields, driverLicenseCardConfig } from "@/config/driverLicenseConfig";
import "@/styles/driverLicense.css";

interface DriverLicensePreviewProps {
  data: DriverLicenseData;
}

const DriverLicensePreview: FC<DriverLicensePreviewProps> = ({ data }) => {
  const { cardWidth, cardHeight, bgDefault } = driverLicenseCardConfig;

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
      {driverLicenseFields.map(field => {
        const value = data[field.id as keyof DriverLicenseData];
        if (!value) return null;

        // Photo field
        if (field.type === "photo") {
          return (
            <img
              key={field.id}
              src={value as string}
              alt="Driver"
              className="absolute rounded-md object-cover"
              style={{
                top: field.top,
                left: field.left,
                width: field.width,
                height: field.height,
              }}
            />
          );
        }

        // Text / date / select fields
        return (
          <span
            key={field.id}
            className="absolute font-sans"
            style={{
              top: field.top,
              left: field.left,
              fontSize: field.fontSize,
              fontWeight: field.fontWeight || "400",
              color: field.color || "#000",
              width: field.width,
              height: field.height,
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