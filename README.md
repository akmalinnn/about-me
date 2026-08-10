# Akmal Nafis — Portfolio

Personal portfolio website built with **React + TypeScript + Vite**, deployed on
**Cloudflare Workers** (static assets). All content is data-driven from Markdown
files, so it's easy to maintain without touching code.

## ✨ Features

- 🖥️ "Operator console" developer theme with light/dark toggle
- 🌍 Multi-language: **EN · ID · JA** (switchable in the header, remembered)
- 📄 Content-driven from Markdown (`content/{en,id,ja}/*.md`) — add skills/projects by editing Markdown only
- 🗂️ Multi-page with client-side routing: Home (`/`), Portfolio (`/portfolio`), Resume (`/resume`)
- 🧩 Animated terminal showing the DevOps system scheme behind this site
- 📱 Fully responsive · ⚡ Static at build time

## 📁 Project structure

```
content/                  # All portfolio content (edit these to update the site)
  en/ id/ ja/             # English · Bahasa Indonesia · 日本語
  profile.jpg             # profile photo
  cv.pdf                  # CV used by the Download button
src/react-app/
  content.ts              # loads + parses Markdown into data (all languages)
  i18n.ts                 # UI strings + terminal script per language
  language.tsx            # language provider
  theme.tsx               # light/dark theme provider
  components/             # Layout, Hero, Terminal, Section, ...
  pages/                  # HomePage, PortfolioPage, ResumePage
  markdown.ts             # markdown-it wrapper
```

## 📝 Editing content

See [`content/README.md`](content/README.md) for the full guide. In short:

- **Add a skill** → add `- SkillName` under a category in `content/<lang>/skills.md`
- **Add a project** → add a `### Title` block to `content/<lang>/projects.md` (with `**Category:**`)
- **Change roles / status** → edit `content/<lang>/profile.md`
- **Swap photo / CV** → replace `content/profile.jpg` / `content/cv.pdf`

No React code changes required.

## 🚀 Development

```bash
npm install
npm run dev       # local dev at http://localhost:5173
```

## ☁️ Deploy to Cloudflare Workers (with static assets)

This is a static Vite SPA (build output is `dist/`), served by Cloudflare Workers
as static assets. `wrangler.json` points the `assets` directory at `dist` and sets
`not_found_handling: single-page-application`, so client-side routes (`/`,
`/portfolio`, `/resume`) work natively — no `_redirects` file is needed.

```bash
npm run build      # produces dist/
npm run deploy     # wrangler deploy — uploads dist/ as worker assets
```

## 📄 Technology

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) for multi-page routing
- [Vite](https://vite.dev/)
- [markdown-it](https://github.com/markdown-it/markdown-it) for Markdown rendering
- [Poppins](https://fonts.google.com/specimen/Poppins) for typography
