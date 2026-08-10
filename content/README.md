# Content — How to update your portfolio

Everything on the site comes from the Markdown files in this folder. **Edit these
files only — you never need to touch the React code** to add content.

The site supports **3 languages: EN · ID · JA**. Each language has its own folder
under `content/`:

```
content/
  en/   English
  id/   Bahasa Indonesia
  ja/   日本語
  profile.jpg              # your profile photo (used in the hero)
  cv.pdf                   # your CV (used by the "Download CV" button)
  README.md
```

> To update content, edit the file **in every language folder** you want to show.
> e.g. add a skill to `en/skills.md`, `id/skills.md`, and `ja/skills.md`.

## Files (per language folder)

| File              | Renders as                                            |
| ----------------- | ----------------------------------------------------- |
| `profile.md`      | Hero (name, roles, signal board, contacts)            |
| `about.md`        | Home → About Me. section                              |
| `stats.md`        | Home → "By the Numbers" stat cards                    |
| `focus.md`        | Home → "What I'm Doing" cards                         |
| `skills.md`       | Resume → Skills & Tools (grouped chips)               |
| `experience.md`   | Resume → Experience (cards)                           |
| `education.md`    | Resume → Education (cards)                            |
| `projects.md`     | Portfolio page (cards, filterable by category)        |

After editing, the dev server hot-reloads (`npm run dev`). Then `npm run build` for production.

---

## `skills.md` — add a new skill (no code!)

Each skill is one line under a `## Category` heading:

```markdown
## Programming Languages
- Go
- Python

## DevOps & Cloud Tools
- Docker
- Terraform
```

**To add a skill:** put `- YourSkill` under any category (repeat in each language).
**To add a new category:** add a new `## CategoryName` heading.

## `profile.md`

- Line 1: your name. Line 2: your primary title (no blank line between them).
- `## Roles` — each `- Role` line feeds the rotating hero roles.
- `## Signal` — `- Status:`, `- TZ:`, `- Response:` feed the signal board.
- `## Contact` — each `- Label: [text](url)` line becomes a contact pill.

## `stats.md` — "By the Numbers"

One stat per line: `- Value | Label | Link`

```markdown
- 3 | Years of experience | /resume
```

Value and Label are required; Link (optional) makes the card clickable.

## `focus.md` — "What I'm Doing"

Same card format as below, with an `Icon` meta. Valid icon names:
`automation`, `container`, `monitor`, `cloud`.

```markdown
### Monitoring & Observability
**Icon:** monitor

Setting up monitoring, tracing, and alerting with Zabbix, SigNoz, and Grafana.
```

## Cards (`experience.md`, `education.md`, `focus.md`)

Each entry starts with `### Title`, followed by optional `**Key:** value` meta
lines and a description. A `### ` block becomes one card.

```markdown
### DevOps Engineer — Internship
**Org:** PT Temas Tbk · Jakarta
**Date:** Nov 2025 - May 2026

- Managed containerized apps using Docker.
```

- `### Title` — card title (required).
- `**Key:** value` — each becomes a small badge (`Org`, `Date`, `Tech`, ...).
- Remaining lines are the description (Markdown lists/links supported).

## `projects.md` — Portfolio cards with filtering

Same card format, plus `**Category:** <name>` meta. Projects sharing a category
appear as a filter chip on the Portfolio page.

```markdown
### PostgreSQL Deployment Automation
**Category:** Infrastructure
**Date:** Aug 2021 - Aug 2025
**Tech:** Terraform, Jenkins, GitLab

- Automated PostgreSQL user and role provisioning using Terraform.
```

---

## Photos & CV

- **Photo:** replace `content/profile.jpg` with your photo (square crop recommended).
- **CV:** replace `content/cv.pdf`. The "Download CV" button serves this file.

## Good to know

- Markdown is parsed at **build time**, so content is static and fast.
- Site pages: `/` (Home), `/portfolio`, `/resume`.
- **Language switcher** is in the header (EN/ID/JA); your choice is remembered.
- **Theme** toggle is also in the header (light/dark), remembered in your browser.
