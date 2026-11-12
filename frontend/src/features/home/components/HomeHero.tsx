import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Siren } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HOME_HERO, HOME_STATS } from '../data/home.mock';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand-yellow-soft">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <Badge>{HOME_HERO.eyebrow}</Badge>

          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-bold leading-[1.08] text-brand-gray sm:text-5xl lg:text-6xl">
            {HOME_HERO.titleBefore}{' '}
            <span className="bg-brand-yellow px-1">{HOME_HERO.highlight}</span>{' '}
            {HOME_HERO.titleAfter}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-gray/75">
            {HOME_HERO.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href={HOME_HERO.primaryCta.href}>
                {HOME_HERO.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={HOME_HERO.secondaryCta.href}>
                <Siren className="h-4 w-4" aria-hidden="true" />
                {HOME_HERO.secondaryCta.label}
              </Link>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-brand-blue/10 pt-6">
            {HOME_STATS.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="mt-2 block font-display text-2xl font-bold text-brand-gray">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-brand-gray/75">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-brand-blue/10 bg-white shadow-soft">
            <Image
              src={HOME_HERO.image.src}
              alt={HOME_HERO.image.alt}
              width={HOME_HERO.image.width}
              height={HOME_HERO.image.height}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-4 left-4 hidden rounded-2xl bg-white/95 px-5 py-4 shadow-card backdrop-blur sm:block">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">3 sedes</p>
            <p className="mt-1 text-sm text-brand-gray">Urdesa · El Dorado · Vía a la Costa</p>
          </div>

          <div className="absolute -right-3 top-6 hidden rounded-full bg-brand-yellow px-4 py-2 font-display text-sm font-bold text-brand-gray shadow-card md:block">
            Cuidado con calidez
          </div>
        </div>
      </div>
    </section>
  );
}
