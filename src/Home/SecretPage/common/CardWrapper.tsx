import { FC, ReactNode } from "react";

/**
 * CardWrapper - ใช้เป็น container ทั่วไปสำหรับเนื้อหา
 */
export const CardWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div
    className="
      bg-white dark:bg-base-100
      rounded-2xl shadow-sm border border-base-300
      p-4 sm:p-6 lg:p-8
      transition-all hover:shadow-md
      mx-auto w-full
    "
  >
    {children}
  </div>
);

/**
 * A4CardWrapper - ใช้สำหรับหน้ากระดาษ A4 หรือ print
 */
export const A4CardWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div
    className="
      a4-card-wrapper
      bg-white dark:bg-base-100
      rounded-2xl shadow-sm border border-base-300
      p-4 sm:p-6 lg:p-8
      transition-all hover:shadow-md
      mx-auto w-full
      max-w-[210mm] min-h-[297mm]
      sm:max-w-full sm:min-h-auto
    "
    style={{
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    {children}
  </div>
);
