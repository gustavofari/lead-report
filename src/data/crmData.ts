import type { Client } from "../types/crm";

const clientsData: Client[] = [
  {
    id: "1",
    name: "TechCorp Solutions",
    subtitle: "Concessionária Premium - Regional Sul",
    pipeline: { input: true, process: true, output: true },
    crm: {
      name: "Salesforce Production",
      status: "Saudável",
      endpoint: "https://api.salesforce.com/v1/leads",
      token: "",
      leadsSent: 45200,
      successRate: 99.2,
      activeErrors: 0,
      documentation: "https://developer.salesforce.com/docs",
      techNotes:
        "Integração via OAuth2. Requer ClientID atualizado anualmente via Make.com.",
      mapping: [
        { field: "full_name", target: "Name", required: true },
        { field: "email", target: "Email", required: true },
        { field: "phone", target: "Phone", required: false },
      ],
      rawJson: {
        lead: {
          name: "{{full_name}}",
          email: "{{email}}",
          source: "CMS_Automotivo",
        },
      },
      sourceData: [
        { name: "Google Ads", value: 18500, color: "#3b82f6" },
        { name: "Facebook Ads", value: 12400, color: "#1d4ed8" },
        { name: "Site Direto", value: 8900, color: "#64748b" },
      ],
      analyticsData: [
        { label: "08:00", leads: 450, success: 98, errors: 5, latency: 145 },
        { label: "10:00", leads: 890, success: 99, errors: 2, latency: 160 },
        {
          label: "12:00",
          leads: 1100,
          success: 94,
          errors: 45,
          latency: 210,
        },
        { label: "14:00", leads: 920, success: 99, errors: 3, latency: 155 },
        {
          label: "16:00",
          leads: 1050,
          success: 100,
          errors: 0,
          latency: 140,
        },
        { label: "18:00", leads: 700, success: 98, errors: 8, latency: 135 },
      ],
      recentIncidents: [
        {
          id: "err-01",
          type: "Validation Error",
          message: "E-mail inválido ou campo obrigatório ausente.",
          return: '400 Bad Request: {"error": "email_format_invalid"}',
          fullLead: {
            name: "Gustavo Teste",
            email: "gustavo@invalido",
            phone: "11999999999",
          },
          at: "23/01/2026 10:15",
        },
      ],
    },
  },
  {
    id: "2234234",
    name: "Salesforce",
    subtitle: "Concessionária HBW",
    pipeline: { input: true, process: true, output: true },
    crm: {
      name: "Salesforce Production",
      status: "Alerta",
      endpoint: "https://api.salesforce.com/v1/leads",
      token: "",
      leadsSent: 45200,
      successRate: 99.2,
      activeErrors: 0,
      documentation: "https://developer.salesforce.com/docs",
      techNotes:
        "Integração via OAuth2. Requer ClientID atualizado anualmente via Make.com.",
      mapping: [
        { field: "full_name", target: "Name", required: true },
        { field: "email", target: "Email", required: true },
        { field: "phone", target: "Phone", required: false },
      ],
      rawJson: {
        lead: {
          name: "{{full_name}}",
          email: "{{email}}",
          source: "CMS_Automotivo",
        },
      },
      sourceData: [
        { name: "Google Ads", value: 18500, color: "#3b82f6" },
        { name: "Facebook Ads", value: 12400, color: "#1d4ed8" },
        { name: "Site Direto", value: 8900, color: "#64748b" },
      ],
      analyticsData: [
        { label: "08:00", leads: 450, success: 98, errors: 5, latency: 145 },
        { label: "10:00", leads: 890, success: 99, errors: 2, latency: 160 },
        {
          label: "12:00",
          leads: 1100,
          success: 94,
          errors: 45,
          latency: 210,
        },
        { label: "14:00", leads: 920, success: 99, errors: 3, latency: 155 },
        {
          label: "16:00",
          leads: 1050,
          success: 100,
          errors: 0,
          latency: 140,
        },
        { label: "18:00", leads: 700, success: 98, errors: 8, latency: 135 },
      ],
      recentIncidents: [
        {
          id: "err-01",
          type: "Validation Error",
          message: "E-mail inválido ou campo obrigatório ausente.",
          return: '400 Bad Request: {"error": "email_format_invalid"}',
          fullLead: {
            name: "Gustavo Teste",
            email: "gustavo@invalido",
            phone: "11999999999",
          },
          at: "23/01/2026 10:15",
        },
      ],
    },
  },
];

export default clientsData;
