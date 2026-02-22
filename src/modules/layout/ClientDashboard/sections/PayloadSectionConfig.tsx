import { Code } from "lucide-react";
import type { Client } from "../../../../types/crm";

function PayloadSectionConfig({ client }: { client: Client }) {
  return (
    <div className="bg-[#0F172A] rounded-[40px] overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-slate-800 bg-[#0F172A]/50 flex justify-between items-center px-10">
        <div className="flex items-center gap-3 text-blue-400">
          <Code size={20} />
          <h3 className="font-black text-xs uppercase tracking-[0.2em]">
            Payload Configuration
          </h3>
        </div>
        <div className="flex bg-slate-800 p-1.5 rounded-2xl">
          <button className="px-5 py-2 rounded-xl text-[10px] font-black uppercase transition-all  bg-blue-600 text-white shadow-lg">
            JSON
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="font-mono text-[11px] text-emerald-400 bg-black/20 p-8 rounded-3xl overflow-x-auto border border-white/5 shadow-inner">
          <pre>{JSON.stringify(client.crm.documentation.payload, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default PayloadSectionConfig;
