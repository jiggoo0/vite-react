import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <Link
      to="/"
      aria-label="JP Visual Home"
      className="inline-flex items-center space-x-2"
    >
      <img
        src="/logo.webp"
        alt="JP Visual & Docs Logo"
        className="h-8 w-8"
        aria-hidden="true"
      />
      <span className="text-xl font-bold text-primary select-none">
        JP Visual & Docs
      </span>
    </Link>
  );
};

export default Logo;
