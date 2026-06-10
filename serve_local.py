#!/usr/bin/env python3
"""Local preview server for the built Jekyll site (_site).

Mimics GitHub Pages' extension-less routing so URLs like /portfolio and
/aboutme work the same locally as in production. Run from the repo root:

    bundle exec jekyll build && python3 serve_local.py

Then open http://localhost:4000
"""
import http.server
import os
import socketserver

PORT = 4000
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_site")


class PagesHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        full = super().translate_path(path)
        # If the exact path doesn't exist, try the GitHub Pages fallbacks:
        #   /portfolio        -> /portfolio.html
        #   /portfolio        -> /portfolio/index.html
        if not os.path.exists(full) or os.path.isdir(full):
            if os.path.isfile(full + ".html"):
                return full + ".html"
            index = os.path.join(full, "index.html")
            if os.path.isfile(index):
                return index
        return full


with socketserver.TCPServer(("127.0.0.1", PORT), PagesHandler) as httpd:
    print(f"Serving {ROOT} at http://localhost:{PORT}")
    httpd.serve_forever()
