"use client";

import { FC } from "react";
import { useNavigate } from "react-router-dom";

type SecretActionsProps = {
  role: "admin" | "user" | "manager";
};

const SecretActions: FC<SecretActionsProps> = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  const actions = [
    {
      label: "จัดการงานของฉัน",
      onClick: () => alert("Manage your jobs feature coming soon!"),
      variant: "btn-primary",
      show: true,
      ariaLabel: "จัดการงานของฉัน",
    },
    {
      label: "เข้าสู่แผงควบคุม Admin",
      onClick: () => navigate("/admin"),
      variant: "btn-secondary",
      show: role === "admin" || role === "manager",
      ariaLabel: "เข้าสู่แผงควบคุม Admin",
    },
    {
      label: "ออกจากระบบ",
      onClick: handleLogout,
      variant: "btn-outline btn-error",
      show: true,
      ariaLabel: "ออกจากระบบ",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {actions
        .filter((action) => action.show)
        .map((action) => (
          <button
            key={action.label}
            type="button"
            className={`flex-1 md:flex-none btn ${action.variant} 
                        transition-transform duration-200 hover:scale-105
                        focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          action.variant.includes("primary")
                            ? "focus:ring-primary"
                            : action.variant.includes("secondary")
                            ? "focus:ring-secondary"
                            : action.variant.includes("error")
                            ? "focus:ring-error"
                            : "focus:ring-gray-500"
                        }`}
            onClick={action.onClick}
            aria-label={action.ariaLabel}
          >
            {action.label}
          </button>
        ))}
    </div>
  );
};

SecretActions.displayName = "SecretActions";

export default SecretActions;