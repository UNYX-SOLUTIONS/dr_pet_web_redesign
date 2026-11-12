# Dr. Pet — Rediseño Web

## Contexto del proyecto y arquitectura frontend

| Campo | Valor |
|---|---|
| Cliente | Dr. Pet — Clínica Veterinaria |
| Ubicación | Guayaquil, Ecuador |
| Sitio actual | https://drpet.com.ec/ |
| Proyecto | Rediseño web + demo funcional de frontend |
| Fase actual | Fase 0 — definición de arquitectura, sin backend |
| Documento | v1.0 — 12/11/2026 |

> **Nota de alcance:** en esta fase solo se creó la estructura de carpetas del frontend. Los archivos mencionados en este documento son previstos y se implementarán en las siguientes fases. El backend queda reservado y fuera del alcance inmediato.

---

## 1. Resumen ejecutivo

Dr. Pet es una clínica veterinaria con tres sedes en Guayaquil (Urdesa, El Dorado y Vía a la Costa) que ofrece servicios de clínica general, especialidades, imagenología, emergencias y UCI, pet shop, farmacia, grooming y un plan de salud llamado **Plan Consentido Protegido**.

El sitio actual funciona sobre WordPress, tiene una estética desactualizada, menús profundos, una estructura de páginas inconsistente y un feed de Instagram con errores. No existe un funnel claro hacia la cita ni un acceso prioritario a emergencias.

El objetivo del rediseño es construir una experiencia moderna, mobile-first y orientada a conversión, que transmita la calidez de la marca y la solidez médica de la clínica. Para la demo se implementará únicamente el frontend con datos mock, bien tipado y organizado por dominio, de modo que luego pueda conectarse a un backend sin reescribir la interfaz.

**Resultado esperado de la demo:** un sitio navegable, responsive y visualmente terminado que permita mostrar la propuesta mañana, con home, servicios, equipo, sedes, agendamiento, contacto y emergencias funcionando sobre datos simulados.

---

## 2. Contexto del negocio

### 2.1 Situación actual

- Sitio WordPress con estructura heredada y navegación extensa.
- Menús con muchos niveles: servicios, especialidades, staff por sede y páginas legales.
- Feed de Instagram integrado con errores de API y contenido desactualizado.
- Jerarquía visual débil: múltiples llamados a la acción sin una ruta principal clara.
- Sin flujo de agendamiento en línea; la conversión depende de WhatsApp y llamadas.
- Inconsistencia entre páginas y baja optimización para móvil.
- El contenido médico y la trayectoria del equipo no se explotan como factor de confianza.

### 2.2 Servicios identificados

| Categoría | Servicios |
|---|---|
| Clínica | Traumatología, Cardiología, Dermatología, Oftalmología, Odontología, Neurología, Oncología, Cirugía Veterinaria, Laboratorio Clínico |
| Imagenología | Rayos X, Ecografía |
| Emergencias | Emergencias y UCI |
| Comercial | Pet Shop y Farmacia |
| Estética | Grooming |
| Planes | Plan Consentido Protegido |

### 2.3 Sedes y canales actuales

| Sede | Dirección | Teléfono | Emergencias |
|---|---|---|---|
| Urdesa | Circunvalación Sur 216 entre Todos los Santos y Calle Única | 098 636 3000 | 098 636 3000 |
| El Dorado | Km 10.5 vía La Aurora, Ciudad Comercial El Dorado | 099 276 2265 | 096 252 3743 |
| Vía a la Costa | Km 9.8 vía a La Costa, frente a Puerto Azul, plaza comercial junto al Portal | — | 098 775 3422 |

Redes: Facebook, Instagram, YouTube, TikTok y X. Todos los enlaces y números deben centralizarse en configuración para evitar duplicidad y errores.

> **Validar con el cliente:** horarios por sede, correos, disponibilidad real de emergencias 24/7, números de WhatsApp definitivos y política de citas.

### 2.4 Público objetivo

- Dueños de perros y gatos en Guayaquil, principalmente entre 25 y 55 años.
- Usuarios móviles que buscan un servicio específico, una sede cercana o atención urgente.
- Personas que valoran especialización médica, instalaciones adecuadas y trato cálido.
- Clientes recurrentes de pet shop, grooming y plan de salud.

### 2.5 Propuesta de valor del rediseño

1. **Confianza médica:** especialidades, equipo profesional, instalaciones y procesos visibles.
2. **Cercanía:** tono humano y cálido, uso de "consentidos", fotografía real de mascotas y doctores.
3. **Acceso inmediato:** emergencias y WhatsApp a un toque desde cualquier página.
4. **Claridad:** navegación simple, servicios agrupados y contenido escaneable.
5. **Conversión:** cita como acción principal, con formulario corto y alternativas por WhatsApp y teléfono.

