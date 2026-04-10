import { Copy, ExternalLink, Eye, EyeOff, Settings, Check } from "lucide-react";
import { useState } from "react";
import type { Client } from "../../../../types/crm";
import { useCopyToClipboard } from "../../../../common/hooks/useCopyToClipboard";
import { CRM_CONFIG_LABELS } from "../../../../config/constants";

function CrmConfigSidebar({ client }: { client: Client }) {
  const [showToken, setShowToken] = useState(false);
  const { copied: copiedEndpoint, copy: copyEndpoint } = useCopyToClipboard();
  const { copied: copiedToken, copy: copyToken } = useCopyToClipboard();

  return (
    <aside className="space-y-8">
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
          <Settings size={16} className="text-blue-600" /> Configuração CRM
        </h4>
        <div className="space-y-8">
          <div>
            <p className="text-[10px] font-black text-slate-300 uppercase mb-2">
              {CRM_CONFIG_LABELS.ENDPOINT}
            </p>
            <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 group hover:border-blue-200 transition-colors">
              <p className="text-[10px] font-mono text-slate-600 truncate flex-1">
                {client.crm.endpoint}
              </p>
              <button
                onClick={() => copyEndpoint(client.crm.endpoint)}
                className={`transition-all ${copiedEndpoint ? "text-emerald-600" : "text-slate-300 hover:text-blue-600"}`}
                title={copiedEndpoint ? "Copiado!" : "Copiar"}
              >
                {copiedEndpoint ? <Check size={12} /> : <Copy size={12} />}
              </button>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black text-slate-300 uppercase mb-2">
              {CRM_CONFIG_LABELS.TOKEN}
            </p>
            <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 group hover:border-blue-200 transition-colors">
              <p className="text-[10px] font-mono text-slate-600 flex-1 truncate">
                {showToken ? client.crm.token : "••••••••••••••••••••••••••••"}
              </p>
              <div className="flex gap-1">
                <button
                  onClick={() => setShowToken(!showToken)}
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                  title={showToken ? "Ocultar" : "Mostrar"}
                >
                  {showToken ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
                {showToken && (
                  <button
                    onClick={() => copyToken(client.crm.token)}
                    className={`transition-all ${copiedToken ? "text-emerald-600" : "text-slate-300 hover:text-blue-600"}`}
                    title={copiedToken ? "Copiado!" : "Copiar"}
                  >
                    {copiedToken ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black text-slate-300 uppercase mb-2 tracking-widest">
              {CRM_CONFIG_LABELS.DOCUMENTATION}
            </p>
            <a
              href={client.crm.documentation.officialDocs}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl text-blue-600 text-[10px] font-black uppercase hover:bg-blue-600 hover:text-white transition-all shadow-sm"
            >
              {CRM_CONFIG_LABELS.OFFICIAL_DOCS} <ExternalLink size={14} />
            </a>
          </div>

          <div>
            <p className="text-[10px] font-black text-slate-300 uppercase mb-2 tracking-widest">
              {CRM_CONFIG_LABELS.TECH_NOTES}
            </p>
            <p className="text-xs text-slate-500 font-bold bg-slate-50 p-4 rounded-2xl border-l-4 border-blue-500 italic">
              {client.crm.documentation.techNotes}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CrmConfigSidebar;
