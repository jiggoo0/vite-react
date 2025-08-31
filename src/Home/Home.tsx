// home::/data/data/com.termux/files/home/projects/src/Home/Home.tsx
"use client";

import { FC, Suspense } from "react";
import { homeSections } from "@/config/homeSections.config";
import FallbackLoader from "@/utils/common/FallbackLoader";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-12">
      {homeSections
        .filter((section) => section.enabled)
        .map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-20">
            <Suspense
              fallback={
                <FallbackLoader message={`⏳ กำลังโหลดส่วน ${section.id}...`} />
              }
            >
              {section.content}
            </Suspense>
          </section>
        ))}
    </div>
  );
};

export default Home;