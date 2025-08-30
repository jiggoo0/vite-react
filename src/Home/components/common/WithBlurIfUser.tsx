"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

interface WithBlurIfUserProps {
  isBlurred?: boolean;
  overlayMessage?: ReactNode;
  className?: string;
  children: ReactNode;
}

/**
 * Wrapper component ที่ทำให้ content ถูกเบลอและซ้อน overlay message
 * เมื่อ isBlurred = true
 */
const WithBlurIfUser: FC<WithBlurIfUserProps> = ({
  isBlurred = false,
  overlayMessage,
  className,
  children,
}) => {
  return (
    <div className={clsx("relative", className)}>
      {/* Content */}
      <div
        className={clsx({
          "filter blur-sm pointer-events-none select-none": isBlurred,
        })}
      >
        {children}
      </div>

      {/* Overlay Message */}
      {isBlurred && overlayMessage && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-center p-4 rounded-xl pointer-events-none select-none"
          aria-hidden="true"
        >
          {overlayMessage}
        </div>
      )}
    </div>
  );
};

WithBlurIfUser.displayName = "WithBlurIfUser";

export default WithBlurIfUser;
