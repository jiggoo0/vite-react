"use strict";
// scripts/mock_thai_users.ts
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var url_1 = require("url");
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = (0, path_1.dirname)(__filename);
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var REAL_FIRST_NAMES_MALE = [
  "สมชาย",
  "ศักดิ์ชัย",
  "สุชาติ",
  "อนันต์",
  "นิพนธ์",
  "วรชัย",
  "วิทยา",
];
var REAL_FIRST_NAMES_FEMALE = [
  "อรทัย",
  "วาสนา",
  "สมพร",
  "ประไพ",
  "สุภาวดี",
  "บุญญาพร",
  "จิตติมา",
];
var REAL_LAST_NAMES = [
  "ใจดี",
  "ตั้งตรงจิตร",
  "บุญเรือง",
  "มงคลชัย",
  "ทองดี",
  "สุวรรณภูมิ",
  "วงศ์ศรี",
];
var STAFF_NAMES = [
  "ณัฐกานต์ ศรีวงศ์",
  "วรัญญา อินทร์แก้ว",
  "พีรพงศ์ แซ่ลิ้ม",
  "ชุติมา แก้วสิงห์",
];
var MOBILE_PREFIXES = [
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
var STATUS_WEIGHTED = __spreadArray(
  __spreadArray(
    __spreadArray([], Array(70).fill("ผ่าน"), true),
    Array(20).fill("ไม่ผ่าน"),
    true
  ),
  Array(10).fill("รอดำเนินการ"),
  true
);
// Mock address data แบบง่าย (แทนของจริง)
var ADDRESS_DATA = [
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
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
function mask(value, keep) {
  return value.slice(0, keep) + "XXX";
}
function generateCitizenId() {
  var digits = [];
  digits.push(randomInt(1, 9));
  for (var i = 0; i < 11; i++) digits.push(randomInt(0, 9));
  var sum = 0;
  for (var i = 0; i < digits.length; i++) sum += digits[i] * (13 - i);
  var checksum = (11 - (sum % 11)) % 10;
  digits.push(checksum);
  return digits.join("");
}
function generateMobile() {
  return (
    MOBILE_PREFIXES[randomInt(0, MOBILE_PREFIXES.length - 1)] +
    Array.from({ length: 7 }, function () {
      return randomInt(0, 9);
    }).join("")
  );
}
function generateCreatedAt() {
  var daysAgo = randomInt(0, 30);
  var d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().slice(0, 19);
}
function generateUser() {
  var gender = Math.random() < 0.5 ? "male" : "female";
  var firstName =
    gender === "male"
      ? REAL_FIRST_NAMES_MALE[randomInt(0, REAL_FIRST_NAMES_MALE.length - 1)]
      : REAL_FIRST_NAMES_FEMALE[
          randomInt(0, REAL_FIRST_NAMES_FEMALE.length - 1)
        ];
  var lastName = REAL_LAST_NAMES[randomInt(0, REAL_LAST_NAMES.length - 1)];
  var prefix = gender === "male" ? "นาย" : "นางสาว";
  var fullName = "".concat(prefix).concat(firstName, " ").concat(lastName);
  var dobYear = new Date().getFullYear() - randomInt(20, 60);
  var dobMonth = randomInt(1, 12);
  var dobDay = randomInt(1, 28);
  var dob = ""
    .concat(dobYear, "-")
    .concat(String(dobMonth).padStart(2, "0"), "-")
    .concat(String(dobDay).padStart(2, "0"));
  var addr = ADDRESS_DATA[randomInt(0, ADDRESS_DATA.length - 1)];
  var street = ""
    .concat(randomInt(1, 999), "/")
    .concat(randomInt(1, 99), " \u0E2B\u0E21\u0E39\u0E48 ")
    .concat(randomInt(1, 10));
  var fullAddress = ""
    .concat(street, " \u0E15.")
    .concat(addr.subdistrict, " \u0E2D.")
    .concat(addr.district, " \u0E08.")
    .concat(addr.province, " ")
    .concat(addr.zipcode);
  var citizenId = generateCitizenId();
  var mobile = generateMobile();
  var status = STATUS_WEIGHTED[randomInt(0, STATUS_WEIGHTED.length - 1)];
  var approvedBy =
    status === "ผ่าน"
      ? STAFF_NAMES[randomInt(0, STAFF_NAMES.length - 1)]
      : null;
  return {
    application_id: uuidv4(),
    citizen_id: mask(citizenId, 10),
    full_name: fullName,
    first_name: firstName,
    last_name: lastName,
    gender: gender,
    dob: dob,
    mobile: mask(mobile, 7),
    address: fullAddress,
    province: addr.province,
    status: status,
    approved_by: approvedBy,
    created_at: generateCreatedAt(),
  };
}
function main() {
  var users = [];
  for (var i = 0; i < 20; i++) users.push(generateUser());
  var output = "export const UserBoard = ".concat(
    JSON.stringify(users, null, 2),
    " as const;\n"
  );
  var filepath = (0, path_1.join)(__dirname, "../src/data/UserBoard.ts");
  (0, fs_1.writeFileSync)(filepath, output, { encoding: "utf-8" });
  console.log(
    "\u2705 Generated ".concat(users.length, " users \u2192 ").concat(filepath)
  );
}
main();
