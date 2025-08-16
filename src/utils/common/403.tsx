// ✅ src/utils/common/403.tsx — Forbidden (403) Page

import { FC } from "react";
import { Link } from "react-router-dom";

/**
 * ❌ Forbidden Page (403)
 *
 * - แสดงข้อความเมื่อผู้ใช้ไม่มีสิทธิ์เข้าถึงหน้า
 * - มีลิงก์กลับไปหน้าหลัก
 */
const Forbidden: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      {/* รหัสสถานะ */}
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">403</h1>

      {/* ข้อความแจ้ง */}
      <p className="text-xl font-semibold mb-6">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</p>

      {/* ปุ่มกลับหน้าหลัก */}
      <Link to="/" className="btn btn-primary" aria-label="กลับหน้าหลัก">
        กลับหน้าหลัก
      </Link>
    </div>
  );
};

export default Forbidden;
