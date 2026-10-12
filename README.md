# Nuwanga Wijamuni — AI Engineer Portfolio

A complete React + TypeScript portfolio built from the supplied CV, reviewed GitHub projects, portrait, original SVG graphics, holographic artwork, and UI plan.

The design uses oversized typography, a light-grey background, technical diagrams, and selective holographic illustrations. The homepage includes five featured projects, experience, engineering principles, a toolkit, additional work, NVIDIA research, education, and contact details.

## Included

- Responsive homepage and five dedicated project case-study pages.
- A real CV download, GitHub / LinkedIn / X links, and an email-copy action.
- Accessible mobile navigation, native expandable project notes, keyboard focus, and reduced-motion support.
- Original project workflow illustrations, your portrait, three stickers, and all SVG packs.
- Self-hosted Inter and IBM Plex Mono fonts.
- Pre-rendered HTML for the homepage and each case study, plus a 404 page.
- Netlify configuration and a ready-built deployment folder.
- Original source assets, content/UI documents, image provenance, and third-party licences.

## Run on your computer

Install Node.js 22.12 or newer, which includes npm. If your terminal says “npm: command not found”, install Node first and reopen the terminal.

Open a terminal in the extracted project folder:

~~~bash
cd nuwanga-portfolio
npm ci
npm run dev
~~~

Open the local URL printed by Vite, normally http://localhost:5173.

The portfolio itself needs no API keys, backend service, database, or connected account.

## Build and check

~~~bash
npm run build
npm test
npm run check
npm run preview
~~~

The build performs TypeScript checking, creates the client bundle, renders the homepage and case studies into actual HTML files, and adds Netlify Drop configuration.

The tests exercise navigation, mobile-menu state, copy-email feedback, browser-history handling, and hydration of the actual pre-rendered homepage in a DOM test environment. Build first so the hydration test can read dist/index.html.

The check verifies every generated page, local asset and navigation target, the CV file, and deployment configuration. Visual browser layout QA is a separate check; consult docs/VALIDATION.md for the checks completed in this environment.

## Deploy to Netlify — quickest route

The supplied **dist/** folder is already built.

1. Extract the ZIP.
2. Sign in to Netlify and open https://app.netlify.com/drop.
3. Drag the **dist folder inside nuwanga-portfolio** into the drop zone.
4. Use the netlify.app URL that Netlify gives you.

Use the built dist folder for the simplest manual upload. Netlify Drop also supports detecting and building source projects when signed in, but the included build is ready to upload.

To publish a later change, run npm run build again and upload the updated dist folder on your site’s Deploys page.

## Deploy with GitHub

1. Create or choose your own GitHub repository.
2. Upload this project’s source files. Keep package-lock.json; exclude node_modules and dist.
3. Import that repository into Netlify.
4. Use build command **npm run build** and publish directory **dist**. The included netlify.toml supplies those settings.

Node 22 is selected in netlify.toml. All six page URLs resolve to real generated directories; a broad SPA rewrite is unnecessary.

## Set your domain for search and sharing

Once you know your public URL, set the environment variable **VITE_SITE_URL** to the origin, for example your actual https://…netlify.app address or custom domain.

For a local build, copy .env.example to .env.local and set that value. For a Git-based Netlify build, add it in the project’s environment settings. Rebuild afterwards.

This enables canonical URLs, absolute social-image metadata, and sitemap.xml. When no domain is supplied, the build leaves those out instead of guessing a URL. The provided ready-built folder uses no invented domain.

## Edit the content

| File | Purpose |
|---|---|
| src/data.ts | Profile links, projects, experience, technology names, credentials, and research summaries |
| src/App.tsx | Page sections, navigation, contact interaction, and case-study layout |
| src/components/ProjectVisual.tsx | Editable vector workflow illustrations |
| src/styles.css | Colours, typography, spacing, responsive layouts, and animation |
| public/ | Images, SVGs, favicon, and the downloadable CV |
| scripts/prerender.mjs | Static page rendering, metadata, sitemap, and Drop headers |
| scripts/verify-build.mjs | Production-output verification |
| docs/ | Content, UI plan, provenance, licences, and validation notes |
| source-assets/ | Original editable packs and supplied inputs |

To add a project, add it to the projects array in src/data.ts, create its illustration if needed, and update the slug list in scripts/verify-build.mjs. The pre-renderer automatically picks up project routes.

## Content scope

The supplied CV is the source for employment dates and credential wording. HSB is shown as a contract role starting October 2025. NVIDIA is listed as completed Agentic AI training. Update that entry when you want to include a confirmed professional credential and its verification link.

Skyward is a booking simulation. DGX Spark is infrastructure research. Other project boundaries are stated on their case-study pages. No live demo, benchmark result, certificate link, or GitHub activity count is invented.

## Asset and font licences

The original layouts, technical decorations, and project sketches are editable source code. Brand icon and font licences are included in docs/licenses. Typographic labels and generic symbols are identified in the original technology pack.

Generated sticker prompts and original image files are preserved in source-assets. Website copies are resized without artistic edits; details are recorded in docs/IMAGE_OPTIMIZATION.json.

## Reference documentation

- Vite on Netlify: https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/
- Netlify Drop and Git deployment: https://docs.netlify.com/manage/projects/add-new-project/
- Pretty URLs and redirect normalization: https://docs.netlify.com/manage/routing/redirects/redirect-options/

This package delivers source and a production build. It has not been uploaded to your Netlify account.
