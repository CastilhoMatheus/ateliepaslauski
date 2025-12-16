# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Ateliê Paslauski** is a Next.js 16 e-commerce site for an art studio selling original paintings, limited editions, and miniatures. The site features a filterable artwork grid, featured hero, shopping cart, and informational sections (about, journal, contact).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: v19 (using React 19 features)
- **Styling**: Tailwind CSS v4
- **Fonts**: Manrope (sans-serif), Playfair Display (display/serif)
- **Linting/Formatting**: Biome (replaces ESLint + Prettier)
- **TypeScript**: Strict mode enabled
- **Image Optimization**: Next.js Image component with Unsplash remote patterns configured

## Development Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint and check code
npm run lint

# Format code
npm run format
```

## Architecture

### State Management Pattern

This app uses **client-side React state** at the page level (`src/app/page.tsx`). The home page is a "use client" component that manages:

- **Cart state**: Array of `{ artId: string; quantity: number }`
- **Filter state**: Active filter ID for artwork grid
- **Cart panel visibility**: Boolean for drawer open/closed

State is passed down through props to child components. There is no global state library (Redux, Zustand, etc.).

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with font setup
│   ├── page.tsx            # Home page (main cart + artwork logic)
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   └── journal/page.tsx    # Journal page
├── components/
│   ├── artwork/            # Artwork-specific components
│   ├── cart/               # Cart panel
│   ├── layout/             # Header, footer
│   ├── sections/           # Page sections (hero, grid, previews)
│   └── ui/                 # Reusable UI primitives (button, badge, card)
├── lib/
│   ├── data.ts             # Static artwork and journal data
│   └── utils.ts            # cn() utility for className merging
└── app/globals.css         # Global styles + CSS custom properties
```

### Data Layer

All content is statically defined in `src/lib/data.ts`:

- **artworks**: Array of `Artwork` objects (id, title, series, price, medium, size, tag, image, featured flag)
- **journalEntries**: Array of simple journal entry objects

This is **not** connected to a CMS or API. To add/edit artwork, modify `data.ts` directly.

### Component Organization

Components are organized by responsibility:

- **ui/**: Generic, reusable primitives (Button, Badge, Card) with variant support
- **sections/**: Composed page sections that import from ui/ and artwork/
- **layout/**: Site-wide layout components (SiteHeader, SiteFooter)
- **cart/**: Cart-specific UI (CartPanel)
- **artwork/**: Artwork display logic (ArtworkCard)

### Styling Conventions

- **Tailwind v4 syntax**: Uses `@import "tailwindcss"` in globals.css
- **CSS custom properties**: Defined in `:root` and exposed via `@theme inline`
- **Font variables**: `--font-sans` and `--font-display` set in layout.tsx
- **Color palette**: Earthy tones (slate, lime, indigo) with custom accent colors per artwork
- **Backdrop effects**: Radial gradients and blur effects for visual depth

### Image Handling

- Next.js `<Image>` component with `fill` or explicit dimensions
- Remote patterns configured for `images.unsplash.com` and `plus.unsplash.com` in `next.config.ts`
- Always provide `alt` text and `sizes` attribute for responsive images

### TypeScript Patterns

- Path alias `@/*` maps to `src/*`
- Strict mode enabled
- Export types alongside components (e.g., `FilterId`, `Artwork`)
- Use `type` imports where possible: `import type { Metadata } from "next"`

## Key Implementation Notes

### Cart Logic (src/app/page.tsx)

- Cart starts with one item pre-added (artworks[2]) and panel open by default
- `addToCart`: Increments quantity if exists, otherwise adds new entry
- `removeOne`: Decrements quantity, removes if reaches 0
- `deleteFromCart`: Removes item entirely
- Cart automatically opens when items are added

### Filter Logic (src/components/sections/artwork-grid.tsx)

- Filters: "all", "Original", "Edition", "Miniature"
- Filtering happens client-side via `useMemo`
- Active filter highlighted with `variant="default"` button style

### Featured Artwork

- First artwork with `featured: true` in data.ts is used for FeaturedHero
- Falls back to artworks[0] if no featured flag set

## Biome Configuration

Biome replaces ESLint and Prettier. Configuration in `biome.json`:

- **Formatter**: 2-space indentation
- **Linter**: Recommended rules for React and Next.js
- **VCS Integration**: Git-aware, respects .gitignore
- **Import Organization**: Auto-organize imports enabled

When adding new code, Biome will auto-format on save if your editor is configured.

## Common Patterns

### Adding a New Artwork

1. Add object to `artworks` array in `src/lib/data.ts`
2. Set `featured: true` if it should be the hero
3. Provide all required fields (id, title, series, description, price, medium, size, tag, accent, image)

### Creating a New UI Component

1. Place in appropriate folder under `src/components/`
2. Use TypeScript with explicit prop types
3. Import `cn()` from `@/lib/utils` for conditional className merging
4. Follow existing variant patterns (see Button, Badge for examples)

### Adding a New Page

1. Create folder under `src/app/` (e.g., `src/app/shop/`)
2. Add `page.tsx` in that folder
3. Next.js will auto-route based on folder structure
