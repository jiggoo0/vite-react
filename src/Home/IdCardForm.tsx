'use client';

import React, {
  FC,
  useState,
  ChangeEvent,
  useMemo,
  InputHTMLAttributes,
  SelectHTMLAttributes,
} from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@/styles/idcard.css';
import { idCardConfig } from '@/config/idcardConfig';

// =======================
// Types
// =======================
interface FormData {
  officer: string;
  docNo: string;
  cardPlace: string;
  fullName: string;
  birthday: string;
  birthProvince: string;
  address: string;
  moo: string;
  road: string;
  tambol: string;
  district: string;
  province: string;
  cardNumber: string;
  initCard: string;
  expCard: string;
}

type FormFieldName = keyof FormData;

const initialFormData: Readonly<FormData> = {
  officer: '',
  docNo: '',
  cardPlace: '',
  fullName: '',
  birthday: '',
  birthProvince: '',
  address: '',
  moo: '',
  road: '',
  tambol: '',
  district: '',
  province: '',
  cardNumber: '',
  initCard: '',
  expCard: '',
};

const requiredFields: FormFieldName[] = ['officer', 'docNo', 'fullName'];

// =======================
// Main Component
// =======================
const IdCardForm: FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // ----------------------
  // Handle Input Changes
  // ----------------------
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ----------------------
  // Validate Form
  // ----------------------
  const validateForm = (): boolean => {
    const emptyFields = requiredFields.filter((f) => !formData[f]?.trim());
    if (emptyFields.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'กรอกข้อมูลไม่ครบ',
        text: `กรุณากรอก: ${emptyFields.join(', ')}`,
        confirmButtonColor: '#2563EB',
      });
      return false;
    }
    return true;
  };

  // ----------------------
  // Submit Form
  // ----------------------
  const handleSubmit = () => {
    if (!validateForm()) return;

    Swal.fire({
      icon: 'success',
      title: 'ส่งข้อมูลเรียบร้อย',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // ----------------------
  // Computed Full Address
  // ----------------------
  const fullAddress = useMemo(
    () =>
      `${formData.address || ''} หมู่ ${formData.moo || ''} ${
        formData.road || ''
      } ${formData.tambol || ''} / ${formData.district || ''} / ${formData.province || ''}`,
    [formData],
  );

  return (
    <section className="min-h-screen bg-base-200 px-4 sm:px-6 lg:px-8 py-6 sm:py-10 font-poppins">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* =======================
            Title
        ======================= */}
        <h1 className="text-2xl font-bold text-center mb-6">ฟอร์มบัตรประชาชน</h1>

        {/* =======================
            Form Section
        ======================= */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <form className="space-y-6">
            {/* Officer & Document No */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormSelect
                label="เจ้าหน้าที่ดำเนินการ"
                name="officer"
                value={formData.officer}
                onChange={handleChange}
                required
                options={[
                  { value: '', label: 'กรุณาเลือกเจ้าหน้าที่' },
                  { value: 'officer1', label: 'เจ้าหน้าที่ 1' },
                  { value: 'officer2', label: 'เจ้าหน้าที่ 2' },
                ]}
              />
              <FormInput
                label="เลขที่หนังสือ"
                name="docNo"
                value={formData.docNo}
                onChange={handleChange}
                required
              />
            </div>

            <FormInput
              label="สำนักทะเบียนท้องถิ่น"
              name="cardPlace"
              value={formData.cardPlace}
              onChange={handleChange}
            />

            <FormInput
              label="ชื่อ-สกุล"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            {/* Birthday & Province */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="วัน/เดือน/ปี เกิด"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
              />
              <FormInput
                label="จังหวัดที่เกิด"
                name="birthProvince"
                value={formData.birthProvince}
                onChange={handleChange}
              />
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormInput
                label="ที่อยู่"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <FormInput label="หมู่" name="moo" value={formData.moo} onChange={handleChange} />
              <FormInput label="ถนน" name="road" value={formData.road} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormInput
                label="ตำบล"
                name="tambol"
                value={formData.tambol}
                onChange={handleChange}
              />
              <FormInput
                label="อำเภอ"
                name="district"
                value={formData.district}
                onChange={handleChange}
              />
              <FormInput
                label="จังหวัด"
                name="province"
                value={formData.province}
                onChange={handleChange}
              />
            </div>

            {/* Card Number & Dates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormInput
                label="เลขบัตรประชาชน"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              <FormInput
                label="วันออกบัตร"
                name="initCard"
                value={formData.initCard}
                onChange={handleChange}
              />
              <FormInput
                label="วันหมดอายุ"
                name="expCard"
                value={formData.expCard}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button type="button" className="btn btn-primary w-full" onClick={handleSubmit}>
                ส่งข้อมูล
              </button>
            </div>
          </form>
        </div>

        {/* =======================
            ID Card Preview
        ======================= */}
        <div
          id="idcard-preview"
          className="idcard-preview mt-8 border rounded-lg shadow relative overflow-hidden"
          style={{
            width: idCardConfig.cardWidth,
            height: idCardConfig.cardHeight,
            backgroundImage: `url(${idCardConfig.bgDefault})`,
            backgroundSize: 'cover',
          }}
        >
          {Object.entries(idCardConfig.fields).map(([key, cfg]) => {
            const value = key === 'address' ? fullAddress : formData[key as FormFieldName];
            return (
              <span
                key={key}
                className="idcard-field absolute whitespace-nowrap"
                style={{
                  top: cfg.top,
                  left: cfg.left,
                  fontSize: cfg.fontSize,
                  fontWeight: cfg.fontWeight || 'normal',
                }}
                title={cfg.label}
              >
                {value || ''}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// =======================
// Reusable Inputs
// =======================
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

const FormInput: FC<InputProps> = ({ label, required, ...props }) => (
  <div>
    {label && (
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <input
      {...props}
      className={`mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
        props.className || ''
      }`}
    />
  </div>
);

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

const FormSelect: FC<SelectProps> = ({ label, options, required, ...props }) => (
  <div>
    {label && (
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <select
      {...props}
      className={`mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
        props.className || ''
      }`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default IdCardForm;
