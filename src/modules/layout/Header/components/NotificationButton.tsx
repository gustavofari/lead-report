import { Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../../../lib/utils";
import { ICON_SIZES } from "../constants/constants";
import { recentIncidents } from "../../../../data/incidents";
import NotificationDropdown from "./NotificationDropdown";

function NotificationButton() {
  const notificationRef = useRef<HTMLDivElement>(null);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isOut = notificationRef.current?.contains(event.target as Node);
      if (!isOut) setShowNotifications(false);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={notificationRef}>
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        aria-label="Notificações"
        className={cn(
          "relative p-3 rounded-2xl transition-all border",
          showNotifications
            ? "bg-blue-50 border-blue-200 text-blue-600"
            : "bg-white border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50",
        )}
      >
        <Bell size={ICON_SIZES.lg} strokeWidth={2.5} />
        {recentIncidents.length > 0 && (
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border-2 border-white"></span>
          </span>
        )}
      </button>

      {showNotifications && (
        <NotificationDropdown recentIncidents={recentIncidents} />
      )}
    </div>
  );
}

export default NotificationButton;
