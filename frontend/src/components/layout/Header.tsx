import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EMERGENCY_CONTACTS } from '@/config/contact';
import { PRIMARY_CTA } from '@/config/navigation';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-blue-light bg-white/95 shadow-[0_4px_20px_-4px_rgba(42,83,160,0.06)] backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="/" aria-label="Dr. Pet — Inicio" className="shrink-0">
          <Image
            src="/images/brand/logo.png"
            alt="Dr. Pet — Clínica Veterinaria"
            width={451}
            height={232}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-2">
          <a
            href={`tel:${EMERGENCY_CONTACTS[0].tel}`}
            className="hidden items-center gap-2 rounded-full border border-destructive/20 bg-destructive/10 px-3.5 py-2 text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground sm:inline-flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
            </span>
            <span className="text-label-md">Emergencias 24/7</span>
          </a>

          <Button variant="accent" asChild>
            <a
              href={PRIMARY_CTA.href}
              target={PRIMARY_CTA.external ? '_blank' : undefined}
              rel={PRIMARY_CTA.external ? 'noreferrer' : undefined}
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {PRIMARY_CTA.title}
            </a>
          </Button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
