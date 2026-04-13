# Portfolio website — Madeeha Afreen

Static portfolio (HTML, CSS, vanilla JS). Optional React/Vite build only for the `svg-follow-scroll` island in `dist-island/`.

## GitHub Pages

1. Push this repository (include **`index.html`** at the **root** of the default branch).
2. **Settings → Pages → Build and deployment**: source **Deploy from a branch**, folder **`/ (root)`**.
3. The repo includes **`.nojekyll`** so GitHub does not run Jekyll.
4. **`index.html`** includes a small script that sets `<base>` on `http(s)` so CSS and scripts load correctly under `https://<user>.github.io/<repo>/`.

After changing `components/ui/svg-follow-scroll.tsx`, rebuild the island before pushing:

```bash
npm run build
```

## Local preview

From the repo root:

```bash
npm install
npx --yes serve .
```

Then open the URL shown (often `http://localhost:3000`).  
To rebuild the scroll island after TSX edits:

```bash
npm run build
```

## Project layout

| Path | Purpose |
|------|--------|
| `index.html` | Main page |
| `styles.css`, `components/ui/*.css` | Styles |
| `components/ui/*.js` | Gallery, nav, footer, Lenis, etc. |
| `dist-island/` | Built React bundle for SVG follow-scroll (run `npm run build`) |
| `assets/`, `companies/`, `my-work/`, `landing page images/` | Images & logos |
