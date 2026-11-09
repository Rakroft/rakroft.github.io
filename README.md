# rakroft.github.io

Portfolio personal de **Adrián Ortega Martínez**: estudiante de ASIR en Barcelona, centrado en sistemas, redes y soporte IT.

🌐 https://rakroft.github.io

## Tecnologías
- **Astro**: genera las páginas (ES en `/` y EN en `/en/`).
- **Tailwind CSS v4**: estilos con tokens propios (`paper`, `ink`, `muted`, `line`) en `src/styles/global.css`.
- **React**: solo para las partes interactivas (`ThemeToggle.tsx` y `ProjectGrid.tsx`).
- **JS puro**: animaciones al hacer scroll y la sección activa del menú (script en `src/layouts/Base.astro`).

## Editar contenido
- Textos: `src/i18n/es.ts` y `src/i18n/en.ts`
- Contactos: `src/data/contact.ts`
- Fondo de mármol: `src/lib/marble.ts`

## Comandos
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

Se publica automáticamente en GitHub Pages con cada push a `main` (`.github/workflows/deploy.yml`).
