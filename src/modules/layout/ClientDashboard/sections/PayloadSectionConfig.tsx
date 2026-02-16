import { Code } from 'lucide-react'
import { useState } from 'react'

function PayloadSectionConfig({client}) {
  const [payloadView, setPayloadView] = useState('table')

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
          <button
            onClick={() => setPayloadView('table')}
            className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${payloadView === 'table' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400'}`}
          >
            Tabela
          </button>
          <button
            onClick={() => setPayloadView('json')}
            className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${payloadView === 'json' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400'}`}
          >
            JSON
          </button>
        </div>
      </div>
      <div className="p-10">
        {payloadView === 'table' ? (
          <table className="w-full text-left text-xs font-mono text-slate-300">
            <thead>
              <tr className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
                <th className="pb-8">Campo Make</th>
                <th className="pb-8">Destino CRM</th>
                <th className="pb-8">Req.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {client.crm.mapping.map((m, i) => (
                <tr key={i}>
                  <td className="py-5 text-blue-400 font-bold">{m.field}</td>
                  <td className="py-5 text-slate-200">→ {m.target}</td>
                  <td className="py-5">
                    {m.required ? (
                      <span className="text-emerald-500 font-black tracking-widest">
                        YES
                      </span>
                    ) : (
                      'NO'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="font-mono text-[11px] text-emerald-400 bg-black/20 p-8 rounded-3xl overflow-x-auto border border-white/5 shadow-inner">
            <pre>{JSON.stringify(client.crm.rawJson, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default PayloadSectionConfig
