// ✅ src/utils/common/403.tsx — Forbidden Page (403)

import { FC } from "react";
import { Link } from "react-router-dom";
import { ShieldOff } from "lucide-react";

/**
 * 🚫 Forbidden Page — แสดงเมื่อผู้ใช้ไม่มีสิทธิ์เข้าถึงหน้าที่ร้องขอ
 *
 * ใช้ร่วมกับ RoleGuard เช่น:
 * <Navigate to="/403" />
 */
const Forbidden: FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-base-100 text-base-content">
      <div className="text-center max-w-md space-y-6">
        {/* 🔒 Icon */}
        <div className="flex justify-center">
          <ShieldOff className="w-20 h-20 text-warning" aria-hidden />
        </div>

        {/* 🛑 Code + Title */}
        <h1 className="text-5xl font-bold text-warning">403</h1>
        <p className="text-xl font-semibold">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</p>
        <p className="text-base text-gray-500">
          โปรดตรวจสอบสิทธิ์บัญชีผู้ใช้ หรือกลับไปที่หน้าแรก
        </p>

        {/* 🔙 Back Home */}
        <Link to="/" className="btn btn-warning btn-wide">
          กลับหน้าแรก
        </Link>
      </div>
    </section>
  );
};

export default Forbidden;