### 2.6 Objetivos medibles

- Aumentar solicitudes de cita y clics a WhatsApp.
- Facilitar el contacto de emergencia desde móvil.
- Mejorar el descubrimiento de especialidades y sedes.
- Posicionar búsquedas locales por sede y servicio.
- Reducir el rebote en páginas de servicio y aumentar el tiempo de permanencia.

---

## 3. Identidad y dirección de diseño

### 3.1 Paleta oficial

La paleta se toma del manual de marca de Dr. Pet. Los colores del logo (naranja del gato y olivo del perro) son parte de la ilustración y **no** se usan como colores de interfaz.

**Colores oficiales**

| Color | Hex | RGB | CMYK | HSL |
|---|---|---|---|---|
| Buttercup Yellow | `#F6EC3F` | 246, 236, 63 | 0, 4, 74, 4 | 57, 91%, 61% |
| Sapphire Blue | `#2A53A0` | 42, 83, 160 | 74, 48, 0, 37 | 219, 58%, 40% |
| Pure White | `#FFFFFF` | 255, 255, 255 | 0, 0, 0, 0 | 0, 0%, 100% |
| Gunmetal Gray | `#3F3F3F` | 63, 63, 63 | 0, 0, 0, 75 | 0, 0%, 25% |

**Tokens de interfaz**

| Token | Hex | HSL | Uso |
|---|---|---|---|
| `--brand-blue` — Sapphire Blue | `#2A53A0` | `219 58% 40%` | Color primario: header, CTAs, enlaces, fondos de confianza |
| `--brand-blue-dark` | `#1E3D78` | `219 60% 29%` | Hover y estados activos (derivado) |
| `--brand-yellow` — Buttercup Yellow | `#F6EC3F` | `57 91% 61%` | Acentos, highlights, badges y bloques de energía |
| `--brand-gray` — Gunmetal Gray | `#3F3F3F` | `0 0% 25%` | Texto principal, footer y barra de emergencias |
| `--brand-white` — Pure White | `#FFFFFF` | `0 0% 100%` | Fondos base y superficies |
| `--surface` | `#FBF9EC` | `57 65% 96%` | Fondo cálido derivado del amarillo |
| `--border` | `#E6E6E6` | `0 0% 90%` | Bordes y divisores (derivado) |
| `--state-error` | `#B42318` | `4 76% 40%` | Errores de formulario; no es color de marca |

Reglas de uso:
- **Sapphire Blue** es el color de confianza y de la acción principal. Texto blanco sobre azul cumple AA/AAA.
- **Buttercup Yellow** es color de fondo o acento, nunca de texto sobre blanco. El texto sobre amarillo debe ser Gunmetal Gray.
- **Gunmetal Gray** reemplaza al negro puro en texto y superficies oscuras.
- **Pure White** domina las superficies; el amarillo aporta calidez en dosis controladas.
- **Rojo** se reserva para errores de validación; no se introduce como color de marca.
- **Emergencias:** barra Gunmetal con texto blanco y CTA Buttercup. No usar rojo como color de marca.
- Validar contraste AA en todas las combinaciones antes de implementar.

Tokens base para `globals.css` (formato HSL compatible con Tailwind/shadcn):

```css
:root {
  --brand-blue: 219 58% 40%;       /* #2A53A0 */
  --brand-blue-dark: 219 60% 29%;  /* #1E3D78 */
  --brand-yellow: 57 91% 61%;      /* #F6EC3F */
  --brand-gray: 0 0% 25%;          /* #3F3F3F */
  --surface: 57 65% 96%;           /* #FBF9EC */
  --border: 0 0% 90%;              /* #E6E6E6 */
  --state-error: 4 76% 40%;        /* #B42318 */

  --primary: var(--brand-blue);
  --primary-foreground: 0 0% 100%;
  --accent: var(--brand-yellow);
  --accent-foreground: var(--brand-gray);
  --background: 0 0% 100%;
  --foreground: var(--brand-gray);
}
```

### 3.2 Uso del logo

- Mantener un espacio libre mínimo de **45 px por lado**.
- Tamaño mínimo: **112 px de ancho** (1.17 in).
- No deformar, rotar, recortar, recolorear ni agregar sombras o efectos.
- Usar preferentemente sobre fondos blancos o claros.
- Solicitar al cliente la versión SVG y una variante monocromática/blanca para fondos oscuros.
- Respetar la proporción entre el logotipo y los personajes; no separarlos.

