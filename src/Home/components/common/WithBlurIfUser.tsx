"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

export interface WithBlurIfUserProps {
  children: ReactNode;
  isBlurred?: boolean;
  overlayMessage?: ReactNode;
  className?: string; // รองรับ custom class เพิ่มเติม
}

const WithBlurIfUser: FC<WithBlurIfUserProps> = ({
  children,
  isBlurred = false,
  overlayMessage,
  className,
}) => {
  if (!isBlurred) return <>{children}</>;

  return (
    <div className={clsx("relative", className)}>
      <div className="filter blur-sm pointer-events-none select-none">
        {children}
      </div>
      {overlayMessage && (
        <div
          className="absolute inset-0 flex items-center justify-center
                     bg-white/70 dark:bg-gray-900/70 text-center
                     text-gray-800 dark:text-gray-100 font-medium
                     p-4 rounded"
        >
          {overlayMessage}
        </div>
      )}
    </div>
  );
};

WithBlurIfUser.displayName = "WithBlurIfUser";

export default WithBlurIfUser;
