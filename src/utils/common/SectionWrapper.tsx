import { FC, PropsWithChildren, ElementType } from "react";
import { cn } from "@/utils/cn";

interface SectionWrapperProps extends PropsWithChildren<object> {
  /** 🎨 เพิ่มเติม className สำหรับปรับแต่ง container */
  className?: string;
  /** 🏷️ semantic element เช่น section, main, header, footer */
  as?: ElementType;
  /** 🔗 รองรับ anchor link (#id) */
  id?: string;
  /** ♿ เพิ่ม label สำหรับ accessibility */
  ariaLabel?: string;
}

/**
 * 🧱 SectionWrapper
 *
 * - ครอบเนื้อหาแต่ละ Section และควบคุม max width
 * - รองรับ Responsive padding (mobile → desktop)
 * - ปรับใช้ semantic tag และ accessibility ได้
 */
const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  className,
  as: Tag = "section",
  id,
  ariaLabel,
}) => {
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default SectionWrapper;