> **Hallazgo:** el PNG actual del logo usa `#0053A5`, mientras que el manual define Sapphire Blue `#2A53A0`. Para el rediseño se usará el valor del manual y se solicitará un SVG oficial para que logo e interfaz coincidan.

### 3.3 Valores y personalidad

**Valores:** Respeto, Responsabilidad, Compromiso, Profesionalismo, Ética.

**Tono de voz:** profesional, cuidadoso, empático y cálido. Hablar claro, sin tecnicismos innecesarios ni alarmismo. La cercanía no debe infantilizar al usuario.

**Estética de referencia:**

| Principio | Traducción al UI |
|---|---|
| Commercial Geometry | Grillas claras, composición geométrica, alineación estricta |
| Clinical Warmth | Blanco clínico + amarillo cálido, fotografía real, microcopy amable |
| Sterile Order | Espacio en blanco generoso, jerarquía limpia, cero ruido visual |
| Illustrated Whimsy | Personajes del logo e ilustraciones puntuales, nunca decoración excesiva |
| Saturated Cheer | Bloques de amarillo con intención, optimismo visual, energía controlada |

### 3.4 Tipografía

- **Display / títulos:** Plus Jakarta Sans (geométrica, alineada con "Commercial Geometry").
- **Cuerpo / UI:** Inter (legibilidad en pantalla).
- Cargadas con `next/font/google`, variables CSS y `display: swap`.
- Escala base: 16 px, line-height 1.6; títulos con tracking ajustado y pesos 600–700.
- Propuesta sujeta a aprobación si el cliente cuenta con tipografías oficiales.

### 3.5 Principios UI/UX

- **Mobile-first:** la mayoría del tráfico será móvil; diseñar primero a 360 px.
- **Emergencia siempre visible:** barra Gunmetal + CTA Buttercup + botón flotante de WhatsApp.
- **Una acción principal por pantalla:** "Agendar cita"; secundarias: llamar, WhatsApp, ver sede.
- **Clinical Warmth:** base blanca, acentos amarillos, fotografía real y microcopy amable.
- **Sterile Order:** espacio en blanco generoso, grilla estricta, cero ornamentos innecesarios.
- **Illustrated Whimsy:** personajes del logo e ilustraciones solo como acentos de personalidad.
- **Saturated Cheer:** bloques de amarillo con texto Gunmetal; evitar amarillo detrás de texto blanco.
- **Confianza visual:** nombres, especialidades, credenciales, instalaciones y testimonios reales.
- **Contenido escaneable:** títulos claros, bullets, acordeones para FAQ y detalles médicos.
- **Consistencia:** escala de 8 px, dos radios, dos sombras, un solo sistema de botones.
- **Accesibilidad:** foco visible, navegación por teclado, etiquetas, contraste y movimiento reducido.

---

## 4. Stack técnico

La base replica la arquitectura y convenciones de **unyx_erp** para reutilizar configuración, patrones y velocidad de desarrollo.

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14.2 con App Router (base de unyx_erp) |
| Lenguaje | TypeScript 5.4 en modo `strict` |
| Estilos | Tailwind CSS 3.4 + variables CSS + `tailwindcss-animate` |
| Componentes UI | Radix UI + `class-variance-authority` + `clsx` + `tailwind-merge` |
| Íconos | `lucide-react` + SVGs propios para redes y WhatsApp |
| Animaciones | `framer-motion` (sutiles, respetando `prefers-reduced-motion`) |
| Formularios | `react-hook-form` + `zod` + `@hookform/resolvers` |
| Estado global | `zustand` (UI y wizard de citas) |
| Feedback | `sonner` |
| Carruseles | `embla-carousel-react` |
| Fechas | `date-fns` con locale `es` |
| Fuentes | `next/font` |
| Package manager | `pnpm` (workspace con `backend` y `frontend`) |
| Calidad | ESLint (`next/core-web-vitals`), Prettier, `tsc --noEmit` |
| Deploy demo | Vercel (evaluar hosting del cliente después) |

Versiones fijadas para evitar conflictos (sin rangos `^`): Next `14.2.35`, React `18.3.1`, TypeScript `5.4.5`, Tailwind CSS `3.4.19`, ESLint `8.57.1` (requerido por `next lint` de Next 14) y pnpm `12.9.1` con lockfile.

Decisiones:
- **Sin React Query por ahora:** no hay backend; los datos mock viven en cada feature. La capa `api/` y React Query se incorporan cuando exista API real.
- **Server Components por defecto:** `'use client'` solo en componentes con interacción real.
- **Sin archivos barrel (`index.ts`):** imports directos para evitar ciclos y mejorar el tree-shaking.
- **Versiones alineadas a unyx_erp para el demo:** la arquitectura es compatible con Next 15/16; evaluar actualización después de la presentación.

