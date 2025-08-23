"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import FieldDraggable from "./FieldDraggable";
/**
 * PhotoField
 * แสดงรูปภาพพร้อม draggable
 * pointerEvents ถูกตั้งเป็น "none" เพื่อไม่ให้ลากรูปแทนฟิลด์
 */
const PhotoField = ({ src, top, left, width = "120px", height = "150px", borderRadius = "8px", borderColor = "#ccc", borderWidth = "1px", background = "#fff", onPositionChange, }) => {
    return (_jsx(FieldDraggable, { top: top, left: left, onPositionChange: onPositionChange, children: _jsx("img", { src: src, alt: "photo", draggable: false, style: {
                width,
                height,
                objectFit: "cover",
                borderRadius,
                border: `${borderWidth} solid ${borderColor}`,
                background,
                display: "block",
                pointerEvents: "none", // ป้องกันไม่ให้ลากรูปแทนฟิลด์
                userSelect: "none",
            } }) }));
};
export default PhotoField;
