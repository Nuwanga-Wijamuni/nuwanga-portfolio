# Nuwanga Wijamuni — Portfolio UI Design Plan

Prepared 12 October 2026. This is a design brief for the future portfolio, based on the supplied theme, existing content draft, portrait, and asset packs.

## The design idea

Your portfolio should feel like an AI engineer’s working notebook: precise, curious, and a little playful. The reference has that balance. Its typography carries the message; its technical marks give the page character; its holographic illustrations bring colour into a restrained surface.

I would preserve those three qualities and build a clear professional hierarchy around them. A visitor should quickly understand who you are, inspect something you built, and find a way to contact you. The artwork makes the portfolio recognizable while the project evidence does the persuading.

The direction is **large editorial typography, a light-grey canvas, crisp technical details, and selective holographic artwork**. The site should feel designed for your work.

## 1. The visitor journey

The main audience is a recruiter, hiring manager, or technical collaborator assessing your AI engineering work.

The opening screen answers who you are, what you build, and where to see your work. The next screen shows a concrete application. Experience and credentials then explain the background behind it.

The intended journey is: understand your focus, inspect a project, review your experience, then download the CV or make contact. That gives projects more prominence than a long biography or a wall of tool logos.

## 2. Visual language

### Colour

| Element | Proposed colour | Use |
|---|---|---|
| Main canvas | #ECECEB | Page background and most sections |
| Ink | #171717 | Headings, body text, primary buttons, meaningful diagrams |
| Secondary text | #575757 | Supporting descriptions and metadata |
| Quiet rule | #B5B5B1 | Decorative dividers and secondary grid lines |
| Strong rule | #171717 | Primary section boundaries and selected controls |
| Holographic palette | Cyan, lavender, pink, pale yellow, mint | Illustration interiors and occasional focal details |

Most of the interface stays monochrome. Colour is concentrated in one illustration or focal detail at a time. Essential information remains readable independently of the gradient.

### Typography

Use **Inter** for display and body text, paired with **IBM Plex Mono** for short technical labels. The main heading should be broad, strong, and tightly spaced. Paragraphs need a calmer rhythm.

| Role | Desktop starting point | Mobile starting point |
|---|---|---|
| Hero headline | 96–128 px | 46–58 px |
| Section headline | 44–60 px | 30–38 px |
| Project title | 26–32 px | 23–28 px |
| Body copy | 18 px | 16–17 px |
| Technical labels | 12–13 px | 12 px |

Refine these values against the actual copy. Headline tracking and line spacing can be tight; paragraph line spacing should be generous. Uppercase monospace text is reserved for categories, section numbers, and short annotations.

### Geometry

Use straight section boundaries, fine grid lines, mostly square cards, and compact outlined status pills. Circles belong in the technical graphics and holographic artwork. Buttons are substantial rectangles with clear labels.

Create depth through typography, spacing, images, and a small amount of overlap. Decorative shadows are unnecessary.

## 3. Layout foundation

Use a maximum content width of approximately **1440 px**, a 12-column desktop grid, and 24 px gutters. Start with 48 px outer spacing on large screens, 24 px on tablets, and 20 px on phones.

An 8 px spacing system keeps the rhythm consistent. Related text and labels sit close together; major sections have substantially more space.

Use eight columns on tablets and four on phones. Components should reflow when their content needs more space. Sections have natural heights; avoid forcing every screen into a full-viewport panel.

## 4. Page composition

### Header

Place “NUWANGA WIJAMUNI / AI ENGINEER” on the left, navigation in the middle, and “Download CV” on the right.

The navigation is **Work, About, Experience, Toolkit, Contact**. After the first scroll, keep the header available with an opaque light-grey surface and a fine bottom rule.

On a phone, show the name and a labelled menu button. Its expanded state opens a simple vertical list and closes after a selection. Expose the open state clearly to assistive technology.

### Hero

Give the text roughly seven columns and the artwork five. Use the headline:

> Knowledge.
> Into action.

Place your name and role above it, then a short introduction below it. Keep the paragraph narrower than the headline. Follow with a black **View Projects** button and a secondary **Let’s Talk** link.

