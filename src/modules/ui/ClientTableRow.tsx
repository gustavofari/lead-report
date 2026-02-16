import { ChevronRight, Zap } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StatusBadge } from "../../common/components/StatusBadge";
import type { Client } from "../../types/crm";

const ClientTableRow = React.memo(function ClientTableRow({
  client,
}: {
  client: Client;
}) {
  const navigate = useNavigate();

  function goToClient(id: string) {
    navigate(`/clients/${id}`);
  }
  return (
    <tr
      key={client.id}
      className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
      onClick={() => goToClient(client.id)}
    >
      <td className="px-6 py-5 ">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center font-black text-lg metric-box">
            {client.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              {client.name}
            </p>
            <p className="text-xs text-slate-400 font-medium">
              {client.subtitle}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4">
        <StatusBadge status={client.crm.status} />
      </td>
      <td className="px-6 py-5">
        <div className="w-32 bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1.5">
          <div
            className="bg-blue-600 h-full"
            // style={{
            //   width: calculatePercentage(
            //     client.currentUsage,
            //     client.monthlyQuota,
            //   ),
            // }}
          ></div>
        </div>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
          {/* {formatCompactNumber(client.currentUsage)}k /
          {formatCompactNumber(client.monthlyQuota)}k leads */}
        </p>
      </td>
      <td className="px-6 py-5">
        <div className="flex items-center gap-2">
          <div
            key={client.id}
            className={`w-8 h-8 rounded-lg border flex items-center justify-center ${"error" === "error" ? "bg-rose-50 border-rose-100 text-rose-500" : "bg-emerald-50 border-emerald-100 text-emerald-500"}`}
          >
            <Zap size={14} fill="currentColor" />
          </div>
        </div>
      </td>
      <td className="px-6 py-5 text-right">
        <ChevronRight
          size={20}
          className="text-slate-300 group-hover:text-blue-500 transition-all inline-block"
        />
      </td>
    </tr>
  );
});
export default ClientTableRow;