---

## 5. Arquitectura frontend

### 5.1 Principios

1. **Vertical slices por dominio:** cada feature agrupa sus componentes, datos, hooks, tipos y lógica.
2. **Rutas delgadas:** `app/` solo compone layouts, metadata y páginas; la lógica vive en `features/`.
3. **Server-first:** los datos mock se resuelven en servidor; el estado interactivo se aísla en componentes cliente.
4. **Límites claros:** un feature no importa de otro feature; lo compartido va a `components/`, `lib/` o `hooks/`.
5. **Datos mock aislados:** los componentes nunca contienen datos hardcodeados; consumen selectores tipados.
6. **Configuración centralizada:** navegación, sedes, teléfonos, redes y metadata en `src/config/`.
7. **Código en inglés, contenido en español:** nombres técnicos consistentes; rutas y copys orientados al usuario ecuatoriano.
8. **Preparado para backend:** la interfaz no cambia cuando se reemplace el mock por una API.

### 5.2 Estructura de carpetas

```text
dr_pet_web_redesign/
├── backend/                          # Reservado. Fuera de alcance por ahora.
├── docs/
│   └── contexto-y-arquitectura.md
├── frontend/
│   ├── public/
│   │   ├── icons/                    # SVGs propios: WhatsApp, redes, marca
│   │   ├── images/
│   │   │   ├── brand/                # Logo e isotipo
│   │   │   ├── hero/                 # Imágenes principales
│   │   │   ├── services/             # Fotos por servicio
│   │   │   ├── team/                 # Fotos del equipo
│   │   │   ├── locations/            # Fotos de sedes
│   │   │   ├── blog/                 # Portadas de artículos
│   │   │   ├── shop/                 # Productos y categorías
│   │   │   ├── testimonials/         # Avatares de testimonios
│   │   │   └── og/                   # Imágenes Open Graph
│   │   └── videos/                   # Video hero o recorridos de sede
│   └── src/
│       ├── app/
│       │   ├── (site)/               # Layout público: header, footer, WhatsApp
│       │   │   ├── page.tsx          # Home — previsto
│       │   │   ├── layout.tsx        # Shell público — previsto
│       │   │   ├── nosotros/         # Quiénes somos
│       │   │   ├── servicios/        # Hub de servicios
│       │   │   │   └── [slug]/       # Detalle de servicio
│       │   │   ├── equipo/           # Staff
│       │   │   │   └── [slug]/       # Perfil de doctor
│       │   │   ├── sedes/            # Sedes
│       │   │   │   └── [slug]/       # Detalle de sede
│       │   │   ├── emergencias/      # Emergencias y UCI
│       │   │   ├── grooming/         # Grooming
│       │   │   ├── pet-shop/         # Pet shop y farmacia
│       │   │   ├── plan-consentido-protegido/
│       │   │   ├── blog/             # Blog
│       │   │   │   └── [slug]/       # Artículo
│       │   │   ├── contacto/
│       │   │   ├── agendar/          # Wizard de cita
│       │   │   ├── privacidad/
│       │   │   └── terminos/
│       │   ├── layout.tsx            # Layout raíz — previsto
│       │   ├── globals.css           # Tokens y estilos base — previsto
│       │   ├── error.tsx             # Previsto
│       │   ├── loading.tsx           # Previsto
│       │   ├── not-found.tsx         # Previsto
│       │   ├── sitemap.ts            # Previsto
│       │   └── robots.ts             # Previsto
│       ├── components/
│       │   ├── animations/           # Wrappers de motion y reveals
│       │   ├── filters/              # Búsqueda, selects, pills
│       │   ├── forms/                # Campos y errores compartidos
│       │   ├── icons/                # Íconos de marca y redes
│       │   ├── layout/               # Header, Footer, EmergencyBar, WhatsAppFab
│       │   ├── sections/             # PageHero, CTA, SectionHeading, TrustStrip
│       │   ├── seo/                  # JSON-LD y helpers de metadata
│       │   └── ui/                   # Primitivas estilo shadcn/ui
│       ├── config/                   # site, navigation, contact, social, seo, theme
│       ├── features/
│       │   ├── appointments/         # components, data, hooks, lib, schemas, stores, types
│       │   ├── blog/                 # components, data, lib, types
│       │   ├── contact/              # components, data, schemas, types
│       │   ├── emergency/            # components, data, types
│       │   ├── faq/                  # components, data, types
│       │   ├── home/                 # components, data, types
│       │   ├── locations/            # components, data, lib, types
│       │   ├── pet-shop/             # components, data, types
│       │   ├── plans/                # components, data, types
│       │   ├── services/             # components, data, hooks, lib, types
│       │   ├── team/                 # components, data, types
│       │   └── testimonials/         # components, data, types
│       ├── hooks/                    # Hooks transversales
│       ├── lib/                      # Utilidades, formato, SEO, WhatsApp, mock helpers
│       ├── providers/                # Providers cliente
│       ├── stores/                   # Estado global de UI
│       └── types/                    # Tipos transversales
```

