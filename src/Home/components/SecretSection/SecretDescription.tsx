"use client";

import { FC } from "react";

type User = {
  username: string;
  role: "admin" | "user" | "manager";
};

interface SecretDescriptionProps {
  user: User;
  /** optional subtitle แยกออกจาก welcome message */
  subtitle?: string;
}

const SecretDescription: FC<SecretDescriptionProps> = ({ user, subtitle }) => {
  return (
    <section
      aria-labelledby="secret-description-title"
      className="mb-8 p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md
                 hover:shadow-lg transition-shadow duration-300"
    >
      <h2
        id="secret-description-title"
        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
      >
        🎯 พื้นที่รับงานเฉพาะสมาชิก
      </h2>

      <p className="mb-3 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
        ยินดีต้อนรับ{" "}
        <strong className="text-primary dark:text-primary-light">
          {user.username}
        </strong>{" "}
        👋{" "}
        {subtitle ??
          "หน้านี้เปิดให้เฉพาะผู้ใช้ที่ผ่านการยืนยันตัวตนแล้วเท่านั้น"}
      </p>

      <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
        คุณสามารถจัดการงานของคุณได้อย่างปลอดภัย และมีสิทธิ์เป็น{" "}
        <strong className="capitalize text-secondary dark:text-secondary-light">
          {user.role}
        </strong>
      </p>

      <div className="mt-4 h-1 w-20 bg-primary dark:bg-primary-light rounded-full opacity-70"></div>
    </section>
  );
};

SecretDescription.displayName = "SecretDescription";

export default SecretDescription;
