import { MapPin, Siren, Stethoscope } from 'lucide-react';
import type { HomeHeroContent, HomeStat } from '../types/home.types';

export const HOME_HERO: HomeHeroContent = {
  eyebrow: 'Clínica veterinaria en Guayaquil',
  titleBefore: 'Cuidamos a tus',
  highlight: 'consentidos',
  titleAfter: 'con precisión clínica y calidez.',
  description:
    'Medicina veterinaria integral, especialidades, diagnóstico y emergencias en Urdesa, El Dorado y Vía a la Costa.',
  primaryCta: {
    label: 'Agendar cita',
    href: '/agendar',
  },
  secondaryCta: {
    label: 'Emergencias',
    href: '/emergencias',
  },
  image: {
    src: '/images/hero/drpet-hero.jpg',
    alt: 'Gatito atigrado y cachorro Yorkshire',
    width: 1280,
    height: 1024,
  },
};

export const HOME_STATS: HomeStat[] = [
  {
    icon: MapPin,
    value: '3',
    label: 'sedes en Guayaquil',
  },
  {
    icon: Stethoscope,
    value: '9',
    label: 'especialidades clínicas',
  },
  {
    icon: Siren,
    value: 'UCI',
    label: 'emergencias y cuidados intensivos',
  },
];
