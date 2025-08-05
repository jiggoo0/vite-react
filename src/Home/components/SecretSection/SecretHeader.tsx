// src/Home/components/SecretSection/SecretHeader.tsx

import { FC } from "react";

const SecretHeader: FC = () => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-center">
        🎯 พื้นที่รับงานเฉพาะสมาชิก
      </h1>
      <p className="text-center text-sm text-gray-500 mt-2">
        หน้านี้เปิดให้เฉพาะผู้ใช้ที่ผ่านการยืนยันตัวตนแล้วเท่านั้น
      </p>
    </header>
  );
};

export default SecretHeader;