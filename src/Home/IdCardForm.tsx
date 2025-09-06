"use client";

import { FC, memo, ChangeEvent, useState, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import CardWrapper from "@home/components/common/CardWrapper";
import WithBlurIfUser from "@home/components/common/WithBlurIfUser";
import { MOCK_ID_CARD } from "@__mocks__/mockIdCardData";

/** ------------------------------
 * Zod schema for ID Card form validation
 * ----------------------------- */
const IdCardSchema = z.object({
  fullName: z.string().min(1, "กรุณากรอกชื่อ-สกุล"),
  idNumber: z.string().regex(/^\d{13}$/, "เลขบัตรประชาชนต้องมี 13 หลัก"),
  birthDate: z.string().min(1, "กรุณากรอกวันเกิด"),
  address: z.string().min(1, "กรุณากรอกที่อยู่"),
  photo: z.string().optional(),
});

export type IdCardData = z.infer<typeof IdCardSchema>;

interface Props {
  role?: "admin" | "manager" | "user";
  onChange?: (data: IdCardData) => void;
}

const IdCardForm: FC<Props> = ({ role = "user", onChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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

  /** Sync form data with parent */
  useEffect(() => {
    onChange?.({
      ...watchedData,
      photo: imagePreview || watchedData.photo || "",
    });
  }, [watchedData, imagePreview, onChange]);

  /** Handle file upload and mock OCR auto-fill */
  const handleFileChange = (file: File) => {
    if (!file) return;
    setImagePreview(URL.createObjectURL(file));

    setTimeout(() => {
      setValue("fullName", "สมชาย ใจดี");
      setValue("idNumber", "1234567890123");
      setValue("birthDate", "1990-01-01");
      setValue("address", "123/45 ถนนสุขุมวิท");
    }, 1000);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileChange(file);
  };

  const onSubmit: SubmitHandler<IdCardData> = (data) => {
    console.log("Submitted:", data);
    alert("บันทึกข้อมูลเรียบร้อย!");
  };

  const isBlurred = role !== "admin";

  return (
    <CardWrapper>
      <WithBlurIfUser isBlurred={isBlurred} overlayMessage="เฉพาะแอดมินเท่านั้น">
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
            <label className="font-medium cursor-pointer">คลิกหรือวางรูปบัตรประชาชนที่นี่</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="hidden"
            />
            <p className="text-sm text-gray-500">รองรับ PNG, JPG, JPEG</p>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 max-h-40 object-contain rounded-md border"
              />
            )}
          </div>

          {/* Form Fields */}
          {(["fullName", "idNumber", "birthDate", "address"] as const).map((field) => (
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
                    <textarea {...field} className="w-full border rounded-md p-2" />
                  ) : (
                    <input
                      {...field}
                      type={field.name === "birthDate" ? "date" : "text"}
                      className="w-full border rounded-md p-2"
                    />
                  )
                }
              />
              {errors[field] && <p className="text-red-600">{errors[field]?.message}</p>}
            </div>
          ))}

          {role === "admin" && (
            <button
              type="submit"
              className={clsx(
                "w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              )}
            >
              บันทึก
            </button>
          )}
        </form>
      </WithBlurIfUser>
    </CardWrapper>
  );
};

IdCardForm.displayName = "IdCardForm";
export default memo(IdCardForm);
