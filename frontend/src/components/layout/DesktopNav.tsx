'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { MAIN_NAV } from '@/config/navigation';
import { cn } from '@/lib/utils';

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-5 xl:flex xl:gap-7" aria-label="Navegación principal">
      {MAIN_NAV.map((item) => {
        const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

        if (item.children) {
          return (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  'inline-flex items-center gap-1 whitespace-nowrap border-b-2 pb-1 text-label-md font-bold transition-colors',
                  isActive
                    ? 'border-accent text-primary'
                    : 'border-transparent text-brand-gray/75 hover:text-primary'
                )}
              >
                {item.title}
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                  aria-hidden="true"
                />
              </Link>

              <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl border border-border bg-white p-2 opacity-0 shadow-organic transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-xl px-4 py-2.5 text-body-sm text-brand-gray/75 transition-colors hover:bg-brand-blue-light hover:text-primary"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'inline-flex items-center gap-1.5 whitespace-nowrap border-b-2 pb-1 text-label-md font-bold transition-colors',
              isActive
                ? 'border-accent text-primary'
                : 'border-transparent text-brand-gray/75 hover:text-primary'
            )}
          >
            {item.title}
            {item.badge && (
              <span className="rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-accent-foreground">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
