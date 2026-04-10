import { useState, useCallback } from "react";
import {
  Edit,
  ArrowLeft,
  MonitorCheck,
  Bug,
  Trash2,
  AlertTriangle,
} from "lucide-react";

import CMSLink from "./components/CMSLink";
import DependencyBadge from "./components/DependencyBadge";
import CockpitStat from "./components/CockpitStat";
import PerformanceChart from "./sections/PerformanceChart";
import PayloadSectionConfig from "./sections/PayloadSectionConfig";
import CrmConfigSidebar from "./sections/CrmConfigSidebar";
import { Link, useParams } from "react-router-dom";
import { useMetrics } from "../../../contexts";
import { useClientNavigation } from "../../../common/hooks/useClientNavigation";
import { apiService } from "../../../services/api";
import { MESSAGES } from "../../../config/constants";

export default function ClientDashboard() {
  const { id } = useParams<{ id: string }>();
  const { goHome } = useClientNavigation();

  const { clients, isLoading, refreshData } = useMetrics();

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const client = clients.find((c) => c.id === id);

  const handleDeleteClient = useCallback(async () => {
    if (!id) return;

    setIsDeleting(true);
    try {
      await apiService.deleteCustomer(id);
      await refreshData();
      goHome();
    } catch (error) {
      console.error(error);
      alert(MESSAGES.DELETE_ERROR);
      setIsDeleting(false);
      setConfirmDelete(false);
    }
  }, [id, refreshData, goHome]);

  if (isLoading) {
    return (
      <div className="container flex items-center justify-center h-screen text-slate-400 font-bold">
        {MESSAGES.LOADING}
      </div>
    );
  }

  if (!client) {
    return (
      <div className="container flex flex-col items-center justify-center h-screen text-slate-500 space-y-4">
        <h2 className="text-2xl font-black text-slate-800">
          Cliente não encontrado
        </h2>
        <Link
          to="/"
          className="text-blue-600 font-bold flex items-center gap-2 hover:underline"
        >
          <ArrowLeft size={16} /> Voltar para o Dashboard principal
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-400 hover:text-slate-800 text-[10px] font-black uppercase tracking-widest transition-all"
        >
          <ArrowLeft size={14} /> Voltar
        </Link>

        <div className="flex gap-3">
          <CMSLink href="#" label="ATD 1.0" icon={<MonitorCheck size={14} />} />
          <CMSLink href="#" label="ATD 2.0" icon={<MonitorCheck size={14} />} />
          <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl border border-slate-100 shadow-sm hover:text-blue-600 transition-all">
            <Edit size={18} />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start mb-12 border-b border-slate-50 pb-10">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-blue-600 rounded-[28px] flex items-center justify-center text-white text-4xl font-black shadow-2xl border-4 border-white">
            {client.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-5xl font-black text-[#0F172A] tracking-tighter leading-none">
              {client.name}
            </h2>
            <p className="text-slate-400 font-bold text-sm mt-2">{client.id}</p>
            <div className="flex gap-6 mt-8">
              <DependencyBadge
                label="Entrada"
                sub="CMS"
                active={client.pipeline.cms}
              />
              <div className="flex items-center text-slate-200">──</div>
              <DependencyBadge
                label="Processamento"
                sub="Make"
                active={client.pipeline.make}
              />
              <div className="flex items-center text-slate-200">──</div>
              <DependencyBadge
                label="Saída"
                sub="CRM"
                active={client.pipeline.crm}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <CockpitStat
            label="Leads Enviados"
            value={client.crm.leadsSent.toLocaleString("pt-BR")}
          />
          <CockpitStat
            label="Taxa Sucesso"
            value={`${client.crm.successRate}%`}
            color={
              client.crm.successRate >= 90
                ? "text-emerald-500"
                : "text-amber-500"
            }
          />
          <CockpitStat
            label="Erros Ativos"
            value={client.crm.error.hasActiveError ? "1" : "0"}
            color={
              client.crm.error.hasActiveError
                ? "text-rose-500"
                : "text-slate-300"
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          <PerformanceChart />

          {/* NOVO LAYOUT LADO A LADO: Payload e Exclusão */}
          <div className="w-full">
            <PayloadSectionConfig client={client} />
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <Bug size={16} className="text-rose-500" /> Diagnóstico de Erros
            </h3>

            {/* {client.crm.error.recentIncidents &&
            client.crm.error.recentIncidents.length > 0 ? (
              client.crm.error.recentIncidents.map(
                (inc: any, index: number) => (
                  <ErrorDiagnostics key={index} inc={inc} />
                ),
              )
            ) : ( */}
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl text-center text-slate-400 font-bold text-sm">
              Nenhum incidente crítico registrado nas últimas 24 horas.
            </div>
            {/* )} */}

            <div className="w-full flex flex-col h-full">
              <h3 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <AlertTriangle size={16} /> Exclusão da Concessionária
              </h3>

              <div className="bg-rose-50/50 border border-rose-200 p-6 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-1">
                <div className="flex-1">
                  <h4 className="text-rose-800 font-bold text-sm mb-1">
                    Excluir Concessionária
                  </h4>
                  <p className="text-rose-600/70 text-xs font-medium max-w-sm">
                    Essa ação é irreversível. Todos os logs e histórico de
                    requisições deste cliente serão apagados.
                  </p>
                </div>

                <div className="shrink-0">
                  {!confirmDelete ? (
                    <button
                      onClick={() => setConfirmDelete(true)}
                      className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-heavy uppercase transition-colors"
                    >
                      <Trash2 size={16} /> Excluir
                    </button>
                  ) : (
                    <div className="flex flex-col items-center gap-2 animate-in fade-in zoom-in duration-300">
                      <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest">
                        Tem certeza?
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setConfirmDelete(false)}
                          disabled={isDeleting}
                          className="px-3 py-2 bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 rounded-xl text-[10px] font-heavy uppercase transition-colors"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={handleDeleteClient}
                          disabled={isDeleting}
                          className="flex items-center justify-center gap-1.5 px-4 py-2 bg-rose-600 text-white rounded-xl text-[10px] font-heavy uppercase hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200 disabled:opacity-50"
                        >
                          {isDeleting ? "..." : "Sim, Excluir"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <CrmConfigSidebar client={client} />
      </div>
    </div>
  );
}
