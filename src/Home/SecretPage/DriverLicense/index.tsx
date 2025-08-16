'use client';

import { FC, useState, useCallback } from 'react';
import DriverLicenseForm from './DriverLicenseForm';
import DriverLicensePreview from './DriverLicensePreview';
import { DriverLicenseData } from './types/driverLicense';
import { CardWrapper } from '../common/CardWrapper';
import { mockDriverLicenseData } from '@/data/mocks/mockDriverLicense';

const DriverLicenseSection: FC = () => {
  const [data, setData] = useState<DriverLicenseData>(mockDriverLicenseData);

  // อัปเดตข้อมูลจากฟอร์ม
  const handleFormResult = useCallback((formData: DriverLicenseData) => {
    setData((prev) => ({ ...prev, ...formData }));
  }, []);

  // รีเซ็ตข้อมูลกลับเป็นค่าเริ่มต้น
  const handleReset = useCallback(() => {
    setData(mockDriverLicenseData);
  }, []);

  return (
    <div className="space-y-8">
      {/* ฟอร์มแก้ไขข้อมูล */}
      <CardWrapper>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">ตรวจสอบใบขับขี่</h2>
          <button
            onClick={handleReset}
            className="px-3 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            รีเซ็ต
          </button>
        </div>
        <DriverLicenseForm initialData={data} onResult={handleFormResult} />
      </CardWrapper>

      {/* ตัวอย่างใบขับขี่ */}
      <CardWrapper>
        <h2 className="text-xl font-semibold mb-4">ตัวอย่างใบขับขี่</h2>
        <DriverLicensePreview data={data} />
      </CardWrapper>
    </div>
  );
};

export default DriverLicenseSection;
