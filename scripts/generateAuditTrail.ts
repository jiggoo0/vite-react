import { writeFileSync } from "fs";
import { join } from "path";
import { faker } from "@faker-js/faker";

faker.locale = "th";

const users = [
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
];

const activities = [
  "เข้าสู่ระบบ",
  "ส่งเอกสาร",
  "ดาวน์โหลดรายงาน",
  "แก้ไขโปรไฟล์",
  "เปิดหน้าแดชบอร์ด",
];

function generateUserActions(count: number) {
  return Array.from({ length: count }, () => ({
    เวลา: faker.date.recent(5).toISOString(),
    กิจกรรม: faker.helpers.arrayElement(activities),
    ผู้ใช้: faker.helpers.arrayElement(users),
    รายละเอียด: faker.datatype.boolean() ? faker.lorem.sentence() : undefined,
  }));
}

const จำนวนรายการ = 50;
const ข้อมูลผู้ใช้งาน = generateUserActions(จำนวนรายการ);

const fileContent = `export interface การกระทำผู้ใช้ {
  เวลา: string;
  กิจกรรม: string;
  ผู้ใช้: string;
  รายละเอียด?: string;
}

export const mockUserActions: การกระทำผู้ใช้[] = ${JSON.stringify(ข้อมูลผู้ใช้งาน, null, 2)};
`;

const outputFilePath = join(process.cwd(), "src/data/userBehaviorData.ts");

try {
  writeFileSync(outputFilePath, fileContent, "utf8");
  console.log(`✅ สร้างข้อมูลผู้ใช้งานสมมติภาษาไทย (${จำนวนรายการ} รายการ) ที่ ${outputFilePath}`);
} catch (error) {
  console.error("❌ เกิดข้อผิดพลาดในการเขียนไฟล์:", error);
}
