export type Metric = {
  value: string;
  label: string;
};

export type PipelineStage = {
  step: string;
  title: string;
  body: string;
  stat: string;
};

export type ExperienceItem = {
  stat: string;
  body: string;
};

export type SpecRow = {
  label: string;
  value: string;
  accent?: boolean;
};

export const site = {
  name: "Rafael Pincus",
  nickname: "Rafi",
  oneLiner:
    "Software engineer, 5 years shipping iOS at Suncorp. I build AI-powered products end to end.",
  location: "Sydney, Australia",
} as const;

export const links = {
  // TODO: real App Store URL pending. Set it here and the CTA goes live.
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

export const hero = {
  kicker: "SOFTWARE ENGINEER — SYDNEY, AUSTRALIA",
  heading: "I build AI-powered products end to end.",
  sub: "Five years shipping iOS at Suncorp. Now shipping Next.js web apps and LLM extraction pipelines with humans in the loop.",
  pillPrimary: "5 YRS iOS AT SUNCORP",
  pillSecondary: "AI PRODUCTS · END TO END",
} as const;

export const pubThursdays = {
  kicker: "01 / FLAGSHIP",
  heading: "Pub Thursdays",
  status: "● LIVE ON THE APP STORE · APR 2026",
  body: "An iOS app for social groups that run a recurring pub night — rotation, ratings, leaderboards, invites, card votes, APNs reminders. Behind it, a deal-ingestion pipeline keeps a catalog of 506 Sydney venues current with no content team.",
  demoVideoTitle: "Pub Thursdays demo, 90 seconds",
  fullVideoLabel: "Watch the full 5-minute walkthrough",
  metrics: [
    { value: "576", label: "APPROVED DEALS" },
    { value: "122", label: "VENUES COVERED" },
    { value: "136/136", label: "PIPELINE RUNS SUCCEEDED" },
    { value: "0.93", label: "AVG EXTRACTION CONFIDENCE" },
  ] satisfies Metric[],
  pipelineImage: {
    src: "/pipeline_slide.svg",
    alt: "Architecture overview of the Pub Thursdays deal-ingestion pipeline: scheduled Edge Functions with rule-based filtering, then Gemini structured extraction with confidence scoring and dedupe, then a human review queue writing approved deals to Postgres with row-level security.",
    width: 1600,
    height: 900,
  },
  cta: "VIEW ON THE APP STORE →",
  ctaPendingTitle: "Link coming soon",
  techLine: "SwiftUI · Supabase · Deno/TS · Gemini API",
} as const;

export const pipeline = {
  kicker: "02 / PIPELINE",
  heading: "Deterministic first, LLM second, human last.",
  stages: [
    {
      step: "STEP 01",
      title: "Deterministic first",
      body: "Scheduled Deno Edge Functions pull deal content from venue websites and PDFs across 506 Sydney venues. Rule-based pre-filtering handles cheap, predictable extraction before any LLM is invoked.",
      stat: "506 VENUES CRAWLED",
    },
    {
      step: "STEP 02",
      title: "LLM with guardrails",
      body: "Gemini handles structured extraction with server-side keys and response caching to control spend. Every deal gets a confidence score and is deduplicated before anything is written.",
      stat: "0.93 AVG CONFIDENCE",
    },
    {
      step: "STEP 03",
      title: "Human in the loop",
      body: "Low-confidence results route to a review queue; only approved deals reach the production Postgres catalog, secured with row-level security. 105 SQL migrations, 340+ automated tests.",
      stat: "136/136 RUNS SUCCEEDED",
    },
  ] satisfies PipelineStage[],
} as const;

export const bookkeeper = {
  kicker: "03 / IN DEVELOPMENT",
  heading: "Bookkeeper",
  body: "Bookkeeping SaaS for solo operators. Multi-tenant Xero OAuth 2.0 with PKCE, encrypted token storage through Postgres RPCs, advisory-lock token refresh, Inngest background jobs. Verified end to end against the Xero API.",
  specs: [
    { label: "STACK", value: "Next.js · TypeScript · Supabase" },
    { label: "AUTH", value: "Xero OAuth 2.0 + PKCE" },
    { label: "JOBS", value: "Inngest" },
    { label: "STATUS", value: "ACTIVE", accent: true },
  ] satisfies SpecRow[],
} as const;

export const suncorp = {
  kicker: "04 / EXPERIENCE",
  heading: "Suncorp",
  sub: "iOS ENGINEER · 5 YEARS",
  items: [
    {
      stat: "−25%",
      body: "Key contributor on the iOS side of the ForgeRock auth migration. Login-related contact centre calls dropped 25% after launch.",
    },
    {
      stat: "LEAD",
      body: "Led the mobile front-end migration for Suncorp's highest-priority program — Duck Creek insurance data — defining shared patterns across iOS and Android.",
    },
    {
      stat: "−50%",
      body: "Shipped the self-service features that contributed to call-centre contact rates falling more than 50% over five years.",
    },
  ] satisfies ExperienceItem[],
} as const;

export const contact = {
  kicker: "05 / CONTACT",
  heading:
    "Looking for forward-deployed and solutions engineering roles at AI-native companies.",
  emailCta: "GET IN TOUCH →",
  linkedinLabel: "LINKEDIN",
} as const;
