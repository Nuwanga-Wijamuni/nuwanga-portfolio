# Nuwanga Portfolio SVG Assets

17 original SVG graphics based on your light-grey, black-outline technical reference. The assets have transparent backgrounds. No external images, fonts, libraries, scripts, or network requests are required.

## Folder

```text
portfolio-svg-assets/
  svg/             17 individual graphics
  preview.html     Open locally to inspect and download assets
  preview.png      A visual overview
  preview.svg      Scalable source for the overview
  manifest.json    File names, dimensions, descriptions, and categories
  README.md        This guide
```

## Use in your React + Vite portfolio

Copy the `svg` folder into `public/assets/svg/` in your project.

Decorative graphics:

```tsx
<img
  src="/assets/svg/crosshair.svg"
  alt=""
  aria-hidden="true"
  width={48}
  height={48}
/>
```

Meaningful diagrams:

```tsx
<img
  src="/assets/svg/ai-workflow.svg"
  alt="Agent workflow: question, retrieval, reasoning, human review, and tool action; revisions return to retrieval."
  style={{ width: '100%', height: 'auto' }}
/>
```

Keep the aspect ratio with `height: auto` and avoid stretching. Diagrams with text are better suited to a wide card; at phone sizes, place them in a horizontally scrollable container so the labels remain readable.

```css
.diagram-scroll { overflow-x: auto; }
.diagram-scroll img { min-width: 560px; width: 100%; height: auto; }
```

## Colours and editable parts

The root `color="#171717"` sets the ink. Change it to recolour an SVG. Text uses a local monospace font stack. Diagrams use `fill="#ececeb"` on nodes to mask lines behind labels; change that fill when placing the diagram over a different surface.

An SVG loaded through `<img>` does not inherit your page's `currentColor`. For CSS-controlled colours or animation of internal elements, convert the SVG to an inline React component. Rename XML attributes to React JSX attributes (`class` → `className`, `stroke-width` → `strokeWidth`, and so on). Give title/description IDs unique prefixes if you render the same inline SVG more than once.

Animation hooks include `.orbit-nodes`, `.grid-dots`, `.matrix-cells`, `.gauge-needle`, `.gauge-fill`, `.ruler-pointer`, `.distribution-bar`, `.workflow-node`, `.workflow-edge`, `.feedback-edge`, `.retrieval-node`, `.retrieval-edge`, `.index-orbit`, `.feature-branch`, `.circuit-orbit`, and `.compass-pointer`.

Motion for React can animate an entire `<img>` without conversion. Internal animation requires inline SVG. Keep movements subtle; disable decorative motion for visitors who request reduced motion. No animation package is included in this asset folder.

## Assets

- `svg/crosshair.svg` — Registration crosshair (96 × 96).
- `svg/orbit-rings.svg` — Orbital circles (220 × 220).
- `svg/dot-grid.svg` — Dot grid (124 × 124).
- `svg/binary-matrix.svg` — Binary circle matrix (178 × 156).
- `svg/globe.svg` — Wireframe globe (120 × 120).
- `svg/radial-gauge.svg` — Radial gauge (220 × 210).
- `svg/linear-gauge.svg` — Linear signal gauge (300 × 102).
- `svg/measurement-ruler.svg` — Measurement ruler (400 × 56).
- `svg/distribution-bars.svg` — Distribution bars (310 × 204).
- `svg/barcode-strip.svg` — Technical stripe (300 × 62).
- `svg/corner-markers.svg` — Corner frame (240 × 160).
- `svg/output-pill.svg` — Output label (120 × 46).
- `svg/ai-workflow.svg` — AI agent workflow (700 × 166).
- `svg/retrieval-network.svg` — Retrieval network (480 × 240).
- `svg/branch-workflow.svg` — Branch workflow (330 × 263).
- `svg/circuit-orbit.svg` — AI circuit orbit (260 × 260).
- `svg/compass-ring.svg` — Compass ring (220 × 154).

## Sample graphics

Gauge positions, matrix patterns, distribution bar lengths, and ruler positions are decorative examples. They are not claims about Nuwanga's project accuracy, reliability, skills, or performance. Replace them with verified data before using them as metrics. Branch and AI workflow diagrams illustrate concepts rather than deployed architecture or real repository history. The stripe motif does not encode a machine-readable barcode.

## Reference and scope

These are original code-created graphics inspired by the technical style of the supplied image. Holographic stickers, photographs, certificate artwork, and the portfolio website are separate assets and are not included in this SVG pack.
