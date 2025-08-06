import { FC } from "react";

interface BlurContactProps {
  imageUrl: string;
  contactText?: string;
}

/**
 * Component แสดงภาพพื้นหลังแบบเบลอ พร้อมข้อความกึ่งกลาง
 */
const BlurContact: FC<BlurContactProps> = ({
  imageUrl,
  contactText = "ติดต่อแอดมิน",
}) => {
  return (
    <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden">
      {/* Background image with blur and dark overlay */}
      <img
        src={imageUrl}
        alt="Background"
        className="w-full h-full object-cover filter blur-sm brightness-75"
        draggable={false}
      />

      {/* Centered text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-xl md:text-3xl font-semibold drop-shadow-lg">
          {contactText}
        </p>
      </div>
    </div>
  );
};

export default BlurContact;