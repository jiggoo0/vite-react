1️⃣ Directory Overview
Top-level folders
hooks → ฟังก์ชัน hook สำหรับ Home เช่น useInView.ts
types → Type definitions ของระบบ เช่น auditTrail.ts, idCard.ts
components → UI modules แบ่งย่อยตามฟีเจอร์
AdminTools → ฟีเจอร์ฝั่งแอดมิน
UserBoard → ฟีเจอร์ฝั่งผู้ใช้งาน
Forms / Services / Portfolio / Hero / SellingPoints / Testimonials → ส่วนประกอบ UI/UX
AdminTools
รับผิดชอบงานด้านเอกสาร, การตรวจสอบ, การอนุมัต
ตัวอย่างฟังก์ชัน:
DriverLicense → Form, Preview, UI fields
MedicalCertificate → Form + Types
SalaryCertificate → Types + Form
Reviews → Gallery + UI card
SpecialBranchCertificate → Form
UserBoard
แสดงข้อมูลและเมตริกของผู้ใช้
ตัวอย่างฟังก์ชัน:
MetricCard, BadgeCard, TrustBadge
Dashboard demo: TrustDashboardDemo.tsx
Configs: motionConfig.ts, types.ts
Component หลัก: UserBoard.tsx
Components
About → หน้า About พร้อม UI subcomponents
Dashboard → UI + common components เช่น BlurContact, DocumentDownload
Forms → ฟอร์มผู้ใช้ / OCR / Field group
Portfolio → Portfolio gallery + filters
Hero / SellingPoints / Testimonials → หน้า landing / showcase
Services / SecretSection → ฟีเจอร์พิเศษ + secret audit tools
UI / common → ส่วนประกอบ reusable: Button, Card, Icon, PageSection, ThemeToggle
Mermaid Diagram (Hierarchy)
graph TD
subgraph AdminTools
Home --> AdminTools
MedicalCertificate --> types
DriverLicense --> types
DriverLicense --> ui
SalaryCertificate --> types
Reviews --> ui
SpecialBranchCertificate
RegistrationPreview
IdCardPreview
end
subgraph UserBoard
Home --> UserBoard
MetricCard
BadgeCard
TrustBadge
TrustDashboard
TrustDashboardDemo
motionConfig
types.ts
end
subgraph components
Home --> components
About --> ui
Dashboard --> ui
Dashboard --> common
common --> BlurContact
common --> DocumentDownload
Forms --> ui
Portfolio --> ui
Hero --> ui
ui --> Icon
ui --> Card
ui --> Button
Services --> ui
SecretSection
end
subgraph hooks
Home --> hooks
end
subgraph types
Home --> types
end
🔹 Notes

1. AdminTools → Back-office, Document & Review workflows
2. UserBoard → Front-end user metrics & dashboard
3. Components → Shared UI, reusable elements, forms, portfolio, hero sections
4. Types & Hooks → Shared type definitions + reusable hooks
