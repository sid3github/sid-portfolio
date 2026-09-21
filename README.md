# sid-portfolio

Personal portfolio for **Siddharth Padwal** — AI-Augmented Software Engineer,
Mumbai, India.

Vue 3 + Vite, no CSS framework — all styling lives in `src/main.css`.

## Design

The interface is a deliberate Mac OS X Aqua (Leopard-era) homage: brushed-metal
window chrome, a recessed content well, a source-list sidebar and a glossy
segmented control. Type is Lucida Grande with Monaco for metadata — the
period-accurate system faces, so no web fonts are loaded.

Two layout rules hold the whole thing together:

- **The window is a fixed size.** `.info-section` has one fixed height for every
  panel, so the window never resizes when you change tab or move down the
  source list. It is capped against the viewport so it still fits short screens.
- **No page scroll at ≥768px.** The window floats centred on the desktop. Below
  768px the lock releases and the page scrolls normally.

## Where the content lives

| Content | File |
| --- | --- |
| Name, title, social links, toolbar | `src/components/topSection.vue` |
| About / bio | `src/components/aboutSection.vue` |
| Tech + AI tool logos | `src/components/skillsSection.vue` |
| Work history | `src/experienceData.js` |
| Projects | `src/projectData.js` |
| Email, phone, contact graphic | `src/components/contactSection.vue` |
| Tab order and labels | `src/tabs.js` |

Experience and projects are data-driven — edit the `.js` data files, not the
components, to change what is listed. `src/tabs.js` is shared by the window
titlebar and the segmented control so the two cannot drift apart.

`App.vue` owns the active section; `bottomSection.vue` is a controlled
component (`v-model:active`).

## Assets

Tech logos in `public/assets/images/` are [Devicon](https://github.com/devicons/devicon)
SVGs (MIT). The Claude, OpenAI and Cursor marks are from
[simple-icons](https://github.com/simple-icons/simple-icons) (CC0), recoloured
to their brand values.

The contact graphic is authored CSS — a glass core with satellites orbiting on
two tilted rings, using `perspective` and `transform-style: preserve-3d`. It
honours `prefers-reduced-motion`.

## Project setup

```sh
npm install
```

### Compile and hot-reload for development

```sh
npm run dev
```

### Compile and minify for production

```sh
npm run build
```

### Preview the production build

```sh
npm run preview
```
