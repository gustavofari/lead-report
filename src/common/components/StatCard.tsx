import type { LucideIcon } from "lucide-react";

type StatCardData = {
  label: string;
  subtitle: string;
  value: string;
  change: string;
  icon: LucideIcon;
  isAlert: boolean;
  color: string;
};

type StatCardProps = {
  stats: StatCardData;
};

export default function StatCard({ stats }: StatCardProps) {
  const { label, subtitle, value, change, icon: Icon, isAlert, color } = stats;

  return (
    <>
      <div
        className={`card-stats p-6 flex flex-col justify-between h-40 relative overflow-hidden group hover:shadow-lg transition-all ${isAlert ? "border-l-4 border-l-red-500" : ""}`}
      >
        <div className="flex justify-between items-start z-10">
          <span className="text-[11px] font-heavy uppercase text-slate-400 tracking-wider flex items-center gap-2">
            <Icon size={14} /> {label}
          </span>
          <span
            className={`text-[11px] font-heavy px-2 py-0.5 rounded-full ${
              isAlert
                ? "bg-red-50 text-red-500"
                : "bg-emerald-50 text-emerald-600"
            }`}
          >
            {change}
          </span>
        </div>
        <div className="z-10 mt-auto">
          <div className={`text-4xl font-heavy tracking-tighter ${color}`}>
            {value}
          </div>
          <div className="text-xs font-bold text-slate-400 mt-1">
            {subtitle}
          </div>
        </div>
        <Icon
          className="absolute -right-4 -bottom-4 text-slate-50 opacity-50 group-hover:scale-110 transition-transform duration-500"
          size={100}
        />
      </div>
    </>
  );
}
