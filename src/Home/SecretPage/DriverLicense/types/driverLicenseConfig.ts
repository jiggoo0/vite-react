import {
  DriverLicenseFieldKeys,
  DriverLicenseFieldConfig,
} from "./driverLicense";

export interface DriverLicenseConfig {
  cardWidth: string;
  cardHeight: string;
  bgDefault: string;
  fields: Record<DriverLicenseFieldKeys, DriverLicenseFieldConfig>;
}

export const driverLicenseConfig: DriverLicenseConfig = {
  cardWidth: "600px",
  cardHeight: "400px",
  bgDefault: "/images/driver-license-bg.png",
  fields: {
    fullName: { top: "50px", left: "200px", fontSize: "18px" },
    idNumber: { top: "110px", left: "200px", fontSize: "16px" },
    dob: { top: "140px", left: "200px", fontSize: "16px" },
    issueDate: { top: "170px", left: "200px", fontSize: "16px" },
    expiryDate: { top: "200px", left: "200px", fontSize: "16px" },
    address: { top: "230px", left: "200px", fontSize: "16px" },
    licenseType: { top: "290px", left: "200px", fontSize: "16px" },
    bloodType: { top: "350px", left: "200px", fontSize: "16px" },
    photo: { top: "50px", left: "50px", width: "100px", height: "120px" },
  },
};
