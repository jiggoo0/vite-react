"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

export interface PageSectionProps {
  /** Unique ID ของ section */
  id: string;
  /** เนื้อหาภายใน section */
  children?: ReactNode;
  /** CSS class สำหรับ background */
  bgClass?: string;
  /** CSS class เพิ่มเติมสำหรับ container */
  className?: string;
  /** ชื่อ section สำหรับ accessibility / screen readers */
  title?: string;
}

/**
 * PageSection
 * - Section ทั่วไปสำหรับ layout
 * - รองรับ background class และ container class
 * - รองรับ accessibility ด้วย title สำหรับ screen reader
 */
const PageSection: FC<PageSectionProps> = ({
  id,
  children,
  bgClass = "bg-base-100",
  className,
  title,
}) => {
  return (
    <section
      id={id}
      className={clsx(bgClass, "py-16 px-4 md:px-8", className)}
      role="region"
      aria-label={title}
    >
      {title && <h2 className="sr-only">{title}</h2>}
      {children}
    </section>
  );
};

export default PageSection;