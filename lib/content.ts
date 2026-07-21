export type Metric = {
  value: string;
  label: string;
};

export type PipelineStage = {
  step: string;
  title: string;
  body: string;
};

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
    "Software engineer with five years at Suncorp. I turn messy problems into reliable products, integrations and AI systems.",
  location: "Sydney, Australia",
} as const;

export const links = {
  appStore: "https://apps.apple.com/au/app/pub-thursdays/id6760244735" as string | null,
  resume: "/resume",
  resumePdf: "/Rafael-Pincus-Resume.pdf",
  github: "https://github.com/rafipinc",
  linkedin: "https://www.linkedin.com/in/rafael-pincus-a85198194/",
  email: "rafi.pincus@gmail.com",
} as const;

export const video: { id: string | null } = {
  // The facade shows a designed poster while id is null.
  id: "T4Ss6IFDeuI",
};

export const hero = {
  kicker: "SOFTWARE ENGINEER · FORWARD DEPLOYED · SYDNEY",
  heading: "I build AI-powered products end to end.",
  sub: "Five years shipping iOS inside a regulated business at Suncorp. Now I build full-stack products, third-party integrations and AI pipelines, from the first conversation through to release.",
  pillPrimary: "5 YRS iOS AT SUNCORP",
  pillSecondary: "DISCOVERY · BUILD · RELEASE",
} as const;

export const pubThursdays = {
  kicker: "01 / FLAGSHIP",
  heading: "Pub Thursdays",
  status: "● LIVE ON THE APP STORE · APR 2026",
  body: "Pub Thursdays started as a fix for my own friend group: a weekly pub night that needed someone to remember whose turn it was to pick. The app handles the rotation, voting, ratings, leaderboards and reminders, and recommends new pubs based on what the group has loved. Behind it, an automated pipeline I built reads 500+ Sydney venue websites, uses AI to extract each pub's weekly specials, and routes anything uncertain to a human for approval. The result is a live deals catalog with no content team.",
  demoKicker: "DEMO",
  demoHeading: "See Pub Thursdays working end to end.",
  demoBody:
    "A five-minute walkthrough of the app, the deal pipeline and the human review loop behind it.",
  demoVideoTitle: "Pub Thursdays walkthrough, 5 minutes",
  architectureKicker: "ARCHITECTURE / PIPELINE",
  liveCaptionPrefix: "● LIVE FROM PRODUCTION · FETCHED",
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
      body: "Scheduled jobs visit each pub's own website and menu PDFs, never third-party listings, which my testing showed can sit years out of date. Simple pattern-matching trims each page down to the handful of lines that look like deals, so most of the work costs nothing to run.",
    },
    {
      step: "STEP 02",
      title: "AI with guardrails",
      body: "Google's Gemini model turns those snippets into structured deals: what it is, which day, what price, with a confidence score on every one. Duplicates are removed, one-off events are filtered out, and results are cached for 30 days so the AI is never called twice for the same venue.",
    },
    {
      step: "STEP 03",
      title: "A human has the final say",
      body: "Anything the AI is less than 85% sure about is held back in a review queue inside the app, and only deals I approve ever reach users. Every published deal links back to its source and shows when it was last verified, so nothing stale or invented makes it to the app.",
    },
  ] satisfies PipelineStage[],
  footnote:
    "UNDER THE HOOD: DENO EDGE FUNCTIONS ON SUPABASE · SSRF-SAFE FETCHING · PROMPT-INJECTION DEFENCES · PER-USER RATE LIMITS · POSTGRES ROW-LEVEL SECURITY · EVERY RUN LOGGED · 100+ SQL MIGRATIONS · 300+ AUTOMATED TESTS",
} as const;

