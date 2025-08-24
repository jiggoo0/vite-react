"use client";

import React, { FC, useState, useEffect, ChangeEvent, memo } from "react";
import clsx from "clsx";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CardWrapper from "@home/components/common/CardWrapper";
import WithBlurIfUser from "@home/components/common/WithBlurIfUser";
import { MOCK_ID_CARD } from "@/__mocks__/mockIdCardData";

const IdCardSchema = z.object({
  fullName: z.string().min(1, "กรุณากรอกชื่อ-สกุล"),
  idNumber: z.string().regex(/^\d{13}$/, "เลขบัตรประชาชนต้องมี 13 หลัก"),
  birthDate: z.string().min(1, "กรุณากรอกวันเกิด"),
  address: z.string().min(1, "กรุณากรอกที่อยู่"),
  photo: z.string().optional(),
});

export type IdCardData = z.infer<typeof IdCardSchema>;

interface Props {
  className?: string;
  isBlurred?: boolean;
  onChange?: (data: IdCardData) => void;
}

const IdCardForm: FC<Props> = ({ className, isBlurred, onChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [ocrLoading, setOcrLoading] = useState(false);

  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IdCardData>({
    resolver: zodResolver(IdCardSchema),
    defaultValues: MOCK_ID_CARD,
  });

  const watchedData = watch();

  useEffect(() => {
    onChange?.({
      ...watchedData,
      photo: imagePreview || watchedData.photo || "",
    });
  }, [watchedData, imagePreview, onChange]);

  const handleFileChange = (file: File) => {
    if (!file) return;
    if (!["image/png", "image/jpeg", "jpg"].includes(file.type)) {
      alert("รองรับเฉพาะไฟล์ PNG, JPG, JPEG");
      return;
    }

    setImagePreview(URL.createObjectURL(file));
    setOcrLoading(true);

    setTimeout(() => {
      setValue("fullName", "สมชาย ใจดี");
      setValue("idNumber", "1234567890123");
      setValue("birthDate", "1990-01-01");
      setValue("address", "123/45 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ");
      setOcrLoading(false);
    }, 1500);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileChange(file);
  };

  const onSubmit: SubmitHandler<IdCardData> = (data) => {
    console.log("Submitted:", data);
    alert("บันทึกข้อมูลเรียบร้อย!");
  };

  return (
    <CardWrapper className={className}>
      <WithBlurIfUser
        isBlurred={isBlurred}
        overlayMessage="เฉพาะแอดมินเท่านั้น"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h2 className="text-xl font-semibold">ฟอร์มบัตรประชาชน (OCR)</h2>

          {/* Upload Section */}
          <div
            className="flex flex-col space-y-2 border-dashed border-2 border-gray-300 rounded-md p-4 text-center cursor-pointer"
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              if (file) handleFileChange(file);
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <label className="font-medium">
              คลิกหรือวางรูปบัตรประชาชนที่นี่
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="hidden"
            />
            <p className="text-sm text-gray-500">รองรับ PNG, JPG, JPEG</p>
            {ocrLoading && (
              <p className="text-blue-500">กำลังอ่านข้อมูลจากภาพ...</p>
            )}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 max-h-40 object-contain rounded-md border"
              />
            )}
          </div>

          {/* Form Fields */}
          <div className="space-y-3">
            {(["fullName", "idNumber", "birthDate", "address"] as const).map(
              (field) => (
                <div key={field}>
                  <label className="font-medium">
                    {field === "fullName"
                      ? "ชื่อ-สกุล"
                      : field === "idNumber"
                        ? "เลขบัตรประชาชน"
                        : field === "birthDate"
                          ? "วันเกิด"
                          : "ที่อยู่"}
                  </label>
                  <Controller
                    name={field}
                    control={control}
                    render={({ field }) =>
                      field.name === "address" ? (
                        <textarea
                          {...field}
                          className="w-full border rounded-md p-2"
                        />
                      ) : (
                        <input
                          {...field}
                          type={field.name === "birthDate" ? "date" : "text"}
                          className="w-full border rounded-md p-2"
                        />
                      )
                    }
                  />
                  {errors[field] && (
                    <p className="text-red-600">{errors[field]?.message}</p>
                  )}
                </div>
              )
            )}
          </div>

          <button
            type="submit"
            disabled={ocrLoading}
            className={clsx(
              "w-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors",
              ocrLoading && "opacity-50 cursor-not-allowed"
            )}
          >
            {ocrLoading ? "กำลังประมวลผล..." : "บันทึก"}
          </button>
        </form>
      </WithBlurIfUser>
    </CardWrapper>
  );
};

IdCardForm.displayName = "IdCardForm";
export default memo(IdCardForm);
