"use client";

import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

interface DashboardCardProps {
  title: string;
  description: string;
  icon?: React.ElementType;
  route?: string;
  canAccess?: boolean;
  realtime?: boolean;
  children?: ReactNode;
}

const DashboardCard: FC<DashboardCardProps> = ({
  title,
  description,
  icon: Icon,
  route,
  canAccess = true,
  realtime = false,
  children,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!canAccess || !route) return;
    navigate(route);
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        "p-6 rounded-xl shadow-md transition-shadow",
        canAccess
          ? "bg-white hover:shadow-lg cursor-pointer"
          : "bg-gray-100 border border-gray-300 opacity-70 cursor-not-allowed"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon className={clsx("w-6 h-6", canAccess ? "text-gray-800" : "text-gray-400")} />
          )}
          <h2
            className={clsx("text-lg font-semibold", canAccess ? "text-gray-800" : "text-gray-500")}
          >
            {title}
          </h2>
        </div>
        {realtime && (
          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
            Realtime
          </span>
        )}
      </div>

      <p className={clsx("mt-2", canAccess ? "text-gray-500" : "text-gray-400")}>{description}</p>

      {children && <div className="mt-4">{children}</div>}

      {!canAccess && (
        <div className="text-gray-400 text-sm text-center mt-2">🔒 ไม่มีสิทธิ์เข้าถึง</div>
      )}
    </div>
  );
};

export default DashboardCard;
