import type { INCIDENT_COLORS } from "../constants/constants";

export type IncidentType = keyof typeof INCIDENT_COLORS;

export type IncidentsItem = {
  id: number;
  title: string;
  time: string;
  type: IncidentType;
  message: string;
};
