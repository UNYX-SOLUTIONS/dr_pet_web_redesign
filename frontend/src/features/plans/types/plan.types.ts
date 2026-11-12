import type { LucideIcon } from 'lucide-react';

export interface PlanCtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface PlanBenefit {
  label: string;
  icon: LucideIcon;
}

export interface HomePlanContent {
  badge: string;
  title: string;
  description: string;
  benefits: PlanBenefit[];
  primaryCta: PlanCtaLink;
  secondaryCta: PlanCtaLink;
  note: string;
}
