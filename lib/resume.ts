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

export type ResumeTitle = {
  title: string;
  dates: string;
};

export type ResumeProgressionRole = {
  titles: ResumeTitle[];
  company: string;
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
  titleLine: "SENIOR SOFTWARE ENGINEER | iOS, FULL STACK & AI",
  contact: {
    location: "Sydney, NSW",
    email: "rafi.pincus@gmail.com",
    site: "rafaelpincus.com",
  },
  profile:
    "Senior Software Engineer with nearly six years at Suncorp. I was promoted in September 2026 after leading mobile delivery on our Duck Creek insurance migration. I have shipped iOS apps, secure authentication and third-party integrations for millions of customers. I also built and launched Pub Thursdays, a full-stack SwiftUI app with a Supabase backend and an AI-assisted deals pipeline. I use AI tools daily to move faster, and I own the architecture, review and testing of what ships.",
  suncorp: {
    titles: [
      { title: "Senior Software Engineer", dates: "Sep 2026 - Present" },
      { title: "Software Engineer", dates: "Nov 2020 - Sep 2026" },
    ],
    company: "Suncorp Group, Sydney",
    bullets: [
      "Led mobile delivery for Suncorp's digital insurer transformation, moving the app onto the Duck Creek backend and through to production release. I set the iOS approach, guided my Android counterpart on direction and answered business-critical questions as they came up. Rollout was controlled through LaunchDarkly.",
      "Built a HAR analysis tool to find failing requests in captured network traffic. Defects that used to take days to diagnose now take a couple of hours.",
      "Ran defect triage across the migration. I pulled together huddles with teams across the business, got owners assigned and kept track of dependencies so blockers cleared quickly.",
      "Rebuilt Suncorp's core iOS authentication flows with the ForgeRock migration team, covering token handling, session state and secure error paths. I worked with security and platform teams through release; login calls to the contact centre fell 25%.",
      "Moved legacy UIKit screens towards SwiftUI and MVVM, creating reusable patterns the team could extend safely. Feature delivery is now around 30% faster.",
      "Shipped Rewards Platform, EcoScore, Shannons and other self-service features from unclear requirements through rollout. This work contributed to contact-centre call rates falling by more than 50% over five years.",
      "Integrated Mastercard, CMT telematics and Adobe Analytics across SDKs and REST APIs. I worked directly with vendors, reviewed API contracts, handled edge cases and stayed involved through production support.",
      "Own the mobile release pipeline across Jenkins, Firebase, code signing and App Store submissions. I resolve build and dependency issues so releases land predictably.",
    ],
  } satisfies ResumeProgressionRole,
  pubThursdays: {
    name: "Pub Thursdays",
    status: "LIVE ON THE APP STORE",
    descriptor: "Independent product",
    tech: "SwiftUI | Supabase/Postgres | Deno/TypeScript | Gemini API",
    bullets: [
      "Built and launched Pub Thursdays because my friends and I needed a better way to run our weekly pub night. The SwiftUI app handles rotation, voting, ratings, leaderboards, invites and APNs reminders.",
      "Built a catalogue of 500+ Sydney venues and a deals pipeline that checks venue websites, filters likely specials, uses Gemini for structured extraction and sends uncertain results to me for review.",
      "Published 1,200+ approved deals across 280 venues at 0.99 average extraction confidence at the September 2026 snapshot. Natural-language search and AI-assisted tagging help people find a pub that fits the night.",
      "Ran scheduled Deno/TypeScript pipelines for venue data, deal extraction and cleanup. They have logged 670+ runs, and every failure is recorded for review rather than hidden.",
      "Built the iOS app with SwiftUI, MVVM and Clean Architecture, backed by Supabase Auth, Postgres, Realtime, Storage, RLS and RPCs. The product has 100+ migrations and 300+ automated tests.",
      "Owned the product end to end: UX, data modelling, implementation, integration testing, App Store release and production support.",
    ],
  } satisfies ResumeProject,
  earlierExperience: [
    {
      title: "IT Salesperson",
      company: "JB Hi-Fi, Melbourne",
      dates: "Dec 2019 - Jun 2024, part-time",
      bullets: [
        "Beat sales targets and earned high CSAT by matching each customer's needs and budget to the right setup and explaining the trade-offs clearly.",
      ],
    },
    {
      title: "Technology Consultant",
      company: "BT Corporate Advisory, Melbourne",
      dates: "Sep 2019 - Jul 2020",
      bullets: [
        "Mapped the company's systems, workflows and pain points, then turned the findings into a prioritised technical roadmap.",
        "Scoped and delivered a full website rebuild from requirements through launch, making the site more accurate and easier to maintain.",
        "Replaced ad-hoc outreach with a tracked Mailchimp workflow the team could reuse.",
      ],
    },
  ] satisfies ResumeRole[],
  skills: [
    {
      label: "AI ENGINEERING",
      items:
        "Claude Code, OpenAI Codex, Gemini API, GitHub Copilot, LLM pipeline design, structured extraction, prompt engineering, human-in-the-loop review, rapid prototyping",
    },
    {
      label: "LANGUAGES & FRAMEWORKS",
      items:
        "Swift 6.1, SwiftUI, UIKit, TypeScript, Next.js, Python, SQL, MVVM, Clean Architecture",
    },
    {
      label: "BACKEND & INFRA",
      items:
        "Supabase (Postgres, Auth, RLS, Realtime, Storage, Edge Functions), Deno, REST APIs, OAuth 2.0 / PKCE, APNs, JWT (ECDSA), Inngest, Vercel, Firebase, AWS, CI/CD",
    },
    {
      label: "TOOLS & PRACTICE",
      items:
        "Git / Bitbucket, technical discovery, code review, Jira / Confluence, LaunchDarkly, Jenkins, Xcode Cloud, Figma, Agile / Scrum, App Store Connect",
    },
  ] satisfies ResumeSkillGroup[],
  education: {
    degree: "Bachelor of Information Technology",
    school: "RMIT, Melbourne",
    dates: "Feb 2019 - Nov 2021",
  },
} as const;
