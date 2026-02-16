import type { Client } from "../../types/crm";
import ClientTableRow from "./ClientTableRow";

export default function ClientManagement({ crmData }: { crmData: Client[] }) {
  return (
    <div className="card-container overflow-hidden p-0">
      <table className="w-full text-left">
        <thead className="bg-slate-50/50 border-b border-slate-100">
          <tr>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Cliente
            </th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Status
            </th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Quota de Leads
            </th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Saúde CRM
            </th>
            <th className="px-6 py-4 text-center"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {crmData.map((client) => (
            <ClientTableRow key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
