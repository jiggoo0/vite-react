'use client';

import React, { useRef, useEffect, useState } from 'react';
import { driverLicenseConfig } from '@/data/mocks/mockDriverLicense';
import { DriverLicenseData, DriverLicenseFieldKeys } from './types/driverLicense';
import TextField from './ui/TextField';
import PhotoField from './ui/PhotoField';

export interface DriverLicensePreviewProps {
  data: DriverLicenseData;
  onFieldUpdate?: (key: DriverLicenseFieldKeys, updates: { top: string; left: string }) => void;
}

const DriverLicensePreview: React.FC<DriverLicensePreviewProps> = ({ data, onFieldUpdate }) => {
  const { cardWidth, cardHeight, bgDefault, fields } = driverLicenseConfig;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // 📏 Auto scale ให้พอดีกับ container
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.parentElement?.clientWidth || cardWidth;
      setScale(Math.min(parentWidth / cardWidth, 1));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardWidth]);

  // 📌 อัปเดตตำแหน่งกลับไปยัง parent
  const handlePositionChange = (key: DriverLicenseFieldKeys, top: string, left: string) => {
    onFieldUpdate?.(key, { top, left });
  };

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center"
      style={{ width: '100%', overflow: 'auto' }}
    >
      <div
        className="relative shadow-lg border rounded-lg overflow-hidden"
        style={{
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          backgroundImage: `url(${bgDefault})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {(
          Object.entries(fields) as [
            DriverLicenseFieldKeys,
            (typeof fields)[DriverLicenseFieldKeys],
          ][]
        ).map(([key, cfg]) => {
          // 🔹 Cast ให้เป็น string ชัดเจน
          const value = String(data[key] || '');

          if (key === 'photo') {
            return (
              <PhotoField
                key={key}
                src={value}
                top={cfg.top}
                left={cfg.left}
                width={cfg.width || '120px'}
                height={cfg.height || '150px'}
                borderRadius="8px"
                onPositionChange={(t, l) => handlePositionChange(key, t, l)}
              />
            );
          }

          return (
            <TextField
              key={key}
              value={value}
              top={cfg.top}
              left={cfg.left}
              fontSize={cfg.fontSize}
              fontWeight={cfg.fontWeight}
              color={cfg.color}
              onPositionChange={(t, l) => handlePositionChange(key, t, l)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DriverLicensePreview;
