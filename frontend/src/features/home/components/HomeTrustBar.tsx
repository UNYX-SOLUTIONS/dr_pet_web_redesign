import { HOME_TRUST_ITEMS } from '../data/home.mock';

export function HomeTrustBar() {
  return (
    <section className="relative z-20 -mt-6 w-full sm:-mt-8" aria-label="Por qué elegir Dr. Pet">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-4 divide-y divide-slate-100 rounded-3xl border border-primary/10 bg-white p-4 shadow-organic-lg sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:rounded-full sm:p-5 lg:grid-cols-4">
          {HOME_TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            const iconTone =
              index % 2 === 0
                ? 'bg-brand-blue-light text-primary'
                : 'bg-brand-yellow-tint text-brand-gray';

            return (
              <div key={item.title} className="flex items-center gap-3.5 px-3 py-2">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconTone}`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-sm font-bold text-primary">{item.title}</h2>
                  <p className="text-xs text-brand-gray/70">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
