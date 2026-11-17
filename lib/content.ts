export type ExperienceItem = {
  stat: string;
  body: string;
};

export type DetailItem = {
  label: string;
  title: string;
  body: string;
};

export const site = {
  name: "Rafael Pincus",
  nickname: "Rafi",
  oneLiner:
    "Senior software engineer in Sydney with six years at Suncorp delivering third-party integrations, platform migrations and production support for millions of customers.",
  location: "Sydney, Australia",
} as const;

export const links = {
  appStore: "https://apps.apple.com/au/app/pub-thursdays/id6760244735" as string | null,
  resume: "/resume",
  resumePdf: "/Rafael-Pincus-Resume.pdf",
  github: "https://github.com/rafipinc",
  linkedin: "https://www.linkedin.com/in/rafaelpincus/",
  email: "rafi.pincus@gmail.com",
} as const;

export const video: { id: string | null } = {
  // The facade shows a designed poster while id is null.
  id: "T4Ss6IFDeuI",
};

export const hero = {
  kicker:
    "SENIOR SOFTWARE ENGINEER · INTEGRATIONS, DELIVERY & AI · SYDNEY",
  heading: "Senior software engineer who makes integrations work and stays through production.",
  sub: "I've spent six years at Suncorp delivering third-party integrations, platform migrations and production support for millions of customers. I work directly with vendors and business teams, turn unclear requirements into working solutions and find the root cause when integrations fail. I also build full-stack products and practical AI systems independently.",
  pillPrimary: "SENIOR ENGINEER · 6 YEARS AT SUNCORP",
  pillSecondary: "FROM MESSY PROBLEM TO LIVE PRODUCT",
} as const;

export const pubThursdays = {
  kicker: "01 / BUILT & SHIPPED",
  heading: "Pub Thursdays",
  status: "● LIVE ON THE APP STORE · APR 2026",
  body: "Pub Thursdays started because my friends and I needed a better way to run our weekly pub night. I built the app we wanted, then took ownership of everything behind it: the SwiftUI client, Supabase backend, venue data, reminders and a pipeline that checks 500+ Sydney venue websites for current deals. Anything uncertain comes to me for review before it goes live.",
  demoKicker: "DEMO",
  demoHeading: "A quick look at how it works.",
  demoBody:
    "I walk through the app, then show the pipeline that finds, checks and publishes pub deals.",
  demoVideoTitle: "Pub Thursdays app and deals pipeline walkthrough",
  architectureKicker: "HOW DEALS GET INTO THE APP",
  architectureHeading:
    "The pipeline does the repetitive work. I keep the final say.",
  architectureSteps: [
    {
      step: "01 · FIND",
      title: "Start with the pub",
      body: "The pipeline checks each pub's own website and menu PDFs for likely deals.",
    },
    {
      step: "02 · STRUCTURE",
      title: "Use AI where it helps",
      body: "Rules narrow the page down, then Gemini turns the useful bits into structured deal data.",
    },
    {
      step: "03 · REVIEW",
      title: "Only publish what holds up",
      body: "Anything below 85% confidence comes to me. Only approved deals go live, with the source attached.",
    },
  ],
  architectureNote:
    "Behind that, results are cached for 30 days, every published deal keeps its source and every pipeline run is logged.",
  liveCaptionPrefix: "● PRODUCTION DATA · UPDATED",
  cta: "OPEN IN THE APP STORE →",
  ctaPendingTitle: "Link coming soon",
  techLine: "SwiftUI · Supabase · Deno/TS · Gemini API",
} as const;

export const dealz = {
  kicker: "02 / IN DEVELOPMENT",
  heading: "DealZ",
  status: "● PRICE HISTORY FOR AUSTRALIAN TECH · IN DEVELOPMENT",
  body: "DealZ shows what consumer tech has actually sold for in Australia, so you know whether today's price is a good one. The idea is simple. The hard part is the data: finding every seller of the exact variant, proving each price came from its source and keeping paid API costs under control.",
  details: [
    {
      label: "COLLECTION",
      title: "Prices from every kind of source",
      body: "Retailer storefront search, JSON-LD product data, the Wayback Machine and Google Shopping via SerpApi. When an LLM extracts a price, it's confirmed on the source page before it's stored.",
    },
    {
      label: "MATCHING",
      title: "The right product, not a close one",
      body: "Sellers are matched by barcode (GTIN), model code and variant, filtering out wrong variants and phone-plan prices. In live runs it found 10 verified sellers for one phone.",
    },
    {
      label: "GUARDRAILS",
      title: "Cost caps and a CI gate",
      body: "Every paid API call goes through daily cost caps and a usage ledger. 2,600+ automated tests and a CI gate check typecheck, lint, tests and schema drift.",
    },
    {
      label: "HOW I BUILD",
      title: "Claude Code as a pair programmer",
      body: "Six layer-scoped subagents, 28 recorded architecture decisions and a review before every merge. I own the architecture, review and testing of what ships.",
    },
  ] satisfies DetailItem[],
  techLine:
    "Next.js · TypeScript · Supabase/Postgres · Drizzle · Vitest · Playwright · GitHub Actions · SerpApi",
} as const;

