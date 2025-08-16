import { FC, ReactNode } from "react";

interface WithBlurProps {
  /** หากผู้ใช้ปกติ ให้เนื้อหาถูกเบลอ */
  isNormalUser: boolean;
  /** เนื้อหาที่ต้องการ render */
  children: ReactNode;
  /** ข้อความ overlay ขณะเนื้อหาถูกเบลอ */
  blurText?: string;
}

const WithBlurIfUser: FC<WithBlurProps> = ({
  isNormalUser,
  children,
  blurText,
}) => {
  if (!isNormalUser) return <>{children}</>;

  return (
    <div className="relative">
      {/* เนื้อหาเบลอ */}
      <div className="blur-sm pointer-events-none select-none">{children}</div>

      {/* ข้อความ overlay */}
      {blurText && (
        <div
          className="absolute inset-0 flex items-center justify-center text-center 
                     text-gray-500 font-semibold text-lg px-4"
          aria-hidden="true"
        >
          {blurText}
        </div>
      )}
    </div>
  );
};

export default WithBlurIfUser;
