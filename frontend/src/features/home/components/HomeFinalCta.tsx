import { MessageCircle, PawPrint, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HOME_FINAL_CTA } from '../data/home.mock';

export function HomeFinalCta() {
  return (
    <section className="w-full border-y border-primary/10 bg-gradient-to-r from-brand-blue-light via-brand-yellow-tint to-brand-blue-light py-16">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md">
          <PawPrint className="h-8 w-8" aria-hidden="true" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
            {HOME_FINAL_CTA.title}
          </h2>
          <p className="mx-auto max-w-xl text-base font-normal text-brand-gray/80 sm:text-lg">
            {HOME_FINAL_CTA.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button variant="accent" size="lg" asChild>
            <a
              href={HOME_FINAL_CTA.primaryCta.href}
              target={HOME_FINAL_CTA.primaryCta.external ? '_blank' : undefined}
              rel={HOME_FINAL_CTA.primaryCta.external ? 'noreferrer' : undefined}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {HOME_FINAL_CTA.primaryCta.label}
            </a>
          </Button>

          <Button size="lg" asChild>
            <a href={HOME_FINAL_CTA.secondaryCta.href}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              {HOME_FINAL_CTA.secondaryCta.label}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
