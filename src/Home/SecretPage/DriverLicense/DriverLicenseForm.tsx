"use client";

import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  driverLicenseFormSchema,
  driverLicenseFields,
} from "@/config/driverLicenseConfig";

export type DriverLicenseData = z.infer<typeof driverLicenseFormSchema>;

interface Props {
  onChange?: (data: DriverLicenseData) => void;
}

const DriverLicenseForm: FC<Props> = ({ onChange }) => {
  const { handleSubmit, control, watch } = useForm<DriverLicenseData>({
    resolver: zodResolver(driverLicenseFormSchema),
    defaultValues: Object.fromEntries(
      driverLicenseFields.map((f) => [f.id, ""])
    ) as DriverLicenseData,
  });

  const formData = watch();

  const handleSubmitForm = (data: DriverLicenseData) => {
    console.log("Submitted data:", data);
  };

  // watch → callback
  onChange?.(formData);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="grid gap-4">
      {driverLicenseFields.map((field) => (
        <Controller
          key={field.id}
          name={field.id as keyof DriverLicenseData}
          control={control}
          render={({ field: ctrl }) => (
            <input
              {...ctrl}
              type={field.type === "date" ? "date" : "text"}
              placeholder={field.id}
              className="border p-2 rounded"
            />
          )}
        />
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default DriverLicenseForm;
