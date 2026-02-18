import type { IncidentsItem } from "../../types/notification";
import EmptyState from "./EmptyState";
import NotificationItem from "./NotificationItem";

type NotificationDropdownProps = {
  recentIncidents: readonly IncidentsItem[];
};

function NotificationDropdown({ recentIncidents }: NotificationDropdownProps) {
  return (
    <div className="absolute right-0 top-14 w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 notification-dropdown z-50 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
        <h4 className="text-sm font-heavy text-navy uppercase tracking-wider">
          Incidentes Ativos
        </h4>
        {recentIncidents.length > 0 && (
          <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md">
            {recentIncidents.length} Novos
          </span>
        )}
      </div>
      <div className="max-h-80 overflow-y-auto">
        {recentIncidents.length > 0 ? (
          recentIncidents.map((incident) => (
            <NotificationItem incident={incident} />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
      <div className="p-3 bg-slate-50 text-center border-t border-slate-100">
        <button className="text-xs font-heavy text-blue-600 uppercase hover:underline">
          Ver central de incidentes
        </button>
      </div>
    </div>
  );
}

export default NotificationDropdown;
