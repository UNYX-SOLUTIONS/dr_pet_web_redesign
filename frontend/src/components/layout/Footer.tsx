import Link from 'next/link';
import { LOCATIONS } from '@/config/contact';
import { FOOTER_NAV, LEGAL_NAV } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { SOCIAL_LINKS } from '@/config/social';

export function Footer() {
  return (
    <footer className="bg-brand-gray text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
        <div>
          <p className="font-display text-2xl font-bold">Dr. Pet</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 transition-colors hover:text-brand-yellow"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {FOOTER_NAV.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-sm font-semibold text-brand-yellow">{group.title}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-sm font-semibold text-brand-yellow">Sedes</h2>
          <ul className="mt-4 space-y-4 text-sm">
            {LOCATIONS.map((location) => (
              <li key={location.slug}>
                <p className="font-medium text-white">{location.name}</p>
                <p className="mt-1 text-white/70">{location.address}</p>
                {location.phone && location.phoneTel && (
                  <a
                    href={`tel:${location.phoneTel}`}
                    className="mt-1 inline-block text-white/80 transition-colors hover:text-brand-yellow"
                  >
                    {location.phone}
                  </a>
                )}
                <a
                  href={`tel:${location.emergencyTel}`}
                  className="mt-1 block text-white/80 transition-colors hover:text-brand-yellow"
                >
                  Emergencias: {location.emergencyPhone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dr. Pet. Todos los derechos reservados.</p>
          <ul className="flex flex-wrap items-center gap-4">
            {LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-brand-yellow">
                  {item.title}
                </Link>
              </li>
            ))}
            <li>Guayaquil, Ecuador</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
