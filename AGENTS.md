# AGENTS.md

This repository follows the [AGENTS.md](https://agents.md) convention for AI coding agents.

The full project guide — stack, build/preview commands, where content lives, conventions,
and known gotchas — is maintained in **[CLAUDE.md](./CLAUDE.md)**. Please read it first.

## TL;DR

- Static **Jekyll** site (Beautiful-Jekyll theme) on **GitHub Pages**, live at https://ramgsuri.me
- Build: `./rebuild.sh` (`bundle exec jekyll build`)
- Preview: `python3 serve_local.py` → http://localhost:4000  (`jekyll serve` is broken here — see CLAUDE.md)
- Edit portfolio content in **`_data/portfolio.yml`** (single source of truth)
- Never edit `_site/` (generated). Keep `CNAME` a single line. No backend — keep it static.
- Commit/push only when asked; GitHub Pages auto-deploys on push to `master`.
