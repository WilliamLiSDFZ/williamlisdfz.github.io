# Yuze Li — Personal Homepage

A single-page bilingual (English / 中文) personal site. Backend-engineer aesthetic: live latency widget, command palette, dark mode, density toggle, host-editable tweaks.

## Stack

- React 18.3.1
- Vite 5 (dev server, HMR, prod bundle)
- Plain CSS custom properties for theming (no Tailwind, no CSS-in-JS — just inline styles + one global stylesheet)
- No tests

## Running locally

```bash
npm install
npm run dev        # dev server with HMR
npm run build      # production bundle to dist/
npm run preview    # serve the built bundle
```

## File layout

| Path | Role |
| --- | --- |
| `index.html` | Vite entry. Loads Google Fonts, defines the host-editor `__bundler_thumbnail` SVG template, bootstraps `/src/main.jsx`. |
| `src/main.jsx` | Mounts `<App />` and imports the global stylesheet. |
| `src/App.jsx` | Top-level state (theme / accent / density / lang) + host-editor postMessage handshake. |
| `src/index.css` | All global CSS — custom properties, dark-mode overrides, base typography. |
| `src/content.js` | `CONTENT` (every user-facing string) and `NAV`. |
| `src/i18n.js` | `t(val, lang)` helper. |
| `src/tweaks.js` | `TWEAKS` defaults, wrapped in `EDITMODE-BEGIN/END` sentinels for the external host editor. |
| `src/components/atoms.jsx` | Pill, SectionHeader, AsideKV, TweakRow, Seg, sectionWrap. |
| `src/components/*.jsx` | One file per section: TopNav, Hero, About, Education, Now, Work, Projects, OSS, Skills, Contact, CommandPalette, TweaksPanel. |
| `public/uploads/CV_YuzeLi.pdf` | Resume PDF served at `/uploads/CV_YuzeLi.pdf`. |

## Editing content

All user-facing copy lives in `src/content.js`. Bilingual fields use `{ en: "...", zh: "..." }` and are read through the `t(val, lang)` helper. To change what the site says, edit `CONTENT` — don't touch the section components.

Sections render in fixed order: About → Education → Now → Work → Projects → Open source → Skills → Contact. Anchor IDs match the `NAV` array.

## Features

- **Bilingual toggle** — flips the entire site between English and 中文.
- **Light / dark theme** — `data-theme="dark"` on `<html>` swaps a CSS-variable palette.
- **Accent hue** — a single `--accent-h` number (0–360) drives every `oklch()` accent color.
- **Density toggle** — compact / comfortable, applied as a `calc()` multiplier on section padding.
- **Command palette** — ⌘K / Ctrl+K to jump between sections, toggle theme/lang, send email, download CV.
- **Live latency widget** — fake p99 / uptime tile in the hero, animated for vibe.
- **Host-editor mode** — when embedded in a parent-frame editor, exposes a tweaks panel that posts changes back via `postMessage` and rewrites the `TWEAKS` literal in `src/tweaks.js`.

## Contact

- Email: `wil018@ucsd.edu`
- GitHub: [WilliamLiSDFZ](https://github.com/WilliamLiSDFZ)
- LinkedIn: [yuze-li-093b67342](https://www.linkedin.com/in/yuze-li-093b67342/)
