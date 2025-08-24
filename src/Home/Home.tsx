"use client";

import { memo } from "react";
import { homeSections } from "@/config/homeSections.config";
import PageSection from "@/Home/components/common/PageSection";

// ใช้ anonymous memo component เลย
export default memo(() => (
  <main className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 print:bg-white print:text-black">
    {homeSections
      .filter((section) => section.enabled)
      .map((section) => (
        <PageSection key={section.id} id={section.id} title={section.title}>
          {section.content}
        </PageSection>
      ))}
  </main>
));
