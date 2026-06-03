# Chamber of Commerce Graphics — ARA

Generates 720×720 px membership graphics for Angel Reyes & Associates Google Business Profiles.

## How to Use

**No installation needed** — just open the link in any browser:

👉 **https://juanbrea-git.github.io/chamber-of-commerce-graphics/**

### Generate a custom graphic

- Enter the city name
- Upload the chamber badge (PNG or WebP)
- Upload a background team photo (JPG or PNG)
- Preview updates live — click **Download PNG** when ready

### Browse existing cities

- Scroll down to see all pre-built city graphics
- Click any card or **Download PNG** under it to save that city's graphic

## Adding a New City

1. Add the chamber badge to `badges/` (PNG or WebP)
2. Add a team photo to `photos/` (JPG)
3. Add one entry to the `CITIES` array in `index.html`:
   ```js
   { name: "City Name", file: "city-slug", ext: "png", photo: "photos/photo.jpg" }
   ```
4. Refresh the browser — the new artwork appears instantly

## Folder Structure

```
├── index.html          # Main tool (canvas renderer + export)
├── serve.mjs           # Local HTTP server (port 3030)
├── screenshot.mjs      # Puppeteer screenshot helper
├── assets/
│   ├── ara-logo-white.png
│   ├── ara-vertical-white.png
│   └── textures/
├── badges/             # One badge file per city
├── photos/             # Team photos used as backgrounds
└── exports/            # (optional) saved exports
```

## Brand Colors

| Name  | Hex       |
|-------|-----------|
| Navy  | `#0C1B2A` |
| Blue  | `#518BC9` |
| Green | `#6EC17C` |

## Design Template

- Full-bleed team photo (cover-fit, anchored top)
- Smooth cinema gradient overlay (navy at bottom)
- 3-line text block: `PROUD MEMBERS OF THE` / `[CITY]` (glow) / `CHAMBER OF COMMERCE`
- City name auto-sizes to fill ~72% of width
- ARA vertical logo — bottom-left
- Chamber badge (white pill) — bottom-right
