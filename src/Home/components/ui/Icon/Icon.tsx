"use client";

import { FC } from "react";
import {
  CheckIcon,
  XMarkIcon,
  PencilIcon,
  UserIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

export type IconName = "check" | "cross" | "edit" | "user" | "shield" | "check-circle";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const Icon: FC<IconProps> = ({ name, size = 24, className }) => {
  const style = { width: size, height: size };

  switch (name) {
    case "check":
      return <CheckIcon style={style} className={className} />;
    case "cross":
      return <XMarkIcon style={style} className={className} />;
    case "edit":
      return <PencilIcon style={style} className={className} />;
    case "user":
      return <UserIcon style={style} className={className} />;
    case "shield":
      return <ShieldCheckIcon style={style} className={className} />;
    case "check-circle":
      return <CheckCircleIcon style={style} className={className} />;
    default:
      return null;
  }
};

Icon.displayName = "Icon";

export default Icon;
