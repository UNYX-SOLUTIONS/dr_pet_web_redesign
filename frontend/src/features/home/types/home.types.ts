import type { LucideIcon } from 'lucide-react';

export interface HomeCtaLink {
  label: string;
  href: string;
}

export interface HomeHeroContent {
  eyebrow: string;
  titleBefore: string;
  highlight: string;
  titleAfter: string;
  description: string;
  primaryCta: HomeCtaLink;
  secondaryCta: HomeCtaLink;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface HomeStat {
  icon: LucideIcon;
  value: string;
  label: string;
}
