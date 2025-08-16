'use client';

import React, { useState, useEffect } from 'react';
import {
  driverLicenseConfig as config,
  mockDriverLicenseData,
} from '@/data/mocks/mockDriverLicense';
import DriverLicensePreview from './DriverLicensePreview';
import Swal from 'sweetalert2';

type DriverLicenseData = typeof mockDriverLicenseData;

interface DriverLicenseFormProps {
  initialData?: DriverLicenseData;
  onResult?: (formData: DriverLicenseData) => void;
}

const DriverLicenseForm: React.FC<DriverLicenseFormProps> = ({ initialData, onResult }) => {
  const [formData, setFormData] = useState<DriverLicenseData>(initialData || mockDriverLicenseData);

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (field: keyof DriverLicenseData, value: string) => {
    setFormData((prev) => {
      const updated = prev[field] === value ? prev : { ...prev, [field]: value };
      onResult?.(updated);
      return updated;
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      Swal.fire({
        icon: 'error',
        title: 'ไฟล์ไม่ถูกต้อง',
        text: 'กรุณาอัปโหลดไฟล์รูปภาพเท่านั้น',
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => handleChange('photo', reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = Object.keys(config.fields).filter(
      (key) => config.fields[key as keyof typeof config.fields].required,
    );

    const missing = requiredFields.filter(
      (field) => !((formData[field as keyof DriverLicenseData] as string)?.trim() || ''),
    );

    if (missing.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อมูลไม่ครบ',
        text: `กรุณากรอก: ${missing
          .map((m) => config.fields[m as keyof typeof config.fields].label)
          .join(', ')}`,
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'บันทึกข้อมูลสำเร็จ',
      text: 'ข้อมูลใบขับขี่ถูกบันทึกแล้ว',
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <form
        onSubmit={handleSubmit}
        className="flex-1 space-y-4 bg-base-200 p-4 rounded-lg shadow-md"
        noValidate
      >
        {Object.keys(config.fields).map((key) => {
          const cfg = config.fields[key as keyof typeof config.fields];

          if (key === 'photo') {
            return (
              <div key={key} className="form-control">
                <label className="label font-semibold">{cfg.label}</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="file-input file-input-bordered w-full"
                />
                {formData.photo && (
                  <div className="mt-2">
                    <img
                      src={formData.photo as string}
                      alt="Uploaded Preview"
                      className="max-w-[120px] border rounded"
                    />
                  </div>
                )}
              </div>
            );
          }

          return (
            <div key={key} className="form-control">
              <label className="label font-semibold">
                {cfg.label}
                {cfg.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                value={(formData[key as keyof DriverLicenseData] as string) || ''}
                onChange={(e) => handleChange(key as keyof DriverLicenseData, e.target.value)}
                placeholder={cfg.placeholder || ''}
                className="input input-bordered w-full"
              />
            </div>
          );
        })}

        <button type="submit" className="btn btn-primary w-full">
          บันทึกข้อมูล
        </button>
      </form>

      <div className="flex-1 flex items-center justify-center overflow-auto">
        <DriverLicensePreview data={formData} />
      </div>
    </div>
  );
};

export default DriverLicenseForm;
