import { FlaskConical, ScanLine, ShieldCheck, Stethoscope, Syringe, Wallet } from 'lucide-react';
import { CONTACT } from '@/config/contact';
import type { HomePlanContent } from '../types/plan.types';

export const HOME_PLAN: HomePlanContent = {
  badge: 'Plan Médico Preventivo Anual',
  title: 'Plan Consentido Protegido',
  description:
    'Un plan anual con los servicios de prevención y diagnóstico que tu mascota necesita, por $199.',
  benefits: [
    { label: '12 servicios preventivos', icon: ShieldCheck },
    { label: '3 consultas médicas', icon: Stethoscope },
    { label: 'Vacunas séxtuples y rabia', icon: Syringe },
    { label: 'Exámenes de laboratorio', icon: FlaskConical },
    { label: 'Estudios de imagen', icon: ScanLine },
    { label: '$180 en servicios', icon: Wallet },
  ],
  primaryCta: {
    label: 'Conoce el Plan Consentido',
    href: '/plan-consentido-protegido',
  },
  secondaryCta: {
    label: 'Descargar brochure',
    href: CONTACT.planBrochureUrl,
    external: true,
  },
  note: 'Costo anual de $199. Consulta condiciones y disponibilidad en tu sede.',
};
