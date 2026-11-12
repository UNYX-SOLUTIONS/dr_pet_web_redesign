import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Facebook, Globe, Instagram, MapPin, Music2, Youtube } from 'lucide-react';
import { CONTACT, EMERGENCY_CONTACTS, LOCATIONS } from '@/config/contact';
import { FOOTER_EXPLORE_LINKS, FOOTER_SERVICE_LINKS, LEGAL_NAV } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { SOCIAL_LINKS } from '@/config/social';

const SOCIAL_ICONS = {
  Instagram,
  Facebook,
  YouTube: Youtube,
  TikTok: Music2,
  X: Globe,
} as const;

export function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-primary text-white">
      <div className="container-page pb-24 pt-16 md:pb-12">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col items-start lg:col-span-2">
            <div className="mb-4 inline-flex rounded-2xl bg-white px-4 py-2 shadow-md">
              <Image
                src="/images/brand/logo.png"
                alt="Dr. Pet — Clínica Veterinaria"
                width={451}
                height={232}
                className="h-9 w-auto"
              />
            </div>

            <p className="mb-3 text-lg font-bold italic text-accent">“{siteConfig.tagline}”</p>
            <p className="mb-6 max-w-sm text-xs leading-relaxed text-white/80 sm:text-sm">
              {siteConfig.description}
            </p>

            <p className="flex items-center gap-2 text-xs text-white/70">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              Guayaquil, Ecuador
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICONS[link.name as keyof typeof SOCIAL_ICONS] ?? Globe;

                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.name}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 border-b border-white/10 pb-1 text-sm font-bold uppercase tracking-wider text-white">
              Servicios Clínicos
            </h2>
            <ul className="space-y-2 text-xs text-white/80">
              {FOOTER_SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      item.href === '/emergencias'
                        ? 'flex items-center gap-1.5 font-bold text-accent hover:underline'
                        : 'transition-colors hover:text-accent'
                    }
                  >
                    {item.title}
                    {item.href === '/emergencias' && (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-destructive"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 border-b border-white/10 pb-1 text-sm font-bold uppercase tracking-wider text-white">
              Nuestras Sedes
            </h2>
            <div className="space-y-3.5 text-xs text-white/80">
              {LOCATIONS.map((location) => (
                <div key={location.slug}>
                  <Link
                    href={`/sedes/${location.slug}`}
                    className="font-bold text-white transition-colors hover:text-accent"
                  >
                    {location.name}
                  </Link>
                  <p className="text-white/60">{location.address}</p>
                </div>
              ))}
              <Link
                href="/plan-consentido-protegido"
                className="inline-flex items-center gap-1 pt-1 font-bold text-accent hover:underline"
              >
                Plan Consentido Anual
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="mb-4 border-b border-white/10 pb-1 text-sm font-bold uppercase tracking-wider text-white">
              Contacto Central
            </h2>
            <div className="mb-5 space-y-2.5 text-xs text-white/80">
              <p>
                <span className="block text-white/50">Teléfono PBX:</span>
                <a
                  href={`tel:${CONTACT.mainPhone.tel}`}
                  className="text-sm font-bold text-white transition-colors hover:text-accent"
                >
                  {CONTACT.mainPhone.display}
                </a>
              </p>
              <p>
                <span className="block text-white/50">WhatsApp:</span>
                <a
                  href={CONTACT.primaryWhatsApp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-accent transition-colors hover:text-white"
                >
                  {CONTACT.primaryWhatsApp.internationalDisplay}
                </a>
              </p>
              {EMERGENCY_CONTACTS.map((contact) => (
                <p key={contact.label}>
                  <span className="block text-white/50">{contact.label}:</span>
                  <a
                    href={`tel:${contact.tel}`}
                    className="font-bold text-white transition-colors hover:text-accent"
                  >
                    {contact.display}
                  </a>
                </p>
              ))}
            </div>

            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Explora</h3>
            <ul className="grid grid-cols-2 gap-2 text-xs text-white/80">
              {FOOTER_EXPLORE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-accent">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dr. Pet Clínica Veterinaria Guayaquil.</p>
          <div className="flex flex-wrap items-center gap-6">
            {LEGAL_NAV.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.title}
              </Link>
            ))}
            <Link href="/contacto" className="transition-colors hover:text-white">
              Atención al cliente
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
