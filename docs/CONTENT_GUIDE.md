# Content guide — editing the portfolio

All portfolio content lives in one file: **`_data/portfolio.yml`**. Edit it, then
rebuild (`./rebuild.sh`) and refresh the preview (`python3 serve_local.py`).

Indentation is 2 spaces and matters. Each `- ` starts a new list item.

## Add a certification

```yaml
certifications:
  - title: "AWS Certified Solutions Architect – Associate"
    issuer: "Amazon Web Services"
    date: "Mar 2025"
    url: "https://www.credly.com/badges/your-badge-id"   # optional verification link
    image: "/img/portfolio/certs/aws-saa.png"            # optional badge image
    pdf: "/assets/certifications/aws-saa.pdf"            # optional certificate PDF
```

Put badge images in `img/portfolio/certs/` and PDFs in `assets/certifications/`.

## Add a project

```yaml
projects:
  - title: "Green Carbon Hackathon"
    description: "One-line summary of what it does."
    url: "https://github.com/ramgsuri/your-repo"
    tags: ["Sustainability", "Open Source", "Hackathon"]
    image: "/img/portfolio/projects/green-carbon.png"    # optional
    featured: true                                       # optional: highlight & sort first
```

## Add a talk

```yaml
talks:
  - title: "Your AWS Talk Title"
    event: "AWS Community Day"
    date: "Nov 2024"
    url: "https://link-to-slides-or-recording"           # optional
    image: "/img/portfolio/talks/aws-talk.jpg"           # optional
```

## Add a video

Use the 11-character YouTube id from `https://www.youtube.com/watch?v=VIDEO_ID`.
Thumbnails are fetched automatically.

```yaml
videos:
  channel_url: "https://www.youtube.com/@your-channel"
  list:
    - id: "dQw4w9WgXcQ"
      title: "Spring Boot in 10 minutes"
      topic: "Spring"
```

## Edit skills

```yaml
skills:
  - group: "AI & Agentic AI"
    icon: "fas fa-robot"          # any Font Awesome 6 class
    items: ["LLMs", "RAG", "MCP"]
```

## Other pages

- Home hero / typed tagline: `index.html`
- About bio: `aboutme.md`
- Navbar: `navbar-links` in `_config.yml` (restart/rebuild after changing config)
- Blog posts: add Markdown files under `_posts/` (`YYYY-MM-DD-title.md`)
