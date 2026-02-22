import { ArrowUpRight, Filter, Plus, RefreshCw, Search } from "lucide-react";
import useClientSearch from "../../../common/hooks/useClientSearch";
import ClientManagement from "./ClientManagement";
import clientsData from "../../../data/crmData";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function Clients() {
  const { dataFilter, searchTerm, setSearchTerm } =
    useClientSearch(clientsData);

  const sortedClients = useMemo(() => {
    return [...dataFilter].sort((a, b) => {
      if (
        a.crm.error.hasActiveError === false &&
        b.crm.error.hasActiveError !== false
      )
        return 1;
      if (
        a.crm.error.hasActiveError !== false &&
        b.crm.error.hasActiveError === false
      )
        return -1;
      return a.name.localeCompare(b.name);
    });
  }, []);

  const navigate = useNavigate();

  function goToClient(id: string) {
    navigate(`/clients/${id}`);
  }

  return (
    <>
      <div className="card-premium overflow-hidden p-6">
        <div className="p-5 border-b border-slate-100 bg-white flex justify-between items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              className="input-search w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 placeholder:text-slate-400 outline-none"
              placeholder="Buscar cliente por nome, ID ou tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-heavy uppercase hover:bg-slate-50 transition-colors">
              <Filter size={14} /> Filtros
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-heavy uppercase shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-0.5">
              <Plus size={16} /> Novo Cliente
            </button>
          </div>
        </div>

        <ClientManagement />
        <div className="divide-y divide-slate-100">
          {sortedClients.map((client) => (
            <div
              onClick={() => goToClient(client.id)}
              key={client.id}
              className={`
                grid grid-cols-12 items-center px-6 py-4 transition-all cursor-pointer row-hover
                ${client.crm.error.hasActiveError === true ? "error-row-alert" : "bg-white"}
              `}
            >
              {/* NOME + AVATAR */}
              <div className="col-span-4 flex items-center gap-4 pl-2">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-heavy text-white text-xs shadow-sm ${client.status === "Crítico" ? "bg-red-500" : "bg-slate-800"}`}
                >
                  {client.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-heavy text-navy leading-none mb-0.5">
                    {client.name}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400">
                    ID: {client.id}00X42
                  </p>
                </div>
              </div>

              <div className="col-span-2">
                <div
                  className={`flex items-center gap-1.5 text-xs font-bold ${client.status === "Crítico" ? "text-red-500" : "text-slate-500"}`}
                >
                  <RefreshCw
                    size={12}
                    className={
                      client.status === "Saudável"
                        ? "text-slate-300"
                        : "text-red-400"
                    }
                  />
                  {client.sync}
                </div>
              </div>
              <div className="col-span-1 flex justify-center">
                <span
                  className={`px-2.5 py-1 rounded-full text-[9px] font-heavy uppercase tracking-wide border ${
                    client.status === "Saudável"
                      ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                      : client.status === "Alerta"
                        ? "bg-amber-50 text-amber-600 border-amber-100"
                        : "bg-red-50 text-red-600 border-red-100"
                  }`}
                >
                  {client.status}
                </span>
              </div>

              <div className="col-span-2 px-4">
                <div className="flex justify-between text-[9px] font-bold text-slate-400 mb-1">
                  <span>Usage</span>
                  <span>{client.crm.successRate}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${client.status === "Crítico" ? "bg-red-500" : "bg-blue-600"}`}
                    style={{ width: `${client.crm.successRate}%` }}
                  />
                </div>
              </div>

              <div className="col-span-1 flex items-center justify-end pr-2">
                <button className="p-2 rounded-lg text-slate-300 hover:text-blue-600 hover:bg-blue-50 transition-all">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Clients;
