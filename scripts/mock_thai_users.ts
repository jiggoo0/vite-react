// scripts/mock_thai_users.ts

import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const REAL_FIRST_NAMES_MALE = [
  "สมชาย",
  "ศักดิ์ชัย",
  "สุชาติ",
  "อนันต์",
  "นิพนธ์",
  "วรชัย",
  "วิทยา",
];
const REAL_FIRST_NAMES_FEMALE = [
  "อรทัย",
  "วาสนา",
  "สมพร",
  "ประไพ",
  "สุภาวดี",
  "บุญญาพร",
  "จิตติมา",
];
const REAL_LAST_NAMES = [
  "ใจดี",
  "ตั้งตรงจิตร",
  "บุญเรือง",
  "มงคลชัย",
  "ทองดี",
  "สุวรรณภูมิ",
  "วงศ์ศรี",
];
const STAFF_NAMES = [
  "ณัฐกานต์ ศรีวงศ์",
  "วรัญญา อินทร์แก้ว",
  "พีรพงศ์ แซ่ลิ้ม",
  "ชุติมา แก้วสิงห์",
];
const MOBILE_PREFIXES = [
  "081",
  "082",
  "083",
  "084",
  "085",
  "086",
  "087",
  "088",
  "089",
  "090",
  "091",
  "092",
  "093",
  "094",
  "095",
  "096",
  "097",
  "098",
  "099",
];
const STATUS_WEIGHTED = [
  ...Array(70).fill("ผ่าน"),
  ...Array(20).fill("ไม่ผ่าน"),
  ...Array(10).fill("รอดำเนินการ"),
];

// Mock address data แบบง่าย (แทนของจริง)
const ADDRESS_DATA = [
  {
    subdistrict: "คลองหนึ่ง",
    district: "คลองหลวง",
    province: "ปทุมธานี",
    zipcode: "12120",
  },
  {
    subdistrict: "หัวหมาก",
    district: "บางกะปิ",
    province: "กรุงเทพมหานคร",
    zipcode: "10240",
  },
  {
    subdistrict: "บ้านเป็ด",
    district: "บ้านเป็ด",
    province: "ขอนแก่น",
    zipcode: "40000",
  },
  {
    subdistrict: "หนองปรือ",
    district: "บางละมุง",
    province: "ชลบุรี",
    zipcode: "20150",
  },
  {
    subdistrict: "ในเมือง",
    district: "เมืองนครราชสีมา",
    province: "นครราชสีมา",
    zipcode: "30000",
  },
];

// UUID generator สั้น (ใช้แทน)
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function mask(value: string, keep: number) {
  return value.slice(0, keep) + "XXX";
}

function generateCitizenId() {
  let digits: number[] = [];
  digits.push(randomInt(1, 9));
  for (let i = 0; i < 11; i++) digits.push(randomInt(0, 9));
  let sum = 0;
  for (let i = 0; i < digits.length; i++) sum += digits[i] * (13 - i);
  const checksum = (11 - (sum % 11)) % 10;
  digits.push(checksum);
  return digits.join("");
}

function generateMobile() {
  return (
    MOBILE_PREFIXES[randomInt(0, MOBILE_PREFIXES.length - 1)] +
    Array.from({ length: 7 }, () => randomInt(0, 9)).join("")
  );
}

function generateCreatedAt() {
  const daysAgo = randomInt(0, 30);
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().slice(0, 19);
}

function generateUser() {
  const gender = Math.random() < 0.5 ? "male" : "female";
  const firstName =
    gender === "male"
      ? REAL_FIRST_NAMES_MALE[randomInt(0, REAL_FIRST_NAMES_MALE.length - 1)]
      : REAL_FIRST_NAMES_FEMALE[
          randomInt(0, REAL_FIRST_NAMES_FEMALE.length - 1)
        ];
  const lastName = REAL_LAST_NAMES[randomInt(0, REAL_LAST_NAMES.length - 1)];
  const prefix = gender === "male" ? "นาย" : "นางสาว";
  const fullName = `${prefix}${firstName} ${lastName}`;
  const dobYear = new Date().getFullYear() - randomInt(20, 60);
  const dobMonth = randomInt(1, 12);
  const dobDay = randomInt(1, 28);
  const dob = `${dobYear}-${String(dobMonth).padStart(2, "0")}-${String(dobDay).padStart(2, "0")}`;

  const addr = ADDRESS_DATA[randomInt(0, ADDRESS_DATA.length - 1)];
  const street = `${randomInt(1, 999)}/${randomInt(1, 99)} หมู่ ${randomInt(1, 10)}`;
  const fullAddress = `${street} ต.${addr.subdistrict} อ.${addr.district} จ.${addr.province} ${addr.zipcode}`;

  const citizenId = generateCitizenId();
  const mobile = generateMobile();
  const status = STATUS_WEIGHTED[randomInt(0, STATUS_WEIGHTED.length - 1)];
  const approvedBy =
    status === "ผ่าน"
      ? STAFF_NAMES[randomInt(0, STAFF_NAMES.length - 1)]
      : null;

  return {
    application_id: uuidv4(),
    citizen_id: mask(citizenId, 10),
    full_name: fullName,
    first_name: firstName,
    last_name: lastName,
    gender,
    dob,
    mobile: mask(mobile, 7),
    address: fullAddress,
    province: addr.province,
    status,
    approved_by: approvedBy,
    created_at: generateCreatedAt(),
  };
}

function main() {
  const users = [];
  for (let i = 0; i < 20; i++) users.push(generateUser());

  const output = `export const UserBoard = ${JSON.stringify(users, null, 2)} as const;\n`;
  const filepath = join(__dirname, "../src/data/UserBoard.ts");
  writeFileSync(filepath, output, { encoding: "utf-8" });

  console.log(`✅ Generated ${users.length} users → ${filepath}`);
}

main();
