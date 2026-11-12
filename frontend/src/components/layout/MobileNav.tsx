'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EMERGENCY_CONTACTS } from '@/config/contact';
import { MAIN_NAV, PRIMARY_CTA } from '@/config/navigation';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-x-0 bottom-0 top-20 z-30 overflow-y-auto border-t border-border bg-background px-4 py-6 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Navegación móvil">
            {MAIN_NAV.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-md px-3 py-3 text-base font-medium transition-colors',
                    isActive ? 'bg-secondary text-primary' : 'text-foreground hover:bg-secondary'
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
            <Button asChild>
              <Link href={PRIMARY_CTA.href}>{PRIMARY_CTA.title}</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href={`tel:${EMERGENCY_CONTACTS[0].tel}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Emergencias: {EMERGENCY_CONTACTS[0].display}
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
