export type Stat = {
  value: string;
  label: string;
};

export type PipelineStep = {
  heading: string;
  body: string;
};

export const site = {
  name: "Rafael Pincus",
  nickname: "Rafi",
  oneLiner:
    "Software engineer, 5 years shipping iOS at Suncorp. I build AI-powered products end to end.",
  location: "Sydney, Australia",
} as const;

export const links = {
  // TODO: real App Store URL pending. Set it here and the CTA + hero icon go live.
  appStore: null as string | null,
  // TODO: verify GitHub handle.
  github: "https://github.com/rafipincus",
  linkedin: "https://linkedin.com/in/rafael-pincus",
  email: "rafi.pincus@gmail.com",
} as const;

export const video: { demoId: string | null; fullId: string | null } = {
  // Swap in the unlisted YouTube IDs when the videos are up.
  // The facade shows a designed poster while demoId is null.
  demoId: null,
  fullId: null,
};

export const pubThursdays = {
  kicker: "01 · Flagship project",
  heading: "Pub Thursdays",
  sub: "Live on the App Store since April 2026.",
  body: "An iOS app for social groups that run a recurring pub night. Pub rotation, ratings, leaderboards, invites, card votes, and APNs reminders. Behind it sits a deal-ingestion pipeline that keeps the venue catalog current without a content team.",
  demoVideoTitle: "Pub Thursdays demo, 90 seconds",
  fullVideoLabel: "Watch the full 5-minute walkthrough",
  stats: [
    { value: "576", label: "approved deals" },
    { value: "122", label: "venues covered" },
    { value: "136/136", label: "pipeline runs succeeded" },
    { value: "0.93", label: "avg extraction confidence" },
  ] satisfies Stat[],
  pipelineImage: {
    src: "/pipeline_slide.svg",
    alt: "Architecture overview of the Pub Thursdays deal-ingestion pipeline: scheduled Edge Functions with rule-based filtering, then Gemini structured extraction with confidence scoring and dedupe, then a human review queue writing approved deals to Postgres with row-level security.",
    caption: "Deal ingestion pipeline, architecture overview.",
    width: 1600,
    height: 900,
  },
  cta: "View on the App Store",
  ctaPendingTitle: "Link coming soon",
  techLine:
    "SwiftUI · Supabase (Postgres, RLS, Edge Functions) · Deno/TypeScript · Gemini API",
} as const;

export const pipeline = {
  kicker: "02 · Pipeline",
  heading: "How the pipeline works",
  steps: [
    {
      heading: "Deterministic first",
      body: "Scheduled Deno and TypeScript Edge Functions pull deal content from venue websites and PDFs across a catalog of 506 Sydney venues. Rule-based pre-filtering handles the cheap, predictable extraction before any LLM is invoked, which keeps model spend on the pages that actually need it.",
    },
    {
      heading: "LLM extraction with guardrails",
      body: "Gemini handles structured extraction with server-side API keys and response caching to control spend. Every extracted deal gets a confidence score, 0.93 on average across the catalog, and deals are deduplicated before anything is written.",
    },
    {
      heading: "Human in the loop",
      body: "Low-confidence results route to a review queue, and only approved deals reach the production catalog, a Postgres database secured with row-level security. 136 of 136 logged pipeline runs have succeeded. The codebase carries 105 SQL migrations and more than 340 automated tests.",
    },
  ] satisfies PipelineStep[],
} as const;

export const bookkeeper = {
  kicker: "03 · In active development",
  heading: "Bookkeeper",
  body: "Bookkeeping SaaS for solo operators, built on Next.js, TypeScript, Supabase, and Vercel. Multi-tenant Xero OAuth 2.0 with PKCE, encrypted token storage through Postgres RPCs, advisory-lock token refresh, and Inngest background jobs. Verified end to end against the Xero API.",
} as const;

export const suncorp = {
  kicker: "04 · Experience",
  heading: "Suncorp",
  sub: "iOS engineer, 5 years",
  bullets: [
    "Key contributor on the iOS side of the ForgeRock auth migration. Login-related contact centre calls dropped 25% after launch.",
    "Led the mobile front-end migration for Suncorp's highest-priority program, Duck Creek insurance data, defining shared patterns across iOS and Android.",
    "Shipped the self-service features that contributed to call-centre contact rates falling more than 50% over five years.",
  ],
} as const;

export const footer = {
  kicker: "05 · Availability",
  line: "Currently interested in forward deployed and solutions engineering roles at AI-native companies.",
  emailCta: "Email me",
  linkedinLabel: "LinkedIn",
} as const;
