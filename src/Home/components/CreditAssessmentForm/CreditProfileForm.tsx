// src/Home/components/CreditAssessmentForm/CreditProfileForm.tsx

"use client";

import React, { useMemo } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  FormWrapper,
  FieldGroup,
  InputField,
  SelectFieldUI,
  TextareaField,
  SubmitButton,
} from "@/Home/components/Forms";

export type CreditProfileData = {
  fullName: string;
  email: string;
  phone: string;
  occupation: string;
  monthlyIncome: number;
  existingDebt: number;
  paymentHistory: string;
  creditRating: string;
  notes?: string;
};

interface CreditProfileFormProps {
  onSubmit?: (data: CreditProfileData) => void;
}

const CreditProfileForm: React.FC<CreditProfileFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<CreditProfileData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      occupation: "",
      monthlyIncome: 0,
      existingDebt: 0,
      paymentHistory: "",
      creditRating: "",
      notes: "",
    },
  });

  const monthlyIncome = watch("monthlyIncome") || 0;
  const existingDebt = watch("existingDebt") || 0;

  const debtToIncomeRatio = useMemo(() => {
    if (monthlyIncome <= 0) return 0;
    return (existingDebt / monthlyIncome) * 100;
  }, [existingDebt, monthlyIncome]);

  const ratioColor = useMemo(() => {
    if (debtToIncomeRatio > 50) return "text-red-600";
    if (debtToIncomeRatio > 30) return "text-yellow-600";
    return "text-green-600";
  }, [debtToIncomeRatio]);

  const handleFormSubmit: SubmitHandler<CreditProfileData> = async (data) => {
    try {
      if (onSubmit) {
        onSubmit(data);
      }
      console.log("Customer Credit Profile:", data);
      alert("บันทึกแบบฟอร์มประเมินโปรไฟล์เรียบร้อยแล้ว");
      reset();
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    }
  };

  return (
    <FormWrapper
      title="แบบฟอร์มประเมินโปรไฟล์ลูกค้าเพื่อยื่นสินเชื่อ"
      description="กรุณากรอกข้อมูลลูกค้าเพื่อประเมินความสามารถในการขอสินเชื่อเบื้องต้น"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FieldGroup columns={2}>
        <InputField
          label="ชื่อ-สกุล"
          placeholder="กรอกชื่อ-นามสกุล"
          required
          error={errors.fullName?.message || undefined}
          {...register("fullName", { required: "กรุณากรอกชื่อ-สกุล" })}
        />

        <InputField
          label="อีเมล"
          type="email"
          placeholder="example@email.com"
          required
          error={errors.email?.message || undefined}
          {...register("email", {
            required: "กรุณากรอกอีเมล",
            pattern: { value: /^\S+@\S+$/i, message: "รูปแบบอีเมลไม่ถูกต้อง" },
          })}
        />

        <InputField
          label="เบอร์โทรศัพท์"
          type="tel"
          placeholder="เช่น 0812345678"
          required
          error={errors.phone?.message || undefined}
          {...register("phone", { required: "กรุณากรอกเบอร์โทรศัพท์" })}
        />

        <InputField
          label="อาชีพ"
          placeholder="กรอกอาชีพปัจจุบัน"
          required
          error={errors.occupation?.message || undefined}
          {...register("occupation", { required: "กรุณากรอกอาชีพ" })}
        />

        <InputField
          label="รายได้ต่อเดือน (บาท)"
          type="number"
          placeholder="0"
          required
          error={errors.monthlyIncome?.message || undefined}
          {...register("monthlyIncome", {
            required: "กรุณากรอกรายได้ต่อเดือน",
            min: { value: 0, message: "ต้องมากกว่า 0" },
          })}
        />

        <InputField
          label="หนี้สินปัจจุบัน (บาท)"
          type="number"
          placeholder="0"
          required
          error={errors.existingDebt?.message || undefined}
          {...register("existingDebt", {
            required: "กรุณากรอกหนี้สินปัจจุบัน",
            min: { value: 0, message: "ต้องมากกว่า 0" },
          })}
        />

        <InputField
          label="อัตราส่วนหนี้ต่อรายได้ (%)"
          name="debtToIncomeRatio"
          type="text"
          value={debtToIncomeRatio.toFixed(2)}
          readOnly
          className={`bg-gray-100 font-semibold ${ratioColor}`}
        />

        <Controller
          control={control}
          name="paymentHistory"
          rules={{ required: "กรุณาเลือกประวัติการชำระ" }}
          render={({ field }) => (
            <SelectFieldUI
              {...field}
              label="ประวัติการชำระ"
              required
              options={[
                { label: "ดีมาก", value: "excellent" },
                { label: "ดี", value: "good" },
                { label: "ปานกลาง", value: "average" },
                { label: "ไม่ดี", value: "poor" },
              ]}
              error={errors.paymentHistory?.message || undefined}
            />
          )}
        />

        <Controller
          control={control}
          name="creditRating"
          rules={{ required: "กรุณาเลือกคะแนนเครดิต" }}
          render={({ field }) => (
            <SelectFieldUI
              {...field}
              label="คะแนนเครดิตปัจจุบัน"
              required
              options={[
                { label: "A (ยอดเยี่ยม)", value: "A" },
                { label: "B (ดี)", value: "B" },
                { label: "C (พอใช้)", value: "C" },
                { label: "D (ต้องปรับปรุง)", value: "D" },
              ]}
              error={errors.creditRating?.message || undefined}
            />
          )}
        />

        <TextareaField
          label="หมายเหตุเพิ่มเติม"
          placeholder="กรอกข้อเสนอแนะหรือข้อมูลสำคัญอื่น ๆ"
          rows={4}
          {...register("notes")}
        />
      </FieldGroup>

      <SubmitButton loading={isSubmitting} label="ส่งแบบฟอร์ม" loadingLabel="กำลังส่ง..." />
    </FormWrapper>
  );
};

export default CreditProfileForm;
