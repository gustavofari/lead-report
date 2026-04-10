import type { Client } from "../types/crm";
import type { GlobalMetricsResponse } from "../types/api";

export interface MetricsContextType {
  globalMetrics: GlobalMetricsResponse | null;
  clients: Client[];
  isLoading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

export interface RawClient {
  id: string;
  name: string;
  subtitle?: string;
  metrics?: {
    totalLeads: number;
    successCount: number;
  };
  status: string;
  updatedAt: string;
  crmName?: string;
  crmEndpoint?: string;
  crmToken?: string;
  crmDocLink?: string;
  payloadSchema?: unknown;
  crmTechNotes?: string;
  incidents?: unknown[];
}
