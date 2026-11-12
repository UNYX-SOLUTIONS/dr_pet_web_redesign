import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EMERGENCY_CONTACTS } from '@/config/contact';
import { MAIN_NAV, PRIMARY_CTA } from '@/config/navigation';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
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

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" asChild>
            <a href={`tel:${EMERGENCY_CONTACTS[0].tel}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Emergencias
            </a>
          </Button>
          <Button asChild>
            <Link href={PRIMARY_CTA.href}>{PRIMARY_CTA.title}</Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
