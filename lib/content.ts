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

export const site = {
  name: "Rafael Pincus",
  nickname: "Rafi",
  oneLiner:
    "Software engineer, 5 years shipping iOS at Suncorp. I build AI-powered products end to end.",
  location: "Sydney, Australia",
} as const;

export const links = {
  appStore: "https://apps.apple.com/au/app/pub-thursdays/id6760244735" as string | null,
  github: "https://github.com/rafipinc",
  linkedin: "https://www.linkedin.com/in/rafael-pincus-a85198194/",
  email: "rafi.pincus@gmail.com",
} as const;

export const video: { id: string | null } = {
  // The facade shows a designed poster while id is null.
  id: "T4Ss6IFDeuI",
};

export const hero = {
  kicker: "SOFTWARE ENGINEER · SYDNEY, AUSTRALIA",
  heading: "I build AI-powered products end to end.",
  sub: "Five years shipping iOS at Suncorp, one of Australia's biggest insurers. Now building web apps and AI data pipelines that keep a human in the loop.",
  pillPrimary: "5 YRS iOS AT SUNCORP",
  pillSecondary: "AI PRODUCTS · END TO END",
} as const;

export const pubThursdays = {
  kicker: "01 / FLAGSHIP",
  heading: "Pub Thursdays",
  status: "● LIVE ON THE APP STORE · APR 2026",
  body: "Pub Thursdays started as a fix for my own friend group: a weekly pub night that needed someone to remember whose turn it was to pick. The app handles the rotation, voting, ratings, leaderboards and reminders, and recommends new pubs based on what the group has loved. Behind it, an automated pipeline I built reads 507 Sydney venue websites, uses AI to extract each pub's weekly specials, and routes anything uncertain to a human for approval. The result is a live deals catalog with no content team.",
  demoVideoTitle: "Pub Thursdays walkthrough, 5 minutes",
  metrics: [
    { value: "582", label: "APPROVED DEALS" },
    { value: "124", label: "VENUES COVERED" },
    { value: "204", label: "PIPELINE RUNS · 0 FAILED" },
    { value: "0.93", label: "AVG AI CONFIDENCE (0–1)" },
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
      body: "Scheduled jobs visit each pub's own website and menu PDFs, never third-party listings, which my testing showed can sit years out of date. Simple pattern-matching trims each page down to the handful of lines that look like deals, so most of the work costs nothing to run.",
      stat: "507 VENUES CHECKED AUTOMATICALLY",
    },
    {
      step: "STEP 02",
      title: "AI with guardrails",
      body: "Google's Gemini model turns those snippets into structured deals: what it is, which day, what price, with a confidence score on every one. Duplicates are removed, one-off events are filtered out, and results are cached for 30 days so the AI is never called twice for the same venue.",
      stat: "661 DEALS EXTRACTED · 0.93 AVG CONFIDENCE",
    },
    {
      step: "STEP 03",
      title: "A human has the final say",
      body: "Anything the AI is less than 85% sure about is held back in a review queue inside the app, and only deals I approve ever reach users: 582 of the 661 extracted so far. Every published deal links back to its source and shows when it was last verified, so nothing stale or invented makes it to the app.",
      stat: "204 RUNS · 0 FAILED",
    },
  ] satisfies PipelineStage[],
  footnote:
    "UNDER THE HOOD: DENO EDGE FUNCTIONS ON SUPABASE · SSRF-SAFE FETCHING · PROMPT-INJECTION DEFENCES · PER-USER RATE LIMITS · POSTGRES ROW-LEVEL SECURITY · EVERY RUN LOGGED · 109 MIGRATIONS · 320+ AUTOMATED TESTS",
} as const;

export type SkillGroup = {
  label: string;
  items: string;
};

export const skills = {
  kicker: "03 / SKILLS",
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
      body: "Led the mobile front-end migration for Suncorp's highest-priority program, the Duck Creek insurance platform, defining shared patterns across iOS and Android.",
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
  body: "Five years at Suncorp taught me to build inside a regulated business and explain technical decisions to people who don't write code. Pub Thursdays is what that looks like when I own the whole thing: I built it, I demo it, and every number on this page comes from production. Happy to walk through any of it, or just to chat about what I could do for your team.",
  emailCta: "GET IN TOUCH →",
  linkedinLabel: "LINKEDIN",
} as const;
