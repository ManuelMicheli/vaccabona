# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Vacca Bòna** is a Next.js 16 website for a butcher shop and restaurant in Casorezzo, Italy. The site showcases their meat selection, restaurant menu, and provides booking functionality. Built with React 19, TypeScript, TailwindCSS 4, and animation libraries (Framer Motion, GSAP, Lenis).

## Commands

### Development
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## Architecture

### Project Structure
```
app/                    # Next.js App Router pages
├── page.tsx           # Homepage with all sections
├── layout.tsx         # Root layout with fonts, metadata, SEO
├── actions.ts         # Server actions (booking form)
├── menu/              # Restaurant menu page
├── le-nostre-carni/   # Meat catalog page
├── globals.css        # Global styles
├── robots.ts          # Dynamic robots.txt
└── sitemap.ts         # Dynamic sitemap

components/            # Reusable UI components
├── animated-section.tsx    # Framer Motion scroll animations
├── LenisScroll.tsx        # Smooth scroll wrapper (GSAP + Lenis)
├── navbar.tsx             # Site navigation
├── footer.tsx             # Site footer
├── button.tsx             # Button component
├── product-card.tsx       # Butcher product cards
├── velocity-scroll.tsx    # Animated marquee text
└── infinite-marquee.tsx   # Infinite scrolling marquee

constants/
└── data.ts            # All site content (business info, products, menu, hours)

lib/
└── utils.ts           # Utility functions (cn for className merging)

public/
├── images/            # Product and gallery images
└── videos/            # Hero section videos
```

### Key Architectural Patterns

**App Router with RSC**: This project uses Next.js App Router. Pages are Server Components by default. Client Components are marked with `"use client"` and include interactive/animated components.

**Centralized Content**: All site content (business info, products, menu items, hours) lives in `constants/data.ts`. Update content there rather than hardcoding in components.

**Animation Stack**:
- **Lenis**: Smooth scroll provider wrapping all content in root layout
- **GSAP + ScrollTrigger**: Integrated with Lenis in `LenisScroll.tsx`
- **Framer Motion**: Component-level animations via `AnimatedSection` wrapper

**Server Actions**: Form submissions use Next.js Server Actions (`app/actions.ts`). Currently logs to console; designed for future CRM/email integration.

**Path Alias**: `@/*` maps to project root via `tsconfig.json`

**Styling**: TailwindCSS 4 with custom font variables:
- `--font-heading`: Oswald (headings)
- `--font-body`: Roboto (body text)
- `--font-bebas`: Bebas Neue (decorative)

**SEO**: Comprehensive metadata in `layout.tsx` including:
- OpenGraph and Twitter cards
- JSON-LD structured data for LocalBusiness and Restaurant schemas
- Canonical URLs and keywords
- Dynamic robots.txt and sitemap

### Component Patterns

**AnimatedSection**: Wrap sections for scroll-based fade-in animations. Props:
- `y`: vertical offset for initial position
- `delay`: animation delay
- `id`: section anchor ID

**LenisScroll**: Root-level wrapper that initializes smooth scrolling. Do not nest multiple instances.

**cn() utility**: Merge Tailwind classes using `cn()` from `lib/utils.ts` for conditional styling.

### Routing

- `/` - Homepage (all sections: hero, story, products, social, booking)
- `/menu` - Restaurant menu page
- `/le-nostre-carni` - Meat catalog page

Each route has its own `layout.tsx` for page-specific metadata.

## Development Notes

**React Compiler**: Enabled in `next.config.ts` with `reactCompiler: true`. Avoid manual memoization unless necessary.

**Fonts**: Google Fonts are loaded via `next/font/google` with `display: "swap"` for optimal performance.

**Images**: All images in `public/images/` are referenced from constants. When adding images, update `constants/data.ts`.

**Booking Flow**: `submitBooking` action in `actions.ts` is MVP - extends this for real booking integration (email, CRM, database).

**TypeScript**: Strict mode enabled. All types should be explicit. Use `const` assertions for readonly data.

**ESLint**: Uses Next.js recommended config. Run lint before committing.

**Animation Performance**: Lenis uses `lerp: 0.08` for smooth inertia. Adjust in `LenisScroll.tsx` if needed.
