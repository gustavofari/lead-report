import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const statusMetrics = [
  { hours: '00:00', healthy: 42, warning: 5, critical: 2 },
  { hours: '04:00', healthy: 45, warning: 8, critical: 1 },
  { hours: '08:00', healthy: 48, warning: 6, critical: 3 },
  { hours: '12:00', healthy: 40, warning: 10, critical: 2 },
  { hours: '16:00', healthy: 43, warning: 7, critical: 4 },
  { hours: '20:00', healthy: 44, warning: 5, critical: 2 },
  { hours: '22:00', healthy: 44, warning: 5, critical: 2 },
]

export default function StatusChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={statusMetrics} margin={{ left: -20 }}>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#f1f5f9"
        />

        <XAxis
          dataKey="hours"
          name="Horário"
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#94a3b8', fontSize: 12 }}
          dy={10}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#94a3b8', fontSize: 12 }}
          domain={[0, 60]}
          ticks={[0, 15, 30, 45, 60]}
        />

        <Tooltip
          contentStyle={{
            borderRadius: '8px',
            border: '1px solid #f1f5f9',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          }}
        />

        <Line
          type="monotone"
          dataKey="healthy"
          name="Saudável"
          stroke="#10b981"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />

        <Line
          name="Atenção"
          type="monotone"
          dataKey="warning"
          stroke="#f59e0b"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
        />

        <Line
          name="Crítico"
          type="monotone"
          dataKey="critical"
          stroke="#ef4444"
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
        />
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
    </ResponsiveContainer>
  )
}
