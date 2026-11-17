import { getLocationCards } from '../lib/location-selectors';
import { LocationCard } from './LocationCard';

export function HomeLocations() {
  const locations = getLocationCards();

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-blue-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Red de Clínicas Dr. Pet
          </div>
          <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Nuestras Sedes en Guayaquil
          </h2>
          <p className="mt-3 text-base text-brand-gray/75 sm:text-lg">
            Ubicaciones estratégicas con atención veterinaria, farmacia y emergencias para tu
            comodidad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {locations.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}
