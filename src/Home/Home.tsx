// src/Home/Home.tsx
"use client";

import { FC, Suspense } from "react";
import { homeSections, HomeSection } from "@/config/homeSections.config";
import FallbackLoader from "@/utils/common/FallbackLoader";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-12">
      {homeSections
        .filter((section: HomeSection) => section.enabled)
        .map((section: HomeSection) => {
          const SectionComponent = section.content; // Type-safe lazy component
          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-20"
              aria-label={section.id}
            >
              <Suspense fallback={<FallbackLoader message={`⏳ กำลังโหลดส่วน ${section.id}...`} />}>
                <SectionComponent />
              </Suspense>
            </section>
          );
        })}
    </div>
  );
};

export default Home;
