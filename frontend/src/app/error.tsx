'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container-page flex min-h-dvh flex-col items-center justify-center py-16 text-center">
      <p className="font-display text-6xl font-bold text-primary">¡Ups!</p>
      <h1 className="mt-4 font-display text-3xl font-bold">Algo salió mal</h1>
      <p className="mt-3 max-w-md text-brand-gray/75">
        Intenta recargar la página. Si el problema continúa, escríbenos por WhatsApp.
      </p>
      <div className="mt-8">
        <Button onClick={reset}>Intentar de nuevo</Button>
      </div>
    </main>
  );
}
