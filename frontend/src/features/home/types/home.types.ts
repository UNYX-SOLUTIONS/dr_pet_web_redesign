import type { LucideIcon } from 'lucide-react';

export interface HomeCtaLink {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
}

export interface HomeHeroContent {
  eyebrow: string;
  titleLead: string;
  titleHighlight: string;
  description: string;
  primaryCta: HomeCtaLink;
  secondaryCta: HomeCtaLink;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  floatingCare: {
    title: string;
    subtitle: string;
  };
  floatingEmergency: {
    title: string;
    subtitle: string;
    detail: string;
  };
}

export interface HomeStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface HomeTrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HomePhilosophyContent {
  eyebrow: string;
  title: string;
  description: string;
  values: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  badge: {
    title: string;
    subtitle: string;
  };
  checkpoints: {
    title: string;
    description: string;
  }[];
  cta: HomeCtaLink;
}

export interface HomeFinalCtaContent {
  title: string;
  description: string;
  primaryCta: HomeCtaLink;
  secondaryCta: HomeCtaLink;
}
