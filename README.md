# Siddharth Padwal — portfolio

The site at https://sid-portfolio-omega.vercel.app. Plain HTML, CSS and JavaScript with no build step.

- `index.html`, `styles.css`, `main.js`: the whole site
- `assets/`: images, the reels and the CV
- `vercel.json`: tells Vercel to serve the folder as a static site

To preview locally: `python3 -m http.server 4173`, then open http://localhost:4173.

Smooth scrolling on desktop uses [Lenis](https://github.com/darkroomengineering/lenis) 1.3.27 (MIT), kept as a local copy in `assets/js/` so the site makes no outside requests. In the "How a reel is built" section, one scroll gesture (wheel flick, swipe or arrow key) moves exactly one layer.
