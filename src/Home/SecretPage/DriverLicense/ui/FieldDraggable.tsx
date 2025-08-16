'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

interface FieldDraggableProps {
  top: string;
  left: string;
  onPositionChange: (top: string, left: string) => void;
  children: React.ReactNode;
}

const FieldDraggable: React.FC<FieldDraggableProps> = ({
  top,
  left,
  onPositionChange,
  children,
}) => {
  const fieldRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const scaleRef = useRef(1);

  // Start dragging
  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(true);
    containerRef.current = fieldRef.current?.parentElement ?? null;

    if (containerRef.current) {
      const transform = containerRef.current.style.transform;
      const match = transform.match(/scale\(([\d.]+)\)/);
      if (match) scaleRef.current = parseFloat(match[1]);
    }
  };

  // Stop dragging
  const stopDrag = useCallback(() => setIsDragging(false), []);

  // Handle drag movement
  const onDragMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !fieldRef.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fieldRect = fieldRef.current.getBoundingClientRect();

      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;

      const adjustedX = (clientX - containerRect.left - fieldRect.width / 2) / scaleRef.current;
      const adjustedY = (clientY - containerRect.top - fieldRect.height / 2) / scaleRef.current;

      const clampedX = Math.max(
        0,
        Math.min(adjustedX, containerRect.width / scaleRef.current - fieldRect.width),
      );
      const clampedY = Math.max(
        0,
        Math.min(adjustedY, containerRect.height / scaleRef.current - fieldRect.height),
      );

      const newLeft = `${(clampedX / (containerRect.width / scaleRef.current)) * 100}%`;
      const newTop = `${(clampedY / (containerRect.height / scaleRef.current)) * 100}%`;

      onPositionChange(newTop, newLeft);
    },
    [isDragging, onPositionChange],
  );

  // Attach global event listeners
  useEffect(() => {
    window.addEventListener('mousemove', onDragMove, { passive: false });
    window.addEventListener('touchmove', onDragMove, { passive: false });
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchend', stopDrag);

    return () => {
      window.removeEventListener('mousemove', onDragMove);
      window.removeEventListener('touchmove', onDragMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchend', stopDrag);
    };
  }, [onDragMove, stopDrag]);

  return (
    <div
      ref={fieldRef}
      style={{
        position: 'absolute',
        top,
        left,
        cursor: 'grab',
        touchAction: 'none',
        userSelect: 'none',
      }}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      {children}
    </div>
  );
};

export default FieldDraggable;
