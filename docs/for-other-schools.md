# Using Field Atlas at another school

Field Atlas is a static website (no server, no accounts, no student data). Another school can run its own copy.

## 1. Change the school settings
Edit `config/school.js`:
- `name` and `city` — shown in the footer ("Made for …").
- `defaultCountry` — the first country students see: `lb` Lebanon, `gh` Ghana, `uk`, `na` (US & Canada), `eu` (France & Europe).

## 2. Check the facts for your students
The high-stakes facts are listed in `data/facts.json`. Before students use the site:
1. Run `python tools/check_data.py` — it checks sources, dates and links and writes `tools/facts-register.csv`.
2. Open the CSV in Excel or Google Sheets. For each fact set `status` to `teacher` (confirmed), `source` (matches an official source) or `unverified`, update `checked`, add a `note`.
3. Run `python tools/check_data.py --import` to copy your changes back.
Every page that shows these facts displays a "How sure is this information?" box with the status and the source.

Re-check every fact once a year, before the admissions season (exam rules, deadlines and fees change).

## 3. Publish
Upload these files to any static host (Netlify, GitHub Pages…): `index.html`, `app.js`, `features.js`, `styles-v2.css`, `sw.js`, `manifest.webmanifest`, `icon.svg`, `config/`, `data/`, `vendor/`.
On Netlify, turn on **Forms** so "Report a mistake" and "Share your story" submissions arrive in the dashboard (Forms → report / story). Review stories and add approved ones to `data/stories.js`.

## 4. Teaching materials inside the site
- `#/plan` — 45-minute lesson plan and printable exit tickets
- `#/test/guide` — teacher guide for the interest test
- `#/class` — class interest map for the projector
- `#/lesson/1` — present mode
- `#/worksheet` — printable worksheet
