import type { Client } from "../types/crm";

const clientsData: Client[] = [
  {
    id: "1",
    name: "TechCorp Solutions",
    subtitle: "Concessionária Premium - Regional Sul",
    pipeline: { cms: true, make: true, crm: true },
    sync: "1 min atrás",
    status: "Alerta",
    crm: {
      name: "Salesforce Production",
      endpoint: "https://api.salesforce.com/v1/leads",
      token: "",
      leadsSent: 45200,
      successRate: 99.2,
      error: {
        hasActiveError: true,
        recentIncidents: [
          {
            id: "err-01",
            errorType: "Validation Error",
            message: "E-mail inválido ou campo obrigatório ausente.",
            apiResponse: '400 Bad Request: {"error": "email_format_invalid"}',
            leadData: {
              name: "Gustavo Teste",
              email: "gustavo@invalido",
              phone: "11999999999",
            },
            occurredAt: "2026-01-23T10:15:00Z",
          },
        ],
      },
      documentation: {
        officialDocs: "https://developer.salesforce.com/docs",
        payload: {
          name: "full_name",
          email: "email",
          source: "CMS_Automotivo",
        },
        techNotes:
          "Integração via OAuth2. Requer ClientID atualizado anualmente via Make.com.",
      },
    },
  },
  {
    id: "2",
    name: "Grupo Valence",
    subtitle: "Matriz Belo Horizonte",
    pipeline: { cms: true, make: true, crm: true },
    sync: "Agora mesmo",
    status: "Saudável",
    crm: {
      name: "HubSpot CRM",
      endpoint: "https://api.hubapi.com/crm/v3/objects/contacts",
      token: "pat-na1-3829-xxxx-xxxx",
      leadsSent: 12840,
      successRate: 99.8,
      error: {
        hasActiveError: false,
        recentIncidents: [],
      },
      documentation: {
        officialDocs: "https://developers.hubspot.com/docs/api/crm/contacts",
        payload: {
          name: "firstname",
          email: "email",
          phone: "phone",
        },
        techNotes:
          "Utiliza Private App Token (PAT) permanente. Limite de 100 requisições a cada 10 segundos.",
      },
    },
  },
  {
    id: "3",
    name: "Dealer Connect",
    subtitle: "Filial São Paulo - Zona Sul",
    pipeline: { cms: true, make: false, crm: false },
    sync: "Falha (1h)",
    status: "Crítico",
    crm: {
      name: "Syonet API",
      endpoint: "https://api.syonet.com/v1/leads/integracao",
      token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      leadsSent: 8420,
      successRate: 64.2,
      error: {
        hasActiveError: true,
        recentIncidents: [
          {
            id: "err-02",
            errorType: "Timeout Connection",
            message: "A API de destino não respondeu em 30.000ms.",
            apiResponse:
              "504 Gateway Time-out: Upstream server is not responding",
            leadData: {
              name: "Carlos Ferreira",
              email: "carlos.f@empresa.com",
              interesse: "SUV Compass",
            },
            occurredAt: "2026-02-22T14:30:12Z",
          },
          {
            id: "err-03",
            errorType: "Authentication Failed",
            message: "Token expirado ou revogado no destino.",
            apiResponse: "401 Unauthorized: Invalid Token",
            leadData: {
              name: "Ana Silva",
              email: "ana.silva@gmail.com",
            },
            occurredAt: "2026-02-22T14:31:05Z",
          },
        ],
      },
      documentation: {
        officialDocs: "https://docs.syonet.com/integracoes",
        payload: {
          nome: "name",
          email: "email",
          cod_loja: "102",
        },
        techNotes:
          "Instabilidade frequente na porta 443 da API do cliente. O Make está configurado para 3 retentativas (delay de 5 min).",
      },
    },
  },
  {
    id: "4",
    name: "AutoSimpy",
    subtitle: "Operação LATAM",
    pipeline: { cms: true, make: true, crm: true },
    sync: "15 min atrás",
    status: "Alerta",
    crm: {
      name: "RD Station Marketing",
      endpoint: "https://api.rd.services/platform/conversions",
      token: "******************",
      leadsSent: 34500,
      successRate: 92.5,
      error: {
        hasActiveError: true,
        recentIncidents: [
          {
            id: "err-04",
            errorType: "Duplicate Entry",
            message:
              "Lead já existe na base e não permite atualização sem identificador único.",
            apiResponse: '409 Conflict: {"error": "contact_already_exists"}',
            leadData: {
              name: "Roberto Mendes",
              email: "rmendes@corp.com",
              conversion_identifier: "form-whatsapp-site",
            },
            occurredAt: "2026-02-22T08:10:00Z",
          },
        ],
      },
      documentation: {
        officialDocs:
          "https://developers.rdstation.com/pt-BR/reference/conversions",
        payload: {
          identificador: "conversion_identifier",
          email: "email",
          nome: "name",
        },
        techNotes:
          "Sempre enviar o campo 'conversion_identifier' para evitar duplicações na timeline do lead.",
      },
    },
  },
  {
    id: "5",
    name: "Motors Prime",
    subtitle: "Concessionária Digital Premium",
    pipeline: { cms: true, make: true, crm: true },
    sync: "5 min atrás",
    status: "Saudável",
    crm: {
      name: "Pipedrive",
      endpoint: "https://api.pipedrive.com/v1/persons",
      token: "api_token=9f8e7d6c5b4a3...",
      leadsSent: 150,
      successRate: 100,
      error: {
        hasActiveError: false,
        recentIncidents: [],
      },
      documentation: {
        officialDocs: "https://developers.pipedrive.com/docs/api/v1/Persons",
        payload: {
          name: "name",
          email: "email[0].value",
          phone: "phone[0].value",
        },
        techNotes:
          "Nova conta provisionada ontem. Pipedrive exige que email e telefone sejam enviados como array de objetos (value e primary).",
      },
    },
  },
];

export default clientsData;
