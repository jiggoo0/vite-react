"use client";

import { FC, ReactNode, memo } from "react";

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
  hideOverflow?: boolean;
  rounded?: boolean;
  shadow?: boolean;
}

const CardWrapper: FC<CardWrapperProps> = ({
  children,
  className = "",
  hideOverflow = false,
  rounded = true,
  shadow = true,
}) => {
  const baseClasses = [
    "bg-white",
    "p-6",
    hideOverflow ? "overflow-hidden" : "",
    rounded ? "rounded-xl" : "",
    shadow ? "shadow-md" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={baseClasses}>{children}</div>;
};

CardWrapper.displayName = "CardWrapper";

export default memo(CardWrapper);