export interface IUser {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  status: "approved" | "pending" | "rejected";
  applicationId?: string;
  approvedBy?: string;
  dob: string; // ⬅️ เพิ่ม field วันเกิด
  gender: "male" | "female"; // ⬅️ เพิ่ม field เพศ
}
