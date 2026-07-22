export type Metric = {
  value: string;
  label: string;
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
    "Software engineer in Sydney with five years shipping iOS at Suncorp. I build full-stack products, integrations and practical AI systems.",
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
  kicker: "SOFTWARE ENGINEER · iOS, FULL STACK & AI · SYDNEY",
  heading: "I build useful products, end to end.",
  sub: "I've spent five years shipping iOS at Suncorp. I also built and launched my own app, including the backend, integrations and AI pipeline behind it.",
  pillPrimary: "5 YEARS SHIPPING iOS",
  pillSecondary: "FROM IDEA TO PRODUCTION",
} as const;

export const pubThursdays = {
  kicker: "01 / BUILT & SHIPPED",
  heading: "Pub Thursdays",
  status: "● LIVE ON THE APP STORE · APR 2026",
  body: "Pub Thursdays started because my friends and I needed a better way to run our weekly pub night. It tracks whose turn it is, keeps our ratings and history, and helps us find somewhere new. I also built a pipeline that checks 500+ Sydney venue websites, pulls out current deals with AI and sends anything uncertain to me for review.",
  demoKicker: "DEMO",
  demoHeading: "A quick look at how it works.",
  demoBody:
    "I walk through the app, then show the pipeline that finds, checks and publishes pub deals.",
  demoVideoTitle: "Pub Thursdays app and deals pipeline walkthrough",
  architectureKicker: "HOW DEALS GET INTO THE APP",
  architectureHeading:
    "The pipeline handles the repetitive work. I keep the final say.",
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
  body: "Bookkeeper is a work in progress for solo operators who want to know what needs attention without learning a full accounting suite. I'm keeping the product simple while making the work behind it reliable: Xero sync, data isolation and background jobs that can recover when an integration fails.",
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
  body: "Swift and iOS are where I have the deepest production experience. I now work across TypeScript, backend systems and AI tooling as well. I use Claude Code, Codex, Gemini and Copilot daily. They help me move faster, but I still own the architecture, review, testing and final result.",
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
        "Git · Jira · Confluence · LaunchDarkly · Figma · Agile / Scrum · App Store Connect",
    },
  ] satisfies SkillGroup[],
  metricsIntro:
    "I use AI heavily, so I track the cost and efficiency rather than treating it as free:",
  metrics: [
    { value: "177M", label: "CLAUDE TOKENS USED · SINCE JUN 2026" },
    { value: "94.8%", label: "CLAUDE CACHE HIT RATE" },
    { value: "5", label: "CLAUDE MODELS USED" },
    { value: "1.0B", label: "CODEX TOKENS USED · SINCE OCT 2025" },
    { value: "94.6%", label: "CODEX INPUT CACHE REUSE" },
    { value: "213", label: "CODEX RUNS · 110 DELEGATED" },
  ] satisfies Metric[],
  footnote:
    "MY DEFAULTS: REUSE CONTEXT · PICK THE CHEAPEST MODEL THAT CAN DO THE JOB · DELEGATE PARALLEL WORK · KEEP KEYS SERVER-SIDE · CAP SPEND",
} as const;

export const suncorp = {
  kicker: "03 / ENTERPRISE",
  heading: "Suncorp",
  sub: "iOS ENGINEER · 5 YEARS",
  items: [
    {
      stat: "−25%",
      body: "I helped rebuild Suncorp's iOS login during the ForgeRock migration. Login-related calls to the contact centre fell 25% after release.",
    },
    {
      stat: "LEAD",
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
  body: "I like working close to the people using the product. I ask questions early, make the trade-offs clear and stay involved through the build, release and whatever turns up in production.",
  details: [
    {
      label: "ASK",
      title: "Ask before I build",
      body: "I start with what someone is actually trying to achieve, what's getting in the way and what a good result looks like.",
    },
    {
      label: "PLAN",
      title: "Turn it into a clear plan",
      body: "I break the problem into work people can agree on, explain the trade-offs plainly and turn it into a plan I can build and others can follow.",
    },
    {
      label: "SHIP",
      title: "Stay through release",
      body: "I stay involved through integrations, edge cases, rollout, App Store review and production support.",
    },
  ] satisfies DetailItem[],
} as const;
