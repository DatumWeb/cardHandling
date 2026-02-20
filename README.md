# Quote Cards (React)

A simple React site that shows short quotes in cards, with **3 tabs** that organize the same content in 3 different two-level hierarchies:

- **By Topic** — Wisdom (Life, Learning, Time), Nature (Science, Beauty, Change), Human (Humor, Courage, Kindness)
- **By Era** — Ancient (Greek, Roman, Eastern), Modern (1800s, Early 1900s), Contemporary (1900s, 2000s)
- **By Mood** — Inspiring (Hope, Courage, Growth), Thoughtful (Reflection, Truth, Meaning), Light (Humor, Joy, Curiosity)

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages (free)

1. Create a new repo on GitHub (e.g. `cardHandling`).
2. In `vite.config.js`, set `base` to your repo name: `base: '/cardHandling/'` (use your repo name).
3. Install and deploy:

```bash
npm install
npm run deploy
```

4. In the repo on GitHub: **Settings → Pages** → Source: **Deploy from a branch** → Branch: **gh-pages** → Save.
5. Your site will be at: `https://<your-username>.github.io/cardHandling/`
