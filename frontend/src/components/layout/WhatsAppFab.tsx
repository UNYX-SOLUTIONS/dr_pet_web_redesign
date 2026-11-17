import { MessageCircle } from 'lucide-react';
import { CONTACT } from '@/config/contact';

export function WhatsAppFab() {
  return (
    <div className="group fixed bottom-6 right-6 z-20 flex items-center">
      <span className="pointer-events-none mr-3 hidden translate-x-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-bold text-primary opacity-0 shadow-organic-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        ¿En qué podemos ayudarte hoy?
      </span>
      <a
        href={CONTACT.primaryWhatsApp.url}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp a Dr. Pet"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-buttercup transition-transform hover:scale-110 hover:bg-brand-yellow-hover"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  );
}
