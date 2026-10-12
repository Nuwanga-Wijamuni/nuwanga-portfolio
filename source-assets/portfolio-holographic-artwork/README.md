# Nuwanga Portfolio Holographic Artwork

Three original AI-generated stickers inspired by your supplied theme:

1. **AI brain** — knowledge, reasoning, and retrieval.
2. **Cloud computing** — cloud infrastructure and deployment.
3. **Agent network** — collaborating AI agents and orchestration.

The set uses bold black outlines and cyan, lavender, pink, yellow, and mint holographic foil. Each asset is 1254 × 1254 pixels with a genuinely transparent alpha background. PNG files are unchanged generated originals; WebP files are losslessly encoded from them, with the same alpha and visible pixel content. These are raster illustrations, not SVG vectors.

## Folder

```text
portfolio-holographic-artwork/
  png/
    ai-brain.png
    cloud.png
    agent-network.png
  webp/
    ai-brain.webp
    cloud.webp
    agent-network.webp
  preview.html
  manifest.json
  prompts.json
  README.md
```

Open `preview.html` locally to see all three images against the light-grey theme.

## Add to React + Vite

Copy the files from `webp/` to `public/assets/stickers/` in your portfolio project.

```tsx
<img
  src="/assets/stickers/ai-brain.webp"
  alt=""
  aria-hidden="true"
  width={1254}
  height={1254}
  style={{ width: 240, height: 'auto' }}
/>
```

For decorative images, use empty alt text and `aria-hidden`. If an image communicates meaningful content, provide descriptive alt text instead.

Recommended displayed size: roughly 160–300 CSS pixels. Keep the aspect ratio and use `object-fit: contain`; do not stretch. The unused area around each subject remains transparent so the image can sit over your page layout. Keep the black outlines readable on a light background.

## Gentle animation with Motion for React

Use this example after installing Motion in your portfolio project:

```tsx
import { motion, useReducedMotion } from 'motion/react';

export function BrainSticker() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.img
      src="/assets/stickers/ai-brain.webp"
      alt=""
      aria-hidden="true"
      width={1254}
      height={1254}
      style={{ width: 240, height: 'auto' }}
      animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
```

Use slow, small movements. Reserve stronger interaction for project cards and buttons. No React or animation dependency is bundled here.

## Creation specifications

Generated with the built-in image generation tool; the exact prompts for all three assets are in `prompts.json`. The supplied screenshot served as a style reference. No company logos, written claims, or performance metrics are embedded in the artwork.
