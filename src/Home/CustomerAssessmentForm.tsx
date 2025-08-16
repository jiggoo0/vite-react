// src/Home/CustomerCreditForm.tsx
'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  FormWrapper,
  FieldGroup,
  InputField,
  SelectFieldUI,
  TextareaField,
  SubmitButton,
} from '@/Home/components/Forms';

// =======================
// Types
// =======================
type CustomerCreditData = {
  name: string;
  email: string;
  monthlyIncome: number;
  existingDebt: number;
  paymentHistory: string;
  creditRating: string;
  notes?: string;
};

// =======================
// Component
// =======================
const CustomerCreditForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CustomerCreditData>({
    defaultValues: {
      name: '',
      email: '',
      monthlyIncome: 0,
      existingDebt: 0,
      paymentHistory: '',
      creditRating: '',
      notes: '',
    },
  });

  const onSubmit: SubmitHandler<CustomerCreditData> = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('ข้อมูลเครดิตลูกค้า:', data);
      alert('บันทึกการประเมินเครดิตเรียบร้อยแล้ว');
      reset();
    } catch (error) {
      console.error('เกิดข้อผิดพลาด:', error);
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
    }
  };

  return (
    <FormWrapper
      title="แบบฟอร์มประเมินสภาพเครดิตลูกค้า"
      description="กรุณากรอกข้อมูลเพื่อประเมินสภาพเครดิตปัจจุบันของลูกค้า"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldGroup columns={2}>
        {/* ชื่อ-สกุล */}
        <InputField
          label="ชื่อ-สกุล"
          placeholder="กรอกชื่อของลูกค้า"
          required
          error={errors.name?.message || null}
          {...register('name', { required: 'กรุณากรอกชื่อ' })}
        />

        {/* อีเมล */}
        <InputField
          label="อีเมล"
          type="email"
          placeholder="example@email.com"
          required
          error={errors.email?.message || null}
          {...register('email', {
            required: 'กรุณากรอกอีเมล',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'รูปแบบอีเมลไม่ถูกต้อง',
            },
          })}
        />

        {/* รายได้ต่อเดือน */}
        <InputField
          label="รายได้ต่อเดือน (บาท)"
          type="number"
          placeholder="0"
          required
          error={errors.monthlyIncome?.message || null}
          {...register('monthlyIncome', {
            required: 'กรุณากรอกรายได้ต่อเดือน',
            min: { value: 0, message: 'ต้องมากกว่า 0' },
          })}
        />

        {/* หนี้สินปัจจุบัน */}
        <InputField
          label="หนี้สินปัจจุบัน (บาท)"
          type="number"
          placeholder="0"
          required
          error={errors.existingDebt?.message || null}
          {...register('existingDebt', {
            required: 'กรุณากรอกหนี้สินปัจจุบัน',
            min: { value: 0, message: 'ต้องมากกว่า 0' },
          })}
        />

        {/* ประวัติการชำระ */}
        <SelectFieldUI
          label="ประวัติการชำระ"
          required
          options={[
            { label: 'ดีมาก', value: 'excellent' },
            { label: 'ดี', value: 'good' },
            { label: 'ปานกลาง', value: 'average' },
            { label: 'ไม่ดี', value: 'poor' },
          ]}
          error={errors.paymentHistory?.message || null}
          {...register('paymentHistory', {
            required: 'กรุณาเลือกประวัติการชำระ',
          })}
        />

        {/* คะแนนเครดิต */}
        <SelectFieldUI
          label="คะแนนเครดิตปัจจุบัน"
          required
          options={[
            { label: 'A (ยอดเยี่ยม)', value: 'A' },
            { label: 'B (ดี)', value: 'B' },
            { label: 'C (พอใช้)', value: 'C' },
            { label: 'D (ต้องปรับปรุง)', value: 'D' },
          ]}
          error={errors.creditRating?.message || null}
          {...register('creditRating', {
            required: 'กรุณาเลือกคะแนนเครดิต',
          })}
        />

        {/* ข้อเสนอแนะ/หมายเหตุ */}
        <TextareaField
          label="หมายเหตุเพิ่มเติม"
          placeholder="เขียนข้อเสนอแนะหรือหมายเหตุ"
          rows={4}
          {...register('notes')}
        />
      </FieldGroup>

      {/* Submit Button */}
      <SubmitButton loading={isSubmitting} label="ส่งแบบฟอร์ม" loadingLabel="กำลังส่ง..." />
    </FormWrapper>
  );
};

export default CustomerCreditForm;
