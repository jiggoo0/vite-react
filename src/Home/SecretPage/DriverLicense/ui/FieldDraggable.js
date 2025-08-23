"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from "react";
/**
 * FieldDraggable
 * - ทำให้ child component สามารถลากภายใน container ได้
 * - รองรับ mouse + touch
 * - scale ของ parent container ถูกคำนวณ
 */
const FieldDraggable = ({ top, left, onPositionChange, children, }) => {
    const fieldRef = useRef(null);
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const scaleRef = useRef(1);
    // เริ่มลาก
    const startDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        containerRef.current = fieldRef.current?.parentElement ?? null;
        if (containerRef.current) {
            const transform = containerRef.current.style.transform;
            const match = transform.match(/scale\(([\d.]+)\)/);
            if (match)
                scaleRef.current = parseFloat(match[1]);
        }
    };
    // หยุดลาก
    const stopDrag = useCallback(() => setIsDragging(false), []);
    // คำนวณตำแหน่งใหม่เมื่อมีการลาก
    const onDragMove = useCallback((e) => {
        if (!isDragging || !fieldRef.current || !containerRef.current)
            return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const fieldRect = fieldRef.current.getBoundingClientRect();
        const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
        const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
        const adjustedX = (clientX - containerRect.left - fieldRect.width / 2) / scaleRef.current;
        const adjustedY = (clientY - containerRect.top - fieldRect.height / 2) / scaleRef.current;
        const clampedX = Math.max(0, Math.min(adjustedX, containerRect.width / scaleRef.current - fieldRect.width));
        const clampedY = Math.max(0, Math.min(adjustedY, containerRect.height / scaleRef.current - fieldRect.height));
        const newLeft = `${(clampedX / (containerRect.width / scaleRef.current)) * 100}%`;
        const newTop = `${(clampedY / (containerRect.height / scaleRef.current)) * 100}%`;
        onPositionChange(newTop, newLeft);
    }, [isDragging, onPositionChange]);
    // Attach / detach event listeners
    useEffect(() => {
        window.addEventListener("mousemove", onDragMove, { passive: false });
        window.addEventListener("touchmove", onDragMove, { passive: false });
        window.addEventListener("mouseup", stopDrag);
        window.addEventListener("touchend", stopDrag);
        return () => {
            window.removeEventListener("mousemove", onDragMove);
            window.removeEventListener("touchmove", onDragMove);
            window.removeEventListener("mouseup", stopDrag);
            window.removeEventListener("touchend", stopDrag);
        };
    }, [onDragMove, stopDrag]);
    return (_jsx("div", { ref: fieldRef, style: {
            position: "absolute",
            top,
            left,
            cursor: "grab",
            touchAction: "none",
            userSelect: "none",
        }, onMouseDown: startDrag, onTouchStart: startDrag, children: children }));
};
export default FieldDraggable;
