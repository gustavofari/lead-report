import { LucideIcon } from 'lucide-react'

// ============================================================================
// Status Types
// ============================================================================

export type ClientStatus = 'Saudável' | 'Alerta' | 'Crítico'

export type PlanType = 'Free' | '2.0' | 'Classic'

export type HttpMethod = 'POST' | 'PUT' | 'PATCH'

export type FieldType = 'string' | 'integer' | 'boolean'

export type ClientStatusConnect = 'connected' | 'error' | 'syncing'

export type ErrorType =
  | 'Validation Error'
  | 'Timeout'
  | 'Authentication Error'
  | 'Rate Limit'

// ============================================================================
// Data Structure Types
// ============================================================================

export type Pipeline = {
  readonly input: boolean
  readonly process: boolean
  readonly output: boolean
}

export type FieldMapping = {
  readonly field: string
  readonly target: string
  readonly required: boolean
}

export type DataSource = {
  readonly name: string
  readonly value: number
  readonly color: string
}

export type AnalyticsRecord = {
  readonly label: string
  readonly leads: number
  readonly success: number
  readonly errors: number
  readonly latency: number
}

export type IncidentDetail = {
  readonly name: string
  readonly email: string
  readonly phone: string
}

export type Incident = {
  readonly id: string
  readonly type: ErrorType
  readonly message: string
  readonly return: string
  readonly fullLead: IncidentDetail
  readonly at: string
}

export type LeadRawJson = Record<string, unknown>

export type ClientCrmConfig = {
  readonly name: string
  readonly endpoint: string
  readonly token: string
  readonly leadsSent: number
  readonly successRate: number
  readonly activeErrors: number
  readonly documentation: string
  readonly techNotes: string
  readonly mapping: readonly FieldMapping[]
  readonly rawJson: LeadRawJson
  readonly sourceData: readonly DataSource[]
  readonly analyticsData: readonly AnalyticsRecord[]
  readonly recentIncidents: readonly Incident[]
  readonly status: ClientStatus
}

export type Client = {
  readonly id: string
  readonly name: string
  readonly subtitle: string
  readonly pipeline: Pipeline
  readonly crm: ClientCrmConfig
}

// ============================================================================
// UI Types
// ============================================================================

export type NavItem = {
  readonly label: string
  readonly Icon: LucideIcon
  readonly path: string
  readonly badge?: number
}
