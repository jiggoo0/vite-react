// __mocks__/mockIdCardData.ts
import type { IdCardData } from "@/Home/types/idCard";

/** Mock data for ID Card form & preview */
export const MOCK_ID_CARD: IdCardData = {
  fullName: "สมชาย ใจดี",
  idNumber: "1234567890123",
  birthDate: "1990-01-01",
  address: "123/45 ถนนสุขใจ แขวงสุขใจ เขตสุขใจ กรุงเทพฯ",
  photo: "/images/IDcard/mock-id-photo.webp",
};
