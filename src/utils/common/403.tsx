// ✅ src/utils/common/403.tsx — Forbidden (403) Page

import { FC } from "react";
import { Link } from "react-router-dom";

const Forbidden: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">403</h1>
      <p className="text-xl font-semibold mb-6">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</p>
      <Link
        to="/"
        className="btn btn-primary"
        aria-label="กลับหน้าหลัก"
      >
        กลับหน้าหลัก
      </Link>
    </div>
  );
};

export default Forbidden;