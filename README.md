# Portfolio — Arantxa Fernández

Portfolio profesional de Arantxa Fernández, maestra de Educación Infantil
(0-3 años): experiencia, formación, metodología de inglés temprano y un
ejemplo de programación de aula.

Construido con [Next.js](https://nextjs.org) (App Router + Tailwind CSS v4)
y exportado como sitio estático.

## Idiomas

La web está en castellano (`/es/`), inglés (`/en/`) y catalán (`/ca/`).
Todos los textos viven en `src/i18n/dictionaries/`; para cambiar un texto
hay que tocarlo en los tres ficheros. La raíz (`/`) redirige al idioma
guardado o al del navegador.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build estático

```bash
npm run build
```

Genera el sitio en `out/`.

## Despliegue

Cada push a `main` dispara `.github/workflows/deploy.yml`, que construye el
sitio y lo publica en GitHub Pages.
