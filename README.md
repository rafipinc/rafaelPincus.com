# Rafi Pincus, portfolio

Single-page portfolio site for Rafael (Rafi) Pincus: Pub Thursdays, the deal-ingestion pipeline behind it, Bookkeeper, and Suncorp experience.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4 (CSS-first config in `app/globals.css`, no tailwind config file) + a hand-installed shadcn Button. Fully static, no API routes.

## Develop

```bash
npm install
npm run dev
```

## Edit content

All copy, stats, links, and video IDs live in `lib/content.ts`. Components only render from it.

- **Video IDs:** set `video.demoId` and `video.fullId` in `lib/content.ts` to the unlisted YouTube IDs. While `demoId` is null the facade shows a designed poster; the full-walkthrough link only appears when `fullId` is set.
- **App Store link:** set `links.appStore` to the real URL. Until then the CTA renders disabled with a "Link coming soon" title.
- **Pipeline slide:** replace `public/pipeline_slide.svg` with the real slide, keeping the same filename (1600x900).

## Deploy

Deploys as-is on Vercel. Update `metadataBase` in `app/layout.tsx` once the final domain is known.
