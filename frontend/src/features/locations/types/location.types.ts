import type { ContactLocation } from '@/config/contact';

export type LocationBadgeTone = 'emergency' | 'accent' | 'primary';

export interface LocationCardData extends ContactLocation {
  badge: string;
  badgeTone: LocationBadgeTone;
  mapLabel: string;
  hours: string;
  featured?: boolean;
}
