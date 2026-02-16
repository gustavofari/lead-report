import {
  BarChart3,
  Copy,
  ExternalLink,
  Eye,
  EyeOff,
  Settings,
} from 'lucide-react'
import { useState } from 'react'

function CrmConfigSidebar({ client }) {
  const [showToken, setShowToken] = useState(false)

  return (
    <aside className="space-y-8">
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
          <Settings size={16} className="text-blue-600" /> Configuração CRM
        </h4>
        <div className="space-y-8">
          <div>
            <p className="text-[10px] font-black text-slate-300 uppercase mb-2">
              Endpoint Ingestão
            </p>
            <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 group">
              <p className="text-[10px] font-mono text-slate-600 truncate flex-1">
                {client.crm.endpoint}
              </p>
              <Copy
                size={12}
                className="text-slate-300 cursor-pointer hover:text-blue-600 transition-colors"
              />
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black text-slate-300 uppercase mb-2">
              Token / API Key
            </p>
            <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <p className="text-[10px] font-mono text-slate-600 flex-1 truncate">
                {showToken ? client.crm.token : '••••••••••••••••••••••••••••'}
              </p>
              <button
                onClick={() => setShowToken(!showToken)}
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                {showToken ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black text-slate-300 uppercase mb-2 tracking-widest">
              Documentação
            </p>
            <a
              href={client.crm.documentation}
              target="_blank"
              className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl text-blue-600 text-[10px] font-black uppercase hover:bg-blue-600 hover:text-white transition-all shadow-sm"
            >
              Link Oficial <ExternalLink size={14} />
            </a>
          </div>

          <div>
            <p className="text-[10px] font-black text-slate-300 uppercase mb-2 tracking-widest font-mono">
              Notas Técnicas
            </p>
            <p className="text-xs text-slate-500 font-bold bg-slate-50 p-4 rounded-2xl border-l-4 border-blue-500 italic">
              {client.crm.techNotes}
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default CrmConfigSidebar
