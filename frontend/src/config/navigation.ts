import { CONTACT } from './contact';

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  { title: 'Inicio', href: '/' },
  {
    title: 'Servicios Clínicos',
    href: '/servicios',
    children: [
      { title: 'Consulta Veterinaria', href: '/servicios/consulta-veterinaria' },
      { title: 'Emergencias 24/7', href: '/emergencias' },
      { title: 'Especialidades', href: '/servicios/especialidades' },
      { title: 'Cirugía', href: '/servicios/cirugia-veterinaria' },
      { title: 'Diagnóstico por Imagen', href: '/servicios/diagnostico-por-imagen' },
      { title: 'Laboratorio Clínico', href: '/servicios/laboratorio-clinico' },
      { title: 'Hospitalización', href: '/servicios/hospitalizacion' },
      { title: 'Grooming & Spa', href: '/grooming' },
      { title: 'Pet Shop y Farmacia', href: '/pet-shop' },
    ],
  },
  {
    title: 'Plan Consentido',
    href: '/plan-consentido-protegido',
    badge: 'Nuevo',
  },
  { title: 'Nosotros', href: '/nosotros' },
  { title: 'Sucursales (3)', href: '/sedes' },
  { title: 'Contacto', href: '/contacto' },
];

export const PRIMARY_CTA = {
  title: 'Agendar Cita',
  href: CONTACT.primaryWhatsApp.url,
  external: true,
} as const;

export const FOOTER_SERVICE_LINKS: NavItem[] = [
  { title: 'Consulta Veterinaria', href: '/servicios/consulta-veterinaria' },
  { title: 'Emergencias 24/7', href: '/emergencias' },
  { title: 'Especialidades', href: '/servicios/especialidades' },
  { title: 'Cirugía y Quirófano', href: '/servicios/cirugia-veterinaria' },
  { title: 'Diagnóstico por Imagen', href: '/servicios/diagnostico-por-imagen' },
  { title: 'Laboratorio Clínico', href: '/servicios/laboratorio-clinico' },
  { title: 'Hospitalización', href: '/servicios/hospitalizacion' },
  { title: 'Grooming & Spa', href: '/grooming' },
  { title: 'Pet Shop y Farmacia', href: '/pet-shop' },
];

export const FOOTER_EXPLORE_LINKS: NavItem[] = [
  { title: 'Nosotros', href: '/nosotros' },
  { title: 'Equipo médico', href: '/equipo' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contacto', href: '/contacto' },
];

export const LEGAL_NAV: NavItem[] = [
  { title: 'Términos y Condiciones', href: '/terminos' },
  { title: 'Política de Privacidad', href: '/privacidad' },
];
