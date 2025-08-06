// src/Home/components/SecretSection/SecretHeader.tsx

import { FC } from "react";

const SecretHeader: FC = () => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-center text-primary">
        
      </h1>
      <p className="text-center text-sm text-gray-600 mt-3 leading-relaxed">
         <br />
        <strong> Username / Password </strong><br />
         <br />
         <br />
        <strong className="text-error">
           
        </strong>
      </p>
    </header>
  );
};

export default SecretHeader;