export const bookkeeper = {
  kicker: "03 / IN PROGRESS",
  heading: "Bookkeeper",
  status: "● FULL-STACK SAAS · ACTIVE DEVELOPMENT",
  body: "Bookkeeper is an app I am building for solo operators who want a clear view of their business without having to learn an enterprise accounting system. The product stays simple while the hard parts happen underneath: connecting to Xero reliably, keeping each customer's data isolated and making sure background work can recover when integrations fail.",
  details: [
    {
      label: "CUSTOMER PROBLEM",
      title: "Clarity before features",
      body: "The first job is simple: help a solo operator connect their business, see what needs attention and take action without getting lost in an enterprise accounting suite.",
    },
    {
      label: "INTEGRATION",
      title: "Xero, end to end",
      body: "I built the full Xero connection flow with OAuth 2.0 and PKCE, encrypted token storage and coordinated refreshes, then tested it against Xero's live API.",
    },
    {
      label: "RELIABILITY",
      title: "Safe by default",
      body: "Postgres row-level security keeps every customer's data isolated. Advisory locks prevent token refresh races, and background jobs keep slow or unreliable integration work out of the request path.",
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
  kicker: "06 / SKILLS",
  heading: "Breadth, with a bias for the right tool.",
  body: "The languages here are ones I've shipped production code in. The AI tools are my daily loop: I work in Claude Code, Codex, Gemini and Copilot every day, and I treat tokens like any other production cost, cached, routed to the cheapest capable model, and measured.",
  groups: [
    {
      label: "AI TOOLING",
      items:
        "Claude Code · OpenAI Codex · Gemini API · GitHub Copilot · LLM pipeline design · prompt engineering · structured extraction",
    },
    {
      label: "LANGUAGES & FRAMEWORKS",
      items:
        "Swift 6 · SwiftUI · UIKit · TypeScript · Next.js · Python · SQL · Deno · MVVM · Clean Architecture",
    },
    {
      label: "BACKEND & INFRA",
      items:
        "Supabase (Postgres, RLS, Auth, Edge Functions) · REST APIs · APNs · JWT (ECDSA) · Firebase · AWS · Jenkins · Xcode Cloud",
    },
    {
      label: "TOOLS & PRACTICE",
      items:
        "Git · JIRA · Confluence · LaunchDarkly · Figma · Agile / Scrum · App Store Connect",
    },
  ] satisfies SkillGroup[],
  metricsIntro:
    "How I actually use AI, measured from my own Claude Code and Codex histories:",
  metrics: [
    { value: "177M", label: "CLAUDE TOKENS · SINCE JUN 2026" },
    { value: "94.8%", label: "CLAUDE PROMPT-CACHE HIT RATE" },
    { value: "5", label: "CLAUDE MODELS ROUTED BY TASK" },
    { value: "1.0B", label: "CODEX TOKENS · SINCE OCT 2025" },
    { value: "94.6%", label: "CODEX INPUT-CACHE REUSE" },
    { value: "213", label: "CODEX AGENT RUNS · 110 DELEGATED" },
  ] satisfies Metric[],
  footnote:
    "CACHE-WARM SESSIONS OVER COLD RESTARTS · CHEAPEST CAPABLE MODEL PER JOB · SUBAGENTS FOR PARALLEL WORK · AI KEYS SERVER-SIDE · SPEND CAPPED IN EVERY PIPELINE",
} as const;

export const suncorp = {
  kicker: "04 / ENTERPRISE",
  heading: "Suncorp",
  sub: "iOS ENGINEER · 5 YEARS",
  items: [
    {
      stat: "−25%",
      body: "Key iOS contributor on the bank-grade login migration (ForgeRock). Login-related calls to the contact centre dropped 25% after launch.",
    },
    {
      stat: "LEAD",
      body: "Led the mobile front-end migration for Suncorp's highest-priority program, the Duck Creek insurance platform, defining shared patterns across iOS and Android.",
    },
    {
      stat: "−50%",
      body: "Shipped the self-service features that contributed to call-centre contact rates falling more than 50% over five years.",
    },
  ] satisfies ExperienceItem[],
} as const;

export const forwardDeployed = {
  kicker: "05 / FORWARD DEPLOYED",
  heading: "Understand the problem. Stay for the outcome.",
  body: "My work starts with understanding what someone is actually trying to do. I turn that into a plan people can align on, choose the right architecture and stay with it through release and production.",
  details: [
    {
      label: "DISCOVER",
      title: "Find the problem behind the request",
      body: "Before I write code, I ask what someone is trying to achieve, find the constraints and explain the trade-offs without hiding behind jargon.",
    },
    {
      label: "TRANSLATE",
      title: "Make ambiguity actionable",
      body: "At Suncorp, I mapped business workflows into a prioritised roadmap, aligned iOS and Android on shared patterns and turned product requirements into software ready to release.",
    },
    {
      label: "DELIVER",
      title: "Stay through release",
      body: "I have shipped Mastercard, telematics and secure authentication integrations, and stayed involved through edge cases, rollout, production support and App Store release.",
    },
  ] satisfies DetailItem[],
} as const;
