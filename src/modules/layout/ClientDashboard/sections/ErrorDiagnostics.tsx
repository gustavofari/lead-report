import { AlertCircle, Bug, ChevronDown } from 'lucide-react'
import { useState } from 'react'

function ErrorDiagnostics({ inc }) {
  const [expandedErr, setExpandedErr] = useState(null)

  return (
    <div
      key={inc.id}
      className="bg-white border-2 border-slate-100 rounded-[35px] overflow-hidden"
    >
      <div
        className="p-6 bg-slate-50/50 flex justify-between items-center cursor-pointer"
        onClick={() => setExpandedErr(expandedErr === inc.id ? null : inc.id)}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-rose-100 text-rose-600 rounded-2xl">
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="font-black text-slate-800">{inc.type}</p>
            <p className="text-xs text-slate-500">{inc.message}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            {inc.at}
          </span>
          <ChevronDown
            size={20}
            className={`text-slate-300 transition-transform ${expandedErr === inc.id ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      {expandedErr === inc.id && (
        <div className="p-8 border-t border-slate-100 grid grid-cols-2 gap-8 bg-white">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase mb-3 tracking-widest">
              Retorno do CRM
            </p>
            <div className="bg-slate-900 text-rose-400 p-5 rounded-2xl font-mono text-[10px] leading-relaxed border border-rose-900/20">
              {inc.return}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase mb-3 tracking-widest">
              Lead Payload Enviado
            </p>
            <div className="bg-[#0F172A] text-emerald-400 p-5 rounded-2xl font-mono text-[10px] border border-white/5 shadow-inner">
              <pre>{JSON.stringify(inc.fullLead, null, 2)}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ErrorDiagnostics
