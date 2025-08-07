import { FC, ReactNode, ElementType } from "react";

type SectionContainerProps = {
  /** 👶 Content ที่อยู่ภายใน Container */
  children: ReactNode;
  /** 🎨 เพิ่มเติม className สำหรับ container */
  className?: string;
  /** 🏷 กำหนด element ที่จะใช้เป็น container เช่น section, div, main */
  as?: ElementType;
} & React.HTMLAttributes<HTMLElement>;

/**
 * 📦 SectionContainer
 *
 * - ใช้ครอบเนื้อหาในแต่ละ Section ให้เป็นระเบียบ
 * - max-w-7xl เพื่อควบคุมความกว้างของ layout
 * - รองรับ responsive padding (mobile → desktop)
 * - ใช้คู่กับ `<section>` หรือ `<div>` ได้
 */
const SectionContainer: FC<SectionContainerProps> = ({
  children,
  className = "",
  as: Tag = "div",
  ...props
}) => (
  <Tag
    className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    {...props}
  >
    {children}
  </Tag>
);

export default SectionContainer;
