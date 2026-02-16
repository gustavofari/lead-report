import { Search } from "lucide-react";
import useClientSearch from "../../common/hooks/useClientSearch";
import ClientManagement from "../ui/ClientManagement";
import clientsData from "../../data/crmData";

function Clients() {
  const { dataFilter, searchTerm, setSearchTerm } =
    useClientSearch(clientsData);

  return (
    <>
      <div className="flex flex-col p-8 h-full">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-slate-800">
              Monitoramento de Clientes
            </h2>
            <p className="text-slate-500">
              Configuração de endpoints e quotas por cliente.
            </p>
          </div>
          <div className="relative w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              placeholder="Buscar por nome, email ou ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>
        <ClientManagement crmData={dataFilter} />
      </div>
    </>
  );
}

export default Clients;
