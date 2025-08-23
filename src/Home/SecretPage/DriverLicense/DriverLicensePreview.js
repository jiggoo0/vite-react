"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { driverLicenseFields, driverLicenseCardConfig } from "@/config/driverLicenseConfig";
import "@/styles/driverLicense.css";
const DriverLicensePreview = ({ data }) => {
    const { cardWidth, cardHeight, bgDefault } = driverLicenseCardConfig;
    return (_jsx("div", { id: "driver-license-preview", className: "relative overflow-hidden rounded-xl border border-gray-300 shadow-lg bg-white", style: {
            width: cardWidth,
            height: cardHeight,
            backgroundImage: `url(${bgDefault})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }, children: driverLicenseFields.map(field => {
            const value = data[field.id];
            if (!value)
                return null;
            // Photo field
            if (field.type === "photo") {
                return (_jsx("img", { src: value, alt: "Driver", className: "absolute rounded-md object-cover", style: {
                        top: field.top,
                        left: field.left,
                        width: field.width,
                        height: field.height,
                    } }, field.id));
            }
            // Text / date / select fields
            return (_jsx("span", { className: "absolute font-sans", style: {
                    top: field.top,
                    left: field.left,
                    fontSize: field.fontSize,
                    fontWeight: field.fontWeight || "400",
                    color: field.color || "#000",
                    width: field.width,
                    height: field.height,
                }, children: value }, field.id));
        }) }));
};
DriverLicensePreview.displayName = "DriverLicensePreview";
export default memo(DriverLicensePreview);
