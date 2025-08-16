import { FC, PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

interface SectionWrapperProps extends PropsWithChildren<object> {
  /** 🎨 เพิ่มเติม className สำหรับปรับแต่ง container */
  className?: string;
}

/**
 * 🧱 SectionWrapper
 *
 * - ครอบเนื้อหาแต่ละ Section และควบคุม max width
 * - ปรับ responsive padding ด้วย Tailwind (mobile → desktop)
 * - ใช้ร่วมกับ Hero, Services, Features หรือ Section อื่นๆ
 */
const SectionWrapper: FC<SectionWrapperProps> = ({ children, className }) => {
  return (
    <div className={cn('w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
};

export default SectionWrapper;
