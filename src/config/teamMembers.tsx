// src/config/teamMembers.tsx
// ==========================
// Team Members - Mock Data + Realtime Status Update
// ==========================

export type UserRole = "admin" | "manager" | "user";
export type TeamStatus = "active" | "inactive" | "pending";

export interface TeamMember {
  id: string;
  name: string;
  role: UserRole;
  status: TeamStatus;
}

// --------------------------
// Mock ข้อมูลทีมเริ่มต้น
// --------------------------
export let teamMembers: TeamMember[] = [
  { id: "admin2517", name: "Admin System", role: "admin", status: "active" },
  { id: "JPKYETONKEY201", name: "JPKYETONKEY201", role: "user", status: "active" },
  { id: "JPKYETONKEY244", name: "JPKYETONKEY244", role: "manager", status: "active" },
  { id: "JPKYETONKEY299", name: "JPKYETONKEY299", role: "user", status: "inactive" },
  { id: "JPKYETONKEY300", name: "JPKYETONKEY300", role: "user", status: "pending" },
  { id: "JPusertest01", name: "JPusertest01", role: "user", status: "active" },
];

// --------------------------
// ฟังก์ชันสุ่มเปลี่ยน status สมาชิกทีม (Realtime Mock)
// --------------------------
export function updateTeamStatus(): TeamMember[] {
  const statuses: TeamStatus[] = ["active", "inactive", "pending"];
  teamMembers = teamMembers.map((member) => {
    // 30% โอกาสเปลี่ยน status
    if (Math.random() < 0.3) {
      const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
      return { ...member, status: newStatus };
    }
    return member;
  });
  return teamMembers;
}
