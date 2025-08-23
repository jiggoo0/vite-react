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
  /** กำหนด max-width container */
  maxWidthClass?: string;
  /** กำหนด responsive padding overrides */
  paddingClass?: string;
}

/**
 * PageSection
 * -------------------------
 * Section ทั่วไปสำหรับ layout
 * - รองรับ background class, container class และ responsive padding
 * - รองรับ accessibility ด้วย title สำหรับ screen reader
 * - รองรับ max-width container
 */
const PageSection: FC<PageSectionProps> = ({
  id,
  children,
  bgClass = "bg-base-100",
  className,
  title,
  maxWidthClass = "max-w-7xl mx-auto",
  paddingClass = "py-16 px-4 md:px-8",
}) => {
  return (
    <section
      id={id}
      className={clsx(bgClass, paddingClass, className)}
      role="region"
      aria-label={title}
    >
      {title && <h2 className="sr-only">{title}</h2>}
      <div className={clsx(maxWidthClass)}>{children ?? null}</div>
    </section>
  );
};

export default PageSection;