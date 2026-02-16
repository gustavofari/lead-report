import { useState } from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
  Legend,
  Area,
} from 'recharts'

function PerformanceChart({ client }) {
  const [period, setPeriod] = useState('hoje')
  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
      <div className="flex justify-between items-center mb-10">
        <div className="space-y-1">
          <h3 className="text-sm font-black text-[#0F172A] uppercase tracking-widest">
            Análise de Performance
          </h3>
          <p className="text-xs text-slate-400 font-medium">
            Correlação entre volume, sucesso e falhas
          </p>
        </div>
        <div className="flex p-1 rounded-2xl shadow-xl">
          {['hoje', 'semana', 'mês', 'ano'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase transition-all tracking-widest ${period === p ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="outline-none"
        >
          <ComposedChart
            data={client.crm.analyticsData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fontWeight: '800', fill: '#94a3b8' }}
            />
            <YAxis
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fontWeight: '800', fill: '#94a3b8' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fontWeight: '800', fill: '#10b981' }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: '20px',
                border: 'none',
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
              }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{
                fontSize: '10px',
                fontWeight: '800',
                textTransform: 'uppercase',
                paddingBottom: '30px',
              }}
            />
            <Area
              yAxisId="left"
              name="Volume Total"
              type="monotone"
              dataKey="leads"
              fill="url(#colorLeads)"
              stroke="#3b82f6"
              strokeWidth={3}
            />
            <Line
              yAxisId="left"
              name="Linha de Erros"
              type="monotone"
              dataKey="errors"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: '#ef4444',
                strokeWidth: 2,
                stroke: '#fff',
              }}
            />
            <Line
              yAxisId="right"
              name="Sucesso %"
              type="monotone"
              dataKey="success"
              stroke="#10b981"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: '#fff',
                strokeWidth: 2,
                stroke: '#10b981',
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PerformanceChart
