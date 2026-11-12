import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, Siren } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EMERGENCY_CONTACTS } from '@/config/contact';
import type { ServiceCardData } from '../types/service.types';

interface ServiceCardProps {
  service: ServiceCardData;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  const emergencyPhone = EMERGENCY_CONTACTS[0];

  if (service.variant === 'featured') {
    return (
      <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-brand-blue-deep p-8 text-white shadow-organic-lg md:col-span-2 lg:col-span-2 lg:row-span-2 lg:p-10">
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/5 blur-2xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-6 right-6 opacity-10 transition-opacity group-hover:opacity-20"
          aria-hidden="true"
        >
          <Siren className="h-44 w-44" />
        </div>

        <div className="relative">
          <div className="mb-8 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-accent-foreground">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
              </span>
              {service.category}
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent backdrop-blur-sm">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>

          <h3 className="mb-3 text-2xl font-black tracking-tight sm:text-3xl">{service.title}</h3>
          <p className="mb-6 text-sm font-normal leading-relaxed text-white/80 sm:text-base">
            {service.description}
          </p>

          {service.bullets && (
            <ul className="mb-8 space-y-2.5 text-xs text-white/90 sm:text-sm">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-4">
          <a
            href={`tel:${emergencyPhone.tel}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-black text-accent-foreground shadow-buttercup transition-all hover:-translate-y-0.5 hover:bg-brand-yellow-hover"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {service.ctaLabel}: {emergencyPhone.display}
          </a>
          {service.footerLabel && (
            <span className="text-xs italic text-white/70">{service.footerLabel}</span>
          )}
        </div>
      </article>
    );
  }

  if (service.variant === 'combined') {
    return (
      <article className="group flex flex-col items-start justify-between gap-6 rounded-3xl border border-brand-yellow/40 bg-gradient-to-r from-white to-brand-yellow-tint p-7 shadow-organic transition-shadow hover:shadow-organic-lg md:col-span-3 sm:flex-row sm:items-center lg:col-span-4">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-sm">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-primary">
                {service.category}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-xs font-bold text-brand-gray/70">Sedes Guayaquil</span>
            </div>
            <h3 className="text-xl font-bold text-primary">{service.title}</h3>
            <p className="mt-1 max-w-md text-xs text-brand-gray/80">{service.description}</p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button asChild>
            <Link href={service.href}>
              {service.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          {service.secondaryHref && service.secondaryLabel && (
            <Button variant="outline" asChild>
              <Link href={service.secondaryHref}>{service.secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-primary/10 bg-white p-6 shadow-organic transition-all hover:shadow-organic-lg sm:p-7">
      <div>
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-light text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="rounded-full bg-brand-blue-light/60 px-2.5 py-1 text-xs font-bold text-primary">
            {service.category}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-primary">{service.title}</h3>
        <p className="text-xs leading-relaxed text-brand-gray/75 sm:text-sm">
          {service.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <span className="text-xs font-bold text-primary">{service.footerLabel}</span>
        <Link
          href={service.href}
          className="inline-flex items-center gap-1 text-xs font-black text-primary transition-colors hover:text-brand-blue-deep"
        >
          {service.ctaLabel}
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
