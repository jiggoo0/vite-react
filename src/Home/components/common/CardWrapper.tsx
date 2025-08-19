import { FC, ReactNode } from "react";
import clsx from "clsx";

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
  isBlurred?: boolean; // ถ้า true จะทำให้เนื้อหาเบลอ + ไม่สามารถ interact ได้
}

const CardWrapper: FC<CardWrapperProps> = ({
  children,
  className,
  isBlurred = false,
}) => {
  return (
    <div
      className={clsx(
        className,
        isBlurred && "blur-sm pointer-events-none select-none transition-all"
      )}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
