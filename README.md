# TAGHRID

A single-person cinematic tribute site, built around one real signature.

## Run it locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Personalize it

Everything content-specific lives in one file: **`src/data/content.js`**.

- `name`, `tagline`, `arrivalLine`, `wordmark` — the text on screen.
- `signatureSrc` — points at `public/signature.png`. Replace that file with
  the final high-resolution signature scan (transparent PNG works best;
  the gold tint is applied with CSS and does not touch the stroke shape).
- `audioSrc` — points at `public/audio/theme.mp3`. See
  `public/audio/README.md` — this file is intentionally not included.
- `gift` — the personal message revealed behind "Discover Your Gift".
  Replace the placeholder paragraph with the real message.

## What's built in

- Four-scene intro (Void → Arrival → Signature → Message), skippable at
  any point, auto-advancing on a timer you can tune in
  `src/components/IntroSequence.jsx` (`DURATIONS`).
- Gold dust particle field on plain `<canvas>` — no external animation
  library.
- Left-to-right ink-reveal on the signature, gold-tinted via CSS filters
  without altering the artwork's shape.
- Sound toggle and replay-intro control in the top bar. Audio only
  attempts to play after the visitor interacts with the toggle, and fails
  silently if no track is present.
- `prefers-reduced-motion` is respected: the intro skips straight to the
  final scene and the particle field renders a static frame instead of
  animating.
- Fully responsive, from a small phone up.

## Deploy

**Vercel** — import the repo, framework preset "Vite", no config needed.

**GitHub Pages** —

```bash
npm run build
```

then publish the generated `dist/` folder (e.g. with the `gh-pages`
package, or GitHub's "Deploy from a branch" pointed at `dist`). `vite.config.js`
already uses a relative base path, so no further changes are required.
