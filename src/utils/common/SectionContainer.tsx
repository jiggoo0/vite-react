import { FC, ReactNode, ElementType } from "react";
import { cn } from "@/utils/cn";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** 👶 Content ภายใน Container */
  children: ReactNode;
  /** 🎨 className เพิ่มเติมสำหรับ container */
  className?: string;
  /** 🏷 Element ที่จะใช้เป็น container เช่น section, div, main */
  as?: ElementType;
}

/**
 * 📦 SectionContainer
 *
 * - ครอบเนื้อหาในแต่ละ Section ให้เป็นระเบียบ
 * - max-w-7xl เพื่อควบคุมความกว้างของ layout
 * - รองรับ responsive padding (mobile → desktop)
 * - ใช้คู่กับ `<section>`, `<main>`, `<div>` ได้
 */
const SectionContainer: FC<SectionContainerProps> = ({
  children,
  className,
  as: Tag = "section", // ✅ Default เป็น section
  ...props
}) => {
  return (
    <Tag
      className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default SectionContainer;
