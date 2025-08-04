// src/Home/components/Forms/SelectField.tsx
import { FC } from "react";
import { useFormContext, FieldValues, RegisterOptions, Path } from "react-hook-form";

type Option = {
  label: string;
  value: string | number;
};

type SelectFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  options: Option[];
  requiredMessage?: string;
  rules?: RegisterOptions<T, Path<T>>;
};

const SelectField = <T extends FieldValues>({
  name,
  label,
  options,
  requiredMessage = "จำเป็นต้องเลือกตัวเลือกหนึ่ง",
  rules
}: SelectFieldProps<T>) => {
  const {
    register,
    formState: { errors }
  } = useFormContext<T>();

  const error = errors?.[name];

  return (
    <div className="form-control w-full max-w-md mb-4">
      <label htmlFor={name} className="label">
        <span className="label-text font-semibold">{label}</span>
      </label>
      <select
        id={name}
        className={`select select-bordered w-full ${error ? "border-red-500" : ""}`}
        {...register(name, {
          required: requiredMessage,
          ...rules
        })}
      >
        <option value="">-- กรุณาเลือก --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="label-text-alt text-red-500 text-sm">{String(error?.message)}</span>
        </label>
      )}
    </div>
  );
};

export default SelectField;
