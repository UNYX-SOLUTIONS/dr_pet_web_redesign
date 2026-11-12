import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/config/contact';
import { PRIMARY_CTA } from '@/config/navigation';

export function HomeCta() {
  return (
    <section className="container-page pb-16 pt-4 lg:pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12 lg:py-16">
        <div
          className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand-yellow/20 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow">
            Agenda tu visita
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
            La salud de tu consentido empieza con una cita.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
            Elige tu sede y agenda en línea, o escríbenos por WhatsApp. Nuestro equipo te ayudará a
            encontrar al especialista adecuado.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="accent" asChild>
              <Link href={PRIMARY_CTA.href}>
                {PRIMARY_CTA.title}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="inverse" asChild>
              <a href={CONTACT.primaryWhatsApp.url} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
