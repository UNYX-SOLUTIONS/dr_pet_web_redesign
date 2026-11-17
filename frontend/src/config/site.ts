export const siteConfig = {
  name: 'Dr. Pet',
  title: 'Dr. Pet — Clínica Veterinaria en Guayaquil',
  tagline: 'Quiérelo por completo.',
  description:
    'Clínica veterinaria integral en Guayaquil. Especialidades, diagnóstico, emergencias, grooming, pet shop y plan de salud en Urdesa, El Dorado y Vía a la Costa.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  locale: 'es_EC',
  keywords: [
    'veterinaria Guayaquil',
    'clínica veterinaria',
    'emergencias veterinarias',
    'especialidades veterinarias',
    'Dr. Pet',
    'Urdesa',
    'El Dorado',
    'Vía a la Costa',
  ],
} as const;
