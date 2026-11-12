export default function Loading() {
  return (
    <div
      className="container-page flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-label="Cargando"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-blue/20 border-t-primary" />
    </div>
  );
}
