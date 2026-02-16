import type { ClientStatus } from "../../types/crm";

export const STATUS_STYLES: Record<ClientStatus, string> = {
  Saudável: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Alerta: "bg-amber-100 text-amber-700 border-amber-200",
  Crítico: "bg-rose-100 text-rose-700 border-rose-200",
};
