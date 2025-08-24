"use client";

import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const LazyA4Card: FC<Props> = ({ children, delay = 0 }) => {
  return (
    <div className="bg-white shadow p-4 mb-4">
      {children}
      <style>{`
        /* ตัวอย่าง CSS สำหรับการ์ด */
      `}</style>
    </div>
  );
};

export default LazyA4Card;