The right side is a controlled composition of the AI brain sticker, a dot grid, one crosshair, and labels such as “AGENTIC AI,” “RETRIEVAL,” and “TOOL CALLS.” The brain is the focal element; other marks sit farther back in the hierarchy.

Use actual capability names. Decorative gauges remain clearly illustrative rather than appearing to report accuracy, confidence, or skill levels.

Place location and social links at the lower edge of the hero. Keep the large portrait for About so the opening screen has one clear visual focus.

### Selected work

Lead with **Skyward** as a full-width featured project. Give it a generous preview area and concise description, with its title, four to six technologies, and a **Demo & sandbox** label.

Arrange the remaining projects in a two-column grid:

| Row | Left card | Right card |
|---|---|---|
| 1 | Gourmet Express | Document RAG |
| 2 | Verifiable Medical RAG | Focus & Attention Tracker |

Every card follows the same hierarchy: preview, category, title, explanation, technologies, actions. Keep card copy brief; the full explanation belongs in the case study.

Use genuine screenshots where available. Otherwise, use an identifiable architecture illustration or project graphic. An illustrative diagram should not resemble a captured product screen.

The title and **View Case Study** action open the project detail page. **GitHub** is a separate, explicit action. Avoid a clickable card container with additional links nested inside it.

### Project detail pages

Each featured project gets a readable page with a **Back to Work** link, title, scope label, one-sentence summary, and repository action.

Arrange the detail content as: problem, what you built, system flow, key decisions, demonstrated behavior, and limitations or next steps. Include an architecture diagram and genuine screenshots where available.

Retain the same background and typography, but reduce decorative density. Readers should be able to concentrate on the engineering.

Video and live-demo actions appear when a real destination is available. Skyward stays labelled as a simulation. Research projects stay labelled as research.

### About

Place your supplied portrait on the left and a short professional introduction on the right. Use a rectangular frame with a modest technical caption: “NUWANGA / NEGOMBO, SRI LANKA.”

Keep the photo natural, with a comfortable crop around the face and shoulders. Use it once as the main portrait.

The text connects your data science background at MAS Holdings, data engineering at One Billion Tech, and current AI engineering work. Establish context and personality without repeating every CV bullet.

### Experience

Use a vertical timeline or editorial rows. On desktop, put the dates and organization in a narrow left column; put the role and achievements in the wider right column.

Each entry contains the role, organization, dates, a short summary, and three or four meaningful contributions. Preserve the supporting CV’s dates and contractual role wording.

Show the selected Snowflake query improvement within the One Billion Tech entry. Other entries emphasize the executive task-triage workflow, retrieval applications, forecasting, and business dashboards.

Keep this section typographic and easy to scan.

### Engineering approach

Use four compact modules: source grounding, traceable workflows, human approval, and repeatable evaluation.

Each has a short title, a small technical symbol, and one plain-language sentence. This connects the visual theme to how you work.

### Technical toolkit

Lead with approximately 12 relevant monochrome icons, then grouped tool names. Use categories for Agentic AI, Retrieval, Applications, Data, Cloud & Deployment, and Evaluation & Observability.

Use holographic badges selectively—for example, as a NVIDIA highlight. Keep technology names visible. The projects should demonstrate the tools’ use; percentage proficiency bars are unnecessary.

### Additional work and NVIDIA research

Use quieter, compact rows for Company Brain, e-commerce retrieval, hybrid memory, GeoNIM, and DGX Spark research. Each identifies the work’s category and status.

A concise NVIDIA subsection connects your Agentic AI training, NIM work, and DGX Spark research direction. Use the agent-network sticker as its visual accent.

Work without reviewed public code uses a **Discuss this work** contact action. Present DGX Spark as infrastructure research.

### Education and credentials

Use clean rows or small neutral panels. Each contains the credential name, organization, date or completion status, and a verification link when supplied.

Give the degree and AWS certification strong visibility. Keep NVIDIA wording aligned with the supporting credential. Put the Datathon and ML Nexus awards below them.

### Contact and footer

Finish with generous typography:

> Let’s build useful AI.

