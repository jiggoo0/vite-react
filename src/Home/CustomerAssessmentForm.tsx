"use client";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useState } from "react";
import { FormWrapper, SubmitButton, SelectField } from "./components/Forms";

/**
 * 🌟 แบบฟอร์มประเมินความต้องการลูกค้า — JP Visual & Docs
 * - ส่งออกไปยัง LINE แบบข้อความ
 * - ใช้ react-hook-form + Tailwind CSS + Modular Field Components
 */

type FormValues = {
  name: string;
  phone: string;
  projectType: string;
  budget: string;
  details: string;
};

const projectOptions = [
  { value: "web", label: "เว็บไซต์ขายของ / ร้านค้า" },
  { value: "landing", label: "หน้า Landing Page / โปรโมทสินค้า" },
  { value: "company", label: "เว็บไซต์บริษัท / โปรไฟล์องค์กร" },
  { value: "portfolio", label: "Portfolio / เรซูเม่ส่วนตัว" },
  { value: "other", label: "อื่น ๆ" },
];

const budgetOptions = [
  { value: "low", label: "ต่ำกว่า 10,000 บาท" },
  { value: "medium", label: "10,000 - 30,000 บาท" },
  { value: "high", label: "มากกว่า 30,000 บาท" },
];

const CustomerAssessmentForm = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      name: "",
      phone: "",
      projectType: "",
      budget: "",
      details: "",
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const message = `
📝 แบบฟอร์มประเมินลูกค้า
━━━━━━━━━━━━━━
👤 ชื่อลูกค้า: ${data.name}
📞 เบอร์โทร: ${data.phone}
📌 ประเภทโปรเจกต์: ${projectOptions.find((p) => p.value === data.projectType)?.label}
💰 งบประมาณ: ${budgetOptions.find((b) => b.value === data.budget)?.label}
🖊 รายละเอียดเพิ่มเติม:
${data.details || "-"}
━━━━━━━━━━━━━━`;

    const encoded = encodeURIComponent(message.trim());
    const lineURL = `https://line.me/R/msg/text/?${encoded}`;

    const newWindow = window.open(lineURL, "_blank");
    if (!newWindow) {
      alert("กรุณาอนุญาตให้เปิดหน้าต่างใหม่เพื่อส่งข้อมูล");
    }

    reset();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <FormWrapper
      title="ประเมินความต้องการของคุณ"
      description="ทีมเราจะใช้ข้อมูลนี้ในการเสนอแพ็กเกจที่เหมาะกับคุณที่สุด"
    >
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          aria-label="แบบฟอร์มประเมินลูกค้า JP Visual & Docs"
        >
          {/* ชื่อ-นามสกุล */}
          <div>
            <label className="label" htmlFor="name">
              <span className="label-text font-semibold">ชื่อ-นามสกุล</span>
            </label>
            <input
              id="name"
              {...register("name", { required: "จำเป็นต้องกรอกชื่อ" })}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="input input-bordered w-full"
              placeholder="เช่น สมชาย ใจดี"
              autoComplete="name"
            />
            {errors.name && (
              <p id="name-error" className="text-error text-sm mt-1" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* เบอร์โทร */}
          <div>
            <label className="label" htmlFor="phone">
              <span className="label-text font-semibold">เบอร์โทร</span>
            </label>
            <input
              id="phone"
              {...register("phone", {
                required: "จำเป็นต้องกรอกเบอร์โทร",
                pattern: {
                  value: /^[0-9]{9,10}$/,
                  message: "กรุณาใส่เบอร์โทรให้ถูกต้อง",
                },
              })}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="input input-bordered w-full"
              placeholder="เช่น 0912345678"
              inputMode="tel"
              autoComplete="tel"
            />
            {errors.phone && (
              <p id="phone-error" className="text-error text-sm mt-1" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* ประเภทโปรเจกต์ */}
          <SelectField<FormValues>
            name="projectType"
            label="ประเภทโปรเจกต์ที่ต้องการ"
            options={projectOptions}
            requiredMessage="กรุณาเลือกประเภทโปรเจกต์"
          />

          {/* งบประมาณ */}
          <SelectField<FormValues>
            name="budget"
            label="งบประมาณโดยประมาณ"
            options={budgetOptions}
            requiredMessage="กรุณาเลือกช่วงงบประมาณ"
          />

          {/* รายละเอียดเพิ่มเติม */}
          <div>
            <label className="label" htmlFor="details">
              <span className="label-text font-semibold">รายละเอียดเพิ่มเติม</span>
            </label>
            <textarea
              id="details"
              {...register("details")}
              className="textarea textarea-bordered w-full min-h-[120px]"
              placeholder="เช่น ต้องการเว็บรองรับมือถือ มีระบบแชท ฯลฯ"
            />
          </div>

          {/* ปุ่มส่งฟอร์ม */}
          <SubmitButton isSubmitting={isSubmitting} isSubmitted={isSubmitted} />
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default CustomerAssessmentForm;