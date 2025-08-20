"use client";

import { FC, ReactNode, memo } from "react";
import clsx from "clsx";

// ======================= Props =======================
interface WithBlurIfUserProps {
  /** ถ้า true จะทำให้เนื้อหาเบลอ + ไม่สามารถ interact ได้ */
  isBlurred: boolean;
  /** เนื้อหาภายใน component */
  children: ReactNode;
  /** CSS class เพิ่มเติม */
  className?: string;
}

// ======================= Component =======================
const WithBlurIfUser: FC<WithBlurIfUserProps> = memo(
  ({ isBlurred, children, className }) => {
    // ถ้าไม่ต้องเบลอ, render ธรรมดา
    if (!isBlurred) return <>{children}</>;

    return (
      <div
        className={clsx(
          "blur-sm pointer-events-none select-none transition-all duration-300",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

WithBlurIfUser.displayName = "WithBlurIfUser";

export default WithBlurIfUser;