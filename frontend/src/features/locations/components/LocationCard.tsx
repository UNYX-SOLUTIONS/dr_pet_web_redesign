import { Clock, MapPin, MessageCircle, Navigation, Phone, Siren } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/config/contact';
import type { LocationBadgeTone, LocationCardData } from '../types/location.types';
import { MapPreview } from './MapPreview';

const BADGE_TONE_CLASSES: Record<LocationBadgeTone, string> = {
  emergency: 'bg-destructive/10 text-destructive',
  accent: 'bg-accent text-accent-foreground',
  primary: 'bg-brand-blue-light text-primary',
};

interface LocationCardProps {
  location: LocationCardData;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <article
      className={`flex flex-col justify-between rounded-3xl bg-canvas-alt p-6 shadow-organic transition-all hover:shadow-organic-lg ${
        location.featured ? 'border-2 border-primary/20' : 'border border-primary/10'
      }`}
    >
      <div>
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-primary">{location.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-xs text-brand-gray/70">
              <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {location.address}
            </p>
          </div>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-extrabold shadow-sm ${BADGE_TONE_CLASSES[location.badgeTone]}`}
          >
            {location.badge}
          </span>
        </div>

        <MapPreview label={location.mapLabel} />

        <div className="mt-5 space-y-2 rounded-xl border border-slate-200/80 bg-white p-3.5 text-xs text-brand-gray/80">
          <div className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="font-bold text-brand-gray">Horario de atención</p>
              <p>{location.hours}</p>
            </div>
          </div>

          <div className="flex items-start gap-2 border-t border-slate-100 pt-2">
            <Siren className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
            <div>
              <p className="font-bold text-brand-gray">Emergencias</p>
              <a
                href={`tel:${location.emergencyTel}`}
                className="font-bold text-primary transition-colors hover:text-brand-blue-deep"
              >
                {location.emergencyPhone}
              </a>
            </div>
          </div>

          {location.phone && location.phoneTel && (
            <div className="flex items-center gap-2 border-t border-slate-100 pt-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`tel:${location.phoneTel}`}
                className="font-bold text-primary transition-colors hover:text-brand-blue-deep"
              >
                {location.phone}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href={location.mapsUrl} target="_blank" rel="noreferrer">
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Cómo llegar
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href={CONTACT.primaryWhatsApp.url} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Contactar
          </a>
        </Button>
      </div>
    </article>
  );
}
