"use client";

import { homeSections } from "@/config/homeSections.config";

export default function Home() {
  return (
    <main className="w-full">
      {homeSections
        .filter(({ enabled }) => enabled)
        .map(({ id, content }) => (
          <section key={id} id={id} className="w-full">
            {content}
          </section>
        ))}
    </main>
  );
}