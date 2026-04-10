/**
 * Environment Configuration
 * Centralized API URLs and environment variables
 */

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const API_KEY = import.meta.env.VITE_API_KEY || "";

export const API_ENDPOINTS = {
  // Metrics
  METRICS_GLOBAL: `${BASE_URL}/leads/metrics/global`,

  // Customers
  CUSTOMERS_LIST: `${BASE_URL}/customers`,
  CUSTOMER_DELETE: (id: string) => `${BASE_URL}/customers/${id}`,
} as const;

export const API_CONFIG = {
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
} as const;

export { API_KEY };
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;
