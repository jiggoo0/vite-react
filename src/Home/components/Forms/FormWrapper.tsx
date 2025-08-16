// src/Home/components/Forms/FormWrapper.tsx
import React, { ReactNode, useState } from 'react';

type FormWrapperProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  onSubmit?: () => void | Promise<void>;
  className?: string;
};

const FormWrapper: React.FC<FormWrapperProps> = ({
  title = 'ฟอร์ม',
  description = '',
  children,
  onSubmit,
  className = '',
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (onSubmit) {
        await onSubmit();
      }
      setSuccess('บันทึกข้อมูลสำเร็จ');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`p-6 rounded-2xl shadow-md bg-white ${className}`}>
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {children}

        {loading && <p className="text-blue-500">กำลังบันทึกข้อมูล...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <div>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'กำลังบันทึก...' : 'บันทึก'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormWrapper;
