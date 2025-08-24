"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
}

const CardWrapper: FC<CardWrapperProps> = ({ children, className }) => {
  return (
    <div className={clsx("bg-white rounded-xl shadow-md p-6", className)}>
      {children}
    </div>
  );
};

export default CardWrapper;
