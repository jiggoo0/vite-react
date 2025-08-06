import { FC } from "react";

interface BlurContactProps {
  imageUrl: string;
  contactText?: string;
}

/**
 * แสดงภาพพื้นหลังแบบเบลอพร้อมข้อความกึ่งกลาง (สำหรับช่องติดต่อ)
 */
const BlurContact: FC<BlurContactProps> = ({
  imageUrl,
  contactText = "ติดต่อแอดมิน",
}) => {
  return (
    <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden">
      {/* ภาพพื้นหลังพร้อมเอฟเฟกต์เบลอและมืด */}
      <img
        src={imageUrl}
        alt="Background"
        className="w-full h-full object-cover filter blur-sm brightness-75"
        draggable={false}
      />

      {/* ข้อความกึ่งกลาง */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-xl md:text-3xl font-semibold drop-shadow-lg">
          {contactText}
        </p>
      </div>
    </div>
  );
};

export default BlurContact;
