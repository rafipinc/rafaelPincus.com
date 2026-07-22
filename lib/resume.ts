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
  descriptor: string;
  status: string;
  bullets: string[];
};

export const resume = {
  name: "Rafael Pincus",
  titleLine: "SOFTWARE ENGINEER · iOS, FULL STACK & AI",
  contact: {
    location: "Sydney, NSW",
    email: "rafi.pincus@gmail.com",
    site: "rafaelpincus.com",
  },
  profile:
    "Software engineer with five years at Suncorp, shipping iOS apps, secure authentication and third-party integrations for millions of customers. I like getting close to the real problem, making the trade-offs clear and staying involved through release. I also built and launched Pub Thursdays, a full-stack SwiftUI app with a Supabase backend and an AI-assisted deals pipeline. I use AI tools daily to move faster, but I still own the architecture, review, testing and final result. I care about building useful, reliable software that holds up in the real world.",
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
    dates: "Feb 2019 – Nov 2021",
  },
  projects: [
    {
      name: "Pub Thursdays",
      descriptor: "iOS App",
      status: "LIVE ON THE APP STORE",
      bullets: [
        "Built and launched Pub Thursdays because my friends and I needed a better way to run our weekly pub night. The SwiftUI app handles rotation, voting, ratings, leaderboards, invites and APNs reminders.",
        "Built a catalogue of 500+ Sydney venues and a deals pipeline that checks venue websites, filters likely specials, uses Gemini for structured extraction and sends uncertain results to me for review.",
        "Published 580+ approved deals across 120+ venues at 0.93 average confidence. Natural-language search and AI-assisted tagging help people find a pub that fits the night.",
        "Ran scheduled Deno/TypeScript pipelines for venue data, deal extraction and cleanup. They logged 220+ runs with zero failures as of July 2026.",
        "Built the iOS app with SwiftUI, MVVM and Clean Architecture, backed by Supabase Auth, Postgres, Realtime, Storage, RLS and RPCs. The product has 100+ migrations and 300+ automated tests.",
        "Owned the product end to end: UX, data modelling, implementation, integration testing, App Store release and production support.",
      ],
    },
  ] satisfies ResumeProject[],
  experience: [
    {
      title: "Software Engineer",
      company: "Suncorp Group, Sydney",
      dates: "Nov 2020 – Present",
      bullets: [
        "Helped rebuild Suncorp's core iOS authentication flows during the ForgeRock migration, covering token handling, session state and secure error paths. I worked with security and platform teams through release; login calls to the contact centre fell 25%.",
        "Led mobile delivery for the Duck Creek insurance migration. I set the iOS approach, aligned shared patterns with Android and coordinated API changes, data mapping, testing and a controlled LaunchDarkly rollout.",
        "Moved legacy UIKit screens towards SwiftUI and MVVM, creating reusable patterns the team could extend safely. Feature delivery is now around 30% faster.",
        "Shipped Rewards Platform, EcoScore, Shannons and other self-service features from unclear requirements through rollout. This work contributed to contact-centre call rates falling by more than 50% over five years.",
        "Integrated Mastercard, CMT telematics and Adobe Analytics across SDKs and REST APIs. I worked directly with vendors, reviewed API contracts, handled edge cases and stayed involved through production support.",
        "Worked across product, design, security, platform and vendor teams, turning unclear requirements into practical plans and explaining trade-offs in terms people could act on.",
        "Own the mobile release pipeline across Jenkins, Firebase, code signing and App Store submissions. I resolve build and dependency issues so releases land predictably.",
      ],
    },
    {
      title: "IT Salesperson",
      company: "JB Hi-Fi, Melbourne",
      dates: "Dec 2019 – Jun 2024 (part-time)",
      bullets: [
        "Worked with customers to understand the real problem and recommend a setup that fit their needs and budget.",
        "Consistently beat sales targets across home-office, education and AV setups by matching practical constraints to the right hardware and software.",
        "Earned high CSAT and repeated formal feedback for explaining technical choices clearly to people with different levels of technical confidence.",
      ],
    },
    {
      title: "Technology Consultant",
      company: "BT Corporate Advisory, Melbourne",
      dates: "Sep 2019 – Jul 2020",
      bullets: [
        "Mapped the company's systems, workflows and pain points, then turned the findings into a prioritised technical roadmap.",
        "Scoped and delivered a full website rebuild from requirements through launch, making the site more accurate and easier to maintain.",
        "Replaced ad-hoc outreach with a tracked Mailchimp workflow the team could reuse.",
      ],
    },
  ] satisfies ResumeRole[],
} as const;
