# Orbit

A single, static daily status page built with React, JSX, Vite, and Tailwind CSS.

```sh
npm install
npm run dev
```

`src/App.jsx` brings the complete page together. The individual page components live in `src/components`; there is no separate layout component.

- `GalaxyBackground.jsx`: layered stars, nebula glows, falling white particles, and pointer parallax.
- `StatusCard.jsx`: URL-based profile picture, a 25-word placeholder paragraph, two decorative quotation marks, and the status date. Edit the static profile and status here.
- `OrbitMark.jsx`: the small decorative brand mark.

The 2px animated blue-purple border, galaxy effects, and responsive styles are in `src/index.css`. Animation and parallax respect the reduced-motion preference. The portrait has a built-in fallback if its URL is unavailable.

```sh
npm run build
npm run preview
```
