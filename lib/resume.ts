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
  titleLine: "FORWARD DEPLOYED ENGINEER · SOLUTIONS ENGINEER",
  contact: {
    location: "Sydney, NSW",
    email: "rafi.pincus@gmail.com",
    phone: "0425 107 992",
    site: "rafaelpincus.com",
  },
  profile:
    "Software engineer with five years at Suncorp, shipping iOS apps, secure authentication and third-party integrations for millions of customers. I work best when the problem is still unclear: talking with users, shaping the approach and staying through release. I also built and launched Pub Thursdays, a full-stack SwiftUI app backed by Supabase and an AI-assisted deals pipeline. I'm looking for a forward deployed or solutions engineering role where I can stay close to users and ship useful, reliable software.",
  skills: [
    {
      label: "AI ENGINEERING",
      items:
        "Claude Code, GitHub Copilot, Gemini API, prompt engineering, code review, rapid prototyping, LLM pipeline design, technical discovery",
    },
    {
      label: "LANGUAGES & FRAMEWORKS",
      items:
        "Swift 6.1, SwiftUI, UIKit, TypeScript, Python, SQL, MVVM, Clean Architecture",
    },
    {
      label: "BACKEND & INFRA",
      items:
        "Supabase (Postgres, Auth, RLS, Realtime, Storage, Edge Functions), Deno, REST APIs, APNs, JWT (ECDSA), Firebase, AWS, CI/CD, Jenkins, Xcode Cloud",
    },
    {
      label: "TOOLS",
      items:
        "Git / Bitbucket, Jira / Confluence, LaunchDarkly, Figma, Agile / Scrum, App Store Connect",
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
        "Built and launched Pub Thursdays, a SwiftUI app I made for my own weekly pub group. It handles picker rotation, voting, ratings, leaderboards, invites and reminders.",
        "Built a catalogue of 500+ Sydney venues and a deals pipeline that checks venue websites, filters likely specials, uses Gemini for structured extraction and routes low-confidence results for review.",
        "Published 580+ approved deals across 120+ venues at 0.93 average confidence. The scheduled Deno/TypeScript pipelines logged 220+ runs with zero failures as of July 2026.",
        "Owned the iOS app, backend, UX, data modelling, testing, App Store release and production support across SwiftUI/MVVM, Supabase and 300+ automated tests.",
      ],
    },
  ] satisfies ResumeProject[],
  experience: [
    {
      title: "Software Engineer",
      company: "Suncorp Group, Sydney",
      dates: "Nov 2020 – Present",
      bullets: [
        "Helped rebuild Suncorp's core iOS authentication flows during the ForgeRock migration, covering token handling, session state and secure error paths. Worked with security and platform teams through release; login calls to the contact centre fell 25%.",
        "Led mobile delivery for the Duck Creek insurance migration. Set the iOS approach, aligned shared patterns with Android and coordinated API changes, data mapping, testing and a LaunchDarkly rollout.",
        "Moved legacy UIKit screens towards SwiftUI and MVVM with reusable patterns the team could extend. Feature delivery is now around 30% faster.",
        "Shipped Rewards Platform, EcoScore, Shannons and other self-service features from requirements through rollout. This work contributed to contact-centre call rates falling by more than 50% over five years.",
        "Integrated Mastercard, CMT telematics and Adobe Analytics across SDKs and REST APIs, including vendor coordination, contract review, edge cases and production support.",
        "Owned the mobile release pipeline across Jenkins, Firebase, signing and App Store submissions, resolving build and dependency issues so releases landed predictably.",
      ],
    },
    {
      title: "IT Salesperson",
      company: "JB Hi-Fi, Melbourne",
      dates: "Dec 2019 – Jun 2024 (part-time)",
      bullets: [
        "Worked with customers to understand the real problem and recommend a setup that fit their needs and budget.",
        "Consistently beat sales targets across home-office, education and AV setups by matching practical constraints to the right hardware and software.",
        "Earned high CSAT and repeated formal feedback for explaining technical choices clearly.",
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
