import { FC, ReactNode } from "react";

/**
 * 🖇 CardWrapper — กรอบเนื้อหาปกติ (ทั่วไป)
 * ใช้ครอบเนื้อหาทั่วไป มีเงาและขอบโค้งมน
 */
export const CardWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div
    className="
      bg-white dark:bg-base-100 rounded-2xl shadow-sm border border-base-300
      p-4 sm:p-6 lg:p-8 transition-all hover:shadow-md mx-auto w-full
    "
  >
    {children}
  </div>
);

/**
 * 📄 A4CardWrapper — กรอบเนื้อหาขนาด A4 สำหรับเอกสารพิมพ์
 * กำหนดขนาดตามมาตรฐาน A4 (210mm x 297mm)
 * รองรับการแสดงผลทั้งบนจอและการพิมพ์
 */
export const A4CardWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div
    className="
      a4-card-wrapper
      bg-white dark:bg-base-100 rounded-2xl shadow-sm border border-base-300
      p-4 sm:p-6 lg:p-8 transition-all hover:shadow-md mx-auto w-full
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

/* 
  CSS สำหรับพิมพ์ (ใส่ในไฟล์ global.css หรือ styles ที่โหลดจริง)

  @media print {
    body {
      margin: 0;
      padding: 0;
    }

    .a4-card-wrapper {
      max-width: 210mm !important;
      min-height: 297mm !important;
      width: 210mm !important;
      height: 297mm !important;
      box-shadow: none !important;
      border: none !important;
      page-break-after: always;
      margin: 0 auto;
    }
  }
*/
