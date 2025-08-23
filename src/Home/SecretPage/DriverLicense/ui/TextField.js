"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import FieldDraggable from "./FieldDraggable";
const TextField = ({ value, top, left, fontSize = "16px", fontWeight = 500, color = "#000", background = "rgba(255,255,255,0.4)", padding = "0 4px", borderRadius = "4px", borderColor = "transparent", borderWidth = "0px", textAlign = "left", onPositionChange, }) => {
    return (_jsx(FieldDraggable, { top: top, left: left, onPositionChange: onPositionChange, children: _jsx("span", { style: {
                fontSize,
                fontWeight,
                color,
                background,
                padding,
                borderRadius,
                border: `${borderWidth} solid ${borderColor}`,
                whiteSpace: "nowrap",
                userSelect: "none",
                pointerEvents: "auto",
                textAlign,
                display: "inline-block",
            }, children: value }) }));
};
export default TextField;
