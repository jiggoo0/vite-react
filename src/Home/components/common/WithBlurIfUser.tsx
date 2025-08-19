"use client";

import { FC, ReactNode, memo } from "react";
import clsx from "clsx";

// ======================= Props =======================
interface WithBlurIfUserProps {
  /** ถ้า true จะเบลอและ disable interaction */
  isBlurred: boolean;
  children: ReactNode;
  className?: string;
}

// ======================= Component =======================
const WithBlurIfUser: FC<WithBlurIfUserProps> = memo(
  ({ isBlurred, children, className }) => {
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
