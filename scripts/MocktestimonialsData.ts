// scripts/MockTestimonials30Thai.ts
import { writeFileSync } from "fs";
import { join } from "path";

// ชื่อผู้ใช้ตัวอย่างภาษาไทย
const names = [
  "สมชาย จ.",
  "สมหญิง ป.",
  "อรรถพล ส.",
  "ปวีณา ท.",
  "นรินทร์ ร.",
  "ธนพล ว.",
  "มธุรส ช.",
  "สุนิสา พ.",
  "รชต ก.",
  "อนุชา บ.",
  "ชุติมา ด.",
  "เอกชัย ฟ.",
  "กานต์ ห.",
  "อิศรา จ.",
  "โอภาส พ.",
  "กฤติน ร.",
  "สุดารัตน์ ท.",
  "อุทัย ว.",
  "วัฒนา เ.",
  "ยุพิน ซ.",
  "อภิชาติ ล.",
  "บุษบา ม.",
  "ชลธิชา น.",
  "ดนัย โ.",
  "เอมพิน พ.",
  "ฟ้าใส ค.",
  "กาญจนา ร.",
  "หทัยชนก ส.",
  "อิทธิกร ท.",
  "จิราพร อ.",
];

// ข้อความรีวิวตัวอย่างภาษาไทย
const contents = [
  "บริการรวดเร็วและมืออาชีพ งานทุกขั้นตอนเนียนเรียบ ไม่มีข้อผิดพลาด",
  "ช่วยปรับภาพลักษณ์ธุรกิจให้ดูน่าเชื่อถือมากขึ้น รักษาความลับดีเยี่ยม",
  "งานออกแบบตรงใจ ส่งงานเร็ว ไม่มีผิดหวัง ใช้บริการซ้ำหลายครั้ง",
  "ทีมงานให้คำแนะนำละเอียด ตอบสนองไว และเป็นมืออาชีพ",
  "คุณภาพงานสูง ใช้งานง่าย สะดวกต่อธุรกิจจริง",
  "บริการเป็นกันเอง แต่ยังคงความเป็นมืออาชีพสูงสุด",
  "ส่งงานตรงเวลา พร้อมแก้ไขตาม feedback อย่างรวดเร็ว",
  "รักษาความลับของลูกค้าได้อย่างเข้มงวด ประทับใจมาก",
  "งานสวย มีเอกลักษณ์ ใช้งานได้จริงตามความต้องการ",
  "ปรับเปลี่ยนงานได้ง่ายตามโจทย์ ใช้งานทันทีหลังรับงาน",
];

// สร้าง mock data 30 คน
const mockTestimonials = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: names[i % names.length],
  role: ["Freelancer", "ธุรกิจส่วนตัว", "เอเจนซี่"][i % 3],
  content: contents[i % contents.length],
}));

// แปลง mock data เป็น JSON string
const testimonialsJSON = JSON.stringify(mockTestimonials, null, 2);

// เตรียมเนื้อหาไฟล์ TypeScript
const fileContent = `export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

export const testimonials: Testimonial[] = ${testimonialsJSON};
`;

// path สำหรับเขียนไฟล์
const outputFilePath = join(process.cwd(), "src/data/testimonialsData.ts");

// เขียนไฟล์จริง
try {
  writeFileSync(outputFilePath, fileContent, "utf8");
  console.log(`✅ Mock testimonials data ภาษาไทย (30 entries) generated at ${outputFilePath}`);
} catch (error) {
  console.error("❌ Error writing mock data:", error);
}
