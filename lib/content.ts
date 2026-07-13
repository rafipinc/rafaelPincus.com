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
  sub: "Five years shipping iOS at Suncorp, one of Australia's biggest insurers. Now building web apps and AI data pipelines that keep a human in the loop.",
  pillPrimary: "5 YRS iOS AT SUNCORP",
  pillSecondary: "AI PRODUCTS · END TO END",
} as const;

export const pubThursdays = {
  kicker: "01 / FLAGSHIP",
  heading: "Pub Thursdays",
  status: "● LIVE ON THE APP STORE · APR 2026",
  body: "An iOS app for friend groups who run a weekly pub night. It handles whose turn it is to pick, voting, ratings, leaderboards and reminders — and recommends new pubs based on what the group has loved. Behind it, an automated pipeline reads 506 Sydney venue websites, uses AI to extract each pub's weekly specials, and routes anything uncertain to a human for approval. The result: a live deals catalog with no content team.",
  demoVideoTitle: "Pub Thursdays demo, 90 seconds",
  fullVideoLabel: "Watch the full 5-minute walkthrough",
  metrics: [
    { value: "581", label: "APPROVED DEALS" },
    { value: "123", label: "VENUES COVERED" },
    { value: "182/182", label: "PIPELINE RUNS SUCCEEDED" },
    { value: "0.94", label: "AVG AI CONFIDENCE (0–1)" },
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
  heading: "Rules first, AI second, a human sign-off last.",
  stages: [
    {
      step: "STEP 01",
      title: "Start cheap and predictable",
      body: "Scheduled jobs visit each pub's own website and menu PDFs — never third-party listings, which testing showed can sit years out of date. Simple pattern-matching trims each page down to the handful of lines that look like deals, so most of the work costs nothing to run.",
      stat: "506 VENUES CHECKED AUTOMATICALLY",
    },
    {
      step: "STEP 02",
      title: "AI with guardrails",
      body: "Google's Gemini model turns those snippets into structured deals — what, which day, what price — with a confidence score on every one. Duplicates are removed, one-off events are filtered out, and results are cached for 30 days so the AI is never called twice for the same venue.",
      stat: "0.94 AVG CONFIDENCE",
    },
    {
      step: "STEP 03",
      title: "A human has the final say",
      body: "Anything the AI is less than sure about lands in a review queue inside the app, and only approved deals ever reach users. Every published deal links back to its source and shows when it was last verified — so nothing stale or invented makes it to the app.",
      stat: "182/182 RUNS SUCCEEDED",
    },
  ] satisfies PipelineStage[],
  footnote:
    "UNDER THE HOOD: DENO EDGE FUNCTIONS ON SUPABASE · SSRF-SAFE FETCHING · PROMPT-INJECTION DEFENCES · PER-USER RATE LIMITS · POSTGRES ROW-LEVEL SECURITY · EVERY RUN LOGGED · 109 MIGRATIONS · 320+ AUTOMATED TESTS",
} as const;

export const bookkeeper = {
  kicker: "03 / IN DEVELOPMENT",
  heading: "Bookkeeper",
  body: "A bookkeeping tool for solo business owners that connects securely to their Xero accounts. Built with the care of a banking integration — encrypted credentials, safe token handling, background processing — and verified end to end against the real Xero API.",
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
      body: "Key iOS contributor on the bank-grade login migration (ForgeRock). Login-related calls to the contact centre dropped 25% after launch.",
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
