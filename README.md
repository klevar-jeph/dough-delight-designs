# Donut District

A single-page marketing website for Donut District — premium Nigerian-inspired donuts baked in Benin City.

Built with React, Vite, Tailwind CSS v4, and Motion (framer-motion).

## Development

Requires Node.js and npm.

```sh
npm install
npm run dev
```

The dev server starts at http://localhost:5173/.

## Build

```sh
npm run build
```

Production files are emitted to `out/` — static HTML, CSS, JS, and images only. No server or backend is involved; deploy `out/` to any static host.

## Preview production build

```sh
npm run preview
```

## Lint & format

```sh
npm run lint
npm run format
```

## Project structure

```
src/
├── assets/        # Images (logo, product photos)
├── components/ui/ # shadcn/ui component library
├── hooks/         # Custom hooks
├── lib/           # Utilities (cn helper)
├── App.tsx        # Page content
├── main.tsx       # React entry point
└── styles.css     # Tailwind v4 + design tokens
```
