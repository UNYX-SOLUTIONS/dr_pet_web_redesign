import { MessageCircle } from 'lucide-react';
import { CONTACT } from '@/config/contact';

export function WhatsAppFab() {
  return (
    <a
      href={CONTACT.primaryWhatsApp.url}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:scale-105 hover:bg-brand-blue-dark sm:right-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
