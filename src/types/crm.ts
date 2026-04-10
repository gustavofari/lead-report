import { type LucideIcon } from "lucide-react";

export type ClientStatus = "Saudável" | "Alerta" | "Crítico";

export type PlanType = "Free" | "2.0" | "Classic";

export type HttpMethod = "POST" | "PUT" | "PATCH";

export type FieldType = "string" | "integer" | "boolean";

export type ClientStatusConnect = "connected" | "error" | "syncing";

export type Pipeline = {
  cms: boolean;
  make: boolean;
  crm: boolean;
};

export type leadsData = {
  [key: string]: string;
};

export type incidentsMapping = {
  id: string;
  errorType: string;
  message: string;
  apiResponse: string;
  leadData: leadsData;
  occurredAt: string;
};

export type ErrorCrm = {
  hasActiveError: boolean;
  recentIncidents: incidentsMapping[];
};

export type payloadConfig = {
  [key: string]: string;
};

export type documentationCrm = {
  officialDocs: string;
  payload: payloadConfig;
  techNotes: string;
};

export type ClientCrmConfig = {
  name: string;
  endpoint: string;
  token: string;
  leadsSent: number;
  successRate: number;
  error: ErrorCrm;
  documentation: documentationCrm;
};

export type Client = {
  id: string;
  name: string;
  pipeline: Pipeline;
  crm: ClientCrmConfig;
  status: ClientStatus;
  sync: string;
};

export type NavItem = {
  label: string;
  Icon: LucideIcon;
  path: string;
  badge?: number;
};
