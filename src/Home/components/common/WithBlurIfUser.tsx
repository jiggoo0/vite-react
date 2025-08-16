import { FC, ReactNode } from "react";

interface WithBlurProps {
  isNormalUser: boolean;
  children: ReactNode;
  blurText?: string;
}

const WithBlurIfUser: FC<WithBlurProps> = ({ isNormalUser, children, blurText }) => {
  if (!isNormalUser) return <>{children}</>;

  return (
    <div className="relative">
      <div className="blur-sm pointer-events-none select-none">{children}</div>
      {blurText && (
        <div
          className="absolute inset-0 flex items-center justify-center text-center text-gray-500 font-semibold text-lg px-4"
          aria-hidden="true"
        >
          {blurText}
        </div>
      )}
    </div>
  );
};

export default WithBlurIfUser;