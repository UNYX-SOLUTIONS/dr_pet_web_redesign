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
    <div className="xl:hidden">
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
          className="absolute inset-x-0 top-full z-30 max-h-[calc(100dvh-7.5rem)] overflow-y-auto border-t border-b border-border bg-white px-4 py-6 shadow-organic-lg xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            {MAIN_NAV.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'flex items-center gap-2 rounded-xl px-3 py-3 text-base font-semibold transition-colors',
                      isActive
                        ? 'bg-brand-blue-light text-primary'
                        : 'text-foreground hover:bg-brand-blue-light'
                    )}
                  >
                    {item.title}
                    {item.badge && (
                      <span className="rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-accent-foreground">
                        {item.badge}
                      </span>
                    )}
                  </Link>

                  {item.children && (
                    <div className="mb-2 ml-3 border-l border-border pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-body-sm text-muted-foreground transition-colors hover:bg-brand-blue-light hover:text-primary"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
            <Button variant="accent" asChild>
              <a
                href={PRIMARY_CTA.href}
                target={PRIMARY_CTA.external ? '_blank' : undefined}
                rel={PRIMARY_CTA.external ? 'noreferrer' : undefined}
              >
                {PRIMARY_CTA.title}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`tel:${EMERGENCY_CONTACTS[0].tel}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Urgencias: {EMERGENCY_CONTACTS[0].display}
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
