# Portfolio assets

The deliverable includes every original asset pack from this conversation and the supplied portrait and CV. Website copies are in `public`; editable and full-resolution sources are in `source-assets`.

## Website paths

| Asset | Website path | Size / format |
| --- | --- | --- |
| Portrait | `/assets/portrait.webp` or `/assets/portrait.png` | 800 × 800, lossless |
| CV | `/Nuwanga_Wijamuni_AIEngineer.pdf` | Original supplied PDF |
| AI brain | `/assets/stickers/ai-brain.webp` or `.png` | 700 × 700, transparent |
| Cloud | `/assets/stickers/cloud.webp` or `.png` | 700 × 700, transparent |
| Agent network | `/assets/stickers/agent-network.webp` or `.png` | 700 × 700, transparent |
| Technical decoration / diagrams | `/assets/graphics/<name>.svg` | 17 scalable graphics |
| Technology icons | `/assets/technologies/icons/<slug>.svg` | 32 scalable icons |
| Technology badges | `/assets/technologies/badges/<slug>.svg` | 32 holographic SVG badges |

The resized PNG stickers are smaller than the lossless WebP copies, so use either format. PNG and WebP are both included for easy reuse. The photograph has no transparency; the three stickers retain alpha transparency.

## Original packs

- `source-assets/portfolio-svg-assets/`: 17 SVGs, manifest, preview HTML, scalable preview SVG, and React usage notes.
- `source-assets/portfolio-technology-svg-pack/`: 64 SVGs, editable `master.svg`, `sprite.svg`, manifest, preview HTML, original usage notes, provenance, and licence texts.
- `source-assets/portfolio-holographic-artwork/`: full-resolution 1254 × 1254 PNG/WebP stickers, exact generation prompts, manifest, preview HTML, and usage notes.
- `source-assets/inputs/`: supplied theme references, profile text, portrait, and CV, unchanged.

Redundant raster overview PNGs are omitted. The editable SVG master and all original individual graphics are included.

## Provenance and limitations

Technology-logo attribution and source URLs are in `TECHNOLOGY_ASSET_SOURCES.md`. Original licence texts are retained in `licenses/`. LangSmith, Weaviate, ChromaDB, and Power BI are typographic or generic representations from the source pack, rather than official logo artwork. Trademark ownership remains with the corresponding companies.

Original technical drawings and holographic stickers were created for this portfolio theme. The stickers are raster illustrations, not SVGs. Exact sticker-generation prompts are retained with the original pack.

Gauge needle positions, distribution bars, matrices, rulers, and branch graphics are illustrative decoration. They must not be presented as measured accuracy, project statistics, skill percentages, or live repository history. Concept diagrams describe general workflows; use a project-specific labelled diagram for a factual case study.

`ASSET_MANIFEST.json` lists every public copy with its byte size, SHA-256 hash, website URL, and original source. `IMAGE_OPTIMIZATION.json` records the aspect-preserving resizing and lossless encoding used for website copies. No artwork was cropped or redrawn during optimization.

Use `alt=""` and `aria-hidden="true"` for decorative images. Use descriptive alt text for the portrait and factual diagrams. Reserve space with explicit image dimensions to prevent layout shift.
