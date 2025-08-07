import { FC, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

type SectionWrapperProps = PropsWithChildren<{
  /** เพิ่มเติม className สำหรับปรับแต่ง container */
  className?: string;
}>;

/**
 * 🧱 SectionWrapper
 *
 * - ใช้สำหรับจัดระยะขอบแนวนอนและความกว้างของ Section
 * - ปรับให้ responsive ได้โดยใช้ Tailwind utility classes
 * - ใช้ร่วมกับแต่ละ Section เช่น Hero, Services, Features ฯลฯ
 */
const SectionWrapper: FC<SectionWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
