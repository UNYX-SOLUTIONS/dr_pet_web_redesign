import { LOCATIONS } from '@/config/contact';
import { LOCATION_DETAILS } from '../data/locations.mock';
import type { LocationCardData } from '../types/location.types';

export function getLocationCards(): LocationCardData[] {
  return LOCATIONS.map((location) => {
    const details = LOCATION_DETAILS[location.slug] ?? {
      badge: 'Sede',
      badgeTone: 'primary' as const,
      mapLabel: location.name,
      hours: 'Consultas con cita previa',
    };

    return {
      ...location,
      ...details,
    };
  });
}
