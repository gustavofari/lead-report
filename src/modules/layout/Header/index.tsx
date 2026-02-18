import NotificationButton from "./components/NotificationButton";

function Header() {
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
        <NotificationButton />
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
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
