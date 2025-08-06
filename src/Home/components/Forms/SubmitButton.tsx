// src/Home/components/Forms/SubmitButton.tsx
import React from "react";

type SubmitButtonProps = {
  loading?: boolean;
  label?: string;
  loadingLabel?: string;
  className?: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  loading = false,
  label = "บันทึก",
  loadingLabel = "กำลังบันทึก...",
  className = "",
}) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`px-4 py-2 rounded-lg text-white font-medium
        ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
        focus:outline-none focus:ring-2 focus:ring-blue-400
        transition-colors duration-200 ${className}`}
    >
      {loading ? loadingLabel : label}
    </button>
  );
};

export default SubmitButton;
