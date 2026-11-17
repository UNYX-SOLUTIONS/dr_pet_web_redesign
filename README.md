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

## Despliegue con Docker (VPS + Traefik)

La imagen usa el build `standalone` de Next.js sobre Node 20 Alpine y corre como usuario sin privilegios. El contenedor no publica puertos: Traefik lo descubre por labels en la red `drpet-internal`.

1. Crea el archivo de variables y ajusta el dominio:

   ```bash
   cp .env.example .env
   ```

   | Variable               | Descripción                                                    |
   | ---------------------- | -------------------------------------------------------------- |
   | `DRPET_DOMAIN`         | Dominio público sin protocolo (`drpet.demo.unyxsolutions.com`) |
   | `TRAEFIK_ENTRYPOINT`   | Entrypoint de Traefik (default `websecure`)                    |
   | `TRAEFIK_CERTRESOLVER` | Resolver de certificados (default `letsencrypt`)               |

2. Levanta el servicio:

   ```bash
   docker compose up -d --build
   ```

3. Verifica estado y logs:

   ```bash
   docker compose ps
   docker compose logs -f drpet-web
   ```

### Notas de despliegue

- Traefik debe estar conectado a la red `drpet-internal` (igual que en el stack de referencia). Si usas una red externa compartida, cambia `networks` en `docker-compose.yml`:

  ```yaml
  services:
    drpet-web:
      networks:
        - traefik-public

  networks:
    traefik-public:
      external: true
  ```

- `NEXT_PUBLIC_SITE_URL` se embebe en el build (metadata, canonical, sitemap). Si cambias de dominio, reconstruye: `docker compose build --no-cache && docker compose up -d`.
- El healthcheck consulta `/` cada 15s; el servicio queda `unhealthy` si Next.js no responde.
- `.env` está en `.gitignore`; no se copia a la imagen (ver `.dockerignore`).

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
- Los CTAs de WhatsApp y “Contactar” usan el número demo **+593 99 520 3741** con el mensaje precargado **“Hola Dr Pet”** para el router `UNYX DEMO 00 - ROUTER KOMMO`. Los teléfonos de llamadas y emergencias siguen siendo reales.
- Antes de producción, reemplazar el número demo por el WhatsApp oficial de Dr. Pet.
- Los beneficios y el costo del Plan Consentido Protegido se tomaron del sitio oficial.
- Los horarios por sede y la disponibilidad de emergencias 24/7 deben validarse con el cliente.
- El logo actual es un PNG; se solicitó la versión SVG oficial para unificar el azul de marca.
