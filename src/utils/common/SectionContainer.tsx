// ✅ src/components/common/SectionContainer.tsx — Production-Ready Layout Container

import { FC, ReactNode } from "react";

type SectionContainerProps = {
  /** 👶 Content ที่อยู่ภายใน Container */
  children: ReactNode;
};

/**
 * 📦 SectionContainer
 *
 * - ใช้ครอบเนื้อหาในแต่ละ Section ให้เป็นระเบียบ
 * - max-w-7xl เพื่อควบคุมความกว้างของ layout
 * - รองรับ responsive padding (mobile → desktop)
 * - ใช้คู่กับ `<section className="py-16">` เป็นต้น
 */
const SectionContainer: FC<SectionContainerProps> = ({ children }) => (
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

export default SectionContainer;