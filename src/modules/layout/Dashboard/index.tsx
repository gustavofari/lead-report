import {
  AlertTriangle,
  CheckCircle,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import StatusChart from "../../../common/components/StatusChart";
import StatCard from "../../../common/components/StatCard";
import Clients from "./Clients";
import Header from "../Header";
import { useMetrics } from "../../../contexts";
import {
  LABEL_STATS,
  METRIC_CHANGES,
  MESSAGES,
} from "../../../config/constants";

interface MetricData {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  isAlert: boolean;
  color: string;
}

export default function Dashboard() {
  const { globalMetrics, isLoading, error } = useMetrics();

  const statsItems: Array<MetricData> = [
    {
      label: LABEL_STATS.TOTAL_CUSTOMERS,
      value: globalMetrics ? globalMetrics.totalCustomers.toString() : "0",
      change: METRIC_CHANGES.CUSTOMERS,
      icon: Users,
      color: "text-blue-500",
      isAlert: false,
    },
    {
      label: LABEL_STATS.VOLUME_LEADS,
      value: globalMetrics?.totalLeadsDay?.toString() || "0",
      change: METRIC_CHANGES.LEADS,
      icon: UserPlus,
      color: "text-emerald-600",
      isAlert: false,
    },
    {
      label: LABEL_STATS.SUCCESS_RATE,
      value: globalMetrics?.globalSuccessRate || "0%",
      change: METRIC_CHANGES.SUCCESS_RATE,
      icon: CheckCircle,
      color: "text-blue-500",
      isAlert: true,
    },
    {
      label: LABEL_STATS.INCIDENTS,
      value: globalMetrics ? globalMetrics.incidentCount.toString() : "0",
      change: METRIC_CHANGES.INCIDENTS,
      icon: AlertTriangle,
      color: "text-red-500",
      isAlert: globalMetrics ? globalMetrics.incidentCount > 0 : false,
    },
  ];

  return (
    <div className="container">
      <div className="flex flex-col h-full w-full bg-[#F8FAFC] overflow-hidden space-y-8 p-6">
        <Header />

        {error && (
          <div className="w-full bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
            <AlertTriangle size={16} />
            {MESSAGES.API_ERROR}: {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {statsItems.map((stats) => (
            <div
              key={stats.label}
              className={
                isLoading
                  ? "opacity-60 transition-opacity duration-300"
                  : "opacity-100 transition-opacity duration-300"
              }
            >
              <StatCard stats={stats} />
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm h-[48%]">
          <div className="w-full h-full">
            <StatusChart />
          </div>
        </div>
      </div>

      {/* A lista de clientes também renderiza de forma independente */}
      <Clients />
    </div>
  );
}
