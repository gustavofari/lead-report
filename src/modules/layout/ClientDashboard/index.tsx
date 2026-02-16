import { Edit, ArrowLeft, MonitorCheck, Bug } from "lucide-react";

import CMSLink from "./components/CMSLink";
import DependencyBadge from "./components/DependencyBadge";
import CockpitStat from "./components/CockpitStat";
import PerformanceChart from "./sections/PerformanceChart";
import ErrorDiagnostics from "./sections/ErrorDiagnostics";
import PayloadSectionConfig from "./sections/PayloadSectionConfig";
import CrmConfigSidebar from "./sections/CrmConfigSidebar";
import clientsData from "../../../data/crmData";
import { Link } from "react-router-dom";

export default function ClientDashboard() {
  const client = clientsData[0];

  return (
    <div className="flex-1 bg-white p-8">
      <div className="flex justify-between items-center mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-400 hover:text-slate-800 text-[10px] font-black uppercase tracking-widest transition-all"
        >
          <ArrowLeft size={14} /> Voltar
        </Link>
        <div className="flex gap-3">
          <CMSLink
            href="{client.cms1}"
            label="ATD 1.0"
            icon={<MonitorCheck size={14} />}
          />
          <CMSLink
            href="{client.cms2}"
            label="ATD 2.0"
            icon={<MonitorCheck size={14} />}
          />
          <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl border border-slate-100 shadow-sm hover:text-blue-600 transition-all">
            <Edit size={18} />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start mb-12 border-b border-slate-50 pb-10">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-blue-600 rounded-[28px] flex items-center justify-center text-white text-4xl font-black shadow-2xl border-4 border-white">
            {client.name[0]}
          </div>
          <div>
            <h2 className="text-5xl font-black text-[#0F172A] tracking-tighter leading-none">
              {client.name}
            </h2>
            <p className="text-slate-400 font-bold text-sm mt-2">
              {client.subtitle}
            </p>
            <div className="flex gap-6 mt-8">
              <DependencyBadge
                label="Entrada"
                sub="ATD"
                active={client.pipeline.input}
              />
              <div className="flex items-center text-slate-200">──</div>
              <DependencyBadge
                label="Processamento"
                sub="Make.com"
                active={client.pipeline.process}
              />
              <div className="flex items-center text-slate-200">──</div>
              <DependencyBadge
                label="Saída"
                sub="CRM SALESFORCE"
                active={client.pipeline.output}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <CockpitStat
            label="Leads Enviados"
            value={client.crm.leadsSent.toLocaleString()}
          />
          <CockpitStat
            label="Taxa Sucesso"
            value={`${client.crm.successRate}%`}
            color="text-emerald-500"
          />
          <CockpitStat
            label="Erros Ativos"
            value="1"
            color={true ? "text-rose-500" : "text-slate-300"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          <PerformanceChart client={client} />

          <PayloadSectionConfig client={client} />

          <div className="space-y-6">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <Bug size={16} className="text-rose-500" /> Diagnóstico de Erros
            </h3>
            {client.crm.recentIncidents.map((inc: any) => (
              <ErrorDiagnostics inc={inc} />
            ))}
          </div>
        </div>
        <CrmConfigSidebar client={client} />
      </div>
    </div>
  );
}
