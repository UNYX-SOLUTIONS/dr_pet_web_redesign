import { MapPin } from 'lucide-react';

interface MapPreviewProps {
  label: string;
}

export function MapPreview({ label }: MapPreviewProps) {
  return (
    <div
      className="relative h-40 overflow-hidden rounded-2xl bg-brand-blue-50"
      role="img"
      aria-label={`Ubicación de la sede: ${label}`}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(42,83,160,0.12) 1px, transparent 1px), linear-gradient(rgba(42,83,160,0.12) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-10 top-1/3 h-2 w-[140%] -rotate-6 bg-white/80"
        aria-hidden="true"
      />
      <div
        className="absolute -top-10 left-1/3 h-[140%] w-2 rotate-12 bg-white/70"
        aria-hidden="true"
      />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
          <MapPin className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="mt-2 whitespace-nowrap rounded-md bg-white/90 px-2.5 py-1 text-label-sm font-bold text-primary shadow">
          {label}
        </span>
      </div>
    </div>
  );
}
