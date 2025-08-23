"use client";

import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DriverLicensePreview from "./DriverLicensePreview";
import {
  driverLicenseFields,
  driverLicenseFormSchema,
} from "@/config/driverLicenseConfig";
import { exportCardAsPNG, exportCardAsPDF } from "@/utils/exportCard";
import "@/styles/driverLicense.css";

type FormValues = z.infer<typeof driverLicenseFormSchema>;

const DriverLicenseForm: FC = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(driverLicenseFormSchema),
    defaultValues: Object.fromEntries(
      driverLicenseFields.map((f) => [f.id, ""])
    ) as FormValues,
  });

  const formData = watch();

  const onSubmit = (data: FormValues) => {
    console.log("Submitted data:", data);
  };

  const handleExportPNG = () =>
    exportCardAsPNG("driver-license-preview", "driver-license.png");
  const handleExportPDF = () =>
    exportCardAsPDF("driver-license-preview", "driver-license.pdf", true);

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col gap-8">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-center text-gray-800">
        ฟอร์มใบขับขี่จำลอง
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 border border-gray-300"
      >
        {driverLicenseFields.map((field) => {
          const label = field.id
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (s) => s.toUpperCase());

          return (
            <div key={field.id} className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">{label}</label>

              <Controller
                name={field.id as keyof FormValues}
                control={control}
                render={({ field: controllerField }) => {
                  if (field.type === "photo") {
                    return (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          controllerField.onChange(
                            file ? URL.createObjectURL(file) : ""
                          );
                        }}
                        className="border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      />
                    );
                  }

                  if (field.type === "select" && field.options) {
                    return (
                      <select
                        {...controllerField}
                        className="border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      >
                        <option value="">เลือก...</option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    );
                  }

                  return (
                    <input
                      {...controllerField}
                      type={field.type === "date" ? "date" : "text"}
                      className="border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  );
                }}
              />

              {errors[field.id as keyof FormValues] && (
                <span className="text-red-600 text-sm mt-1">
                  {errors[field.id as keyof FormValues]?.message}
                </span>
              )}
            </div>
          );
        })}

        <button
          type="submit"
          className="col-span-full bg-gray-800 text-white px-4 py-2 mt-4 hover:bg-gray-700"
        >
          Submit
        </button>
      </form>

      {/* Preview */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Preview</h2>
        <DriverLicensePreview data={formData} />

        {/* Export buttons */}
        <div className="flex gap-4 mt-4">
          <button
            type="button"
            className="bg-gray-800 text-white px-4 py-2 hover:bg-gray-700"
            onClick={handleExportPNG}
          >
            ดาวน์โหลด PNG
          </button>
          <button
            type="button"
            className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-600"
            onClick={handleExportPDF}
          >
            ดาวน์โหลด PDF (A4)
          </button>
        </div>
      </div>
    </div>
  );
};

DriverLicenseForm.displayName = "DriverLicenseForm";
export default DriverLicenseForm;