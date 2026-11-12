import { Siren } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '@/config/contact';

export function EmergencyBar() {
  return (
    <div className="bg-brand-gray text-white">
      <div className="container-page flex flex-col gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 font-semibold">
          <Siren className="h-3.5 w-3.5 text-brand-yellow" aria-hidden="true" />
          Atención de emergencias
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/80">
          {EMERGENCY_CONTACTS.map((contact) => (
            <a
              key={contact.label}
              href={`tel:${contact.tel}`}
              className="transition-colors hover:text-brand-yellow"
            >
              <span className="text-white/75">{contact.label}:</span> {contact.display}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
