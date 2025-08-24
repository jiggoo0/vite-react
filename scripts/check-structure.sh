#!/usr/bin/env bash
set -euo pipefail

REPORT="structure-check.md"
DIST_DIR="dist"
DEV_PORT=5173

# สี terminal
if [ -t 1 ]; then
  GREEN="\033[0;32m"
  RED="\033[0;31m"
  YELLOW="\033[0;33m"
  RESET="\033[0m"
else
  GREEN=""; RED=""; YELLOW=""; RESET=""
fi

log() { echo "$1" >> "$REPORT"; }
term_log() { echo -e "$1"; }

# ตรวจคำสั่งที่จำเป็น
for cmd in pnpm jq tree curl; do
  if ! command -v "$cmd" &>/dev/null; then
    term_log "${RED}✖ คำสั่ง '$cmd' ไม่พร้อมใช้งาน${RESET}"
    exit 1
  fi
done

# ตรวจ OS และ Termux
OS_TYPE="$(uname -s)"
IS_WINDOWS=false
[[ "$OS_TYPE" =~ ^MINGW|^CYGWIN|^MSYS ]] && IS_WINDOWS=true
IS_TERMUX=false
[ -n "${TERMUX_VERSION-}" ] && IS_TERMUX=true

# Metadata
NOW=$(date +"%Y-%m-%d %H:%M:%S")
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "N/A")

# สร้าง report
cat > "$REPORT" <<EOL
# ✅ JP Visual & Docs – Structure Check Report

> เวลาตรวจสอบ: $NOW | สาขา: $BRANCH

> โปรเจกต์นี้คือ SPA React + TypeScript ระดับโปร ใช้ Vite + Tailwind + daisyUI + Framer Motion + Zod + react-hook-form สำหรับฟอร์ม + PDF/Canvas export พร้อมโครงสร้าง modular

---

## 📊 Summary
| หมวดหมู่                 | สถานะ |
|--------------------------|--------|
EOL

check_cmd() {
  local cmd="$1"
  local name="$2"
  if eval "$cmd"; then
    log "| $name | ✅ |"
    term_log "${GREEN}✔ $name${RESET}"
  else
    log "| $name | ❌ |"
    term_log "${RED}✖ $name${RESET}"
  fi
}

check_cmd "[ -f .env ]" ".env Exists"
check_cmd "grep -q '^VITE_API_URL=' .env" "VITE_API_URL Defined"

run_check() {
  local name="$1"
  local cmd="$2"
  TMPFILE=$(mktemp)
  if eval "$cmd"; then
    echo "| $name | ✅ |" > "$TMPFILE"
    term_log "${GREEN}✔ $name${RESET}"
  else
    echo "| $name | ❌ |" > "$TMPFILE"
    term_log "${RED}✖ $name${RESET}"
  fi
  cat "$TMPFILE" >> "$REPORT"
  rm -f "$TMPFILE"
}

# รัน checks พร้อมกัน
(run_check "TypeScript Check" "pnpm tsc --noEmit") &
(run_check "ESLint Check" "pnpm lint") &
(
  TMPFILE=$(mktemp)
  if grep -qr "@/" src; then
    echo "| Alias Import | ✅ |" > "$TMPFILE"
    term_log "${GREEN}✔ Alias Import${RESET}"
  else
    echo "| Alias Import | ⚠️ |" > "$TMPFILE"
    term_log "${YELLOW}⚠ Alias Import${RESET}"
  fi
  cat "$TMPFILE" >> "$REPORT"
  rm -f "$TMPFILE"
) &
(
  TMPFILE=$(mktemp)
  UNUSED=$(find src -type f -name "*.tsx" | while read -r f; do
    BASENAME=$(basename "$f" .tsx)
    ! grep -qr "$BASENAME" src && echo "$f"
  done)
  if [ -z "$UNUSED" ]; then
    echo "| Unused Files | ✅ |" > "$TMPFILE"
    term_log "${GREEN}✔ Unused Files${RESET}"
  else
    echo "| Unused Files | ⚠️ |" > "$TMPFILE"
    term_log "${YELLOW}⚠ Unused Files${RESET}"
  fi
  cat "$TMPFILE" >> "$REPORT"
  rm -f "$TMPFILE"
) &
wait

# Dev Server
if [ "$IS_WINDOWS" = true ] || [ "${TERMUX:-false}" = true ]; then
  log "| Dev Server               | ⚠️ skipped (headless/Termux) |"
  term_log "${YELLOW}⚠ Dev Server skipped (headless/Termux)${RESET}"
else
  pnpm dev > /dev/null 2>&1 &
  VITE_PID=$!
  for i in {1..10}; do
    if curl -s "http://localhost:$DEV_PORT" > /dev/null; then
      log "| Dev Server               | ✅ |"
      term_log "${GREEN}✔ Dev Server${RESET}"
      break
    else
      sleep 1
    fi
  done
  if ! curl -s "http://localhost:$DEV_PORT" > /dev/null; then
    log "| Dev Server               | ❌ |"
    term_log "${RED}✖ Dev Server${RESET}"
  fi
  kill "$VITE_PID" 2>/dev/null || true
fi

# ตรวจ dependencies
echo "" >> "$REPORT"
echo "## 📦 ตรวจสอบ package.json" >> "$REPORT"
jq . package.json > /dev/null && {
  echo '```json' >> "$REPORT"
  jq . package.json >> "$REPORT"
  echo '```' >> "$REPORT"
} || echo "> ❌ ไม่สามารถ parse package.json ได้" >> "$REPORT"

