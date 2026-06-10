# CLAUDE.md — guide for AI coding agents

This file orients AI agents (Claude Code and others) working in this repo. Read it first.

## What this is

Personal website / portfolio for **Ram G Suri**, live at **https://ramgsuri.me**.
It is a **Jekyll** static site built on the **Beautiful-Jekyll** theme and hosted on
**GitHub Pages** (served from the repo root on the `master` branch).

## Tech stack

- **Jekyll 3.9** (static site generator), Ruby 3.1.
- **Beautiful-Jekyll** theme (layouts in `_layouts/`, partials in `_includes/`).
- Plain HTML/Liquid + CSS in `css/`, JS in `js/`.
- No backend, no database, no build step beyond `jekyll build`. Keep it that way
  unless explicitly asked — the static + GitHub Pages model is intentional.

## How to build and preview

```bash
# Build the static site into _site/
bundle exec jekyll build        # or: ./rebuild.sh

# Preview locally. NOTE: `jekyll serve` is broken on this machine (see Gotchas),
# so serve the built _site/ folder with the bundled Python server instead:
python3 serve_local.py          # -> http://localhost:4000
```

`serve_local.py` mimics GitHub Pages extension-less routing, so `/portfolio` and
`/aboutme` resolve locally just like in production. After editing content, re-run
`./rebuild.sh` and refresh the browser.

## Where content lives (edit these)

| Content | File |
| --- | --- |
| **Portfolio data** (skills, certifications, projects, talks, videos) | `_data/portfolio.yml` — single source of truth, well-commented |
| Portfolio page markup | `portfolio.html` (renders from `_data/portfolio.yml`) |
| Portfolio styling | `css/portfolio.css` |
| Home page / hero | `index.html` |
| About page | `aboutme.md` |
| Blog posts | `_posts/` (and topic subfolders) |
| Site config + navbar | `_config.yml` |
| Custom domain | `CNAME` (single line: `ramgsuri.me`) |

To add a certification / project / talk / video, **edit `_data/portfolio.yml`** and
add a list item following the existing examples — no HTML changes needed.

## Conventions

- The portfolio page uses `pf-`-prefixed CSS classes (see `css/portfolio.css`).
- Per-page external CSS/fonts are declared in front matter (`css:`, `ext-css:`,
  `googlefonts:`) — see `portfolio.html` and `index.html` for the pattern.
- Accent colors: `#008AFF` / `#0085A1` (match the theme's link/hover colors).
- Asset folders: cert PDFs in `assets/certifications/`, images in
  `img/portfolio/{certs,projects,talks}/`.

## Gotchas (already discovered — don't rediscover the hard way)

- **`jekyll serve` fails here.** Ruby 3 removed `webrick` from stdlib, and this
  Ruby was built **without OpenSSL**, so `bundle install` can't download new gems
  (incl. `webrick`) over HTTPS. Workaround: build + `serve_local.py`. Do not add
  `webrick` to the Gemfile expecting it to install locally.
- **`_site/` is generated output** — never edit it by hand; edit sources and rebuild.
- **CNAME must stay a single line** (`ramgsuri.me`). A duplicate line previously
  broke GitHub Pages certificate provisioning / HTTPS.
- DNS for `ramgsuri.me` lives at the GoDaddy registrar (apex A records ->
  GitHub's `185.199.108-111.153`, `www` CNAME -> `ramgsuri.github.io`). The repo's
  `CNAME` file only tells Pages which domain to expect.

## Deploying

GitHub Pages auto-builds on push to `master`. Only commit/push when the user asks.
Verify locally first.
