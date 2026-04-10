import { useContext } from "react";
import { MetricsContext } from "./MetricsContext";
import type { MetricsContextType } from "./types";

export function useMetrics(): MetricsContextType {
  const context = useContext(MetricsContext);
  if (!context)
    throw new Error("useMetrics deve ser usado dentro de um MetricsProvider");
  return context;
}
