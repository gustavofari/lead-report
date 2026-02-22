export default function ClientManagement() {
  return (
    <div className="bg-slate-50/80 border-b border-slate-100 px-6 py-3">
      <div className="grid grid-cols-12 text-[10px] font-heavy text-slate-400 uppercase tracking-widest">
        <div className="col-span-4 pl-2">Cliente / Instância</div>
        <div className="col-span-2">Última Sinc.</div>
        <div className="col-span-1 text-center">Status</div>
        <div className="col-span-2 text-center">Quota</div>
        <div className="col-span-1 text-right pr-2">Ação</div>
      </div>
    </div>
  );
}
