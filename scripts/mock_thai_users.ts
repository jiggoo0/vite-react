import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const REAL_FIRST_NAMES_MALE = [
  'สมชาย',
  'บักดิ์ชาย',
  'สุชาติ',
  'อนันต์',
  'นิจันทร์',
  'วรชัย',
  'วิทยา',
];
const REAL_FIRST_NAMES_FEMALE = ['อรทัย', 'วาสนา', 'สมจร', 'ประไพ', 'สุภาวดี', 'ชุฑณา', 'ฐิติมา'];
const REAL_LAST_NAMES = [
  'ชัยดี',
  'ตั้งทรงกิจ',
  'ชุมเรือง',
  'มงคลชัย',
  'ทองดี',
  'สุวรรณ์ภูมิ',
  'วงษ์ษ์ปรี',
];
const STAFF_NAMES = [
  'ผู้จัดการ โศรีวงษ์',
  'วรัญญา อินทร์เกษ',
  'พีรเจริญชัย แซ่หลิม',
  'สุทธิมา แก้วสิงห์',
];
const MOBILE_PREFIXES = [
  '081',
  '082',
  '083',
  '084',
  '085',
  '086',
  '087',
  '088',
  '089',
  '090',
  '091',
  '092',
  '093',
  '094',
  '095',
  '096',
  '097',
  '098',
  '099',
];
const STATUS_WEIGHTED = [
  ...Array(70).fill('ผ่าน'),
  ...Array(20).fill('ไม่ผ่าน'),
  ...Array(10).fill('รอตรวจแก้'),
];

const ADDRESS_DATA = [
  {
    subdistrict: 'ในเมือง',
    district: 'เมือง',
    province: 'ขอนแก่น',
    zipcode: '40000',
  },
  {
    subdistrict: 'สุรนารี',
    district: 'เมือง',
    province: 'นครราชสีมา',
    zipcode: '30000',
  },
  {
    subdistrict: 'บ้านโป่ง',
    district: 'เมือง',
    province: 'ราชบุรี',
    zipcode: '70000',
  },
  {
    subdistrict: 'ปากเกร็ด',
    district: 'ปากเกร็ด',
    province: 'นนทบุรี',
    zipcode: '11120',
  },
  {
    subdistrict: 'หาดใหญ่',
    district: 'หาดใหญ่',
    province: 'สงขลา',
    zipcode: '90110',
  },
];

// ฟังก์ชันสร้างหมายเลขบัตรประชาชนแบบสุ่ม 13 หลัก (ง่าย ๆ)
function generateCitizenId(): string {
  let id = '';
  for (let i = 0; i < 12; i++) {
    id += String(randomInt(0, 9));
  }
  // สร้าง check digit แบบง่าย (mod 10)
  const sum = id.split('').reduce((acc, d, i) => acc + parseInt(d) * (13 - i), 0);
  const checkDigit = (11 - (sum % 11)) % 10;
  return id + checkDigit.toString();
}

// ฟังก์ชันสร้างเบอร์มือถือแบบสุ่ม โดยใช้ MOBILE_PREFIXES
function generateMobile(): string {
  const prefix = MOBILE_PREFIXES[randomInt(0, MOBILE_PREFIXES.length - 1)];
  let number = '';
  for (let i = 0; i < 7; i++) {
    number += String(randomInt(0, 9));
  }
  return prefix + number;
}

// ฟังก์ชันปิดบังหมายเลข ด้วยการแทนที่ตั้งแต่ตำแหน่ง index ที่กำหนดเป็น "*"
function mask(str: string, visibleCount: number): string {
  if (str.length <= visibleCount) return str;
  return str.slice(0, visibleCount) + '*'.repeat(str.length - visibleCount);
}

// สร้างวันที่สุ่มภายในช่วง 3 เดือนที่ผ่านมา
function generateCreatedAt(): string {
  const now = new Date();
  const past = new Date();
  past.setMonth(now.getMonth() - 3);
  const time = randomInt(past.getTime(), now.getTime());
  return new Date(time).toISOString();
}

function generateUser() {
  const gender = Math.random() < 0.5 ? 'male' : 'female';
  const firstName =
    gender === 'male'
      ? REAL_FIRST_NAMES_MALE[randomInt(0, REAL_FIRST_NAMES_MALE.length - 1)]
      : REAL_FIRST_NAMES_FEMALE[randomInt(0, REAL_FIRST_NAMES_FEMALE.length - 1)];
  const lastName = REAL_LAST_NAMES[randomInt(0, REAL_LAST_NAMES.length - 1)];
  const prefix = gender === 'male' ? 'นาย' : 'นางสาว';
  const fullName = `${prefix} ${firstName} ${lastName}`;
  const dobYear = new Date().getFullYear() - randomInt(20, 60);
  const dobMonth = randomInt(1, 12);
  const dobDay = randomInt(1, 28);
  const dob = `${dobYear}-${String(dobMonth).padStart(2, '0')}-${String(dobDay).padStart(2, '0')}`;

  const addr = ADDRESS_DATA[randomInt(0, ADDRESS_DATA.length - 1)];
  const street = `${randomInt(1, 999)}/${randomInt(1, 99)} หมู่ ${randomInt(1, 10)}`;
  const fullAddress = `${street} ต.${addr.subdistrict} อ.${addr.district} จ.${addr.province} ${addr.zipcode}`;

  const citizenId = generateCitizenId();
  const mobile = generateMobile();
  const status = STATUS_WEIGHTED[randomInt(0, STATUS_WEIGHTED.length - 1)];
  const approvedBy = status === 'ผ่าน' ? STAFF_NAMES[randomInt(0, STAFF_NAMES.length - 1)] : null;

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
  const filepath = join(__dirname, '../src/data/UserBoard.ts');
  writeFileSync(filepath, output, { encoding: 'utf-8' });

  console.log(`✓ Generated ${users.length} users → ${filepath}`);
}

main();
