# Handoff: Tanush Obili — Personal Portfolio Site

## Overview
A single-page portfolio for Tanush Obili (aspiring SWE, agent infra / full-stack ML), targeting recruiters and hiring managers. Dark midnight-navy theme, three-column layout (fixed left nav, scrolling center content, fixed right rail with clock + socials). Intended domain: `tanushobili.me`.

## About the Design Files
The bundled file (`Portfolio.dc.html`) is a **design reference built in HTML** — a working prototype showing exact layout, copy, spacing, colors, and interaction/motion behavior. It is not production code to drop in as-is. The task is to **recreate this design in your target stack** (e.g. React/Next.js, Vue, or plain static site — whichever this project already uses, or the best fit if starting fresh), using the measurements and behavior documented below and visible in the file.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final as designed. Recreate pixel-close using your own component/styling system (Tailwind, CSS modules, styled-components, etc.) rather than copying the inline styles verbatim.

## Layout — Page Shell
Three-column flex row, full height:
- **Left sidebar**: `152px` fixed width, `position: sticky; top: 0`, full `100vh` height, `border-right: 1px solid #16203a`. Contents (top → bottom, `justify-content: space-between`): logo mark (SVG "T"+"O" monogram) linking to `#top`, a vertical nav (Intro / Experience — anchor links with scroll-spy highlighting), a "back to top" circular button.
- **Center column**: flexible width, `max-width: 920px`, centered, `padding: 10px 6px 80px`, vertical stack with `gap: 128px` between major sections.
- **Right sidebar**: `152px` fixed width, sticky, mirrors left sidebar structure: a live Pacific-time clock chip at top, then GitHub/LinkedIn/X icon buttons (44×44px, rounded, `border-radius:11px`) in a column.

## Screens / Sections (all on one scrolling page)

### 1. Hero / Intro (`#intro`)
- Full first-viewport height (`min-height: calc(100vh - 122px)`), centered vertically and horizontally.
- **H1**: "Hey, I'm **Tanush** 🤠" — serif (Lora), `clamp(40px, 5.4vw, 56px)`, weight 600, color `#e9eefb`, name span in `#FFFFFF` for emphasis.
- **Subheader**: "Computer Science + Data Science @ UC Berkeley" — Karla, 18px, weight 500, color `#7ea2ff`.
- Thin divider line (`1px`, `#1b2542`) under the subheader.
- Below: a 320×380px portrait photo (rounded 12px, bordered) side-by-side with 3 body paragraphs (19px, line-height 1.75, color `#8e9dbd`) covering: interests (AI/software engineering, agent infra, full-stack ML), personality/hobbies (recipes, backpacking, anime, sports, books), and a closing line with a hyperlinked email ("You can reach me via **email**" → `mailto:tanush.obili@berkeley.edu`, link color `#a8c4ff`, underlined).
- Layout wraps to stacked on narrow viewports (flex-wrap).

### 2. Experience (`#work`)
- Section header: small "01" pill badge (`#7ea2ff` on `#101c38`) + "What I've been doing" (Lora, 27px, weight 600) + one-line description.
- **Tab switcher** (client-side, no page nav): Experience / Stack / Projects — underline-style active tab (`border-bottom: 2px solid #7ea2ff`, active text `#e9eefb`; inactive `#5f6e90`).
  - **Experience tab**: card list — Spolm (open-source project, 2025–Present) and UC Berkeley (Computer Science, undergraduate), plus one dashed-border placeholder card inviting the user to add another role. Each card: icon/initial avatar (46px), title, meta row, and a nested detail panel with role + description.
  - **Stack tab**: responsive grid (`auto-fit, minmax(280px,1fr)`) of 8 tech items (Python, TypeScript, React & Vite, FastAPI, LangChain, Neo4j, Supabase, scikit-learn), each a 42px icon-tile + name + one-line description.
  - **Projects tab**: 5 project cards (Spolm, Talkode, Calendio, AIdentify, Careva), each with a screenshot slot (250×186px), title, external link chip, meta tags (category · stack · status), description, and a "View source ↗" GitHub link.

