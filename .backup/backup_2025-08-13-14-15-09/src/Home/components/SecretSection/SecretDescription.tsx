import { FC } from "react";

type User = {
  username: string;
  role: "admin" | "user";
};

interface SecretDescriptionProps {
  user: User;
}

const SecretDescription: FC<SecretDescriptionProps> = ({ user }) => {
  return (
    <section aria-labelledby="secret-description-title" className="mb-6">
      <h2 id="secret-description-title" className="text-xl font-semibold mb-2">
        🎯 พื้นที่รับงานเฉพาะสมาชิก
      </h2>
      <p className="mb-2">
        ยินดีต้อนรับ <strong>{user.username}</strong> 👋
        หน้านี้เปิดให้เฉพาะผู้ใช้ที่ผ่านการยืนยันตัวตนแล้วเท่านั้น
      </p>
      <p>
        คุณสามารถจัดการงานของคุณได้อย่างปลอดภัย และมีสิทธิ์เป็น{" "}
        <strong>{user.role}</strong>
      </p>
    </section>
  );
};

export default SecretDescription;
