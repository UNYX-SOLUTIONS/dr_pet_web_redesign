export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const MAIN_NAV: NavItem[] = [
  { title: 'Inicio', href: '/' },
  { title: 'Nosotros', href: '/nosotros' },
  { title: 'Servicios', href: '/servicios' },
  { title: 'Equipo', href: '/equipo' },
  { title: 'Sedes', href: '/sedes' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contacto', href: '/contacto' },
];

export const PRIMARY_CTA = {
  title: 'Agendar cita',
  href: '/agendar',
} as const;

export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: 'Explora',
    items: [
      { title: 'Nosotros', href: '/nosotros' },
      { title: 'Equipo', href: '/equipo' },
      { title: 'Sedes', href: '/sedes' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contacto', href: '/contacto' },
    ],
  },
  {
    title: 'Servicios',
    items: [
      { title: 'Cardiología', href: '/servicios/cardiologia' },
      { title: 'Dermatología', href: '/servicios/dermatologia' },
      { title: 'Traumatología', href: '/servicios/traumatologia' },
      { title: 'Odontología', href: '/servicios/odontologia' },
      { title: 'Laboratorio clínico', href: '/servicios/laboratorio-clinico' },
      { title: 'Emergencias', href: '/emergencias' },
    ],
  },
];

export const LEGAL_NAV: NavItem[] = [
  { title: 'Privacidad', href: '/privacidad' },
  { title: 'Términos', href: '/terminos' },
];
