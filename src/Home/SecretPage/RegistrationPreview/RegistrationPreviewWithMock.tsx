// src/Home/SecretPage/RegistrationPreview/RegistrationPreviewWithMock.tsx
"use client";

import { FC } from "react";
import RegistrationPreview from "./RegistrationPreview";
import mockRegistrationData from "@__mocks__/mockRegistrationData";

const RegistrationPreviewWithMock: FC = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="mb-6 text-3xl font-bold text-center">
      ตัวอย่างใบทะเบียนพาณิชย์
    </h1>

    <RegistrationPreview {...mockRegistrationData} />
  </div>
);

export default RegistrationPreviewWithMock;