export type SkillGroup = {
  label: string;
  items: string;
};

export const skills = {
  kicker: "05 / SKILLS",
  heading: "The tools I use to ship.",
  body: "Swift and iOS are where I have the deepest production experience. I also build with TypeScript, Next.js, Postgres and Python, and use AI tools daily when they help me move faster. The useful part is knowing what to delegate, what to verify and what still needs a human decision.",
  groups: [
    {
      label: "PRODUCT ENGINEERING",
      items:
        "Swift 6 · SwiftUI · UIKit · JavaScript / TypeScript · HTML · Next.js · React · Python · SQL · Tailwind",
    },
    {
      label: "BACKEND & ASYNC WORK",
      items:
        "Supabase/Postgres · Auth · RLS · Realtime · Storage · Edge Functions · Deno · Inngest · REST APIs · OAuth 2.0 / PKCE · Vercel · GitHub Actions",
    },
    {
      label: "AI-ASSISTED SYSTEMS",
      items:
        "LLM pipelines · AI-assisted log analysis · structured extraction · deterministic pre-filtering · confidence gating · provenance · human review · production safeguards",
    },
    {
      label: "DELIVERY & TOOLS",
      items:
        "Technical discovery · requirements scoping · vendor integrations · defect triage · API contract review · stakeholder communication · controlled rollout · Claude Code · OpenAI Codex · Git · LaunchDarkly · Jenkins · Firebase · Figma · App Store Connect",
    },
  ] satisfies SkillGroup[],
  closing:
    "My defaults: understand the workflow, keep secrets server-side, make failures visible, put limits around cost and keep a human decision where confidence is low.",
} as const;

export const suncorp = {
  kicker: "03 / ENTERPRISE",
  heading: "Suncorp",
  sub: "SENIOR SOFTWARE ENGINEER · SINCE 2020",
  items: [
    {
      stat: "VENDORS",
      body: "I integrated Mastercard, CMT telematics and Adobe Analytics into the app through vendor SDKs and REST APIs, working directly with vendor teams, reviewing API contracts and staying involved through production support.",
    },
    {
      stat: "TRIAGE",
      body: "I ran defect triage across the Duck Creek migration, getting owners assigned and blockers cleared across teams. I also built a HAR analysis tool that cut diagnosis of failing requests from days to a couple of hours.",
    },
    {
      stat: "−25%",
      body: "I helped rebuild Suncorp's iOS login during the ForgeRock migration. Login-related calls to the contact centre fell 25% after release.",
    },
    {
      stat: "DELIVERY",
      body: "I led mobile delivery for the Duck Creek insurance migration, setting the iOS approach and guiding my Android counterpart. That work led to my promotion to senior in September 2026.",
    },
    {
      stat: "−50%",
      body: "I shipped self-service features that helped cut contact-centre call rates by more than 50% over five years.",
    },
  ] satisfies ExperienceItem[],
} as const;

export const forwardDeployed = {
  kicker: "04 / HOW I WORK",
  heading: "Understand the problem, then stay until it works.",
  body: "I like working close to the problem and the people affected by it. I ask questions early, make the trade-offs clear and stay involved through the build, release and whatever turns up in production.",
  details: [
    {
      label: "ASK",
      title: "Ask before I build",
      body: "I start with what someone is actually trying to achieve, what's getting in the way and what a good result looks like.",
    },
    {
      label: "PLAN",
      title: "Make the trade-offs clear",
      body: "I turn unclear requirements into a scoped plan, explain the choices plainly and keep the work moving against the timeline.",
    },
    {
      label: "SHIP",
      title: "Stay through release",
      body: "I stay involved through integrations, edge cases, rollout and production support. When something breaks across system boundaries, I trace the evidence and bring the right teams together.",
    },
  ] satisfies DetailItem[],
} as const;
