// src/data/caseStudies.ts

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  imageSrc: string;
  tags: string[];
  redactedFields: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    title: "รีแบรนด์เอกสารองค์กร",
    summary: "จัดชุดเอกสารภาพลักษณ์ใหม่",
    imageSrc: "/assets/portfolio/portfolio1.webp",
    tags: ["Branding", "Docs"],
    redactedFields: ["client", "brand"],
  },
  {
    id: "cs-2",
    title: "จัดทำสื่อเร่งด่วน 24 ชม.",
    summary: "ออกแบบชุดสื่อพร้อมส่ง",
    imageSrc: "/assets/portfolio/portfolio2.webp",
    tags: ["Rush", "Design"],
    redactedFields: ["client"],
  },
  {
    id: "cs-3",
    title: "ชุดไฟล์ยื่นงานเฉพาะทาง",
    summary: "จัดสเปกไฟล์ให้ผ่านข้อกำหนด",
    imageSrc: "/assets/portfolio/portfolio3.webp",
    tags: ["Compliance", "Delivery"],
    redactedFields: ["brand"],
  },
];
