/**
 * Global Constants
 * Centralized strings and configuration values
 */

export const MESSAGES = {
  // Errors
  API_ERROR: "Falha ao sincronizar dados em tempo real",
  DELETE_ERROR: "Houve um erro ao excluir o cliente. Tente novamente.",
  FETCH_ERROR: "Falha ao carregar dados da API",

  // Actions
  CONFIRM_DELETE: "Tem certeza que deseja excluir este cliente?",
  DELETING: "Deletando...",

  // Status
  LOADING: "Carregando...",

  // Search
  SEARCH_PLACEHOLDER: "Buscar cliente por nome, ID ou tag...",

  // Navigation
  BACK: "Voltar",
} as const;

export const LABEL_STATS = {
  TOTAL_CUSTOMERS: "Total de clientes",
  TOTAL_CUSTOMERS_SUBTITLE: "34 clientes ativos",
  VOLUME_LEADS: "Volume de leads",
  VOLUME_LEADS_SUBTITLE: "Últimas 24h",
  SUCCESS_RATE: "Taxa de Sucesso",
  SUCCESS_RATE_SUBTITLE: "Média de todos os clientes",
  INCIDENTS: "Incidentes",
  INCIDENTS_SUBTITLE: "requerem atenção",
} as const;

export const METRIC_CHANGES = {
  CUSTOMERS: "+3 esse mês",
  LEADS: "+12.5%",
  SUCCESS_RATE: "-2.3%",
  INCIDENTS: "+1",
} as const;

export const STATUS_CHART_LABELS = {
  INGESTION_FLOW: "Fluxo de Ingestão (24h)",
  INGESTION_COMPARISON: "Comparativo: Leads Recebidos vs. Sucesso no CRM",
  TOTAL: "Total",
  SUCCESS: "Sucesso",
} as const;

export const CHART_PERIODS = ["hoje", "semana", "mês", "ano"] as const;

export const ERROR_DIAGNOSTICS_LABELS = {
  CRM_RETURN: "Retorno do CRM",
  LEAD_PAYLOAD: "Lead Payload Enviado",
} as const;

export const CRM_CONFIG_LABELS = {
  ENDPOINT: "Endpoint Ingestão",
  TOKEN: "Token / API Key",
  DOCUMENTATION: "Documentação",
  TECH_NOTES: "Notas Técnicas",
  OFFICIAL_DOCS: "Link Oficial",
} as const;

export const DEPENDENCY_LABELS = {
  INPUT: "Entrada",
  INPUT_SUB: "CMS",
  PROCESS: "Processamento",
  PROCESS_SUB: "Make",
  OUTPUT: "Saída",
  OUTPUT_SUB: "CRM",
} as const;

export const COCKPIT_STAT_LABELS = {
  LEADS_SENT: "Leads Enviados",
  SUCCESS_RATE: "Taxa Sucesso",
  ACTIVE_ERRORS: "Erros Ativos",
} as const;

export const PERFORMANCE_LABELS = {
  TITLE: "Análise de Performance",
  SUBTITLE: "Correlação entre volume, sucesso e falhas",
  TOTAL_VOLUME: "Volume Total",
  ERROR_LINE: "Linha de Erros",
  SUCCESS_PERCENT: "Sucesso %",
} as const;

export const VERSION = "v1.0.0";

export const DEBOUNCE_DELAY = 500;
