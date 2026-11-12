import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT } from '@/config/contact';

export function TopBar() {
  return (
    <aside className="relative z-50 border-b border-white/10 bg-brand-blue-deep px-4 py-2 text-xs font-semibold tracking-wide text-white sm:px-8">
      <div className="container-page flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-accent-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-destructive" />
            </span>
            Urgencias 24/7
          </span>
          <span className="hidden text-white/80 sm:inline">
            Urdesa · El Dorado · Vía a la Costa
          </span>
        </div>

        <div className="ml-auto flex items-center gap-4 sm:gap-5">
          <a
            href={`tel:${CONTACT.mainPhone.tel}`}
            className="hidden items-center gap-1 transition-colors hover:text-accent sm:flex"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {CONTACT.mainPhone.display}
          </a>
          <span className="hidden text-white/30 sm:inline">|</span>
          <a
            href={CONTACT.primaryWhatsApp.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-bold text-accent transition-colors hover:text-white"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </aside>
  );
}
