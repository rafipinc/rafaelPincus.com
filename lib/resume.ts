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
  descriptor: string;
  tech: string;
  bullets: string[];
};

export const resume = {
  name: "Rafael Pincus",
  titleLine:
    "SENIOR SOFTWARE ENGINEER | TECHNICAL DELIVERY, ENTERPRISE INTEGRATIONS & APPLIED AI",
  contact: {
    location: "Sydney, NSW",
    email: "rafi.pincus@gmail.com",
    site: "rafaelpincus.com",
  },
  profile:
    "Senior software engineer with five years at Suncorp, delivering and operating mobile systems and third-party integrations used by millions of customers. I work across product, design, security, platform and vendor teams to turn ambiguous problems into scoped technical plans, coordinate delivery and stay involved through rollout and production. I own release defect triage for Suncorp's mobile app when failures cross system boundaries, and built an AI-assisted log-analysis agent that turns application evidence into a structured diagnosis. I also built and launched Pub Thursdays end to end. Earlier consulting and technology-sales roles developed my customer discovery and clear technical communication.",
  suncorp: {
    title: "Senior Software Engineer",
    company: "Suncorp Group, Sydney",
    dates: "Nov 2020 - Present",
    bullets: [
      "Own release defect triage for Suncorp's mobile app, tracing release-blocking failures across mobile, web and downstream services and bringing the right teams together around the evidence. Built an AI-assisted log-analysis agent that turns application logs into a structured diagnosis showing where a failure begins and what to investigate next.",
      "Led mobile delivery for the Duck Creek insurance migration. Set the iOS approach, aligned shared patterns with Android, and coordinated API changes, data mapping, testing and a controlled LaunchDarkly rollout.",
      "Helped rebuild Suncorp's core iOS authentication flows during the ForgeRock migration, covering token handling, session state and secure error paths. Worked with security and platform teams through release; login-related contact-centre calls fell 25%.",
      "Integrated Mastercard, CMT telematics and Adobe Analytics across SDKs and REST APIs. Worked directly with vendors, reviewed API contracts, handled edge cases and stayed involved through production support.",
      "Shipped Rewards Platform, EcoScore, Shannons and other self-service features from unclear requirements through rollout. This work contributed to contact-centre call rates falling by more than 50% over five years.",
      "Introduced reusable SwiftUI and MVVM patterns while moving legacy UIKit screens towards a maintainable architecture, improving feature-delivery speed by approximately 30%.",
      "Own the mobile release pipeline across Jenkins, Firebase, code signing and App Store submissions, resolving build and dependency issues so releases land predictably.",
    ],
  } satisfies ResumeRole,
  pubThursdays: {
    name: "Pub Thursdays",
    status: "LIVE ON THE APP STORE",
    descriptor: "Independent product",
    tech: "SwiftUI | Supabase/Postgres | Deno/TypeScript | Gemini API",
    bullets: [
      "Built and launched the product end to end, owning discovery, UX, data modelling, implementation, integration testing, App Store release and production support.",
      "Designed an AI-assisted data pipeline that checks 500+ venue websites, narrows likely deals with deterministic filters, uses Gemini for structured extraction, and sends uncertain results for human review with the source attached.",
      "Published 1,200+ approved deals across 280 venues at 0.99 average extraction confidence. The system logged 670+ scheduled runs and records failures for review rather than hiding them at the September 2026 snapshot.",
      "Built the application using SwiftUI, MVVM and Clean Architecture with Supabase Auth, Postgres, Realtime, Storage, row-level security and RPCs. The product has 100+ migrations and 300+ automated tests.",
    ],
  } satisfies ResumeProject,
  bookkeeper: {
    name: "Bookkeeper",
    status: "IN DEVELOPMENT",
    descriptor: "Independent web product",
    tech: "Next.js | TypeScript | Supabase/Postgres | Inngest | Xero API",
    bullets: [
      "Building a web app for solo operators that connects business data and surfaces what needs attention without requiring a full accounting suite.",
      "Built and tested the Xero connection end to end using OAuth 2.0 with PKCE, encrypted tokens and coordinated refreshes. RLS isolates customer data, while background jobs recover from slow or unreliable integration work.",
    ],
  } satisfies ResumeProject,
  customerFacingExperience: [
    {
      title: "IT Salesperson",
      company: "JB Hi-Fi, Melbourne",
      dates: "Dec 2019 - Jun 2024, part-time",
      bullets: [
        "Worked directly with customers to understand the real problem and recommend practical technology setups that fit their needs, confidence and budget.",
        "Consistently beat sales targets and earned strong CSAT for explaining technical trade-offs clearly to people with different levels of technical knowledge.",
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
      label: "APPLIED AI",
      items:
        "LLM pipelines, AI-assisted log analysis, structured extraction, prompt design, confidence gating, provenance, human review and production safeguards",
    },
    {
      label: "APIS AND DATA",
      items:
        "REST APIs, OAuth 2.0 and PKCE, JWT, Postgres, Supabase, RLS, Realtime, Edge Functions, asynchronous jobs and third-party SDKs",
    },
    {
      label: "ENGINEERING",
      items:
        "Swift, SwiftUI, UIKit, TypeScript, Next.js, React, Python, SQL, Deno, MVVM and Clean Architecture",
    },
    {
      label: "PRODUCTION DELIVERY",
      items:
        "Technical discovery, solution scoping, production triage, API contract review, stakeholder communication, automated testing, logging, controlled rollout, CI/CD, Jenkins, Firebase, LaunchDarkly, AWS and Vercel",
    },
  ] satisfies ResumeSkillGroup[],
  education: {
    degree: "Bachelor of Information Technology",
    school: "RMIT University, Melbourne",
    dates: "Feb 2019 - Nov 2021",
  },
} as const;
