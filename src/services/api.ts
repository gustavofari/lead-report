/**
 * API Service
 * Centralized HTTP requests with error handling and retry logic
 */

import {
  API_ENDPOINTS,
  API_CONFIG,
  isDevelopment,
  API_KEY,
} from "../config/environment";
import { MESSAGES } from "../config/constants";
import type {
  GlobalMetricsResponse,
  CustomersResponse,
  DeleteResponse,
  ApiErrorResponse,
} from "../types/api";

class ApiService {
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData: ApiErrorResponse = await response.json().catch(() => ({
        error: MESSAGES.FETCH_ERROR,
        statusCode: response.status,
        message: response.statusText,
        timestamp: new Date().toISOString(),
      }));

      if (isDevelopment) {
        console.error("API Error:", errorData);
      }

      throw new Error(errorData.message || MESSAGES.FETCH_ERROR);
    }

    return response.json();
  }

  private async retryFetch<T>(
    url: string,
    options?: RequestInit,
    attempt: number = 1,
  ): Promise<T> {
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...((options?.headers as Record<string, string>) || {}),
      };

      if (API_KEY) {
        headers["Authorization"] = `Bearer ${API_KEY}`;
      }

      const response = await fetch(url, {
        ...options,
        headers,
        signal: AbortSignal.timeout(API_CONFIG.TIMEOUT),
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      if (attempt < API_CONFIG.RETRY_ATTEMPTS) {
        await new Promise((resolve) =>
          setTimeout(resolve, API_CONFIG.RETRY_DELAY * attempt),
        );
        return this.retryFetch<T>(url, options, attempt + 1);
      }
      throw error;
    }
  }

  async getGlobalMetrics(): Promise<GlobalMetricsResponse> {
    return this.retryFetch<GlobalMetricsResponse>(API_ENDPOINTS.METRICS_GLOBAL);
  }

  async getCustomers(): Promise<CustomersResponse> {
    return this.retryFetch<CustomersResponse>(API_ENDPOINTS.CUSTOMERS_LIST);
  }

  async deleteCustomer(id: string): Promise<DeleteResponse> {
    return this.retryFetch<DeleteResponse>(API_ENDPOINTS.CUSTOMER_DELETE(id), {
      method: "DELETE",
    });
  }
}

export const apiService = new ApiService();
