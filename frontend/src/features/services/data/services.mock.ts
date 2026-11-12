import { FlaskConical, ScanLine, Scissors, Siren, Sparkles, Stethoscope } from 'lucide-react';
import type { ServiceCardData } from '../types/service.types';

export const HOME_SERVICES: ServiceCardData[] = [
  {
    id: 'emergencias',
    title: 'Emergencias 24/7 y Cuidados Críticos',
    description:
      'Atención de emergencias, sala de shock, estabilización de trauma, oxigenoterapia y monitoreo crítico continuo.',
    category: 'Guardia Médica 24 Horas',
    href: '/emergencias',
    ctaLabel: 'Llamar Urgencias',
    icon: Siren,
    variant: 'featured',
    bullets: [
      'Médicos veterinarios de guardia',
      'Laboratorio y ecografía de urgencia',
      'Recepción rápida de emergencias',
    ],
    footerLabel: 'Sede Urdesa',
  },
  {
    id: 'consulta-veterinaria',
    title: 'Consulta & Medicina Preventiva',
    description:
      'Examen físico completo, medicina preventiva, planes de vacunación y desparasitación para perros y gatos.',
    category: 'Preventiva',
    href: '/servicios/consulta-veterinaria',
    ctaLabel: 'Agendar',
    icon: Stethoscope,
    footerLabel: 'Perros y Gatos',
  },
  {
    id: 'cirugia',
    title: 'Cirugía de Alta Complejidad',
    description:
      'Quirófano con anestesia inhalatoria, monitoreo multiparamétrico, esterilizaciones y cirugías traumatológicas.',
    category: 'Quirófano',
    href: '/servicios/cirugia-veterinaria',
    ctaLabel: 'Consultar',
    icon: Scissors,
    footerLabel: 'Monitoreo continuo',
  },
  {
    id: 'diagnostico-imagen',
    title: 'Rayos X Digital & Ecografía',
    description:
      'Diagnóstico por imagen para evaluar tejidos, órganos y estructuras con equipos de alta precisión.',
    category: 'Diagnóstico',
    href: '/servicios/diagnostico-por-imagen',
    ctaLabel: 'Ver tecnología',
    icon: ScanLine,
    footerLabel: 'Baja radiación',
  },
  {
    id: 'laboratorio-clinico',
    title: 'Laboratorio Clínico Propio',
    description:
      'Hematología, bioquímica, urianálisis y pruebas complementarias para un diagnóstico completo.',
    category: 'In Situ',
    href: '/servicios/laboratorio-clinico',
    ctaLabel: 'Ver exámenes',
    icon: FlaskConical,
    footerLabel: 'Resultados rápidos',
  },
  {
    id: 'grooming-pet-shop',
    title: 'Grooming, Spa & Pet Shop',
    description:
      'Baños terapéuticos, cortes según la raza, farmacia y alimentos clínicos recomendados por médicos veterinarios.',
    category: 'Bienestar & Tienda',
    href: '/grooming',
    ctaLabel: 'Agendar Spa / Shop',
    icon: Sparkles,
    variant: 'combined',
    secondaryHref: '/pet-shop',
    secondaryLabel: 'Ver Pet Shop',
  },
];
