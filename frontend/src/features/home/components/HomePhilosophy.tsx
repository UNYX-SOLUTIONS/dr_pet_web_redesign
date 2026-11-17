import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HOME_PHILOSOPHY } from '../data/home.mock';

export function HomePhilosophy() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 lg:py-24">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="relative min-w-0 lg:col-span-6">
          <div
            className="absolute -left-8 -top-8 -z-10 h-72 w-72 rounded-full bg-brand-yellow-tint blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-brand-blue-light blur-2xl"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[40px] border-4 border-white bg-slate-100 shadow-organic-lg">
            <Image
              src={HOME_PHILOSOPHY.image.src}
              alt={HOME_PHILOSOPHY.image.alt}
              width={HOME_PHILOSOPHY.image.width}
              height={HOME_PHILOSOPHY.image.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="eager"
              className="h-[420px] w-full object-cover object-center transition-transform duration-700 hover:scale-105 sm:h-[480px]"
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3.5 rounded-2xl border border-primary/10 bg-white/95 p-4 shadow-organic backdrop-blur-md sm:right-auto sm:max-w-[340px]">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold leading-tight text-primary">
                {HOME_PHILOSOPHY.badge.title}
              </p>
              <p className="text-xs text-brand-gray/70">{HOME_PHILOSOPHY.badge.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-col items-start lg:col-span-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {HOME_PHILOSOPHY.eyebrow}
          </div>

          <h2 className="mb-5 text-3xl font-black leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            {HOME_PHILOSOPHY.title}
          </h2>

          <p className="mb-6 text-base font-normal leading-relaxed text-brand-gray/80">
            {HOME_PHILOSOPHY.description}
          </p>

          <div className="mb-6 w-full rounded-2xl border border-primary/10 bg-brand-blue-light/50 p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
              Nuestros pilares innegociables:
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-brand-gray">
              {HOME_PHILOSOPHY.values.map((value, index) => (
                <span
                  key={value}
                  className={
                    index === HOME_PHILOSOPHY.values.length - 1
                      ? 'rounded-full bg-accent px-3 py-1 text-accent-foreground shadow-sm'
                      : 'rounded-full border border-primary/10 bg-white px-3 py-1'
                  }
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8 w-full space-y-3.5">
            {HOME_PHILOSOPHY.checkpoints.map((checkpoint) => (
              <div key={checkpoint.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-primary">{checkpoint.title}</h3>
                  <p className="text-xs text-brand-gray/70">{checkpoint.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button asChild>
            <Link href={HOME_PHILOSOPHY.cta.href}>
              {HOME_PHILOSOPHY.cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
