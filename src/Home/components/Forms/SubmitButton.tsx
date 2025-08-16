"use client";

import { FC } from "react";
import clsx from "clsx";

type SubmitButtonProps = {
  loading?: boolean;
  label?: string;
  loadingLabel?: string;
  className?: string;
};

const SubmitButton: FC<SubmitButtonProps> = ({
  loading = false,
  label = "บันทึก",
  loadingLabel = "กำลังบันทึก...",
  className,
}) => (
  <button
    type="submit"
    disabled={loading}
    aria-busy={loading}
    className={clsx(
      "px-4 py-2 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200",
      loading
        ? "bg-gray-400 cursor-not-allowed dark:bg-gray-600"
        : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
      className
    )}
  >
    {loading ? loadingLabel : label}
  </button>
);

SubmitButton.displayName = "SubmitButton";
export default SubmitButton;
