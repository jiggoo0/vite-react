import { UseFormRegister, FieldValues } from "react-hook-form";

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  options: Option[];
  requiredMessage: string;
  error?: string;
};

export default function SelectField({
  label,
  name,
  register,
  options,
  requiredMessage,
  error
}: Props) {
  return (
    <div>
      <label className="label">
        <span className="label-text font-semibold">{label}</span>
      </label>
      <select
        {...register(name, { required: requiredMessage })}
        className="select select-bordered w-full"
        defaultValue=""
      >
        <option value="" disabled>
          -- กรุณาเลือก --
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
