import {
  AlertTriangle,
  CheckCircle,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import StatusChart from "../../common/components/StatusChart";
import StatCard from "../../common/components/StatCard";
import Clients from "./Clients";
import Header from "./Header";

interface MetricData {
  label: string;
  subtitle: string;
  value: string;
  change: string;
  icon: LucideIcon;
  isAlert: boolean;
  color: string;
}

const statsItems: Array<MetricData> = [
  {
    label: "Total de clientes",
    subtitle: "34 clientes ativos",
    value: "89%",
    change: "+3 esse mês",
    icon: Users,
    color: "text-blue-500",
    isAlert: false,
  },
  {
    label: "Volume de leads",
    subtitle: "Últimas 24h",
    value: "12.847",
    change: "+12.5%",
    icon: UserPlus,
    color: "text-green-500",
    isAlert: false,
  },
  {
    label: "Taxa de Sucesso",
    subtitle: "Média de todos os clientes",
    value: "89.2%",
    change: "-2.3% vs ontem",
    icon: CheckCircle,
    color: "text-blue-500",
    isAlert: true,
  },
  {
    label: "Incidentes",
    subtitle: "requerem atenção",
    value: "4",
    change: "+1 vs ontem",
    icon: AlertTriangle,
    color: "text-red-500",
    isAlert: true,
  },
];
export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col h-full p-6 bg-[#F8FAFC] overflow-hidden space-y-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {statsItems.map((stats) => (
            <StatCard stats={stats} key={stats.label} />
          ))}
        </div>
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm h-[48%] p-6">
          <div className="flex justify-between">
            <h1 className="font-semibold">Status dos clientes</h1>
            <ul className="flex">
              <li className="pr-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2" />
                Saudável
              </li>
              <li className="pr-2">
                <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2" />
                Atenção
              </li>
              <li className="pr-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2" />
                Crítico
              </li>
            </ul>
          </div>
          <div className="w-full h-80 p-8">
            <StatusChart />
          </div>
        </div>
      </div>
      <Clients />
    </>
  );
}
