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
  GREEN=""
  RED=""
  YELLOW=""
  RESET=""
fi

log() { echo "$1" >> "$REPORT"; }
term_log() { echo -e "$1"; }

# ตรวจ OS
OS_TYPE="$(uname -s)"
IS_WINDOWS=false

# ถ้าเป็น Windows (MINGW, CYGWIN, MSYS)
[[ "$OS_TYPE" =~ ^MINGW|^CYGWIN|^MSYS ]] && IS_WINDOWS=true

# ตรวจ Termux (optional)
IS_TERMUX=false
if [ -n "${TERMUX_VERSION-}" ]; then
  IS_TERMUX=true
fi

# สร้าง report
echo "# ✅ JP Visual & Docs – Structure Check Report" > "$REPORT"
echo "" >> "$REPORT"
echo "> โปรเจกต์นี้คือ SPA React + TypeScript ระดับโปร ใช้ Vite + Tailwind + daisyUI + Framer Motion + Zod + react-hook-form สำหรับฟอร์ม + PDF/Canvas export พร้อมโครงสร้าง modular" >> "$REPORT"
echo "" >> "$REPORT"
echo "---" >> "$REPORT"
echo "" >> "$REPORT"
echo "## 📊 Summary" >> "$REPORT"
echo "| หมวดหมู่                 | สถานะ |" >> "$REPORT"
echo "|--------------------------|--------|" >> "$REPORT"

# ฟังก์ชันเช็ค
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
# ตรวจว่า .env มีอยู่
if [ -f .env ]; then
  log "| .env Exists              | ✅ |"
  term_log "${GREEN}✔ .env Exists${RESET}"
else
  log "| .env Exists              | ❌ |"
  term_log "${RED}✖ .env Exists${RESET}"
fi

# ตรวจว่าตัวแปร VITE_API_URL ถูกกำหนด
if [ -f .env ] && grep -q '^VITE_API_URL=' .env 2>/dev/null; then
  log "| VITE_API_URL Defined     | ✅ |"
  term_log "${GREEN}✔ VITE_API_URL Defined${RESET}"
else
  log "| VITE_API_URL Defined     | ❌ |"
  term_log "${RED}✖ VITE_API_URL Defined${RESET}"
fi

# -------------------
# Checks parallel-safe
# -------------------

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

# TypeScript Check
(
  run_check "TypeScript Check" "pnpm tsc --noEmit"
) &

# ESLint Check
(
  run_check "ESLint Check" "pnpm lint"
) &

# Alias Import Check
(
  TMPFILE=$(mktemp)
  if grep -qr "@/" src 2>/dev/null; then
    echo "| Alias Import | ✅ |" > "$TMPFILE"
    term_log "${GREEN}✔ Alias Import${RESET}"
  else
    echo "| Alias Import | ⚠️ |" > "$TMPFILE"
    term_log "${YELLOW}⚠ Alias Import${RESET}"
  fi
  cat "$TMPFILE" >> "$REPORT"
  rm -f "$TMPFILE"
) &

# Unused Files Check
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

# package.json + dependencies
echo "" >> "$REPORT"
echo "## 📦 ตรวจสอบ package.json" >> "$REPORT"
if jq . package.json > /dev/null 2>&1; then
  echo '```json' >> "$REPORT"
  jq . package.json >> "$REPORT"
  echo '```' >> "$REPORT"
else
  echo "> ❌ ไม่สามารถ parse package.json ได้" >> "$REPORT"
fi

REQUIRED_PKGS=("react" "react-dom" "vite" "tailwindcss" "daisyui" "typescript" "eslint" "prettier")
echo "" >> "$REPORT"
echo "| Dependency ที่จำเป็น     | สถานะ |" >> "$REPORT"
echo "|--------------------------|--------|" >> "$REPORT"
for pkg in "${REQUIRED_PKGS[@]}"; do
  if jq -e ".dependencies[\"$pkg\"] // .devDependencies[\"$pkg\"]" package.json > /dev/null 2>&1; then
    log "| $pkg                     | ✅ |"
    term_log "${GREEN}✔ $pkg found${RESET}"
  else
    log "| $pkg                     | ⚠️ |"
    term_log "${YELLOW}⚠ $pkg missing${RESET}"
  fi
done

# -------------------------------
# ตรวจว่า React ถูกติดตั้ง
# -------------------------------
if pnpm list react > /dev/null 2>&1; then
  STATUS_REACT="✅"
  term_log "${GREEN}✔ React Installed${RESET}"
else
  STATUS_REACT="❌"
  term_log "${RED}✖ React Installed${RESET}"
fi

