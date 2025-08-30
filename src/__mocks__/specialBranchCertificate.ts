// src/__mocks__/specialBranchCertificate.ts
export interface SpecialBranchCertificateData {
  authority: string;
  location: string;
  date: string;
  recipient: string;
  certifyName: string;
  note: string;
  passportNo: string;
  behaviorStatement: string;
  officerRank: string;
  officerName: string;
  docNo: string;
  fileNo: string;
}

const mockSpecialBranchCertificate: SpecialBranchCertificateData = {
  authority: "SPECIAL BRANCH, ROYAL THAI POLICE",
  location: "BANGKOK, THAILAND",
  date: "AUGUST 8, 2025",
  recipient: "TO WHOM IT MAY CONCERN",
  certifyName: "WECHUWEJ PRAPUNBUNDIT",
  note: "FOR THE AUSTRALIAN AUTHORITIES ONLY. THIS IS TO CERTIFY OF THAI NATIONALITY.",
  passportNo: "PASSPORT NO. [REDACTED]",
  behaviorStatement:
    "IS A PERSON WITH NO BEHAVIOR ENDANGERING THE PEACE AND ORDER OR THE SECURITY OF THE STATE.",
  officerRank: "POLICE MAJOR GENERAL",
  officerName: "VOSAMN YOSAWIN HASSAMONTR",
  docNo: "2025/081/477",
  fileNo: "393",
};

export { mockSpecialBranchCertificate };
export default mockSpecialBranchCertificate;
