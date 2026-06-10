# ramgsuri.me — personal website & portfolio

Personal website and portfolio for **Ram G Suri**, live at **https://ramgsuri.me**.
A static [Jekyll](https://jekyllrb.com/) site built on the
[Beautiful-Jekyll](https://beautifuljekyll.com/) theme and hosted on **GitHub Pages**.

> **Working with an AI coding agent?** Read **[CLAUDE.md](./CLAUDE.md)** /
> **[AGENTS.md](./AGENTS.md)** first — they document the stack, commands, content
> locations, conventions, and gotchas.

## Quick start

```bash
bundle install            # one-time: install dependencies

./rebuild.sh              # build the site into _site/  (bundle exec jekyll build)
python3 serve_local.py    # preview at http://localhost:4000
```

> `jekyll serve` does not work in this environment (Ruby built without OpenSSL +
> `webrick` removed from Ruby 3 stdlib). Use `serve_local.py`, which serves the
> built `_site/` with GitHub-Pages-style extension-less routing. See
> [CLAUDE.md](./CLAUDE.md) for details.

## Editing content

Almost everything on the portfolio page is data-driven from a single file:

- **`_data/portfolio.yml`** — skills, certifications, projects, talks, videos.
  Add an entry by copying an existing list item. See
  **[docs/CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md)**.

Other pages: `index.html` (home/hero), `aboutme.md` (about), `_posts/` (blog),
`_config.yml` (site config + navbar).

## Project layout

```
_config.yml            Site config + navbar
_data/portfolio.yml    Portfolio content (single source of truth)
_layouts/ _includes/   Beautiful-Jekyll theme templates
portfolio.html         Portfolio page (renders from _data/portfolio.yml)
index.html aboutme.md  Home and About pages
_posts/                Blog posts
css/ js/ img/          Assets (css/portfolio.css holds portfolio styles)
assets/certifications/ Certificate PDFs
CNAME                  Custom domain (single line: ramgsuri.me)
serve_local.py         Local preview server
rebuild.sh             Rebuild helper
docs/                  Documentation for humans and AI agents
```

## Deploying

GitHub Pages auto-builds and deploys on push to the `master` branch.

## Docker (alternative local dev)

A `Dockerfile` is included if you prefer container-based development:

```bash
docker build -t mysite "$PWD"
docker run -d -p 4000:4000 --name mysite -v "$PWD":/srv/jekyll mysite
# http://localhost:4000  — restart with `docker start mysite`
```

Restart the container after editing `_config.yml`.
