import type { Metadata } from 'next';
import { WaveDivider } from '@/components/sections/WaveDivider';
import { HomeFinalCta } from '@/features/home/components/HomeFinalCta';
import { HomeHero } from '@/features/home/components/HomeHero';
import { HomePhilosophy } from '@/features/home/components/HomePhilosophy';
import { HomeTrustBar } from '@/features/home/components/HomeTrustBar';
import { HomeLocations } from '@/features/locations/components/HomeLocations';
import { HomePlanBanner } from '@/features/plans/components/HomePlanBanner';
import { HomeServices } from '@/features/services/components/HomeServices';

export const metadata: Metadata = {
  title: 'Clínica Veterinaria en Guayaquil',
  description:
    'Atención veterinaria integral para perros y gatos en Guayaquil. Especialidades, diagnóstico, emergencias y tres sedes: Urdesa, El Dorado y Vía a la Costa.',
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustBar />
      <WaveDivider className="mt-12 bg-canvas text-canvas-alt" />
      <HomeServices />
      <WaveDivider variant="top" className="-mt-1 bg-canvas-alt text-white" />
      <HomePhilosophy />
      <HomePlanBanner />
      <HomeLocations />
      <HomeFinalCta />
    </>
  );
}
