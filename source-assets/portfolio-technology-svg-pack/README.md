# Nuwanga Portfolio Technology SVG Pack

32 technologies, with two variants each:

- `icons/`: compact black SVGs with transparent backgrounds (24 × 24 viewBox).
- `badges/`: original holographic circular badges, black glyphs, technical marks, and labels (200 × 218 viewBox).
- `master.svg`: complete standalone SVG overview, on a light-grey surface.
- `master.png`: raster preview of the master sheet.
- `sprite.svg`: reusable symbols for all 32 compact icons.
- `preview.html`: local preview with search, category filters, and an icon/badge switch.
- `manifest.json`: technology names, categories, file paths, and source information.
- `SOURCES.md` and `licenses/`: source attribution and upstream licence texts.

## Technologies

Python, TypeScript, React, FastAPI, Flask, Streamlit, LangChain, LangGraph, LangSmith, Hugging Face, NVIDIA, Weaviate, ChromaDB, PostgreSQL, MySQL, Snowflake, SQLAlchemy, SQL, Docker, AWS, Google Cloud, Git, GitHub Actions, Kubernetes, MLflow, Prometheus, Grafana, Apache Airflow, Pandas, scikit-learn, OpenCV, and Power BI.

## React + Vite

Copy `icons/`, `badges/`, and optionally `sprite.svg` into `public/assets/technologies/`.

```tsx
<img
  src="/assets/technologies/icons/python.svg"
  alt="Python"
  width={40}
  height={40}
/>

<img
  src="/assets/technologies/badges/nvidia.svg"
  alt="NVIDIA"
  width={200}
  height={218}
  style={{ width: 160, height: 'auto' }}
/>
```

If a visible text label repeats the technology name, use `alt=""` on the icon so screen readers do not announce the name twice.

For SVG sprite use, inline the contents of `sprite.svg` once in a visually hidden container and reference a symbol:

```tsx
<svg width={40} height={40} viewBox="0 0 24 24" role="img" aria-label="Python">
  <use href="#tech-python" />
</svg>
```

Each symbol inherits `currentColor`. External `<img>` files use the root `color="#171717"`; changing your page's CSS `color` does not recolour those files. Edit the SVG root colour or use inline SVG for CSS-controlled colours.

## Editing and animation

The badges expose `.foil-disc` and `.technology-glyph` groups. Every badge gradient has a technology-specific ID. If you inline the same badge more than once, make its ID prefixes unique and update gradient references and `aria-labelledby` accordingly. SVGs preserve their sharpness at any size. Keep the aspect ratio and avoid stretching logos.

Motion can animate an entire badge `<img>` without changing the SVG. Internal SVG animation requires inline markup; rename XML attributes to JSX attributes. Prefer subtle hover rotation or movement, and respect reduced-motion settings. No animation dependencies are included in this pack.

## Provenance

27 source logos are adapted from Simple Icons and Devicon, with the upstream licence texts included. LangSmith, Weaviate, ChromaDB, and Power BI use original typographic labels; SQL uses a generic database symbol. These five are explicitly identified in the manifest and are not presented as official logos. The surrounding holographic badges and technical decoration are original SVG artwork. Brand names and marks belong to their respective owners; this pack describes a technology toolkit, not endorsements.

The technology selection follows the attached CV and the connected GitHub profile and flight-agent dependency file. It is a toolkit illustration, not a proficiency rating or certification claim.
