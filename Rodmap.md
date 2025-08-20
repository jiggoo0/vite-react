1️⃣ Layout & Navigation
ไอเดีย	มีไฟล์ในโปรเจกต์แล้ว / ตำแหน่ง
SidebarNav	ไม่มี → สามารถสร้างใหม่ Layout/SidebarNav.tsx
Breadcrumbs	ไม่มี → Layout/partials/Breadcrumbs.tsx
PageHeader	ไม่มี → Layout/ui/PageHeader.tsx
TabPanel	ไม่มี → components/common/TabPanel.tsx
StickyTableHeader	ไม่มี → components/common/StickyTableHeader.tsx
2️⃣ Data Display & Cards
ไอเดีย	มีไฟล์ในโปรเจกต์แล้ว / ตำแหน่ง
MetricCard	คล้ายกับ Home/components/UserBoard/MetricCard.tsx → ปรับปรุงให้ reuse ได้
ProgressCard	ไม่มี → สร้างใหม่ components/common/ProgressCard.tsx
ListItemCard	ไม่มี → components/common/ListItemCard.tsx
EmptyState	ไม่มี → components/common/EmptyState.tsx
3️⃣ Forms & Inputs
ไอเดีย	มีไฟล์ในโปรเจกต์แล้ว / ตำแหน่ง
FormSection	ไม่มี → components/Forms/FormSection.tsx
InputErrorWrapper	ไม่มี → components/Forms/InputErrorWrapper.tsx
SelectDropdown	มี components/Forms/ui/SelectField.tsx + SelectFieldUI.tsx → ปรับปรุง
DatePicker	ไม่มี → components/Forms/ui/DatePicker.tsx
4️⃣ Notifications & Feedback
ไอเดีย	มีไฟล์ในโปรเจกต์แล้ว / ตำแหน่ง
Toast	ไม่มี → components/common/Toast.tsx
Modal	ไม่มี → components/common/Modal.tsx
LoadingOverlay	มี components/common/LoadingSpinner.tsx → ปรับปรุง
InlineAlert	ไม่มี → components/common/InlineAlert.tsx
5️⃣ Tables & Lists
ไอเดีย	มีไฟล์ในโปรเจกต์แล้ว / ตำแหน่ง
DataTable	ไม่มี → components/common/DataTable.tsx
ExpandableRow	ไม่มี → components/common/ExpandableRow.tsx
VirtualList	ไม่มี → components/common/VirtualList.tsx
6️⃣ Utility & Common
ไอเดีย	มีไฟล์ในโปรเจกต์แล้ว / ตำแหน่ง
ScrollToTopButton	มี utils/common/ScrollToTop.tsx → ปรับปรุง
CopyToClipboardButton	ไม่มี → components/common/CopyToClipboardButton.tsx
Avatar	ไม่มี → components/common/Avatar.tsx
Badge	มี Home/components/UserBoard/BadgeCard.tsx → ปรับปรุง
7️⃣ Extra Enterprise
ไอเดีย	มีไฟล์ในโปรเจกต์แล้ว / ตำแหน่ง
AuditTrail	ไม่มี → components/common/AuditTrail.tsx
AccessControlWrapper	ไม่มี → components/common/AccessControlWrapper.tsx
PDFExportButton	มี logic ใน utils/exportCard.ts → สร้าง wrapper component components/common/PDFExportButton.tsx
ThemeSwitcher	มี Layout/ui/ThemeToggle.tsx + ThemeProvider/useTheme.ts → ปรับปรุง
✅ สรุปจำนวนไฟล์
มีอยู่แล้วสามารถปรับปรุงได้: 8–10 ไฟล์
ต้องสร้างใหม่: ประมาณ 18–20 ไฟล์
