# JP - VISOUL & DOSC Project

**Business Overview:**  
“ทำธุรกิจสีเทาให้มีความมืออาชีพ มาตรฐาน”
ทีมงานมีประสบการณ์ 8-9 ปี | ติดต่อ LINE Official: `@462FQFC`

## 1️⃣ Services

1. วางแผนยื่นกู้สินเชื่อ (บุคคล, SME, รีไฟแนนซ์)
2. ดูแลเอกสารยื่นวีซ่า (ทุกประเภท)
3. SLIBBANK – สลิปโอนเงิน/รับเงิน ตรวจสอบได้
4. บริการเอกสาร: แก้ไข / สร้างใหม่ / จัดหา
5. ผลิตชิ้นงานจริง (บัตรแข็ง/บัตรพลาสติก)
6. ออกแบบโลโก้ / แบนเนอร์ / ปกเพจ
7. ดูแลการตลาดครบวงจร + ระบบหลังบ้าน
8. โครงการ “ให้น้องได้พักผ่อน” – AI Matching

---

## 2️⃣ Core Logic

- ช่องว่างระหว่างความต้องการจริงของคนกับข้อจำกัดระบบราชการ/ธนาคาร
- ปรับข้อมูลจริงให้อยู่ในรูปแบบที่ระบบยอมรับ โดยไม่สร้างข้อมูลเท็จ
- Analogy:
  - “เหมือนการแต่งหน้า” → ปรับสิ่งที่มีอยู่ให้ดีที่สุด
  - “เหมือนการเขียน CV” → นำเสนอข้อมูลจริงในมุมมืออาชีพ

---

## 3️⃣ Rules & Risk Management

- รับเงินเท่ากับเริ่มงาน – ไม่มีข้อยกเว้น
- กรองลูกค้า: กิริยาไม่ดี → ไม่รับ, ส่งคนอื่นแทน → ยึดเงิน
- การตั้งราคาตามความเสี่ยง:
  - ต่ำ: 100–400 บาท
  - กลาง: 4,000–50,000 บาท
  - สูง: 25,000 บาท/รายการ
- โปร่งใส แจ้งความเสี่ยง ลูกค้าตัดสินใจเอง

---

## 4️⃣ Tech Stack

- **Frontend:** React 19 + TypeScript + TailwindCSS + DaisyUI
- **Bundler:** Vite
- **Version Control:** Git + GitHub
- **Deployment:** Vercel

---

## 5️⃣ Project Structure

src/ ├─ Home/ │ ├─ components/ │ │ ├─ Dashboard/ │ │ │ ├─ ui/ │ │ │ │ ├─ DashboardCard.tsx │ │ │ │ ├─ DashboardSection.tsx │ │ │ │ └─ QuickActions.tsx │ │ │ ├─ common/ │ │ │ │ ├─ BlurContact/ │ │ │ │ └─ DocumentDownload/ │ │ ├─ Forms/ │ │ ├─ Portfolio/ │ │ ├─ Hero/ │ │ └─ Services/ │ ├─ hooks/ │ │ ├─ useAuth.ts │ │ └─ useProtectedAuth.tsx │ ├─ types/ │ └─ AdminTools/ └─ ...

---

## 6️⃣ Project Info

| Item                | Value                                                                          |
| ------------------- | ------------------------------------------------------------------------------ |
| Project Name        | vite-react                                                                     |
| Version             | 7.1.1                                                                          |
| Description         | JP - VISOUL & DOSC Dashboard                                                   |
| GitHub URL          | [https://github.com/jiggoo0/vite-react](https://github.com/jiggoo0/vite-react) |
| Developer Email     | jiggo0@outlook.co.th                                                           |
| Website URL         | [https://404notfontjp.vercel.app/](https://404notfontjp.vercel.app/)           |
| Vercel Account      | jiggoos-projects                                                               |
| Vercel Project Name | vite-react                                                                     |
| Vercel Project ID   | prj_MBF9hbw032OzD2gDVkUQ7mvoYA2t                                               |

---

## 7️⃣ Mock Data

### User Stats

```ts
const mockStats = [
  { id: "1", label: "เอกสารทั้งหมด", value: 120 },
  { id: "2", label: "สมาชิกทีม", value: 5 },
  { id: "3", label: "รายงานล่าสุด", value: 15 },
  { id: "4", label: "แจ้งเตือน", value: 3 },
];

Recent Activities

const mockActivities = [
  { id: "1", action: "เข้าสู่ระบบ", timestamp: "09:00 น." },
  { id: "2", action: "อัปโหลดเอกสาร", timestamp: "09:30 น." },
  { id: "3", action: "สร้างรายงาน", timestamp: "10:00 น." },
];


---

8️⃣ Husky Pre-commit Hook

TypeScript type-check

ESLint (staged files)

Prettier (staged files)


git add .
git commit -m "your message"
# จะรันตรวจสอบอัตโนมัติ


---

9️⃣ Notes

AdminTools → Back-office, Document & Review workflows

UserBoard → Front-end user metrics & dashboard

Components → Shared UI / reusable elements

Types & Hooks → Shared type definitions + reusable hooks

```
