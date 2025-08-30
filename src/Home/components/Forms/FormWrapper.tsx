"use client";

import React, { ReactNode, useState } from "react";
import clsx from "clsx";

type FormWrapperProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  onSubmit?: () => void | Promise<void>;
  className?: string;
  submitLabel?: string;
};

const FormWrapper: React.FC<FormWrapperProps> = ({
  title = "ฟอร์ม",
  description = "",
  children,
  onSubmit,
  className,
  submitLabel = "บันทึก",
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  /**
   * Handle form submit
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (onSubmit) await onSubmit();
      setSuccess("บันทึกข้อมูลสำเร็จ");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={clsx(
        "p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-colors",
        className
      )}
    >
      {title && (
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h2>
      )}
      {description && <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {children}

        {loading && <p className="text-blue-500 animate-pulse">กำลังบันทึกข้อมูล...</p>}
        {error && <p className="text-red-500 animate-fadeIn">{error}</p>}
        {success && <p className="text-green-500 animate-fadeIn">{success}</p>}

        <div>
          <button
            type="submit"
            disabled={loading}
            className={clsx(
              "px-4 py-2 rounded-lg text-white transition-colors",
              loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            )}
          >
            {loading ? "กำลังบันทึก..." : submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormWrapper;
