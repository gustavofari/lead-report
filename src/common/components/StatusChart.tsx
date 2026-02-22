import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const statusMetrics = [
  { time: "00:00", total: 320, success: 310 },
  { time: "04:00", total: 450, success: 440 },
  { time: "08:00", total: 1200, success: 1150 },
  { time: "12:00", total: 1800, success: 1680 },
  { time: "16:00", total: 1600, success: 1580 },
  { time: "20:00", total: 900, success: 890 },
  { time: "23:59", total: 400, success: 395 },
];

export default function StatusChart() {
  return (
    <div className="card-premium p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-heavy text-navy">
            Fluxo de Ingestão (24h)
          </h3>
          <p className="text-xs font-medium text-slate-400">
            Comparativo: Leads Recebidos vs. Sucesso no CRM
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-500">
            <div className="w-3 h-1 bg-blue-500 rounded-full"></div> Total
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-500">
            <div className="w-3 h-1 bg-emerald-400 rounded-full"></div> Sucesso
          </div>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={statusMetrics}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E2E8F0"
              vertical={true}
              horizontal={true}
            />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fontWeight: 700, fill: "#94A3B8" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fontWeight: 700, fill: "#94A3B8" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0F172A",
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              itemStyle={{
                color: "#fff",
                fontSize: "12px",
                fontWeight: "bold",
              }}
              labelStyle={{
                color: "#94A3B8",
                fontSize: "10px",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#3B82F6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorTotal)"
            />
            <Area
              type="monotone"
              dataKey="success"
              stroke="#10B981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorSuccess)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
