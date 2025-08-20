import { FC, ReactNode } from "react";
import clsx from "clsx";

interface CardWrapperProps {
  /** เนื้อหาภายในการ์ด */
  children: ReactNode;

  /** className เพิ่มเติมสำหรับ wrapper */
  className?: string;

  /** 
   * ถ้า true จะทำให้เนื้อหาเบลอ และไม่สามารถ interact ได้ 
   * - blur-sm: ทำให้เบลอ
   * - pointer-events-none: ปิดการคลิก
   * - select-none: ป้องกันการเลือกข้อความ
   */
  isBlurred?: boolean;
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
        isBlurred &&
          "blur-sm pointer-events-none select-none transition-all"
      )}
    >
      {children}
    </div>
  );
};

export default CardWrapper;