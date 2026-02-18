import { AlertTriangle, ArrowUpRight } from "lucide-react";
import { cn } from "../../../../../lib/utils";
import { ICON_SIZES, INCIDENT_COLORS } from "../../constants/constants";
import type { IncidentsItem } from "../../types/notification";

interface NotificationItemProps {
  incident: IncidentsItem;
}

export default function NotificationItem({ incident }: NotificationItemProps) {
  return (
    <div className="p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer group">
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "mt-1 p-1.5 rounded-lg",
            INCIDENT_COLORS[incident.type],
          )}
        >
          <AlertTriangle size={ICON_SIZES.sm} fill="currentColor" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <p
              className={cn(
                "text-sm font-heavy",
                incident.type === "critical" ? "text-navy" : "text-slate-700",
              )}
            >
              {incident.title}
            </p>
            <span className="text-[10px] font-bold text-slate-400">
              {incident.time}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            {incident.message}
          </p>
        </div>
        <button className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-blue-600 transition-opacity">
          <ArrowUpRight size={ICON_SIZES.md} />
        </button>
      </div>
    </div>
  );
}
