"use client";

import { FC, ReactNode, memo } from "react";

interface WithBlurProps {
  isNormalUser: boolean;
  children: ReactNode;
  role?: string;
  blurText?: string;
}

const WithBlurIfUser: FC<WithBlurProps> = memo(({ isNormalUser, children, role, blurText }) => {
  // ถ้าไม่ใช่ normal user หรือเป็น manager ให้ไม่เบลอ
  if (!isNormalUser || role === "manager") return <>{children}</>;

  // ข้อความ overlay ถ้าไม่กำหนดจะใช้ค่า default
  const overlayText = blurText || "เฉพาะ manager";

  return (
    <div className="relative">
      <div className="blur-sm pointer-events-none select-none">{children}</div>
      <div
        className="absolute inset-0 flex items-center justify-center text-center text-gray-500 font-semibold text-lg px-4"
        aria-hidden="true"
      >
        {overlayText}
      </div>
    </div>
  );
});

WithBlurIfUser.displayName = "WithBlurIfUser";

export default WithBlurIfUser;