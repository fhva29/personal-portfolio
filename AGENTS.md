# Repository Guidelines

## Project Structure & Module Organization

This repository is a static personal portfolio site. The main entry point is `index.html`, with global styling in `style.css` and all client-side behavior/content rendering in `script.js`. The site currently references external assets from CDNs for icons and fonts, and a local favicon at `src/favicon.png`. Keep new static assets under `src/` when they are introduced.

There is no dedicated test directory or build output folder at the moment. Avoid adding generated files or dependency folders unless the project is intentionally migrated to a toolchain.

## Build, Test, and Development Commands

- `python3 -m http.server 8000`: serves the site locally at `http://localhost:8000` for browser testing.
- `open index.html` or browser file open: acceptable for quick static checks when no server features are needed.
- `git status`: review changed files before handoff or commit.

No `npm`, bundler, or package manager workflow is configured. Do not introduce one for small HTML/CSS/JS edits unless the task requires it.

## Coding Style & Naming Conventions

Use two-space indentation in `index.html` and four-space indentation in `style.css` and `script.js`, matching the current files. Keep HTML section IDs descriptive and kebab-case, such as `sobre-mim` and `project-list`. Use class names that describe UI roles, for example `terminal-header`, `theme-btn`, and `project-list`.

Keep portfolio copy synchronized across the Portuguese and English entries in `script.js`. Prefer plain browser APIs over adding JavaScript dependencies.

## Testing Guidelines

There is no automated test suite. Validate changes manually in a browser after serving the site locally. Check both language modes, theme toggle behavior, responsive layout, external links, and console errors. For visual changes, test at least desktop and mobile-width viewports.

## Commit & Pull Request Guidelines

Recent history uses short, imperative or descriptive commits such as `feat: updates on text`, `Updates on projects`, and `Changes on design`. Prefer concise messages that name the changed area, for example `feat: update project copy` or `fix: adjust mobile header spacing`.

Pull requests should include a short summary, screenshots for visual changes, manual validation notes, and any affected links or portfolio sections. Link issues when available.

## Security & Configuration Tips

Do not commit secrets, private contact details beyond intended public portfolio content, or local editor files. When adding third-party CDN resources, prefer reputable sources and include only what the page actually uses.
