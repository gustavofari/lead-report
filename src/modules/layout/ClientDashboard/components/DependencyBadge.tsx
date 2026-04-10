import { cn } from "../../../../lib/utils";

interface DependencyBadgeProps {
  label: string;
  sub: string;
  active: boolean;
}

export default function DependencyBadge({
  label,
  sub,
  active,
}: DependencyBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "w-3 h-3 rounded-full transition-all duration-300",
          active
            ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            : "bg-rose-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]",
        )}
      />
      <div>
        <p className="text-[9px] font-black text-slate-300 uppercase mb-1 leading-none tracking-widest">
          {label}
        </p>
        <p className="text-[11px] font-black text-slate-700 leading-none">
          {sub}
        </p>
      </div>
    </div>
  );
}
