interface CockpitStatProps {
  label: string;
  value: string | number;
  color?: string;
}

export default function CockpitStat({
  label,
  value,
  color = "text-slate-800",
}: CockpitStatProps) {
  return (
    <div className="text-right">
      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className={`text-2xl font-black ${color} tracking-tighter`}>{value}</p>
    </div>
  );
}
