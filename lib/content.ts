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
    "Senior software engineer in Sydney with five years at Suncorp. I turn complicated enterprise problems into production systems across integrations, full stack and applied AI.",
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
    "SENIOR SOFTWARE ENGINEER · TECHNICAL DELIVERY, ENTERPRISE INTEGRATIONS & APPLIED AI · SYDNEY",
  heading: "I turn complicated production problems into systems that work.",
  sub: "I've spent five years at Suncorp working across product, design, security, platform and vendor teams. I trace failures across system boundaries, turn unclear requirements into delivery plans and stay involved through production. I also build full-stack products and practical AI systems independently.",
  pillPrimary: "5 YEARS IN PRODUCTION",
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

export const bookkeeper = {
  kicker: "02 / IN PROGRESS",
  heading: "Bookkeeper",
  status: "● WEB APP · IN DEVELOPMENT",
  body: "Bookkeeper is a work in progress for solo operators who want to know what needs attention without learning a full accounting suite. The product stays simple. The work behind it does not: Xero sync, customer-data isolation, coordinated token refresh and background jobs that can recover when an integration fails.",
  details: [
    {
      label: "CUSTOMER PROBLEM",
      title: "Show what needs attention",
      body: "Connect the business, surface what matters and make the next action clear. That's the first problem I'm solving.",
    },
    {
      label: "XERO INTEGRATION",
      title: "A proper Xero connection",
      body: "The Xero integration uses OAuth 2.0 with PKCE, encrypted tokens and coordinated refreshes. I've tested the full flow against Xero's API.",
    },
    {
      label: "RELIABILITY",
      title: "Failures should be recoverable",
      body: "Row-level security separates customer data. Locks prevent token-refresh races, while background jobs keep slow or unreliable integration work out of the request path.",
    },
  ] satisfies DetailItem[],
  techLine:
    "Next.js · TypeScript · Supabase/Postgres · Xero OAuth 2.0 · Inngest · Vercel",
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
        "Swift 6 · SwiftUI · UIKit · TypeScript · Next.js · React · Python · SQL · Tailwind",
    },
    {
      label: "BACKEND & ASYNC WORK",
      items:
        "Supabase/Postgres · Auth · RLS · Realtime · Storage · Edge Functions · Deno · Inngest · REST APIs · OAuth 2.0 / PKCE · Vercel",
    },
    {
      label: "AI-ASSISTED SYSTEMS",
      items:
        "LLM pipelines · AI-assisted log analysis · structured extraction · deterministic pre-filtering · confidence gating · provenance · human review · production safeguards",
    },
    {
      label: "DELIVERY & TOOLS",
      items:
        "Technical discovery · solution scoping · production triage · API contract review · stakeholder communication · controlled rollout · Claude Code · OpenAI Codex · Git · LaunchDarkly · Jenkins · Firebase · Figma · App Store Connect",
    },
  ] satisfies SkillGroup[],
  closing:
    "My defaults: understand the workflow, keep secrets server-side, make failures visible, put limits around cost and keep a human decision where confidence is low.",
} as const;

export const suncorp = {
  kicker: "03 / ENTERPRISE",
  heading: "Suncorp",
  sub: "SENIOR SOFTWARE ENGINEER · 5 YEARS",
  items: [
    {
      stat: "TRIAGE",
      body: "I own release defect triage for Suncorp's mobile app, tracing failures across mobile, web and downstream services. I built an AI-assisted log-analysis agent that turns application logs into a clear diagnosis and helps the right team know where to investigate next.",
    },
    {
      stat: "−25%",
      body: "I helped rebuild Suncorp's iOS login during the ForgeRock migration. Login-related calls to the contact centre fell 25% after release.",
    },
    {
      stat: "DELIVERY",
      body: "I led the mobile frontend for the Duck Creek insurance migration, setting the iOS approach and aligning shared patterns with Android.",
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
