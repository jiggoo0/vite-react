#!/usr/bin/env bash
# check-structure.sh
# 📦 Generate Markdown project report (structure, package.json, unused files, env, git)

set -e

# ==========================
# Default Config
# ==========================
OUT="report.md"
IGNORE="node_modules|dist|.git|.vite"
SKIP=("main.tsx" "App.tsx" "index.tsx" "index.ts")

# ==========================
# Helper Functions
# ==========================
cmd() { command -v "$1" >/dev/null 2>&1; }

usage() {
  echo "Usage: $0 [--output=file]"
  exit 0
}

# ==========================
# Parse Arguments
# ==========================
for a in "$@"; do
  case $a in
    --output=*) OUT="${a#*=}";;
    -h|--help) usage;;
    *) echo "❌ Unknown option: $a"; exit 1;;
  esac
done

# ==========================
# Start Report
# ==========================
{
  echo "# Project Report"
  echo "_Generated: $(date '+%F %T')_"
  echo

  # --------------------------
  # Project Overview (with old content inserted)
  # --------------------------
  echo "## 📖 Project Overview"
  cat <<'EOF'
# JP Visual & Docs

**พร้อมลุยแบบมืออาชีพ**  
เนียนทุกงาน โปรทุกขั้นตอน  
JP Visual & Docs ทีมเบื้องหลังที่ช่วยให้คุณดูโปรได้ไวที่สุด  

✅ ความลับปลอดภัย  
⚡ งานไวใน 24 ชม.  
🚀 พร้อมลุยทุกเคส  

**ประสบการณ์ 8+ ปี | ความพึงพอใจ 98–99% | ส่งทันนัด 99%+**

---

## 🏢 About Us
**JP Visual & Docs**  
“ยกระดับธุรกิจเฉพาะทางให้มีมาตรฐานระดับมืออาชีพ”  

ทีมตัวจริง เชี่ยวชาญงานออกแบบและสร้างภาพลักษณ์ดิจิทัล  
ทำให้ธุรกิจคุณดูดี มีมาตรฐาน และน่าเชื่อถือ  
แม้จะอยู่นอกกรอบทั่วไป แต่เราทำให้ดูโปรได้ในแบบที่ Google หรือ YouTube ไม่มีให้  

💬 *“ผมไม่ใช่คนเก่ง แต่ทีมงานผมเก่งแน่นอน”*  

> 🔑 กฎข้อแรกของเราคือ **ความลับของลูกค้า**  

---

## 🌟 Selling Points
- 🔒 ข้อมูลลูกค้าปลอดภัยตามมาตรฐานสากล  
- ⚡ งานไว 24 ชม. รองรับงานด่วนทันที  
- ✅ ตรวจสอบคุณภาพทุกขั้นตอนโดยทีมงานมืออาชีพ  

**ระบบคิวด่วน**  
- จัดคิวทันทีหลังยืนยัน  
- อัปเดตสถานะโปร่งใส  
- ส่งไฟล์ปลอดภัย พร้อมลิงก์หมดอายุ  

---

## 🛠 Services
- **ที่ปรึกษายื่นกู้สินเชื่อ** → 4,000 – 300,000 บาท  
- **รับดูแลเอกสารยื่นวีซ่า** → เริ่มต้น 4,000 บาท  
- **SLIBBANK – สลิปโอนเงิน/รับเงิน** → 100 บาท/ใบ | 10 ใบ 500 บาท  
- **แก้ไข/สร้างเอกสาร** → 400 – 600 บาท  
- **ผลิตบัตรแข็ง/อ่อน** → เริ่มต้น 4,000 บาท  
- **ออกแบบโลโก้/แบนเนอร์/ทีม** → เริ่มต้น 300 บาท  
- **ดูแลการตลาดครบวงจร + ระบบหลังบ้าน** → 5,000 – 500,000 บาท  
- **AI Matching & ระบบดูแลลูกค้า** → เริ่มต้น 4,000 บาท  
- **สร้าง/ทำลายภาพลักษณ์** → เริ่มต้น 5,000 บาท  
👉 *บริการใหม่ Coming Soon*  

---

## 🔐 Features & Trust
- วิเคราะห์และปรับโปรไฟล์ลูกค้า  
- บริการเอกสารครบวงจร  
- สลิปพร้อม QR Code  
- ระบบหลังบ้าน + AI  
- มาตรฐานความปลอดภัยสูงสุด  

---

## 📂 Case Studies (REDACTED)
- รีแบรนด์เอกสารองค์กร  
- จัดทำสื่อเร่งด่วน 24 ชม.  
- ชุดไฟล์ยื่นงานเฉพาะทาง  

---

## 🎨 Portfolio
Website | Dashboard | Landing Page | Mobile App | Graphic  

ตัวอย่าง: **GovHub Corporate Website**  

---

## 📑 Compliance & FAQ
เพื่อความโปร่งใสและปลอดภัย:  

❓ บริการผิดกฎหมายหรือไม่?  
❓ ยื่นกู้โดยไม่ใช้เอกสารจริงได้ไหม?  
❓ ใช้เวลานานแค่ไหน?  
❓ สามารถแก้ไขเอกสารได้หรือไม่?  
❓ เอกสารใช้ยื่นได้ทุกธนาคารไหม?  
❓ มีนโยบายคืนเงินหรือไม่?  

---

## 📬 Contact
- Email: **jiggo0@outlook.co.th**  
- Website: [https://404notfontjp.vercel.app/](https://404notfontjp.vercel.app/)  
- LINE: **@462FQFC** | **@jpsystem.official**  
- Messenger: **@jaopa.zerofour**  

---

## ⚡ Project Links
- GitHub: [vite-react](https://github.com/jiggoo0/vite-react)  
- Live Demo: [404notfontjp.vercel.app](https://404notfontjp.vercel.app/)  
EOF
  echo

  # --------------------------
  # Project Structure
  # --------------------------
  echo "## 📂 Project Structure"
  echo '```'
  if cmd tree; then
    tree -a -I "$IGNORE" src | head -n -1
  else
    find src -not -path "*/node_modules/*"
  fi
  echo '```'
  echo

  # --------------------------
  # package.json
  # --------------------------
  if [ -f package.json ]; then
    echo "## 📦 package.json"
    echo '```json'
    cat package.json
    echo '```'
    echo
  fi

  # --------------------------
  # Unused Files
  # --------------------------
  echo "## 🗑️ Unused Files"
  echo '```'
  find src -type f | while read -r f; do
    base=$(basename "$f")
    skip=false
    for s in "${SKIP[@]}"; do
      [[ "$base" == "$s" ]] && skip=true
    done
    $skip && continue
    grep -qr "$(basename "${f%.*}")" src || echo "$f"
  done
  echo '```'
  echo

  # --------------------------
  # Env
  # --------------------------
  echo "## 🌍 Env"
  echo '```'
  [ -f .env ] && cat .env || echo "No .env file"
  echo '```'
  echo

  # --------------------------
  # Git
  # --------------------------
  if cmd git; then
    echo "## 🔧 Git"
    echo '```'
    git status -s || true
    echo
    git log --oneline -n 5 || true
    echo '```'
    echo
  fi

  # --------------------------
  # Summary
  # --------------------------
  echo "## 📊 Summary"
  echo "- Project overview inserted ✅"
  echo "- Structure, package.json, unused files, env, git logs ✅"
  echo "- Ready for audit & documentation"
  echo

  # --------------------------
  # Notes
  # --------------------------
  echo "## 🗒️ Notes"
  cat <<'EOF'
- ❗ เป้าหมายคือการทำงานร่วมกันแบบ  dev-to-Dev  ห้ามทำงานในรูปแบบการสอนเน้นกระชับตามจุดประสงค์เมื่อเกิดปัญหาเน้นแก้ไขปัญหาไวที่สุด งดประมวลผลในรูปแบบวนรูป งดกำหนดตัวอย่างต้องการใช้งานจริงเท่านั้น
- 📌 เอกสารนี้สามารถใช้เป็น base สำหรับการนำเสนอ, pitch deck, และ audit ภายใน
- 🔍 เนื้อหาครอบคลุมทั้งโครงสร้างโปรเจกต์, รายละเอียดธุรกิจ, และ workflow ของทีม
- 🛠 โค้ดทั้งหมดทำงานภายใต้แนวทาง Dev-to-Dev เข้มงวด โดยเน้น professional + perfect formatting
- 📂 ห้ามแตกไฟล์โดยไม่จำเป็น และต้องอ้างอิงโครงสร้างที่กำหนดเท่านั้น
- 🤝 เป้าหมายคือการทำงานร่วมกัน ปรับปรุงโค้ดและ logic ตามโครงสร้างธุรกิจ
- 🎯 การเขียนโค้ดต้องคงความเข้มงวดระดับสูง Thyscript & Elin เขียนโค้ด ให้ Professional & perfect  formatt Code  พร้อมใช้งานทุกครั้งที่ส่งกลับ
- ⚡ หากมีการส่งโค้ดเพิ่มเติมให้ AI ปรับปรุง ให้ตั้งค่าตัวแปรและ logic ให้ตรงวัตถุประสงค์โครงสร้
- 📌 หลังจากนี้ปัญหาที่เกิดขึ้นไฟล์ต่างๆในโครงสร้างยังถูกตั้งค่าไม่แม่นยำและยังไม่สามารถใช้จริงได้ 100% ตรวจสอบอย่างละเอียดลดความซ้ำซ้อนตามวัตถุประสงค์ของสิ่งที่ทำาง
EOF

} >"$OUT"

echo "✅ Report generated: $OUT"