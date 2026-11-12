# Dr. Pet — Rediseño Web

Rediseño del sitio de **Dr. Pet, Clínica Veterinaria** (Guayaquil, Ecuador). Esta fase es un frontend con datos mock, sin backend, preparado para conectar una API más adelante.

## Stack

- Next.js 14.2 (App Router) + React 18
- TypeScript en modo estricto
- Tailwind CSS 3.4 + Radix UI + `class-variance-authority`
- `lucide-react` para iconografía
- `framer-motion`, `embla-carousel-react`, `sonner`
- `react-hook-form` + `zod`
- `zustand`
- Lato con `next/font`
- `sharp` para optimización de imágenes
- pnpm workspace

## Requisitos

- Node.js >= 20.11
- pnpm >= 9

## Instalación

```bash
pnpm install
```

Copia las variables de entorno de ejemplo:

```bash
cp frontend/.env.example frontend/.env.local
```

## Desarrollo

```bash
pnpm dev
```

La aplicación queda disponible en `http://localhost:3000`.

## Scripts

| Comando             | Descripción                                |
| ------------------- | ------------------------------------------ |
| `pnpm dev`          | Inicia el frontend en modo desarrollo      |
| `pnpm build`        | Genera el build de producción              |
| `pnpm start`        | Sirve el build de producción               |
| `pnpm lint`         | Ejecuta ESLint                             |
| `pnpm type-check`   | Valida TypeScript sin emitir archivos      |
| `pnpm format`       | Formatea el código con Prettier            |
| `pnpm format:check` | Verifica el formato sin modificar archivos |

## Estructura

```text
dr_pet_web_redesign/
├── backend/            # Reservado, sin implementación por ahora
├── docs/               # Contexto y arquitectura
├── frontend/
│   ├── public/         # Assets locales
│   └── src/
│       ├── app/        # Rutas y layouts (App Router)
│       ├── components/ # UI, layout, secciones y SEO
│       ├── config/     # Sitio, navegación, sedes y redes
│       ├── features/   # Vertical slices por dominio
│       ├── hooks/
│       ├── lib/
│       ├── providers/
│       ├── stores/
│       └── types/
└── package.json
```

La arquitectura completa, el contexto del negocio, la paleta oficial y el roadmap están en:

- [`docs/contexto-y-arquitectura.md`](docs/contexto-y-arquitectura.md)

## Estado actual

- [x] Estructura de carpetas
- [x] Configuración de Next.js, TypeScript, Tailwind, ESLint y Prettier
- [x] Tokens de marca (Sapphire Blue, Buttercup Yellow, Gunmetal Gray)
- [x] Layout público: top bar, header con mega-menú, footer y WhatsApp flotante
- [x] Home completa: hero orgánico, trust bar, servicios bento, filosofía, plan, sucursales y CTA final
- [x] Divisores wave, geometría orgánica y tipografía Lato
- [x] Datos mock de home, servicios, plan y sucursales
- [ ] Páginas internas y datos mock completos
- [ ] Formularios y flujo de agendamiento
- [ ] SEO técnico y JSON-LD

## Notas

- No hay backend ni autenticación. Los formularios se simularán con datos mock.
- Los teléfonos y enlaces de sedes están centralizados en `frontend/src/config/contact.ts`.
- Los beneficios y el costo del Plan Consentido Protegido se tomaron del sitio oficial.
- Los horarios por sede y la disponibilidad de emergencias 24/7 deben validarse con el cliente.
- El logo actual es un PNG; se solicitó la versión SVG oficial para unificar el azul de marca.
