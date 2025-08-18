"use client";

import { FC, ReactNode, memo } from "react";

interface WithBlurProps {
  /** ถ้า true จะเบลอ content (ผู้ใช้ทั่วไป) */
  isNormalUser: boolean;
  /** เนื้อหาที่จะแสดงหรือเบลอ */
  children: ReactNode;
  /** บทบาทผู้ใช้ เช่น "manager" */
  role?: string;
  /** ข้อความ overlay ถ้า content ถูกเบลอ */
  blurText?: string;
}

/**
 * WithBlurIfUser Component
 *
 * - เบลอเนื้อหาเฉพาะผู้ใช้ทั่วไป
 * - แสดง overlay message
 * - ใช้งานร่วมกับ manager / admin ได้
 */
const WithBlurIfUser: FC<WithBlurProps> = memo(
  ({ isNormalUser, children, role, blurText }) => {
    // ไม่เบลอถ้าไม่ใช่ normal user หรือ role เป็น manager
    if (!isNormalUser || role === "manager") return <>{children}</>;

    const overlayText = blurText ?? "เฉพาะ manager";

    return (
      <div className="relative">
        <div className="blur-sm pointer-events-none select-none">
          {children}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center text-center text-gray-500 font-semibold text-lg px-4"
          aria-hidden="true"
        >
          {overlayText}
        </div>
      </div>
    );
  }
);

WithBlurIfUser.displayName = "WithBlurIfUser";

export default WithBlurIfUser;