Include a short invitation, email, and GitHub, LinkedIn, and X links. The first version can use a direct email action. Add a contact form when message delivery is implemented and verified.

Keep the footer compact, with your name, role, and a return-to-top link.

## 5. Interaction and motion

Motion should make the interface responsive without becoming its main attraction.

| Element | Proposed behavior |
|---|---|
| Main button | Clear hover and focus changes; optional short arrow movement |
| Project preview | Small scale change inside its frame on hover, paired with a focus treatment |
| Project card | Subtle emphasis of border and title; actions remain visible |
| Section entrance | Small upward movement and brief fade over about 300–400 ms, once per section |
| Hero brain | Optional slow movement of about 6 px over 7–8 seconds |
| Technical decorations | Mostly static |
| Navigation | Ordinary section movement that accounts for the sticky header |

Disable decorative movement for reduced-motion preferences. Keep hero artwork static on phones. Text and actions remain available immediately, including before animation runs.

Use native scrolling and ordinary pointer behavior. The portfolio should remain polished with motion disabled.

## 6. Mobile design

The phone layout is a composition of its own.

The hero becomes one column: name, headline, introduction, actions, then compact artwork. The headline and actions retain priority.

Project cards stack vertically. The featured preview moves above the description, and technology tags wrap. The portrait sits above the About copy at a comfortable width.

Experience dates appear above the role. Toolkit icons use a small grid with visible labels; credential rows stack naturally. The contact email must fit without clipping.

Aim for comfortably tappable targets around 44 px. Check 320, 390, 768, 1024, and 1440 px layouts, plus increased text sizes.

## 7. Existing asset placement

| Asset | Planned location |
|---|---|
| AI brain sticker | Hero |
| Cloud sticker | Cloud/deployment accent near toolkit or a related case study |
| Agent-network sticker | Additional work or NVIDIA research |
| Crosshair and corner markers | Sparse registration details |
| Dot grid and binary matrix | Supporting hero texture |
| Workflow and retrieval diagrams | Case studies and engineering approach |
| Monochrome technology icons | Toolkit and project labels |
| Holographic technology badges | A small number of highlights |
| Supplied portrait | About |
| Supplied CV | Download action |

Decoration must not overlap text, obscure links, or capture pointer events. Mark purely decorative imagery appropriately for assistive technology.

## 8. Accessibility and performance

Use semantic headings, real links and buttons, visible keyboard focus, and an accessible mobile menu. Keep secondary text readable against its background. Essential information does not depend on hover or colour.

Case studies need a readable text measure, clear structure, and useful alternative text for diagrams. Explain important workflows in text as well.

Preserve project scope labels, correct repository links, and supported credential wording. Show live-demo links when verified.

Use SVG for technical graphics and appropriate raster formats for screenshots and stickers. Set image dimensions to limit layout jumps, load below-the-fold images when needed, and keep initial artwork modest in file size.

The layout remains readable when motion is disabled, an image fails to load, or the visitor enlarges text.

## 9. Design-to-implementation sequence

1. **Content map:** Use the existing portfolio copy and preserve its project status labels.
2. **Wireframes:** Arrange the desktop homepage, phone homepage, and one project detail page with real text.
3. **Visual design:** Refine type, spacing, hero composition, project previews, and portrait treatment.
4. **Component states:** Define navigation, buttons, cards, tags, timeline rows, credentials, and hover/focus/menu behavior.
5. **Implementation:** Translate this direction into the planned React, TypeScript, Vite, custom CSS, and Motion setup.
6. **Pre-deployment review:** Inspect responsive layouts, keyboard use, reduced motion, image behavior, CV download, social links, and case studies.

This pass produces the plan and an illustrative opening layout. It does not implement or publish the website.

## Completion criteria

The design succeeds when the opening screen identifies you clearly as an AI Engineer; the first project is easy to inspect; your portrait and experience establish the person behind the work; the theme remains recognizable on a phone; and making contact or downloading the CV takes little effort.

Reference material: the theme image supplied in this turn, the existing Nuwanga_Portfolio_Content.md, your portrait, and the previously created SVG, sticker, and technology icon packs.
