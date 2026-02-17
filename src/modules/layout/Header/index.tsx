import { AlertTriangle, ArrowUpRight, Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { recentIncidents } from "../../../data/incidents";

function Header() {
  const notificationRef = useRef<HTMLDivElement>(null);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isOut =
        notificationRef.current &&
        notificationRef.current.contains(event.target as Node);

      if (!isOut) setShowNotifications(false);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationRef]);

  return (
    <div className="flex justify-between items-end relative">
      <div>
        <h1 className="text-4xl font-heavy text-navy tracking-tight">
          Monitoramento
        </h1>
        <p className="text-slate-500 font-medium mt-1">
          Visão geral de performance e saúde das instâncias.
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* ÁREA DE NOTIFICAÇÃO */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className={`
                  relative p-3 rounded-2xl transition-all border
                  ${
                    showNotifications
                      ? "bg-blue-50 border-blue-200 text-blue-600"
                      : "bg-white border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  }
                `}
          >
            <Bell size={20} strokeWidth={2.5} />
            {/* Badge Vermelho Pulsante */}
            <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border-2 border-white"></span>
            </span>
          </button>

          {/* DROPDOWN MENU */}
          {showNotifications && (
            <div className="absolute right-0 top-14 w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 notification-dropdown z-50 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
                <h4 className="text-sm font-heavy text-navy uppercase tracking-wider">
                  Incidentes Ativos
                </h4>
                <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md">
                  3 Novos
                </span>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {recentIncidents.map((inc) => (
                  <div
                    key={inc.id}
                    className="p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 p-1.5 rounded-lg ${inc.type === "critical" ? "bg-red-100 text-red-600" : "bg-amber-100 text-amber-600"}`}
                      >
                        <AlertTriangle size={14} fill="currentColor" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <p
                            className={`text-sm font-heavy ${inc.type === "critical" ? "text-navy" : "text-slate-700"}`}
                          >
                            {inc.title}
                          </p>
                          <span className="text-[10px] font-bold text-slate-400">
                            {inc.time}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 font-medium">
                          {inc.msg}
                        </p>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-blue-600 transition-opacity">
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-slate-50 text-center border-t border-slate-100">
                <button className="text-xs font-heavy text-blue-600 uppercase hover:underline">
                  Ver central de incidentes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* VERSÃO E PERFIL */}
        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
        <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200">
          v2.4.0
        </span>
        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500 border-2 border-white shadow-sm">
          AD
        </div>
      </div>
    </div>
  );
}

export default Header;
