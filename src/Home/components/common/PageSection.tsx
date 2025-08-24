"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

export interface PageSectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  hideTitle?: boolean; // ซ่อน title
}

const PageSection: FC<PageSectionProps> = ({
  id,
  title,
  children,
  className,
  hideTitle = false,
}) => (
  <section
    id={id}
    className={clsx("bg-white p-6 rounded-xl shadow-md", className)}
  >
    {!hideTitle && title && (
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    )}
    <div className="space-y-4">{children}</div>
  </section>
);

PageSection.displayName = "PageSection";

export default PageSection;
