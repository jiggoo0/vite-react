import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "@/utils/cn";
const SectionContainer = forwardRef(({ children, className, as: Tag = "section", ...props }, ref) => (_jsx(Tag, { ref: ref, className: cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className), ...props, children: children })));
SectionContainer.displayName = "SectionContainer";
export default SectionContainer;
