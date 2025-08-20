import { FC } from "react";
import { DriverLicenseData } from "./types/driverLicense";

interface DriverLicensePreviewWithActionsProps {
  data: DriverLicenseData;
}

const DriverLicensePreviewWithActions: FC<DriverLicensePreviewWithActionsProps> = ({
  data,
}) => {
  return (
    <div className="driver-license-card p-4 rounded-lg border border-gray-300 shadow-md bg-white">
      {data.photo && (
        <img
          src={data.photo}
          alt="Driver License"
          className="w-32 h-40 object-cover rounded-md mb-4"
        />
      )}

      <div className="space-y-1 text-gray-800 font-medium">
        <p>
          <span className="font-semibold">Name:</span> {data.fullName}
        </p>
        <p>
          <span className="font-semibold">ID:</span> {data.idNumber}
        </p>
        <p>
          <span className="font-semibold">Birth Date:</span> {data.dob}
        </p>
        <p>
          <span className="font-semibold">Issue Date:</span> {data.issueDate}
        </p>
        <p>
          <span className="font-semibold">Expiry Date:</span> {data.expiryDate}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {data.address}
        </p>
        <p>
          <span className="font-semibold">License Type:</span> {data.licenseType}
        </p>
        <p>
          <span className="font-semibold">Blood Type:</span> {data.bloodType}
        </p>
      </div>
    </div>
  );
};

export default DriverLicensePreviewWithActions;