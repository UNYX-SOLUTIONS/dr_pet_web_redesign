import Image from 'next/image';
import { HeartHandshake, MessageCircle, Siren } from 'lucide-react';
import { HOME_HERO, HOME_STATS } from '../data/home.mock';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-canvas via-white to-canvas-alt pb-16 pt-8 lg:pb-24 lg:pt-14">
      <div
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[580px] w-[1100px] -translate-x-1/2 rounded-[120px] bg-gradient-to-tr from-brand-blue-light/50 via-brand-yellow-tint/60 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div className="paw-pattern pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="z-10 flex flex-col items-start text-left lg:col-span-6">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-brand-blue-light px-4 py-1.5 text-label-sm font-bold uppercase tracking-wider text-primary shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              {HOME_HERO.eyebrow}
            </div>

            <h1 className="mb-6 text-balance text-4xl font-black leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              {HOME_HERO.titleLead}{' '}
              <span className="relative isolate mx-1 inline-block">
                {HOME_HERO.titleHighlight}
                <svg
                  className="absolute -bottom-2 left-0 -z-10 h-4 w-full text-accent"
                  viewBox="0 0 250 20"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 14 C 50 4, 150 18, 247 8 C 210 17, 90 20, 3 14 Z" />
                </svg>
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg font-normal leading-relaxed text-brand-gray/80 sm:text-xl">
              {HOME_HERO.description}
            </p>

            <div className="mb-10 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={HOME_HERO.primaryCta.href}
                target={HOME_HERO.primaryCta.external ? '_blank' : undefined}
                rel={HOME_HERO.primaryCta.external ? 'noreferrer' : undefined}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-4 text-base font-black text-accent-foreground shadow-buttercup transition-all hover:-translate-y-0.5 hover:bg-brand-yellow-hover"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {HOME_HERO.primaryCta.label}
              </a>

              <a
                href={HOME_HERO.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-white px-6 py-4 text-sm font-bold text-primary shadow-sm transition-all hover:bg-brand-blue-light"
              >
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-destructive" />
                </span>
                {HOME_HERO.secondaryCta.label}
                <span className="ml-1 rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-extrabold text-destructive">
                  {HOME_HERO.secondaryCta.badge}
                </span>
              </a>
            </div>

            <div className="grid w-full grid-cols-3 gap-2 border-t border-slate-200/80 pt-4 sm:gap-6">
              {HOME_STATS.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div key={stat.label} className="flex min-w-0 items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-brand-blue-light text-primary sm:h-10 sm:w-10">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-lg font-black leading-tight text-primary">{stat.value}</p>
                      <p className="text-[11px] font-semibold leading-tight text-brand-gray/70">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="relative flex h-[390px] w-[320px] items-end justify-center rounded-[60px_60px_50px_50px] border-4 border-white bg-gradient-to-b from-[#E7EFFC] to-[#FDF4D4] shadow-organic-lg sm:h-[490px] sm:w-[440px] lg:h-[530px] lg:w-[490px]">
              <div
                className="absolute top-12 h-64 w-64 rounded-full bg-accent/40 blur-2xl"
                aria-hidden="true"
              />

              <Image
                src={HOME_HERO.image.src}
                alt={HOME_HERO.image.alt}
                width={HOME_HERO.image.width}
                height={HOME_HERO.image.height}
                priority
                sizes="(min-width: 1024px) 490px, (min-width: 640px) 440px, 320px"
                className="relative z-10 h-full w-full rounded-[56px_56px_46px_46px] object-cover object-bottom mix-blend-multiply drop-shadow-xl"
              />

              <div className="absolute -left-2 -top-4 z-20 flex items-center gap-2.5 rounded-full border border-primary/10 bg-white/95 px-4 py-2.5 shadow-organic backdrop-blur-md sm:left-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-black leading-none text-primary">
                    {HOME_HERO.floatingCare.title}
                  </p>
                  <p className="text-[10px] font-semibold text-brand-gray/70">
                    {HOME_HERO.floatingCare.subtitle}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-2 z-20 flex items-center gap-3.5 rounded-2xl border border-primary/10 bg-white/95 px-5 py-3 shadow-organic-lg backdrop-blur-md sm:-bottom-4 sm:-right-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                  <Siren className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
                    </span>
                    <p className="text-xs font-black uppercase tracking-wider text-primary">
                      {HOME_HERO.floatingEmergency.title}
                    </p>
                  </div>
                  <p className="text-xs font-bold text-brand-gray">
                    {HOME_HERO.floatingEmergency.subtitle}
                  </p>
                  <p className="text-[10px] text-brand-gray/60">
                    {HOME_HERO.floatingEmergency.detail}
                  </p>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -left-6 -z-10 h-24 w-24 rounded-full border-2 border-dashed border-primary/20 bg-brand-blue-light/60"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
