import type { LocationBadgeTone } from '../types/location.types';

export interface LocationDetails {
  badge: string;
  badgeTone: LocationBadgeTone;
  mapLabel: string;
  hours: string;
  featured?: boolean;
}

export const LOCATION_DETAILS: Record<string, LocationDetails> = {
  urdesa: {
    badge: 'Urgencias 24 Horas',
    badgeTone: 'emergency',
    mapLabel: 'Circunvalación Sur 216',
    hours: 'Consultas con cita previa',
    featured: true,
  },
  'el-dorado': {
    badge: 'Consulta y especialidades',
    badgeTone: 'accent',
    mapLabel: 'Ciudad Comercial El Dorado',
    hours: 'Consultas con cita previa',
  },
  'via-a-la-costa': {
    badge: 'Emergencias',
    badgeTone: 'emergency',
    mapLabel: 'Km 9.8 Vía a la Costa',
    hours: 'Consultas con cita previa',
  },
};
