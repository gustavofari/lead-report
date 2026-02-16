export default function CMSLink({ href, label, icon }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-black uppercase text-slate-600 border border-slate-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm tracking-widest"
    >
      {icon} {label}
    </a>
  )
}
