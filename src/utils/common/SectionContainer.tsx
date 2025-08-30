import { forwardRef, ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ children, className, as: Tag = "section", ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  )
);

SectionContainer.displayName = "SectionContainer";
export default SectionContainer;