### 5.2.1 Correspondencia con unyx_erp

La estructura replica los mismos conceptos de unyx_erp, adaptados a un sitio público de marketing:

| unyx_erp | dr_pet_web_redesign | Adaptación |
|---|---|---|
| `app/(app)` + `app/(auth)` | `app/(site)` | Un solo route group público; no hay login en esta fase |
| `components/ui` | `components/ui` | Primitivas compartidas |
| `components/layout` | `components/layout` | Header y footer públicos en lugar de sidebar/topbar |
| `components/forms`, `filters` | `components/forms`, `filters` | Mismos patrones de formularios y filtros |
| `components/charts`, `data-table` | `components/sections`, `seo`, `animations` | Se reemplazan por bloques de marketing y SEO |
| `features/<domain>` | `features/<domain>` | Misma vertical slice por dominio |
| `features/*/data/mock.ts` | `features/*/data/*.mock.ts` | Datos mock tipados por feature |
| `config/` | `config/` | Sitio, navegación, contacto, redes y SEO |
| `lib/` | `lib/` | Utilidades, formato, SEO, WhatsApp y helpers mock |
| `providers/` | `providers/` | Providers cliente (tema, toasts, motion) |
| `stores/` | `stores/` | Estado global de UI; el wizard de citas vive en su feature |
| `types/` | `types/` | Tipos transversales |

Se omiten deliberadamente `charts`, `data-table`, `auth`, `permissions` y todo lo relacionado con ERP, porque no forman parte del alcance del sitio público.

### 5.3 Mapa de rutas

| Ruta | Página | Feature | Prioridad demo |
|---|---|---|---|
| `/` | Home | `home` | P0 |
| `/nosotros` | Quiénes somos | `home` / contenido editorial | P1 |
| `/servicios` | Hub de servicios | `services` | P0 |
| `/servicios/[slug]` | Detalle de servicio | `services` | P0 |
| `/equipo` | Nuestro equipo | `team` | P1 |
| `/equipo/[slug]` | Perfil de doctor | `team` | P2 |
| `/sedes` | Nuestras sedes | `locations` | P0 |
| `/sedes/[slug]` | Detalle de sede | `locations` | P0 |
| `/emergencias` | Emergencias y UCI | `emergency` | P0 |
| `/grooming` | Grooming | `home` / contenido editorial | P1 |
| `/pet-shop` | Pet shop y farmacia | `pet-shop` | P1 |
| `/plan-consentido-protegido` | Plan de salud | `plans` | P1 |
| `/blog` | Blog y consejos | `blog` | P2 |
| `/blog/[slug]` | Artículo | `blog` | P2 |
| `/contacto` | Contacto | `contact` | P0 |
| `/agendar` | Agendar cita | `appointments` | P0 |
| `/privacidad` | Política de privacidad | legal | P2 |
| `/terminos` | Términos de uso | legal | P2 |

Slugs sugeridos:
- Servicios: `traumatologia`, `cardiologia`, `dermatologia`, `oftalmologia`, `odontologia`, `neurologia`, `oncologia`, `cirugia-veterinaria`, `laboratorio-clinico`, `rayos-x`, `ecografia`, `emergencias`, `grooming`.
- Sedes: `urdesa`, `el-dorado`, `via-a-la-costa`.

### 5.4 Anatomía de un feature

Ejemplo con `services`:

```text
features/services/
├── components/          # ServiceCard, ServiceGrid, ServiceHero, ServiceDetail
├── data/                # services.mock.ts
├── hooks/               # use-service-filters.ts
├── lib/                 # service-selectors.ts, service-helpers.ts
├── types/               # service.types.ts
└── api/                 # futuro: services.api.ts
```

Reglas de la capa:

| Carpeta | Responsabilidad | ¿Obligatoria? |
|---|---|---|
| `components/` | UI específica del dominio | Sí |
| `data/` | Datos mock tipados y realistas | Mientras no haya backend |
| `hooks/` | Lógica de cliente y filtros | Solo si hay interacción |
| `lib/` | Selectores y funciones puras | Solo si hay lógica derivada |
| `schemas/` | Validaciones Zod | Solo en formularios |
| `stores/` | Estado Zustand del feature | Solo si hay estado complejo |
| `types/` | Contratos del dominio | Sí |
| `api/` | Cliente HTTP del feature | Futuro, al conectar backend |