REQUIRED_PKGS=("react" "react-dom" "vite" "tailwindcss" "daisyui" "typescript" "eslint" "prettier")
echo "" >> "$REPORT"
echo "| Dependency ที่จำเป็น     | สถานะ |" >> "$REPORT"
echo "|--------------------------|--------|" >> "$REPORT"
for pkg in "${REQUIRED_PKGS[@]}"; do
  if jq -e ".dependencies[\"$pkg\"] // .devDependencies[\"$pkg\"]" package.json > /dev/null; then
    log "| $pkg                     | ✅ |"
    term_log "${GREEN}✔ $pkg found${RESET}"
  else
    log "| $pkg                     | ⚠️ |"
    term_log "${YELLOW}⚠ $pkg missing${RESET}"
  fi
done

REACT_VER=$(jq -r '.dependencies.react // empty' package.json)
TS_VER=$(jq -r '.devDependencies.typescript // empty' package.json)
log "| React                     | $(pnpm list react &>/dev/null && echo ✅ || echo ❌) | ${REACT_VER:-"-"} |"
log "| TypeScript                | ${TS_VER:+✅} | ${TS_VER:-"-"} |"

# Tree
echo "" >> "$REPORT"
echo "## 📁 โครงสร้าง src (ลึกสุด 10 ระดับ)" >> "$REPORT"
echo '```' >> "$REPORT"
[ -d "src" ] && tree -L 10 src >> "$REPORT" || echo "> ❌ ไม่พบโฟลเดอร์ src" >> "$REPORT"
echo '```'

# Note & Roadmap
echo "" >> "$REPORT"
echo "## 🛠️ Roadmap" >> "$REPORT"
cat <<'EOF' >> "$REPORT"
'เขียนโค้ด React + TypeScript สำหรับหน้าเว็บที่ใช้ TailwindCSS และ daisyUI โดยต้อง:
- ห้ามแตกไฟล์ component โดยไม่จำเป็น ต้องอ้างอิงโครงสร้างที่กำหนด
- ปรับปรุง logic ให้สอดคล้องกับโครงสร้างธุรกิจ
- ใช้รูปแบบ professional เท่านั้น: flat UI, ไม่มี animation, ไม่มีสีสดหรือลูกเล่น
- ตั้งค่าทุกเครื่องมือให้พร้อมใช้งานจริง: ESLint, Prettier, TypeScript strict, alias import
- Component ที่ใช้ต้องพร้อมสำหรับ export PDF/Canvas และรองรับ react-hook-form + Zod
- ทุกครั้งที่แก้ไขโค้ดให้ส่งโค้ดที่แก้แล้วแบบ production-ready เท่านั้น

⚠️Generate a production-ready Vite + React + TypeScript project using TailwindCSS (Twind). Enforce strict TypeScript rules and ESLint configuration. The design must be minimal, flat, and professional — no curved shapes, gradients, or cartoon-like colors. Use only neutral tones (gray, black, white, navy). All code must follow strict linting and type safety. Include a basic layout with header, sidebar, and content area. No animations, no rounded corners, no playful UI. This is for a serious enterprise-grade dashboard.⚠️
| ความโปร่งใส | มีหน้าเงื่อนไข, รีวิว, Markdown content |
| ความเร็ว | SSR, CDN, Lighthouse 90+ |
| UI | Flat, neutral, ไม่มีลูกเล่น |
| โค้ด | Type
🗂 JP Visual & Docs – Template Roadmap for New Components
🎯 วัตถุประสงค์:
ให้ AI สร้างไอเดีย Components สำหรับใช้งานในหน้า `Home.tsx` และ `SecretPage.tsx` โดยมีข้อกำหนดเฉพาะ
📁 โครงสร้างที่ต้องใช้:
Componentวางไว้ใน src/Home/components/`
ใช้งานเฉพาะใน `Home.tsx
SecretPage.tsx อยู่ที่
 src/Home/SecretPage.tsx
src/Home/components/SecretSectoin/
คือ components ย่อยของ SecretPage.tsx

🚫 ข้อห้าม:
- ห้ามเสนอ Components พื้นฐานทั่วไป เช่น ปุ่ม, Modal, Card หรือ Layout
- ห้ามมีเนื้อหาแนวสอนหรือ Tutorial
- ห้ามเสนอแนวคิดที่หาเจอใน Google หรือ YouTube
✅ สิ่งที่ต้องมี:
- Components ที่ใช้สำหรับงานเฉพาะทาง
 ใช้งานได้จริงอย่าใช้เทคนิคพื้นฐานทั่วไปนำเสนอ  จำลองข้อมูลที่สมจริงที่ช่วยเสริมความหน้าเชื่อถือเว็ปไซร์หรือธุรกิจแบบdynamic
 หรือระบบเบื้องหลังที่ไม่เปิดเผยต่อผู้ใช้ทั่วไป
- รายชื่อ Components พร้อมคำอธิบายสั้น ๆ
- ระบุว่า Component ใดใช้ใน `Home.tsx` และ Component ใดใช้ใน `SecretPage.tsx`2. สร้าง **TypeScript interface** สำหรับทุกเอกสาร พร้อมค่า default / mock data ภายในไฟล์ types/
 Component ต้อง render ข้อมูล mock data ได้
 สร้าง **Preview Page /  สำหรับแต่ละเอกสาร พร้อมค่า mock data ให้ใช้งานทันที
 จัด folder structure และ skeleton code ให้สอดคล้องกับ pattern ข้างต้น
 Component ต้อง render ข้อมูล mock data ได้ทันที และ support memoization / print-friendly2. สร้าง **TypeScript interface** สำหรับทุกเอกสาร พร้อมค่า default / mock data ภายในไฟล์ types/
Output: folder structure +  mock data สมจริงสำหรับทุก component'
EOF
term_log "${GREEN}✅ รายงานสรุปถูกสร้างใน $REPORT${RESET}"