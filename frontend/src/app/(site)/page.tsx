import type { Metadata } from 'next';
import { HomeCta } from '@/features/home/components/HomeCta';
import { HomeHero } from '@/features/home/components/HomeHero';

export const metadata: Metadata = {
  title: 'Clínica Veterinaria en Guayaquil',
  description:
    'Atención veterinaria integral para perros y gatos en Guayaquil. Especialidades, diagnóstico, emergencias y tres sedes: Urdesa, El Dorado y Vía a la Costa.',
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCta />
    </>
  );
}