# ตรวจเวอร์ชัน React
REACT_VER=$(jq -r '.dependencies.react // empty' package.json 2>/dev/null)
if [ -z "$REACT_VER" ]; then
  REACT_VER="-"
  term_log "${RED}✖ React Version not found${RESET}"
else
  term_log "${GREEN}✔ React Version: $REACT_VER${RESET}"
fi

# เขียน React ลง Markdown
log "| React                     | $STATUS_REACT | $REACT_VER |"

# -------------------------------
# ตรวจเวอร์ชัน TypeScript
# -------------------------------
TS_VER=$(jq -r '.devDependencies.typescript // empty' package.json 2>/dev/null)
if [ -n "$TS_VER" ]; then
  STATUS_TS="✅"
  term_log "${GREEN}✔ TypeScript Version: $TS_VER${RESET}"
else
  STATUS_TS="❌"
  TS_VER="-"
  term_log "${RED}✖ TypeScript Version not found${RESET}"
fi

# เขียน TypeScript ลง Markdown
log "| TypeScript                | $STATUS_TS | $TS_VER |"

# Tree
echo "" >> "$REPORT"
echo "## 📁 โครงสร้าง src (ลึกสุด 10 ระดับ)" >> "$REPORT"
echo '```' >> "$REPORT"
if [ -d "src" ]; then
    tree -L 10 src >> "$REPORT" 2>/dev/null
else
    echo "> ❌ ไม่พบโฟลเดอร์ src" >> "$REPORT"
fi
echo '```' >> "$REPORT"

# Note
echo "" >> "$REPORT"
echo "## 📝 Note" >> "$REPORT"
echo "
## 🛠️ Roadmap
- 📂 ห้ามแตกไฟล์โดยไม่จำเป็น ต้องอ้างอิงโครงสร้างที่กำหนด
- 🤝 ปรับปรุงโค้ดและ logic ตามโครงสร้างธุรกิจ
-  การเขียนโค้ดต้องคงความเข้มงวดระดับสูง พร้อม Professional & perfect 
ในส่วนเครื่องมือการสร้างแบบจำลองเน้นการตั้งค่าที่ส่งจริงตามแบบมาตรฐานที่สุดส่วน component ที่เอามาแสดงผลหน้าเว็บไซต์เน้นสร้างในรูปแบบแนวทาง professional ้
" >> "$REPORT"
echo "⚠️Generate a production-ready Vite + React + TypeScript project using TailwindCSS (Twind). Enforce strict TypeScript rules and ESLint configuration. The design must be minimal, flat, and professional — no curved shapes, gradients, or cartoon-like colors. Use only neutral tones (gray, black, white, navy). All code must follow strict linting and type safety. Include a basic layout with header, sidebar, and content area. No animations, no rounded corners, no playful UI. This is for a serious enterprise-grade dashboard.⚠️" >> "$REPORT"
echo "| ความโปร่งใส | มีหน้าเงื่อนไข, รีวิว, Markdown content |
| ความเร็ว | SSR, CDN, Lighthouse 90+ |
| UI | Flat, neutral, ไม่มีลูกเล่น |
| โค้ด | TypeScript strict, ESLint, Markdown report✅ สรุปแนวทางดีไซน์เชิงเทคนิค

| ด้าน | แนวทาง |
|------|--------|
| โครงสร้าง | ใช้ semantic HTML, hierarchy ชัดเจน |
| สีและฟอนต์ | เรียบ, มืออาชีพ, contrast สูง |
| Layout | Grid-based, ไม่มีลูกเล่นเกินจำเป็น |
| Accessibility | รองรับ screen reader, WCAG AA |
| Performance | SSR/SSG, lazy load, Tailwind JIT |
| Interaction | ปุ่มตอบสนองไว, error สุภาพ |
" >> "$REPORT"
echo "I will now send the current production code used by the website. Your task is to review, correct, and return the code according to the previously defined structure and constraints. This is a Dev-to-Dev workflow — do not explain, teach, or suggest alternatives. Just fix the code and return it in a clean, production-ready format. Enforce strict TypeScript, ESLint rules, and apply the design constraints: flat, neutral, no fancy styles or curved elements. Return only the corrected code, ready to use.
#
I will now send production code for review and correction based on the previously defined constraints. Fix the code and return it in a clean, production-ready format. Do not explain or teach anything. However, if you identify any improvements that would clearly enhance the code — such as component extraction, structure cleanup, or stability improvements — notify immediately and include those improvements in the returned code." >> "$REPORT"

echo "" >> "$REPORT"
echo "---" >> "$REPORT"
echo "✅ " >> "$REPORT"

term_log "${GREEN}✅ รายงานสรุปถูกสร้างใน $REPORT${RESET}"