### 5.5 Responsabilidades por capa

| Capa | Qué hace | Qué no hace |
|---|---|---|
| `app/` | Routing, layouts, metadata, composición | Lógica de negocio ni datos hardcodeados |
| `features/` | UI y lógica del dominio | Importar otros features |
| `components/ui/` | Primitivas sin dominio | Conocer servicios o sedes |
| `components/layout/` | Shell global | Contener secciones de página |
| `components/sections/` | Bloques reutilizables entre páginas | Datos de un feature específico |
| `config/` | Constantes de sitio, navegación y contacto | Estado reactivo |
| `lib/` | Utilidades puras y transversales | Componentes o JSX |
| `hooks/` | Hooks transversales | Lógica de un solo feature |
| `providers/` | Contexto cliente | Reglas de negocio |
| `stores/` | Estado global de UI | Datos de dominio |
| `types/` | Tipos compartidos | Tipos de un feature (van en el feature) |

### 5.6 Convenciones de código

- Componentes: `PascalCase.tsx` (`ServiceCard.tsx`).
- Primitivas UI: `kebab-case.tsx` (`button.tsx`, `dropdown-menu.tsx`).
- Hooks: `use-kebab-case.ts` (`use-media-query.ts`).
- Stores: `kebab-case.store.ts` (`new-appointment.store.ts`).
- Tipos: `kebab-case.types.ts` (`service.types.ts`).
- Schemas: `kebab-case.schema.ts` (`appointment.schema.ts`).
- Datos mock: `kebab-case.mock.ts` (`services.mock.ts`).
- Alias de imports: `@/*` → `./src/*`.
- Sin `any`; preferir tipos explícitos y `unknown` cuando corresponda.
- Componentes de servidor por defecto; `'use client'` en la hoja interactiva.
- Imágenes con `next/image` y dimensiones explícitas.
- Copys y rutas en español; código y nombres técnicos en inglés.
- Evitar archivos barrel y exports comodín.

### 5.7 Componentes previstos

**Layout**
- `Header`, `DesktopNav`, `MobileNav`, `MegaMenu`, `EmergencyBar`, `Footer`, `WhatsAppFab`, `Breadcrumbs`, `ScrollToTop`.

**Sections**
- `PageHero`, `SectionHeading`, `CtaBanner`, `TrustStrip`, `StatsBand`, `ContactStrip`, `RelatedContent`.

**UI**
- `button`, `card`, `badge`, `input`, `label`, `textarea`, `select`, `accordion`, `dialog`, `sheet`, `tabs`, `tooltip`, `skeleton`, `form`, `separator`, `avatar`, `breadcrumb`.

**SEO**
- `JsonLd`, `OrganizationJsonLd`, `LocalBusinessJsonLd`, `ServiceJsonLd`, `FaqJsonLd`, `ArticleJsonLd`, `BreadcrumbJsonLd`.

**Animations**
- `FadeIn`, `StaggerGroup`, `Reveal`, `MotionConfigProvider`.

### 5.8 Configuración prevista

| Archivo | Contenido |
|---|---|
| `config/site.ts` | Nombre, descripción, URL, versión, datos de marca |
| `config/navigation.ts` | Navegación principal, footer, mega menú |
| `config/contact.ts` | Sedes, direcciones, teléfonos, correos, horarios |
| `config/social.ts` | Facebook, Instagram, YouTube, TikTok, X |
| `config/seo.ts` | Metadata base, keywords, Open Graph |
| `config/theme.ts` | Mapa de tokens y clases de marca |

Los teléfonos y enlaces deben existir en un solo lugar. Ningún componente debe hardcodear un número de WhatsApp.

---

## 6. Estrategia de datos mock

### 6.1 Reglas

- Cada feature expone datos tipados en `data/*.mock.ts`.
- Los componentes consumen selectores de `lib/` o props; no importan arrays directamente.
- Los selectores pueden ser síncronos; si se quiere simular latencia, usar un helper en `lib/mock-delay.ts`.
- Las fechas se manejan con `date-fns` y locale `es`.
- Las imágenes de demo se guardan localmente en `public/images/*`; no depender de URLs de WordPress en producción.
- Los precios del pet shop y del plan son referenciales y deben validarse.

### 6.2 Inventario de mocks

