"use client";

import React from "react";
import FieldDraggable from "./FieldDraggable";

interface PhotoFieldProps {
  src: string;
  top: string;
  left: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  background?: string;
  onPositionChange: (top: string, left: string) => void;
}

/**
 * PhotoField
 * --------------------
 * แสดงรูปภาพพร้อม draggable field
 * pointerEvents ถูกตั้งเป็น "none" เพื่อไม่ให้ลากรูปแทน field
 */
const PhotoField: React.FC<PhotoFieldProps> = ({
  src,
  top,
  left,
  width = "120px",
  height = "150px",
  borderRadius = "8px",
  borderColor = "#ccc",
  borderWidth = "1px",
  background = "#fff",
  onPositionChange,
}) => (
  <FieldDraggable top={top} left={left} onPositionChange={onPositionChange}>
    <img
      src={src}
      alt="photo"
      draggable={false}
      style={{
        width,
        height,
        objectFit: "cover",
        borderRadius,
        border: `${borderWidth} solid ${borderColor}`,
        background,
        display: "block",
        pointerEvents: "none", // ป้องกันไม่ให้ลากรูปแทน field
        userSelect: "none",
      }}
    />
  </FieldDraggable>
);

export default PhotoField;
