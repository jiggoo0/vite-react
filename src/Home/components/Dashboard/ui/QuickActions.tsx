"use client";

import { FC } from "react";
import Button from "@/Home/components/ui/Button";

interface QuickActionsProps {
  onUpload?: () => void;
  onReport?: () => void;
  onSettings?: () => void;
}

const QuickActions: FC<QuickActionsProps> = ({ onUpload, onReport, onSettings }) => (
  <div className="flex flex-wrap gap-3">
    <Button onClick={onUpload} className="btn-primary">
      📤 อัปโหลด
    </Button>
    <Button onClick={onReport} className="btn-secondary">
      📊 รายงาน
    </Button>
    <Button onClick={onSettings} className="btn-accent">
      ⚙️ ตั้งค่า
    </Button>
  </div>
);

export default QuickActions;
