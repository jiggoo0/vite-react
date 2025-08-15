import { FC } from "react";

type User = {
  username: string;
  role: "admin" | "user";
};

interface SecretDescriptionProps {
  /** ข้อมูลผู้ใช้ที่เข้าสู่ระบบ */
  user: User;
}

/**
 * SecretDescription
 * แสดงข้อความต้อนรับและคำอธิบายพื้นที่เฉพาะสมาชิก
 */
const SecretDescription: FC<SecretDescriptionProps> = ({ user }) => {
  return (
    <section
      aria-labelledby="secret-description-title"
      className="mb-6 p-4 bg-base-100 rounded-xl shadow-sm"
    >
      <h2
        id="secret-description-title"
        className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900"
      >
        🎯 พื้นที่รับงานเฉพาะสมาชิก
      </h2>

      <p className="mb-2 text-gray-700">
        ยินดีต้อนรับ <strong className="text-primary">{user.username}</strong>{" "}
        👋 หน้านี้เปิดให้เฉพาะผู้ใช้ที่ผ่านการยืนยันตัวตนแล้วเท่านั้น
      </p>

      <p className="text-gray-700">
        คุณสามารถจัดการงานของคุณได้อย่างปลอดภัย และมีสิทธิ์เป็น{" "}
        <strong className="capitalize text-secondary">{user.role}</strong>
      </p>
    </section>
  );
};

export default SecretDescription;
