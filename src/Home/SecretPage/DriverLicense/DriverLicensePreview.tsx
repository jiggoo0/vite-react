"use client";

import { FC, memo } from "react";
import { DriverLicenseData } from "./types/driverLicense";
import { driverLicenseFields, driverLicenseCardConfig } from "@/config/driverLicenseConfig";
import "@/styles/driverLicense.css";

interface Props {
  data: DriverLicenseData;
}

/**
 * DriverLicensePreview
 * -------------------------
 * Render driver license card layout:
 * - text, date, select, photo
 * - config จาก driverLicenseCardConfig
 */
const DriverLicensePreview: FC<Props> = ({ data }) => {
  const { cardWidth, cardHeight, bgDefault } = driverLicenseCardConfig;

  return (
    <div
      id="driver-license-preview"
      className="relative overflow-hidden border border-gray-300 bg-white"
      style={{
        width: cardWidth,
        height: cardHeight,
        backgroundImage: bgDefault ? `url(${bgDefault})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {driverLicenseFields.map((field) => {
        const value = data[field.id as keyof DriverLicenseData];
        if (!value) return null;

        if (field.type === "photo") {
          return (
            <img
              key={field.id}
              src={value as string}
              alt="Driver"
              className="absolute object-cover"
              style={{
                top: field.top,
                left: field.left,
                width: field.width,
                height: field.height,
              }}
            />
          );
        }

        return (
          <span
            key={field.id}
            className="absolute font-sans"
            style={{
              top: field.top,
              left: field.left,
              fontSize: field.fontSize,
              fontWeight: field.fontWeight,
              color: field.color ?? "#000",
              width: field.width ?? "auto",
              height: field.height ?? "auto",
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