| Feature | Datos |
|---|---|
| `home` | Hero, propuesta de valor, estadísticas, servicios destacados, testimonios, CTA |
| `services` | 12–14 servicios con categoría, descripción, beneficios, FAQ e imagen |
| `team` | 8–12 doctores con sede, especialidad, biografía, credenciales y foto |
| `locations` | 3 sedes con dirección, teléfonos, horarios, mapa, servicios y fotos |
| `appointments` | Sedes, servicios, mascotas, fechas y franjas horarias |
| `contact` | Canales, motivos de contacto y mensajes de confirmación |
| `blog` | 6 artículos con categoría, extracto, portada, autor y fecha |
| `emergency` | Teléfonos por sede, pasos de actuación y señales de alerta |
| `plans` | 3 niveles con cobertura, precio referencial y condiciones |
| `pet-shop` | Categorías y 12 productos con precio, imagen y disponibilidad |
| `testimonials` | 6 testimonios con mascota, dueño, servicio y sede |
| `faq` | 8–10 preguntas agrupadas por categoría |

### 6.3 Formularios sin backend

- **Agendar cita:** wizard de 3 pasos (mascota/servicio → sede/fecha → datos personales). Persistencia local con Zustand + `localStorage` para la demo. Al confirmar, se muestra pantalla de éxito y un enlace a WhatsApp con el resumen prellenado.
- **Contacto:** validación con Zod, envío simulado y toast de confirmación. Alternativa: `mailto:` o WhatsApp.
- **Newsletter / promociones:** si se incluye, solo captura local y mensaje de éxito.
- La demo debe indicar visualmente que la cita es una **solicitud** y que la confirmación final se realiza por WhatsApp o teléfono.

### 6.4 Transición a backend

1. Crear `features/<domain>/api/<domain>.api.ts`.
2. Añadir `lib/api-client.ts` y variables `NEXT_PUBLIC_API_URL`.
3. Incorporar React Query y un `QueryProvider`.
4. Reemplazar selectores mock por hooks de consulta sin cambiar los componentes.
5. Mantener los mismos tipos y schemas para validar la respuesta del servidor.

---

## 7. SEO, accesibilidad y rendimiento

### 7.1 SEO

- Metadata por ruta con la API de Next.js y plantilla `%s | Dr. Pet`.
- `lang="es-EC"` en el layout raíz.
- Open Graph e imágenes OG por página.
- `sitemap.ts` y `robots.ts`.
- JSON-LD:
  - `VeterinaryCare` para la organización.
  - `LocalBusiness` por cada sede con NAP consistente.
  - `Service` en páginas de servicios.
  - `FAQPage` en secciones de preguntas.
  - `Article` en blog.
  - `BreadcrumbList` en páginas internas.
- Títulos y descripciones orientados a búsquedas locales: "veterinaria en Urdesa", "emergencias veterinarias Guayaquil", "cardiólogo veterinario Guayaquil".
- URLs limpias, en español y estables.
- Enlazado interno entre servicio → sede → cita.

### 7.2 Accesibilidad

- Objetivo WCAG 2.1 AA.
- Contraste validado, foco visible y navegación completa por teclado.
- HTML semántico: un solo `h1` por página, jerarquía de encabezados correcta.
- Etiquetas explícitas en formularios y errores asociados con `aria-describedby`.
- Textos alternativos descriptivos; imágenes decorativas con `alt=""`.
- Áreas táctiles mínimas de 44 × 44 px.
- `prefers-reduced-motion` respetado en todas las animaciones.
- Skip link al contenido principal.

### 7.3 Rendimiento

- `next/image` con tamaños y prioridades correctas.
- Imágenes en WebP/AVIF y dimensiones adecuadas.
- Hero sin video pesado en móvil; usar imagen o video corto con poster.
- Componentes cliente mínimos; carruseles y mapas cargados de forma diferida.
- Fuentes con `display: swap` y subconjunto latino.
- Evitar librerías pesadas por encima del pliegue.
- Metas Lighthouse móvil para la demo:
  - Performance ≥ 85
  - Accessibility ≥ 95
  - Best Practices ≥ 95
  - SEO ≥ 95

---

## 8. Plan de trabajo

### Fase 0 — Arquitectura (actual)

- [x] Definir contexto y alcance.
- [x] Crear estructura de carpetas del frontend.
- [x] Documentar arquitectura y convenciones.
- [ ] Scaffolding de configuración (package.json, tsconfig, Tailwind, ESLint, Prettier).
- [ ] Layout raíz, tokens y providers.

### Fase 1 — Base visual y Home

- Header, EmergencyBar, Footer y WhatsAppFab.
- Sistema de botones, cards, badges y tipografía.
- Home completa con hero, propuesta de valor, servicios, sedes, testimonios y CTA.
- Datos mock de home y servicios.

