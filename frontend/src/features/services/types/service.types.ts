import type { LucideIcon } from 'lucide-react';

export type ServiceCardVariant = 'default' | 'featured' | 'combined';

export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  ctaLabel: string;
  icon: LucideIcon;
  variant?: ServiceCardVariant;
  bullets?: string[];
  footerLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}
