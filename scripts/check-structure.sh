#!/usr/bin/env bash
# check-structure.sh
# 📦 Generate Markdown project report (structure, deps, unused files, env, git)

set -euo pipefail

OUT="report.md"
IGNORE="node_modules|dist|.git|.vite|coverage"
SKIP_FILES=("main.tsx" "App.tsx" "index.tsx" "index.ts")

command_exists() { command -v "$1" >/dev/null 2>&1; }

usage() {
  echo "Usage: $0 [--output=file]"
  exit 0
}

for arg in "$@"; do
  case $arg in
    --output=*) OUT="${arg#*=}" ;;
    -h|--help) usage ;;
    *) echo "❌ Unknown option: $arg" ; exit 1 ;;
  esac
done

{
  echo "# Project Report"
  echo "_Generated: $(date '+%F %T')_"
  echo

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
EOF
  echo

  echo "## 📂 Project Structure"
  echo '```'
  if command_exists tree; then
    tree -a -I "$IGNORE" src | sed '$d'
  else
    find src -type d -or -type f | grep -Ev "$IGNORE"
  fi
  echo '```'
  echo

  if [ -f package.json ]; then
    echo "## 📦 package.json"
    echo '```json'
    cat package.json
    echo '```'
    echo
    echo "### 🔍 Dependencies Insight"
    echo '```'
    jq -r '.dependencies,.devDependencies' package.json 2>/dev/null | grep -v null || echo "No deps"
    echo '```'
    echo
  fi

  echo "## 🗑️ Unused Files"
  echo '```'
  find src -type f | while read -r file; do
    base=$(basename "$file")
    skip=false
    for s in "${SKIP_FILES[@]}"; do
      [[ "$base" == "$s" ]] && skip=true
    done
    $skip && continue
    name=$(basename "${file%.*}")
    grep -rsl --exclude-dir={${IGNORE//|/,}} "$name" src >/dev/null || echo "$file"
  done
  echo '```'
  echo

  echo "## 🌍 Env"
  echo '```'
  [ -f .env ] && cat .env || echo "No .env file"
  echo '```'
  echo

  if command_exists git; then
    echo "## 🔧 Git"
    echo '```'
    git status -s || true
    echo
    git log --oneline -n 5 || true
    echo '```'
    echo
  fi

  echo "## 📊 Summary"
  echo "- Overview ✅"
  echo "- Structure ✅"
  echo "- Dependencies ✅"
  echo "- Unused file check ✅"
  echo "- Env + Git ✅"
  echo

  echo "## 🗒️ Notes"
  cat <<'EOF'
📄 JP Visual & Docs Dev-to-Dev Build Log
Environment: Termux / Vite 7.1.2 / React 19.1.1 / DaisyUI 3.9.4
Command: pnpm build && pnpm check

⚡ Build Summary
- Vendor React ≈ 577 KB → พิจารณา dynamic import
- Vendor Misc ≈ 859 KB → แยก chunk ลดโหลดแรกเข้า
- Lint + TS + Alias ✅ ไม่มี error
🧱 โครงสร้างเว็บไซต์ธุรกิจที่ดี

เน้นความน่าเชื่อถือ + ความชัดเจน
- ใช้ข้อความที่ตรงประเด็น เช่น “บริการของเรา”, “รีวิวจากลูกค้า”
- ใส่ TrustBadge.tsx, ReviewsGallery.tsx เพื่อสร้างความมั่นใจ
- ใช้ภาพจริงของทีมงานในหน้า “เกี่ยวกับเรา” เพื่อเพิ่มความเป็นมืออาชีพ
2. 🖼️ ภาพประกอบคุณภาพสูง
- ใช้ภาพจาก public/assets/portfolio และ services ใน Hero, Portfolio, Service Cards
- ภาพควรสื่อถึงความเป็นมืออาชีพ ไม่ cartoonish
3. 🧩 โค้ดที่ขยายง่าย ดูแลง่าย
- ใช้ component-based design + reusable layout เช่น PageSection, CardWrapper
- แยก UI logic กับ business logic ด้วย hooks, services, context
🧭 Layout ที่แนะนำ
| Section                | Component ที่ใช้ |
|------------------------|------------------|
| Hero Section           | HeroBackground, HeroStats, CTA Button |
| Services               | ServiceCard, FeatureList, ComplianceFAQ |
| Portfolio              | PortfolioGallery, PortfolioFilter, CaseStudyRedacted |
| Testimonials / Reviews | TestimonialSlider, ReviewCard |
| Contact / Footer       | BlurContact, Footer.tsx, SocialIcons.tsx |
- ใช้ motionVariants.ts เพื่อเพิ่ม animation
- รองรับ dark/light mode ด้วย ThemeToggle.tsx
🎨 โทนสีที่เหมาะกับธุรกิจ
| โทนสี        | ความรู้สึก         | ตัวอย่าง HEX |
|--------------|--------------------|---------------|
| น้ำเงินกรม   | น่าเชื่อถือ มืออาชีพ | #1E3A8A, #2563EB |
| ขาว/เทาอ่อน | สะอาด อ่านง่าย     | #F9FAFB, #E5E7EB |
| เขียวอ่อน   | สดชื่น เป็นมิตร     | #10B981, #6EE7B7 |
| ทองอ่อน      | ความสำเร็จ มั่นใจ    | #FBBF24, #FCD34D |
กำหนดใน tailwind.config.ts เพื่อ
ให้theme consistency--
✨ UX ที่ดีจากฟีเจอร์ที่คุณมี.
- ChatWidget.tsx → ช่องทางสื่อสารแบบ real-time
- ScrollProgress.tsx, ScrollToTop.tsx → นำทางง่าย
- ErrorBoundary.tsx, FallbackLoader.tsx → เสถียรเมื่อเกิด error
1. Modularization
- แยก component, hook, service, config
- ใช้ index.ts รวม exports
2. Type Safety
- ใช้ TypeScript อย่างเข้ม เช่น types/IUser.ts
- ใช้ as const กับ mock data
3. Separation of Concerns
- UI → อยู่ใน component
- Logic → อยู่ใน services/hooks
- State → context หรือ external store
4. Reusable Components
- เช่น Button.tsx, CardWrapper.tsx
- ใช้ props ที่ชัดเจน เช่น variant, size, onClick
5. Clean Naming & Structure
- ตั้งชื่อสื่อความหมาย เช่น SalaryCertificate.tsx
- ฟังก์ชันบอกเจตนา เช่น hashUserTempPassword
6. Automation & Quality Gate
- ESLint + Prettier + Husky + lint-staged 
- เพิ่ม CI/CD workflow สำหรับ build/test/deploy
7. Accessibility & UX
- ใช้ semantic HTML
- รองรับ keyboard navigation, screen reader
- ใส่ aria-label, alt กับภาพ
8. Performance Optimization
- ใช้ lazy loading, Suspense
- ใช้ useMemo, useCallback อย่างเหมาะสม
- Optimize asset: .webp, preload fonts, compress images

🎯 ทุกโค้ดใน report นี้ = state ปัจจุบันของโปรเจค (ไม่ใช่ example)
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