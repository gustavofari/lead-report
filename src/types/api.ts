/**
 * API Response Types
 * Types for API responses from the backend
 */

import type { Client } from "./crm";

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface GlobalMetricsResponse {
  totalCustomers: number;
  totalLeadsDay: number;
  incidentCount: number;
  globalSuccessRate: string;
  chartData: Array<{
    time: string;
    total: number;
    success: number;
  }>;
}

export interface CustomersResponse {
  customers: Client[];
  total: number;
  page: number;
  limit: number;
}

export interface DeleteResponse {
  success: boolean;
  message: string;
}

export interface ApiErrorResponse {
  error: string;
  statusCode: number;
  message: string;
  timestamp: string;
}
