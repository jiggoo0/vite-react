import json
import random
import uuid
from faker import Faker
from datetime import datetime, timedelta
from pathlib import Path

fake = Faker('th_TH')

# Load address data
with open("thai_address_data.json", "r", encoding="utf-8") as f:
    ADDRESS_DATA = json.load(f)

# -------- Config data -------- #
REAL_FIRST_NAMES_MALE = ["สมชาย", "ศักดิ์ชัย", "สุชาติ", "อนันต์", "นิพนธ์", "วรชัย", "วิทยา"]
REAL_FIRST_NAMES_FEMALE = ["อรทัย", "วาสนา", "สมพร", "ประไพ", "สุภาวดี", "บุญญาพร", "จิตติมา"]
REAL_LAST_NAMES = ["ใจดี", "ตั้งตรงจิตร", "บุญเรือง", "มงคลชัย", "ทองดี", "สุวรรณภูมิ", "วงศ์ศรี"]

STAFF_NAMES = ["ณัฐกานต์ ศรีวงศ์", "วรัญญา อินทร์แก้ว", "พีรพงศ์ แซ่ลิ้ม", "ชุติมา แก้วสิงห์"]

MOBILE_PREFIXES = [
    "081", "082", "083", "084", "085", "086", "087",
    "088", "089", "090", "091", "092", "093", "094",
    "095", "096", "097", "098", "099"
]

STATUS_WEIGHTED = ["ผ่าน"] * 70 + ["ไม่ผ่าน"] * 20 + ["รอดำเนินการ"] * 10

# -------- Helper functions -------- #
def generate_valid_citizen_id():
    digits = [random.randint(1, 9)] + [random.randint(0, 9) for _ in range(11)]
    checksum = (11 - sum(d * (13 - i) for i, d in enumerate(digits)) % 11) % 10
    return ''.join(map(str, digits)) + str(checksum)

def generate_mobile_number():
    return random.choice(MOBILE_PREFIXES) + ''.join(str(random.randint(0, 9)) for _ in range(7))

def mask(value: str, keep: int) -> str:
    return value[:keep] + "XXX"

def generate_created_at() -> str:
    days_ago = random.randint(0, 30)
    dt = datetime.now() - timedelta(days=days_ago)
    return dt.strftime("%Y-%m-%dT%H:%M:%S")

def generate_user_record():
    gender = random.choice(["male", "female"])
    first_name = random.choice(REAL_FIRST_NAMES_MALE if gender == "male" else REAL_FIRST_NAMES_FEMALE)
    last_name = random.choice(REAL_LAST_NAMES)
    prefix = "นาย" if gender == "male" else "นางสาว"
    full_name = f"{prefix}{first_name} {last_name}"

    dob = fake.date_of_birth(minimum_age=20, maximum_age=60).strftime("%Y-%m-%d")

    # realistic address
    addr = random.choice(ADDRESS_DATA)
    street = f"{random.randint(1,999)}/{random.randint(1,99)} หมู่ {random.randint(1,10)}"
    full_address = f"{street} ต.{addr['subdistrict']} อ.{addr['district']} จ.{addr['province']} {addr['zipcode']}"

    citizen_id = generate_valid_citizen_id()
    mobile = generate_mobile_number()
    status = random.choice(STATUS_WEIGHTED)
    approved_by = random.choice(STAFF_NAMES) if status == "ผ่าน" else None

    return {
        "application_id": str(uuid.uuid4()),
        "citizen_id": mask(citizen_id, 10),
        "full_name": full_name,
        "first_name": first_name,
        "last_name": last_name,
        "gender": gender,
        "dob": dob,
        "mobile": mask(mobile, 7),
        "address": full_address,
        "province": addr["province"],
        "status": status,
        "approved_by": approved_by,
        "created_at": generate_created_at()
    }

# -------- Main -------- #
def main():
    users = [generate_user_record() for _ in range(20)]

    out = Path("thai_users.json")
    with out.open("w", encoding="utf-8") as f:
        json.dump(users, f, ensure_ascii=False, indent=2)

    print(f"✅ Exported {len(users)} Thai users → {out.resolve()}")

if __name__ == "__main__":
    main()