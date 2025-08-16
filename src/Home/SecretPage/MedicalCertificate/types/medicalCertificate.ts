export interface MedicalCertificateData {
  referenceNo: string;
  hospital: string;
  ministryOffice: string;
  date: string;
  doctorName: string;
  doctorLicenseNo: string;
  patientTitle: string;
  patientName: string;
  address: string;
  citizenId: string;
  examinedDate: string;
  diagnosis: string;
  doctorSummary: string;
  restFromDate: string;
  restToDate: string;
  otherNote?: string;
  doctorSigner: string;
  patientSigner: string;
}
