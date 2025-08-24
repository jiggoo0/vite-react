"use client";

import React, { FC, memo } from "react";
import { EffectiveRole } from "@/config/secretCards.config";

interface SecretDescriptionProps {
  user: {
    username: string;
    role: EffectiveRole;
  };
}

const SecretDescription: FC<SecretDescriptionProps> = ({ user }) => {
  return (
    <section className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">รายละเอียดสำหรับผู้ใช้</h2>
      <p className="mb-1">สวัสดี, {user.username}</p>
      <p className="mb-1">สิทธิ์ของคุณ: {user.role}</p>
      <p className="text-sm text-gray-600">
        หน้านี้ประกอบด้วยข้อมูลที่มีความสำคัญและบางส่วนอาจถูกจำกัดสำหรับแอดมิน
      </p>
    </section>
  );
};

SecretDescription.displayName = "SecretDescription";

export default memo(SecretDescription);
