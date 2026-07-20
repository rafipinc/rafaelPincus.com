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
    "Software engineer at Suncorp, one of Australia's largest financial services groups, with five years shipping production iOS apps, secure auth flows, vendor integrations and API-backed features for millions of customers. Strongest at turning ambiguous product or customer problems into architecture, implementation and release. Recently launched Pub Thursdays on the App Store, a full-stack SwiftUI app with Supabase and Gemini-backed extraction and search pipelines. I use Claude Code and GitHub Copilot daily while keeping ownership of code quality, testing, debugging and technical tradeoffs. Looking for a forward deployed or solutions engineering role where I can work close to users and ship reliable software quickly.",
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
        "Git / BitBucket, JIRA / Confluence, LaunchDarkly, Figma, Agile / Scrum, App Store Connect",
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
        "Built and shipped a SwiftUI iPhone app for small social groups with recurring meetups, combining pub rotation, ratings, leaderboards, invites, votes and APNs reminders in one shared flow.",
        "Built an app-owned catalog of 500+ Sydney venues and a deterministic-first deals pipeline using rule-based filtering, Gemini structured extraction, confidence scoring and human review.",
        "Produced 580+ approved deals across 120+ venues at 0.93 average confidence, with natural-language search and AI-assisted venue tagging behind Supabase Edge Functions.",
        "Ran scheduled Deno/TypeScript pipelines for catalog hydration, extraction and cleanup, with 220+ logged runs and zero failures as of July 2026.",
        "Built a Clean Architecture/MVVM app and Supabase backend with Auth, Postgres, Realtime, Storage, RLS, RPCs, 100+ migrations and 300+ automated tests.",
        "Owned the product end to end through UX, data modeling, implementation, integration testing, App Store release and production operations.",
      ],
    },
  ] satisfies ResumeProject[],
  experience: [
    {
      title: "Software Engineer",
      company: "Suncorp Group, Sydney",
      dates: "Nov 2020 – Present",
      bullets: [
        "Key contributor on the iOS side of Suncorp's ForgeRock migration, rebuilding core authentication flows in Swift around REST API-backed token handling, session state and secure error paths. Worked with security/platform teams through release; login calls to the contact centre dropped 25% after launch.",
        "Led mobile delivery for Suncorp's highest-priority backend migration using Duck Creek as the source for insurance data. Defined the iOS solution, aligned iOS and Android on shared patterns, used LaunchDarkly for a controlled rollout, and coordinated API changes, data mapping, testing and release.",
        "Drove the migration from legacy UIKit screens to SwiftUI and MVVM, creating reusable patterns the team could extend safely. Framed the case around release speed, maintainability and reduced implementation cost; feature delivery is now around 30% faster.",
        "Shipped production iOS features from ambiguous requirements through implementation, testing and rollout, including Rewards Platform, EcoScore and Shannons. Self-service work in the service app contributed to contact-centre call rates falling by more than 50% over my tenure.",
        "Integrated Mastercard, CMT telematics and Adobe Analytics SDKs and REST APIs end to end, including vendor coordination, API contract review, edge-case handling and production support. Defined the Adobe event schema product uses for data-backed decisions.",
        "Use GitHub Copilot and AI tooling across the dev lifecycle to draft code, explore architecture, write technical docs and speed up implementation while keeping review, testing and debugging standards high.",
        "Own the mobile release pipeline across Jenkins, Firebase, signing and App Store submissions. Manage build issues, dependencies and release comms so engineering work lands predictably and on time.",
      ],
    },
    {
      title: "IT Salesperson",
      company: "JB Hi-Fi, Melbourne",
      dates: "Dec 2019 – Jun 2024 (part-time)",
      bullets: [
        "Ran customer-facing technical discovery every shift, separating the real problem from the requested product and translating needs into practical technical recommendations.",
        "Consistently exceeded sales targets with a consultative approach, solving complex home-office, education and AV setups by matching constraints to the right hardware/software mix.",
        "Built strong communication instincts for explaining technical tradeoffs clearly to non-technical customers, earning high CSAT and repeated formal positive feedback.",
      ],
    },
    {
      title: "Technology Consultant",
      company: "BT Corporate Advisory, Melbourne",
      dates: "Sep 2019 – Jul 2020",
      bullets: [
        "Mapped the business's systems, workflows and pain points, then turned the findings into a prioritised technical roadmap leadership could act on.",
        "Scoped and delivered a full website rebuild, managing requirements, implementation and launch so the site accurately reflected the business and was easier to maintain.",
        "Implemented a Mailchimp email workflow to replace ad-hoc outreach, giving the team a repeatable system with tracking and better follow-up.",
      ],
    },
  ] satisfies ResumeRole[],
} as const;
