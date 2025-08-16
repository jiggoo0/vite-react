'use client';

import React from 'react';
import FieldDraggable from './FieldDraggable';

interface TextFieldProps {
  value: string;
  top: string;
  left: string;
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
  background?: string;
  padding?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  textAlign?: 'left' | 'center' | 'right';
  onPositionChange: (top: string, left: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  top,
  left,
  fontSize = '16px',
  fontWeight = 500,
  color = '#000',
  background = 'rgba(255,255,255,0.4)',
  padding = '0 4px',
  borderRadius = '4px',
  borderColor = 'transparent',
  borderWidth = '0px',
  textAlign = 'left',
  onPositionChange,
}) => {
  return (
    <FieldDraggable top={top} left={left} onPositionChange={onPositionChange}>
      <span
        style={{
          fontSize,
          fontWeight,
          color,
          background,
          padding,
          borderRadius,
          border: `${borderWidth} solid ${borderColor}`,
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'auto', // ให้ drag ผ่าน FieldDraggable แต่ยังสามารถ select text ได้
          textAlign,
          display: 'inline-block',
        }}
      >
        {value}
      </span>
    </FieldDraggable>
  );
};

export default TextField;
