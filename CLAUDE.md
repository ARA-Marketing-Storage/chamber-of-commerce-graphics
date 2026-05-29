# CLAUDE.md — Chamber of Commerce Graphics

## What This Project Does

Generates 720×720 PNG graphics for ARA Google Business Profiles. Each graphic shows a smiling-attorney team photo with a cinema gradient, city name in large bold text with a glow effect, the ARA vertical logo bottom-left, and the chamber badge bottom-right.

## Running Locally

```bash
npm run serve       # starts http://localhost:3030
```

Open the browser at that URL. Each city renders in a preview grid. Export button downloads all 10 PNGs at once.

## Adding a New City / Badge

1. Drop the badge file into `badges/` (PNG or WebP, any size — it will be scaled)
2. Drop the team photo into `photos/`
3. Open `index.html` and add one line to the `CITIES` array near the top of the `<script>` block:
   ```js
   { name: "City Name", file: "city-slug", ext: "png", photo: "photos/filename.jpg" }
   ```
   - `name` — display name, used in text and for the city glow label
   - `file` — slug that matches the badge filename in `badges/`
   - `ext` — badge file extension (`png` or `webp`)
   - `photo` — path to the background photo relative to the project root

4. Refresh the browser — the new artwork renders immediately

## Canvas Design (drawGraphic)

All rendering happens in `drawGraphic(canvas, city)` inside `index.html`.

Key layout constants:
- `BOTTOM_PAD = 24` — bottom margin
- `ROW_H = 90` — height of the logo/badge row
- `textZoneT = H * 0.61` — where the text block starts vertically
- City font auto-sizes to fill 72% of canvas width (`TARGET_MIN = MAX_W * 0.72`)
- Equal visual spacing above/below city name via cap-height compensation (`CAP = 0.72`)

## Brand Colors

```
Navy:  #0C1B2A
Blue:  #518BC9
Green: #6EC17C
City glow: #C8E4FA (icy blue), shadow #5A9FD4
```

## Assets

- `assets/ara-logo-white.png` — horizontal ARA logo (unused in current template)
- `assets/ara-vertical-white.png` — vertical stacked ARA logo (used bottom-left)
- `assets/texture-top-right.png` / `texture-bottom-left.png` — brand textures (loaded but not drawn in current template)

## Screenshot Helper

```bash
node screenshot.mjs http://localhost:3030/ preview
```

Saves `preview.png` in the project root.

## Skill

Use `/add-chamber-city` to interactively add a new city to the generator.
