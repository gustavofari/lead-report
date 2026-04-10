import React, { createContext, useState, useEffect } from "react";
import type { Client } from "../types/crm";
import type { GlobalMetricsResponse } from "../types/api";
import { apiService } from "../services/api";
import { MESSAGES } from "../config/constants";
import type { MetricsContextType, RawClient } from "./types";

export const MetricsContext = createContext<MetricsContextType | undefined>(undefined);

export function MetricsProvider({ children }: { children: React.ReactNode }) {
  const [globalMetrics, setGlobalMetrics] =
    useState<GlobalMetricsResponse | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Parallel requests for better performance
      const [globalData, customersData] = await Promise.all([
        apiService.getGlobalMetrics(),
        apiService.getCustomers(),
      ]);

      const rawClients = (customersData.customers || customersData) as RawClient[];

      const mappedClients: Client[] = rawClients.map((c: RawClient) => {
        const total = c.metrics?.totalLeads || 0;
        const success = c.metrics?.successCount || 0;
        const rate =
          total > 0 ? parseFloat(((success / total) * 100).toFixed(1)) : 0;

        const hasError = c.status === "CRITICO";

        return {
          id: c.id,
          name: c.name,
          subtitle: c.subtitle || "",
          pipeline: { cms: true, make: true, crm: !hasError },
          sync: new Date(c.updatedAt).toLocaleTimeString(),
          status: hasError ? ("Crítico" as const) : ("Saudável" as const),
          crm: {
            name: c.crmName || "CRM Configurável",
            endpoint: c.crmEndpoint || "",
            token: c.crmToken ? "********" : "",
            leadsSent: total,
            successRate: rate,
            error: {
              hasActiveError: hasError,
              recentIncidents: c.incidents || [],
            },
            documentation: {
              officialDocs: c.crmDocLink || "",
              payload: c.payloadSchema || {},
              techNotes: c.crmTechNotes || "Conectado via LeadsOps",
            },
          },
        };
      });

      setGlobalMetrics(globalData);
      setClients(mappedClients);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : MESSAGES.API_ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MetricsContext.Provider
      value={{
        globalMetrics,
        clients,
        isLoading,
        error,
        refreshData: fetchData,
      }}
    >
      {children}
    </MetricsContext.Provider>
  );
}

export function useMetrics() {
  const context = useContext(MetricsContext);
  if (!context)
    throw new Error("useMetrics deve ser usado dentro de um MetricsProvider");
  return context;
}