### Footer
Copyright line + GitHub/LinkedIn/X/Email text links, all Karla 14px weight 600, muted `#5f6e90` → `#e9eefb` on hover.

## Interactions & Behavior
- **Scroll-spy**: `IntersectionObserver` on `#intro` and `#work` toggles the active nav-link style (filled pill vs. dim/blurred inactive state) as the user scrolls.
- **Scroll-reveal**: every major section (`[data-reveal]`) fades up (`opacity 0→1`, `translateY(16px)→0`) on entering the viewport, staggered ~70ms per section, via `IntersectionObserver` (with a 2.6s fallback timer and a no-JS/no-IO fallback showing everything immediately).
- **Tab switch**: plain React-style state toggle, no route change, no animation — instant content swap.
- **Live clock**: right-rail chip updates every second, `America/Los_Angeles` timezone, `HH:MM:SS` 24h format.
- **Hover states**: nav icons/links lighten from `#8e9dbd`/`#5f6e90` to `#e9eefb`; cards get border-color highlight `#23325a` on hover.
- **Smooth anchor scrolling**: `html { scroll-behavior: smooth }`.
- No contact form — contact is via the mailto link in the hero copy and the footer/rail icons only.

## Design Tokens

**Colors**
- Background: `#080e1e` (page), `#0b1224` / `#0d1428` (card surfaces, two shades for depth)
- Borders: `#16203a` (structural), `#1b2542` / `#17213b` (card borders), `#23325a` (hover)
- Text: `#e9eefb` (headings/primary), `#dbe4f7` (card titles), `#8e9dbd` (body), `#5f6e90` (muted/meta), `#c3cfe8` (clock)
- Accent blue: `#7ea2ff` (primary accent — badges, active tab underline, icon tint), `#a8c4ff` / `#a9c2ff` (link color, lighter tint)
- Selection: background `#23407e`, text `#ffffff`

**Typography**
- Display/headings: **Lora** (serif), weights 500/600/700, italic 500 available
- Body/UI: **Karla** (sans), weights 400/500/600/700
- Monospace (inline code): `ui-monospace, SFMono-Regular, Menlo, monospace`
- Scale in use: 56px (H1 max) / 27px (H2) / 22px (H3/card titles) / 20px (sub-titles) / 19px (body) / 17px / 15px / 14px / 13px / 12px

**Spacing / radius**
- Section gap: 128px; intra-section gaps 12–36px
- Card radius: 14px (large cards), 12px (nested panels/grid tiles), 11px (avatars/icon buttons), 9px (nav pills/buttons)
- Sidebar width: 152px fixed both sides

## Assets
- **Portrait photo**: user-supplied, drag-and-drop placeholder in the source file (`id="tp-portrait"`) — replace with a real headshot.
- **Project screenshots**: 5 placeholder slots (`tp-proj-spolm`, `tp-proj-talkode`, `tp-proj-calendio`, `tp-proj-aidentify`, `tp-proj-careva`) — replace with real product screenshots.
- **Icons**: inline SVG (GitHub, LinkedIn, X/Twitter marks) — hand-authored, free to reuse/recreate.
- **Fonts**: Google Fonts — Karla (400/500/600/700) and Lora (500/600/700 + italic 500), loaded via `<link>`.
- **Logo mark**: custom inline SVG "T + O" monogram (two bars forming a T, a ring forming an O) in the top-left of the left sidebar.

## Content / Copy Reference
All real copy (bio, project descriptions, tech stack, experience entries) is written out in full inside `Portfolio.dc.html` — treat that as the source of truth for exact wording; do not paraphrase when rebuilding.

## Files in This Bundle
- `Portfolio.dc.html` — the full design reference (single file, inline-styled, contains all sections above).
- `image-slot.js` — a small custom element used only for the drag-and-drop placeholder behavior in this prototyping tool; **not needed** in the rebuilt app — replace those slots with your own `<img>`/`next/image` components.
