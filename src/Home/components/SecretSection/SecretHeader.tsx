import { FC } from 'react';

/**
 * SecretHeader
 * แสดงหัวข้อและคำเตือนสำหรับพื้นที่ลับ
 */
const SecretHeader: FC = () => {
  return (
    <header className="mb-8" aria-label="คำเตือนและคำแนะนำสำหรับพื้นที่ลับ">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-primary mb-6">
        Secret Private Zone
      </h1>

      {/* Alert / Warning Box */}
      <div
        className="max-w-2xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 px-6 py-4 rounded-md shadow-sm"
        role="alert"
        aria-live="polite"
      >
        <p className="leading-relaxed text-center text-sm sm:text-base">
          ⚠️ <strong>โปรดทราบ!</strong>{' '}
          พื้นที่นี้ออกแบบมาเพื่อความปลอดภัยของทั้งผู้จ้างงานและผู้รับงาน กรุณาใช้{' '}
          <strong>username/password</strong> เฉพาะเครื่องประจำเท่านั้น และห้ามแชร์กับผู้อื่น
          หากตรวจพบการใช้งานจากอุปกรณ์อื่น ระบบจะยุติการใช้งานทันที
          ถือเป็นข้อตกลงที่ทุกคนต้องปฏิบัติตามอย่างเคร่งครัด
        </p>
      </div>
    </header>
  );
};

export default SecretHeader;
