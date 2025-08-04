// ✅ src/utils/common/404.tsx — Page Not Found

import { Link } from "react-router-dom";
import { Frown } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-base-100 text-base-content">
      <div className="text-center max-w-lg space-y-6">
        {/* 😞 Icon */}
        <div className="flex justify-center">
          <Frown className="w-16 h-16 text-error" />
        </div>

        {/* 🧭 Text */}
        <h1 className="text-3xl font-bold text-error">404</h1>
        <p className="text-xl font-semibold">ไม่พบหน้าที่คุณต้องการ</p>
        <p className="text-gray-600">
          หน้าที่คุณกำลังเข้าถึงอาจถูกลบ เปลี่ยนชื่อ หรือไม่มีอยู่ในระบบนี้
        </p>

        {/* 🔙 Back to Home */}
        <Link to="/" className="btn btn-primary mt-4">
          กลับหน้าแรก
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