### Fase 2 — Servicios, sedes y equipo

- Hub de servicios con filtros por categoría.
- Detalle de servicio con FAQ y CTA.
- Listado y detalle de sedes con mapa y canales.
- Listado de equipo y perfil de doctor.

### Fase 3 — Conversión

- Wizard de agendamiento con validación y persistencia local.
- Página de contacto.
- Página de emergencias con acceso telefónico prioritario.
- Enlaces de WhatsApp con mensajes prellenados.

### Fase 4 — Contenido comercial

- Grooming.
- Pet shop y farmacia (catálogo demostrativo, sin carrito).
- Plan Consentido Protegido.
- Blog y artículos.
- Páginas legales.

### Fase 5 — QA y demo

- Responsive 360 / 768 / 1024 / 1440.
- Revisión de enlaces, formularios y números.
- SEO técnico y JSON-LD.
- Lighthouse y accesibilidad.
- `pnpm lint`, `pnpm type-check`, `pnpm build`.
- Deploy en Vercel.

---

## 9. Riesgos y supuestos

| Riesgo | Impacto | Mitigación |
|---|---|---|
| No hay backend | Formularios no persisten | Simulación local + WhatsApp; comunicarlo en la demo |
| Datos reales incompletos | Contenido genérico | Usar información pública del sitio y placeholders validados |
| Fotos y biografías sin autorización | Riesgo legal | Usar assets del cliente o placeholders; validar permisos |
| Números de emergencia incorrectos | Riesgo operativo | Centralizar en `config/contact.ts` y revisar con el cliente |
| Feed de Instagram inestable | Sección vacía | No depender de la API; enlaces y selección editorial |
| Mapas con API key | Bloqueo de embed | Usar iframe/link o configurar clave antes del deploy |
| Contenido médico sensible | Claims indebidos | Tono informativo, revisión del cliente, disclaimer |
| Versiones antiguas del stack | Deuda técnica | Demo con base estable; plan de upgrade post-demo |
| Carpetas vacías no versionadas | Pérdida de estructura en Git | Crear archivos en Fase 1 o evaluar `.gitkeep` |

**Supuestos de la demo:**
- La cita es una solicitud, no una reserva confirmada.
- El pet shop es un catálogo informativo sin carrito ni pasarela.
- Los precios y la disponibilidad son referenciales.
- Las emergencias se resuelven por llamada o WhatsApp.
- El sitio será responsive y estará optimizado para móvil.

---

## 10. Pendientes con el cliente

1. Logo en SVG y manual de marca.
2. Fotografías profesionales de sedes, equipo y pacientes (con autorización).
3. Listado actualizado de doctores, especialidades, credenciales y sedes.
4. Horarios de atención por sede y política de emergencias.
5. Correos y números de WhatsApp definitivos.
6. Detalle del Plan Consentido Protegido: coberturas, precios y condiciones.
7. Catálogo del pet shop: categorías, productos, precios y stock.
8. Textos legales: privacidad, términos y consentimiento de datos.
9. Dominio, hosting y accesos actuales.
10. Analítica: GA4, Meta Pixel y eventos de conversión.
11. Aprobación de tono y contenido médico.
12. Fecha y formato de la presentación.

---

## 11. Definition of Done — demo

- Home, servicios, detalle de servicio, sedes, detalle de sede, equipo, contacto, agendar y emergencias navegables.
- Header, footer, barra de emergencias y WhatsApp funcionales en todas las páginas.
- Diseño responsive sin scroll horizontal en 360, 768, 1024 y 1440 px.
- Datos mock tipados y centralizados; sin textos hardcodeados en componentes.
- Formularios con validación, estados de error y confirmación.
- Metadata, Open Graph, sitemap y JSON-LD base.
- Accesibilidad AA en flujos principales.
- `pnpm lint`, `pnpm type-check` y `pnpm build` sin errores.
- Deploy accesible por URL para la presentación.
- Documento de contexto y arquitectura actualizado.

---

## 12. Notas operativas

- La estructura actual contiene **solo carpetas**; no se crearon archivos dentro de `frontend/`.
- Git no versiona carpetas vacías. Al comenzar la Fase 1 se agregarán los archivos de configuración y los primeros componentes.
- Si se necesita versionar la estructura antes de crear archivos, evaluar archivos `.gitkeep`; no se incluyeron para respetar la indicación de solo carpetas.
- El backend permanece vacío y reservado; no se implementará en esta etapa.

---

**Siguiente paso:** scaffolding de configuración del frontend y construcción del layout base + Home con datos mock.
