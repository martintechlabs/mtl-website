# Martin Tech Labs Website - Agent Guide

This document serves as a guide for AI agents and developers working on the Martin Tech Labs website. It outlines the project structure, tech stack, and development conventions.

## 1. Project Overview

Martin Tech Labs is a fractional CTO service provider helping early-stage founders ship products fast and scale engineering teams. The website is a Next.js application designed to showcase services, case studies, and expertise.

## 2. Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript 5.6.3
- **React:** React 19.2.1
- **Styling:** Tailwind CSS 4.1.14
- **UI Library:** shadcn/ui (Radix UI primitives)
- **Routing:** Next.js App Router (file-based routing)
- **Icons:** Lucide React
- **Package Manager:** pnpm 10.4.1+
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics
- **Fonts:** Inter (sans-serif), Space Grotesk (mono) via Next.js font optimization

## 3. Project Structure

```
/
  /public              # Static assets (images, fonts, favicon)
    /images            # Image assets
  /src
    /app               # Next.js App Router pages
      /(site)          # Route group for main site pages
        /case-studies  # Individual case study pages
          /ai-transformation
          /rescue-ship
          /scale-up
          /team-turnaround
        /services      # Services page
        layout.tsx     # Site layout (Header + Footer wrapper)
        page.tsx       # Home/landing page
      layout.tsx       # Root layout (fonts, metadata, providers)
      providers.tsx    # Client-side providers (Toaster, Tooltip, ErrorBoundary)
      globals.css      # Global styles & Tailwind directives
      not-found.tsx    # 404 page
    /components        # Reusable UI components
      /ui              # shadcn/ui primitives (Button, Card, etc.)
      ErrorBoundary.tsx
      Footer.tsx       # Global footer
      Header.tsx       # Global navigation header
      Testimonials.tsx # Testimonial carousel
    /hooks             # Custom React hooks
      useComposition.ts
      useMobile.tsx    # Mobile breakpoint detection
      usePersistFn.ts
    /lib               # Utility functions
      utils.ts         # cn() and other utilities
```

## 4. Design System

**⚠️ IMPORTANT:** The authoritative design system specification is located in `DESIGN.md`.
Please refer to `DESIGN.md` for all details regarding:

- **Design Principles**
- **Design Tokens** (Colors, Typography, Spacing)
- **Tailwind Rules**
- **Component System** (Radix-First)
- **Interaction & Motion**
- **Accessibility Standards**

Do not duplicate design specifications here. `DESIGN.md` is the single source of truth.

## 5. Key Features & Implementation Details

### Navigation

- **Header:** Responsive component with a mobile drawer menu using Radix UI Sheet.
- **Routing:** Uses Next.js App Router with file-based routing.
- **Hash Scrolling:** `providers.tsx` includes hash scroll handling for anchor links (e.g., `/#about`) when navigating between pages.

### Case Studies

- Located in `/src/app/(site)/case-studies/`.
- Each case study is a separate route (e.g., `/case-studies/rescue-ship`).
- Each case study follows a consistent layout: Challenge, Solution, Results, and Technical Details.

### Assets

- Images are stored in `/public/images/`.
- **Logo:** `/images/logo.webp`
- **Favicon:** `/favicon.png` and `/favicon.ico`
- Uses Next.js `Image` component for optimized image loading.

### Custom Hooks

- `useIsMobile()`: Detects mobile breakpoint (768px) for responsive behavior.
- `useComposition.ts`: Composition-related utilities.
- `usePersistFn.ts`: Persistent function reference utilities.

## 6. Development Workflow

1.  **Install Dependencies:** `pnpm install`
2.  **Start Dev Server:** `pnpm dev` (runs on port 3000)
3.  **Build for Production:** `pnpm build`
4.  **Type Check:** `pnpm check` (TypeScript type checking)
5.  **Format Code:** `pnpm format` (Prettier)

## 7. Deployment

The project is configured for Vercel.

- **Build Command:** `pnpm build`
- **Output Directory:** `.next` (Next.js default)
- **Framework Preset:** Next.js (automatically detected)
- **Analytics:** Vercel Analytics is integrated via `@vercel/analytics/next`
- **Routing:** Next.js handles routing natively (no additional configuration needed)

## 8. Technical Notes

- **Client Components:** Components using hooks or browser APIs are marked with `"use client"`.
- **Server Components:** Default in App Router; used for static content and data fetching.
- **Font Optimization:** Uses Next.js `next/font/google` for automatic font optimization.
- **Theme:** Dark mode is set as default in root layout (`className="dark"`).
- **Error Handling:** ErrorBoundary component wraps the application in `providers.tsx`.

## 9. Future Improvements (To-Do)

- [ ] **Blog:** Add a blog section for technical insights.
- [ ] **Newsletter:** Integrate an email capture form.
- [ ] **SEO:** Enhance meta tags and Open Graph data for better social sharing.

---

_Last updated: January 2025_
