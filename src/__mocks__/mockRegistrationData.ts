// src/__mocks__/mockRegistrationData.ts
import type { RegistrationPreviewProps } from "@home/AdminTools/RegistrationPreview/RegistrationPreview";

export const mockRegistrationData: RegistrationPreviewProps = {
  registrationNumber: "0105551234567",
  businessName: "ร้านค้า ABC",
  ownerName: "นายสมชาย ใจดี",
  address: {
    houseNumber: "123/45",
    villageNo: "1",
    alley: "สุขุมวิท 50",
    subDistrict: "บางจาก",
    district: "พระโขนง",
    province: "กรุงเทพมหานคร",
  },
  issuedDate: "01/01/2565",
  registrarPosition: "นายทะเบียน",
  registrarName: "นายทะเบียน สมชาย",
};

export default mockRegistrationData;
