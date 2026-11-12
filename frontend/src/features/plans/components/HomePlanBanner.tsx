import { ArrowRight, Download, PawPrint, ShieldPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HOME_PLAN } from '../data/plan.mock';

export function HomePlanBanner() {
  return (
    <section className="w-full overflow-hidden bg-canvas py-12">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-primary to-brand-blue-deep p-8 text-white shadow-organic-lg sm:p-12 lg:p-14">
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full border-[32px] border-white/5"
            aria-hidden="true"
          />

          <div className="relative z-10 flex max-w-3xl flex-col items-start">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-accent-foreground shadow-sm">
              <ShieldPlus className="h-4 w-4" aria-hidden="true" />
              {HOME_PLAN.badge}
            </div>

            <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              {HOME_PLAN.title}
            </h2>
            <p className="mb-8 text-base font-normal leading-relaxed text-white/90 sm:text-lg">
              {HOME_PLAN.description}
            </p>

            <div className="mb-8 grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2">
              {HOME_PLAN.benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm font-bold text-white">{benefit.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto">
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Button variant="accent" size="lg" asChild>
                  <a
                    href={HOME_PLAN.primaryCta.href}
                    target={HOME_PLAN.primaryCta.external ? '_blank' : undefined}
                    rel={HOME_PLAN.primaryCta.external ? 'noreferrer' : undefined}
                  >
                    <PawPrint className="h-5 w-5" aria-hidden="true" />
                    {HOME_PLAN.primaryCta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>

                <Button variant="inverse" size="lg" asChild>
                  <a
                    href={HOME_PLAN.secondaryCta.href}
                    target={HOME_PLAN.secondaryCta.external ? '_blank' : undefined}
                    rel={HOME_PLAN.secondaryCta.external ? 'noreferrer' : undefined}
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {HOME_PLAN.secondaryCta.label}
                  </a>
                </Button>
              </div>

              <span className="text-xs italic text-white/70">{HOME_PLAN.note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
