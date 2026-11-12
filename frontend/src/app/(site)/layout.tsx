import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { TopBar } from '@/components/layout/TopBar';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar />
      <Header />
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
