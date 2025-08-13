// src/Home/components/SecretSection/SecretActions.tsx

import { FC } from "react";
import { useNavigate } from "react-router-dom";

type SecretActionsProps = {
  role: "admin" | "user";
};

const SecretActions: FC<SecretActionsProps> = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => alert("Manage your jobs feature coming soon!")}
        className="btn btn-primary"
        type="button"
      >
        จัดการงานของฉัน
      </button>

      {role === "admin" && (
        <button
          onClick={() => navigate("/admin")}
          className="btn btn-secondary"
          type="button"
        >
          เข้าสู่แผงควบคุม Admin
        </button>
      )}

      <button
        onClick={handleLogout}
        className="btn btn-outline btn-error"
        type="button"
      >
        ออกจากระบบ
      </button>
    </div>
  );
};

export default SecretActions;
