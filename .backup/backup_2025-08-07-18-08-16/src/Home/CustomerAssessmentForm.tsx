// src/Home/CustomerAssessmentForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormWrapper,
  FieldGroup,
  InputField,
  SelectFieldUI,
  TextareaField,
  SubmitButton,
} from "@/Home/components/Forms";

type CustomerAssessmentData = {
  name: string;
  email: string;
  satisfaction: string;
  feedback: string;
};

const CustomerAssessmentForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CustomerAssessmentData>({
    defaultValues: {
      name: "",
      email: "",
      satisfaction: "",
      feedback: "",
    },
  });

  const onSubmit: SubmitHandler<CustomerAssessmentData> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // จำลองการส่งข้อมูล API
      console.log("ข้อมูลที่ส่ง:", data);
      alert("บันทึกการประเมินเรียบร้อยแล้ว");
      reset();
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
    }
  };

  return (
    <FormWrapper
      title="แบบฟอร์มประเมินลูกค้า"
      description="กรุณากรอกข้อมูลและให้คะแนนความพึงพอใจของคุณ"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldGroup columns={2}>
        {/* ชื่อ */}
        <InputField
          label="ชื่อ"
          placeholder="กรอกชื่อของคุณ"
          required
          error={errors.name?.message || null}
          {...register("name", { required: "กรุณากรอกชื่อ" })}
        />

        {/* อีเมล */}
        <InputField
          label="อีเมล"
          type="email"
          placeholder="example@email.com"
          required
          error={errors.email?.message || null}
          {...register("email", {
            required: "กรุณากรอกอีเมล",
            pattern: { value: /^\S+@\S+$/i, message: "รูปแบบอีเมลไม่ถูกต้อง" },
          })}
        />

        {/* ความพึงพอใจ */}
        <SelectFieldUI
          label="ความพึงพอใจ"
          required
          options={[
            { label: "พอใจมาก", value: "very_satisfied" },
            { label: "พอใจ", value: "satisfied" },
            { label: "ปานกลาง", value: "neutral" },
            { label: "ไม่พอใจ", value: "dissatisfied" },
            { label: "ไม่พอใจมาก", value: "very_dissatisfied" },
          ]}
          error={errors.satisfaction?.message || null}
          {...register("satisfaction", { required: "กรุณาเลือกความพึงพอใจ" })}
        />

        {/* ข้อเสนอแนะ */}
        <TextareaField
          label="ข้อเสนอแนะเพิ่มเติม"
          placeholder="เขียนความคิดเห็นหรือข้อเสนอแนะของคุณ"
          rows={4}
          {...register("feedback")}
        />
      </FieldGroup>

      <SubmitButton
        loading={isSubmitting}
        label="ส่งแบบฟอร์ม"
        loadingLabel="กำลังส่ง..."
      />
    </FormWrapper>
  );
};

export default CustomerAssessmentForm;
