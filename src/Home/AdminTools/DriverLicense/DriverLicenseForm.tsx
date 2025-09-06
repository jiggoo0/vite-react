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

  /** Sync form changes with parent */
  useEffect(() => {
    onChange?.({
      ...formData,
      photo: photoPreview || formData.photo || "",
    });
  }, [formData, photoPreview, onChange]);

  /** Role-based overlay */
  const overlay = driverLicenseOverlay(role);

  /** Handle photo upload */
  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/png", "image/jpeg", "image/jpg", "image/webp"].includes(file.type)) {
      alert("รองรับเฉพาะไฟล์ PNG, JPG, JPEG, WEBP");
      return;
    }

    const url = URL.createObjectURL(file);
    setPhotoPreview(url);
    setValue("photo", url);
  };

  /** Submit handler */
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
            switch (field.type) {
              case "select":
                return (
                  <div className="flex flex-col">
                    <label className="font-medium mb-1">{field.label || field.id}</label>
                    <select {...ctrl} className="border p-2 rounded">
                      <option value="">-- Select --</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                );

              case "photo":
                return (
                  <div className="flex flex-col space-y-2">
                    <label className="font-medium">{field.label || "Photo"}</label>
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

              default:
                return (
                  <div className="flex flex-col">
                    <label className="font-medium mb-1">{field.label || field.id}</label>
                    <input
                      {...ctrl}
                      type={field.type === "date" ? "date" : "text"}
                      placeholder={field.label || field.id}
                      className="border p-2 rounded"
                    />
                  </div>
                );
            }
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
