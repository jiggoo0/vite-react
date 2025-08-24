"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

interface WithBlurIfUserProps {
  isBlurred?: boolean;
  overlayMessage?: ReactNode;
  children: ReactNode;
}

const WithBlurIfUser: FC<WithBlurIfUserProps> = ({
  isBlurred = false,
  overlayMessage,
  children,
}) => {
  if (!isBlurred) return <>{children}</>;

  return (
    <div className="relative">
      <div className="filter blur-sm pointer-events-none select-none">
        {children}
      </div>
      {overlayMessage && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 text-gray-700 font-medium">
          {overlayMessage}
        </div>
      )}
    </div>
  );
};

export default WithBlurIfUser;
