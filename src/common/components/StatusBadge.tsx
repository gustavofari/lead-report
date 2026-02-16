import { cn } from "../../lib/utils";
import type { ClientStatus } from "../../types/crm";
import { STATUS_STYLES } from "../constants/statusStyles";

interface StatusBadgeProps {
  status: ClientStatus;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StatusBadge({
  status,
  size = "md",
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full font-bold border",
        {
          "px-2 py-0.5 text-[8px]": size === "sm",
          "px-3 py-1 text-[10px]": size === "md",
          "px-4 py-2 text-xs": size === "lg",
        },
        STATUS_STYLES[status],
        className,
      )}
    >
      {status}
    </span>
  );
}
