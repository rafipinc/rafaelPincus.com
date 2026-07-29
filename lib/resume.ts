export type ResumeSkillGroup = {
  label: string;
  items: string;
};

export type ResumeRole = {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
};

export type ResumeProject = {
  name: string;
  status: string;
  tech: string;
  bullets: string[];
};

export const resume = {
  name: "Rafael Pincus",
  titleLine: "FULL STACK PRODUCT ENGINEER | MOBILE, BACKEND & AI",
  contact: {
    location: "Sydney, NSW",
    email: "rafi.pincus@gmail.com",
    site: "rafaelpincus.com",
  },
  profile:
    "Product-minded software engineer with five years at Suncorp and end-to-end ownership of live products. I have shipped secure mobile systems used by millions of customers, built my own app from idea to the App Store, and now work across SwiftUI, Next.js, TypeScript, Postgres and AI-assisted pipelines. I am at my best when the problem is still messy and someone needs to turn it into a clear plan, ship it, and stay close when it reaches production.",
  suncorp: {
    title: "Software Engineer",
    company: "Suncorp Group, Sydney",
    dates: "Nov 2020 - Present",
    bullets: [
      "Helped rebuild Suncorp's core iOS authentication flows during the ForgeRock migration, covering token handling, session state and secure error paths. Worked with security and platform teams through release. Login-related contact-centre calls fell 25%.",
      "Led mobile delivery for the Duck Creek insurance migration. Set the iOS approach, aligned shared patterns with Android, and coordinated API changes, data mapping, testing and a controlled LaunchDarkly rollout.",
      "Moved legacy UIKit screens towards SwiftUI and MVVM, creating reusable patterns the team could extend safely. Feature delivery became about 30% faster.",
      "Integrated Mastercard, CMT telematics and Adobe Analytics across SDKs and REST APIs. Worked directly with vendors, reviewed API contracts, handled edge cases and stayed involved through production support.",
      "Shipped Rewards Platform, EcoScore, Shannons and other self-service features from unclear requirements through rollout. This work contributed to contact-centre call rates falling by more than 50% over five years.",
      "Own the mobile release pipeline across Jenkins, Firebase, code signing and App Store submissions, resolving build and dependency issues so releases land predictably.",
    ],
  } satisfies ResumeRole,
  pubThursdays: {
    name: "Pub Thursdays",
    status: "LIVE ON THE APP STORE",
    tech: "SwiftUI | Supabase/Postgres | Deno/TypeScript | Gemini API",
    bullets: [
      "Built and launched Pub Thursdays because my friends and I needed a better way to run our weekly pub night. Owned the product from UX and data modelling through implementation, App Store release and production support.",
      "Designed a pipeline that checks 500+ venue websites, narrows likely deals with deterministic filters, uses Gemini for structured extraction, and sends uncertain results to me for review with the source attached.",
      "Published 580+ approved deals across 120+ venues at 0.93 average confidence. The system logged 220+ scheduled runs with zero recorded failures at the July 2026 snapshot.",
      "Built the app with SwiftUI, MVVM and Clean Architecture, backed by Supabase Auth, Postgres, Realtime, Storage, RLS and RPCs. The product has 100+ migrations and 300+ automated tests.",
    ],
  } satisfies ResumeProject,
  bookkeeper: {
    name: "Bookkeeper",
    status: "IN DEVELOPMENT",
    tech: "Next.js | TypeScript | Supabase/Postgres | Inngest | Vercel",
    bullets: [
      "Building a web app for solo operators who want a clear view of what needs attention without learning a full accounting suite.",
      "Built and tested the Xero connection end to end using OAuth 2.0 with PKCE, encrypted tokens and coordinated refreshes. RLS isolates customer data, while background jobs recover from slow or unreliable integration work.",
    ],
  } satisfies ResumeProject,
  additionalExperience: [
    {
      title: "IT Salesperson",
      company: "JB Hi-Fi, Melbourne",
      dates: "Dec 2019 - Jun 2024, part-time",
      bullets: [
        "Worked with customers to understand the real problem and recommend a practical setup that fit their needs and budget.",
        "Consistently beat sales targets and earned strong CSAT for explaining technical choices clearly to people with different levels of confidence.",
      ],
    },
    {
      title: "Technology Consultant",
      company: "BT Corporate Advisory, Melbourne",
      dates: "Sep 2019 - Jul 2020",
      bullets: [
        "Mapped systems, workflows and pain points into a prioritised technical roadmap, then scoped and delivered a website rebuild from requirements through launch.",
        "Replaced ad-hoc outreach with a reusable, tracked Mailchimp workflow.",
      ],
    },
  ] satisfies ResumeRole[],
  technicalToolkit: [
    {
      label: "PRODUCT ENGINEERING",
      items:
        "Swift, SwiftUI, UIKit, TypeScript, Next.js, React, Python, SQL, Deno, Tailwind, MVVM and Clean Architecture",
    },
    {
      label: "BACKEND AND INFRASTRUCTURE",
      items:
        "Postgres, Supabase Auth, RLS, Realtime, Storage, Edge Functions, REST APIs, OAuth 2.0 and PKCE, JWT, Inngest, Vercel, Firebase, AWS and CI/CD",
    },
    {
      label: "AI-ASSISTED SYSTEMS",
      items:
        "Gemini API, structured extraction, deterministic pre-filtering, confidence gating, provenance, human review, prompt design and production safeguards",
    },
    {
      label: "AI DEVELOPMENT TOOLS",
      items:
        "Claude Code, OpenAI Codex and GitHub Copilot, used daily with code review, testing and final ownership kept with me",
    },
    {
      label: "DELIVERY",
      items:
        "Technical discovery, API contract review, data modelling, integrations, automated testing, logging, controlled rollout, production support, Jira, Confluence, LaunchDarkly and Figma",
    },
  ] satisfies ResumeSkillGroup[],
  education: {
    degree: "Bachelor of Information Technology",
    school: "RMIT University, Melbourne",
    dates: "Feb 2019 - Nov 2021",
  },
} as const;
