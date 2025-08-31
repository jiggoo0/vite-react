"use client";

import { FC, useEffect, useState, ChangeEvent } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  driverLicenseFormSchema,
  driverLicenseFields,
  driverLicenseOverlay,
} from "@/config/driverLicenseConfig";

export type DriverLicenseData = z.infer<typeof driverLicenseFormSchema>;

interface Props {
  role?: "admin" | "manager" | "user";
  onChange?: (data: DriverLicenseData) => void;
}

const DriverLicenseForm: FC<Props> = ({ role = "user", onChange }) => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const { handleSubmit, control, watch, setValue } = useForm<DriverLicenseData>({
    resolver: zodResolver(driverLicenseFormSchema),
    defaultValues: Object.fromEntries(
      driverLicenseFields.map((f) => [f.id, ""])
    ) as DriverLicenseData,
  });

  const formData = watch();

  useEffect(() => {
    onChange?.({ ...formData, photo: photoPreview || formData.photo || "" });
  }, [formData, photoPreview, onChange]);

  const overlay = driverLicenseOverlay(role);

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      alert("รองรับเฉพาะไฟล์ PNG, JPG, JPEG");
      return;
    }
    const url = URL.createObjectURL(file);
    setPhotoPreview(url);
    setValue("photo", url);
  };

  const onSubmit: SubmitHandler<DriverLicenseData> = (data) => {
    console.log("Submitted Driver License:", data);
    alert("บันทึกข้อมูลเรียบร้อย!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4"
      style={{
        filter: `blur(${overlay.blur}px)`,
        pointerEvents: overlay.disabled ? "none" : "auto",
      }}
    >
      {driverLicenseFields.map((field) => (
        <Controller
          key={field.id}
          name={field.id as keyof DriverLicenseData}
          control={control}
          render={({ field: ctrl }) => {
            if (field.type === "select") {
              return (
                <select {...ctrl} className="border p-2 rounded">
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              );
            }

            if (field.type === "photo") {
              return (
                <div className="flex flex-col space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="border p-2 rounded"
                  />
                  {photoPreview && (
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="mt-2 max-h-40 object-contain border rounded-md"
                    />
                  )}
                </div>
              );
            }

            return (
              <input
                {...ctrl}
                type={field.type === "date" ? "date" : "text"}
                placeholder={field.id}
                className="border p-2 rounded"
              />
            );
          }}
        />
      ))}

      {role === "admin" && (
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default DriverLicenseForm;
