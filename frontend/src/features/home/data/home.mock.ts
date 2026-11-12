import { Building2, HeartHandshake, MapPin, ScanLine, Siren, Stethoscope } from 'lucide-react';
import { CONTACT, EMERGENCY_CONTACTS } from '@/config/contact';
import type {
  HomeFinalCtaContent,
  HomeHeroContent,
  HomePhilosophyContent,
  HomeStat,
  HomeTrustItem,
} from '../types/home.types';

export const HOME_HERO: HomeHeroContent = {
  eyebrow: 'Clínica Veterinaria Especializada en Guayaquil',
  titleLead: 'Quiérelo por',
  titleHighlight: 'completo.',
  description:
    'Medicina veterinaria avanzada, calidez sin prisas y tecnología de vanguardia para perros y gatos. Cuidamos a tu consentido como a un miembro legítimo de la familia.',
  primaryCta: {
    label: 'Agendar cita por WhatsApp',
    href: CONTACT.primaryWhatsApp.url,
    external: true,
  },
  secondaryCta: {
    label: 'Emergencias 24/7',
    href: `tel:${EMERGENCY_CONTACTS[0].tel}`,
    badge: 'Llamar Ahora',
  },
  image: {
    src: '/images/hero/drpet-pets.jpg',
    alt: 'Cachorro golden retriever y gatito atendidos con cariño en Dr. Pet',
    width: 1280,
    height: 1024,
  },
  floatingCare: {
    title: 'Atención con calidez',
    subtitle: 'Sin estrés para perro y gato',
  },
  floatingEmergency: {
    title: 'Guardia médica',
    subtitle: 'Emergencias y UCI',
    detail: 'Urdesa: 098 636 3000',
  },
};

export const HOME_STATS: HomeStat[] = [
  {
    icon: Building2,
    value: '3 Sedes',
    label: 'Equipadas en Guayaquil',
  },
  {
    icon: Stethoscope,
    value: '9',
    label: 'Especialidades clínicas',
  },
  {
    icon: Siren,
    value: 'UCI',
    label: 'Emergencias y cuidados',
  },
];

export const HOME_TRUST_ITEMS: HomeTrustItem[] = [
  {
    icon: Stethoscope,
    title: 'Equipo especializado',
    description: 'Veterinarios colegiados en formación continua',
  },
  {
    icon: ScanLine,
    title: 'Tecnología de punta',
    description: 'Rayos X digital, ecógrafo y laboratorio propio',
  },
  {
    icon: HeartHandshake,
    title: 'Protocolos sin estrés',
    description: 'Manejo cuidadoso para reducir el estrés de tu mascota',
  },
  {
    icon: MapPin,
    title: '3 sedes en Guayaquil',
    description: 'Urdesa, El Dorado y Vía a la Costa',
  },
];

export const HOME_PHILOSOPHY: HomePhilosophyContent = {
  eyebrow: 'Nuestra Filosofía Médica',
  title: 'Más que una clínica, somos la familia médica de tu consentido.',
  description:
    'En Dr. Pet creemos que la excelencia científica no sirve de nada sin empatía y ternura. Entendemos que tu mascota es un integrante insustituible del hogar, y por ello cada diagnóstico se realiza con rigor médico y dedicación absoluta.',
  values: ['Respeto', 'Responsabilidad', 'Compromiso', 'Profesionalismo', 'Ética'],
  image: {
    src: '/images/hero/drpet-vet-cat.jpg',
    alt: 'Médico veterinario de Dr. Pet examinando a un gato con cariño',
    width: 900,
    height: 900,
  },
  badge: {
    title: 'Medicina veterinaria integral',
    subtitle: 'Equipo especializado y protocolos actualizados',
  },
  checkpoints: [
    {
      title: 'Doctores con vocación y actualización permanente',
      description:
        'Equipo multidisciplinario especializado en caninos y felinos, con trato cariñoso hacia pacientes tímidos o convalecientes.',
    },
    {
      title: 'Instalaciones higiénicas y áreas diferenciadas',
      description:
        'Protocolos de bioseguridad y espacios pensados para reducir el estrés y la contaminación cruzada.',
    },
    {
      title: 'Acompañamiento cercano después de la consulta',
      description: 'Resolvemos dudas y damos seguimiento a la evolución de tu mascota desde casa.',
    },
  ],
  cta: {
    label: 'Conoce a nuestros veterinarios',
    href: '/equipo',
  },
};

export const HOME_FINAL_CTA: HomeFinalCtaContent = {
  title: '¿Tu consentido necesita atención médica hoy?',
  description:
    'No dejes pasar síntomas atípicos. Nuestro equipo de veterinarios está listo en Guayaquil para examinarlo con ternura y el mayor rigor clínico.',
  primaryCta: {
    label: 'Chatear por WhatsApp ahora',
    href: CONTACT.primaryWhatsApp.url,
    external: true,
  },
  secondaryCta: {
    label: `Llamar al PBX: ${CONTACT.mainPhone.display}`,
    href: `tel:${CONTACT.mainPhone.tel}`,
  },
};
