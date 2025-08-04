// ✅ src/utils/common/SectionWrapper.tsx

import { cn } from "@/utils/cn";
import { FC, PropsWithChildren } from "react";

/**
 * 🧱 SectionWrapper — ใช้ครอบ Section ให้มี padding + responsive layout
 * - ใช้ควบคุม spacing / width ในแต่ละ Section
 */
const SectionWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn("w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8")}>
      {children}
    </div>
  );
};

export default SectionWrapper;