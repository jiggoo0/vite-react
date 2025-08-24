// src/Home/types/auditTrail.ts
export interface IAuditLog {
  id: string;
  user: string;
  action: string;
  resource: string;
  timestamp: string;
}

export const mockAuditLogs: IAuditLog[] = [
  {
    id: "a1",
    user: "admin",
    action: "Exported PDF",
    resource: "DriverLicenseForm",
    timestamp: "2025-08-24T08:30:00Z",
  },
  {
    id: "a2",
    user: "auditor",
    action: "Viewed",
    resource: "MedicalCertificate",
    timestamp: "2025-08-24T08:45:00Z",
  },
];
