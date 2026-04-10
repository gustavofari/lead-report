import { VERSION } from "../../../config/constants";

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
        <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200">
          {VERSION}
        </span>
      </div>
    </div>
  );
}

export default Header;
