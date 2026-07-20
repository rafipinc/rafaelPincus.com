# Rafi Pincus, portfolio

Single-page portfolio site for Rafael (Rafi) Pincus: Pub Thursdays, the deal-ingestion pipeline behind it, skills and AI tooling, and Suncorp experience.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4 (CSS-first config in `app/globals.css`, no tailwind config file) + a hand-installed shadcn Button. Fully static, no API routes.

## Develop

```bash
npm install
npm run dev
```

## Edit content

All copy, stats, links, and video IDs live in `lib/content.ts`. Components only render from it.

- **Video ID:** set `video.id` in `lib/content.ts` to the YouTube ID of the 5-minute walkthrough. While it is null the facade shows a designed poster.
- **App Store link:** set `links.appStore` to the real URL. Until then the CTA renders disabled with a "Link coming soon" title.
- **Pipeline slide:** replace `public/pipeline_slide.svg` with the real slide, keeping the same filename (1600x900).

## Deploy

Deploys as-is on Vercel at https://rafaelpincus.com (DNS on Cloudflare: apex + www CNAMEs to Vercel, proxy off). `metadataBase` in `app/layout.tsx` points at the custom domain.
