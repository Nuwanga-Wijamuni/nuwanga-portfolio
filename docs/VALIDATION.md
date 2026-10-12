# Validation

Completed for the delivered source and production build.

## Passed

- TypeScript strict checking, including application and test source.
- Vite client production build.
- Vite server-rendering build and static page generation.
- Homepage, five project case studies, and the not-found page contain pre-rendered HTML.
- Nine DOM interaction tests:
  - Opening the mobile menu and closing with Escape, restoring focus.
  - Navigating from a project card to its case study and back to selected work.
  - Following the next case study and returning with browser Back.
  - Closing the menu after selecting a section.
  - Copy-email success feedback.
  - Useful email fallback when copying fails.
  - Unknown-route handling.
  - Popstate route changes.
  - Hydration of the actual production homepage without a recoverable mismatch.
- Production verification: seven HTML pages, 177 local navigation and asset targets, homepage section anchors, PDF signature, client JavaScript, and Netlify configuration.
- The original asset preparation validated the 81 provided technical and technology SVG files and preserved transparent sticker backgrounds.

## Verification limits

The DOM tests validate application behavior, not visual rendering. Full browser layout, pointer behavior, keyboard traversal, clipboard permissions, and mobile-device QA were unavailable in this execution environment. No Netlify deployment or production-host request was made.

Optional canonical metadata and sitemap generation are configured for a supplied VITE_SITE_URL. The delivered build intentionally has no guessed public URL.

Project descriptions come from the supplied CV and reviewed repository documentation or code. The portfolio tests do not run or certify the five separate project applications.

## Reproduce locally

Run npm ci, npm run build, npm test, and npm run check from the project root. Use npm run dev or npm run preview for a browser walkthrough.
