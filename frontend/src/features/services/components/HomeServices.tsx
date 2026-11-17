import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HOME_SERVICES } from '../data/services.mock';
import { ServiceCard } from './ServiceCard';

export function HomeServices() {
  return (
    <section className="relative w-full bg-canvas-alt py-16 lg:py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Servicios de Salud y Bienestar
            </div>
            <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Atención médica de alta complejidad y cuidado integral
            </h2>
            <p className="mt-3 text-base font-normal text-brand-gray/80 sm:text-lg">
              Una retícula de especialidades clínicas para resolver desde un chequeo preventivo
              hasta cirugías y emergencias críticas.
            </p>
          </div>

          <Link
            href="/servicios"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-brand-blue-deep"
          >
            Ver catálogo clínico completo
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {HOME_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
