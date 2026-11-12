import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="container-page flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <p className="font-display text-7xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold">No encontramos esta página</h1>
      <p className="mt-3 max-w-md text-brand-gray/75">
        Puede que el enlace haya cambiado o que la página aún no esté disponible.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contacto">Contacto</Link>
        </Button>
      </div>
    </main>
  );
}
