import type { Metadata } from "next";
import { SectionShell } from "@/components/sections/section-shell";
import { SiteHeader } from "@/components/sections/site-header";
import { links, site } from "@/lib/content";
import { resume } from "@/lib/resume";

const description =
  "Senior Software Engineer in Sydney with nearly six years at Suncorp, shipping iOS, full-stack and AI-assisted systems for millions of customers.";

export const metadata: Metadata = {
  title: "Resume | Rafael Pincus",
  description,
  openGraph: {
    title: "Resume | Rafael Pincus",
    description,
    url: "/resume",
    siteName: "Rafael Pincus",
    locale: "en_AU",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Rafael Pincus",
    description,
  },
};

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-[1120px] px-6 sm:px-10">
      <SiteHeader />
      <main>
        <section
          aria-label="Resume header"
          className="border-b border-border pb-14 pt-16 sm:pb-16 sm:pt-20"
        >
          <p className="font-mono text-xs tracking-[0.06em] text-accent-warm">
            RESUME
          </p>
          <h1 className="mt-7 text-balance text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
            {resume.name}
          </h1>
          <p className="mt-5 font-mono text-[13px] tracking-[0.04em] text-ink">
            {resume.titleLine}
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs tracking-[0.04em] text-muted">
            <li>{resume.contact.location.toUpperCase()}</li>
            <li>
              <a
                href={`mailto:${resume.contact.email}`}
                className="transition-colors duration-150 hover:text-accent-warm"
              >
                {resume.contact.email.toUpperCase()}
              </a>
            </li>
            <li>{resume.contact.site.toUpperCase()}</li>
            <li>
              <a
                href={links.linkedin}
                className="transition-colors duration-150 hover:text-accent-warm"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href={links.github}
                className="transition-colors duration-150 hover:text-accent-warm"
              >
                GITHUB
              </a>
            </li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-3.5 font-mono text-[13px] tracking-[0.04em]">
            <a
              href={links.resumePdf}
              download
              className="bg-ink px-7 py-3.5 text-background transition-colors duration-150 hover:bg-accent-warm"
            >
              DOWNLOAD PDF →
            </a>
            <a
              href={`mailto:${links.email}`}
              className="border border-ink px-7 py-3.5 text-ink transition-colors duration-150 hover:bg-ink hover:text-background"
            >
              EMAIL ME
            </a>
          </div>
        </section>

        <SectionShell kicker="01 / PROFILE" labelledBy="resume-profile">
          <h2 id="resume-profile" className="sr-only">
            Profile
          </h2>
          <p className="max-w-[68ch] text-pretty text-[16px] leading-relaxed">
            {resume.profile}
          </p>
        </SectionShell>

        <SectionShell
          kicker="02 / SUNCORP EXPERIENCE"
          labelledBy="resume-suncorp"
        >
          <h2 id="resume-suncorp" className="sr-only">
            Suncorp experience
          </h2>
          <article>
            <ol className="flex flex-col gap-1.5">
              {resume.suncorp.titles.map((entry) => (
                <li
                  key={entry.title}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
                >
                  <h3 className="text-xl font-medium tracking-[-0.01em] text-ink">
                    {entry.title}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.04em] text-muted">
                    {entry.dates.toUpperCase()}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-2 text-[15px] text-muted">
              {resume.suncorp.company}
            </p>
            <ul className="mt-5 flex max-w-[72ch] flex-col gap-3.5">
              {resume.suncorp.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="border-l-2 border-border pl-4 text-[15px] leading-relaxed"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        </SectionShell>

        <SectionShell
          kicker="03 / SELECTED PRODUCTS"
          labelledBy="resume-selected-products"
        >
          <h2 id="resume-selected-products" className="sr-only">
            Selected products
          </h2>
          <div className="flex flex-col gap-14">
            {[resume.pubThursdays].map((project) => (
              <article key={project.name}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-xl font-medium tracking-[-0.01em] text-ink">
                    {project.name}
                  </h3>
                  {project.name === resume.pubThursdays.name &&
                  links.appStore ? (
                    <a
                      href={links.appStore}
                      className="font-mono text-xs tracking-[0.04em] text-accent transition-colors duration-150 hover:text-accent-hover"
                    >
                      {project.status}
                    </a>
                  ) : (
                    <span className="font-mono text-xs tracking-[0.04em] text-accent">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[15px] text-muted">
                  {project.descriptor}
                </p>
                <p className="mt-2 font-mono text-xs leading-relaxed tracking-[0.02em] text-muted">
                  {project.tech}
                </p>
                <ul className="mt-5 flex max-w-[72ch] flex-col gap-3.5">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-l-2 border-border pl-4 text-[15px] leading-relaxed"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          kicker="04 / EARLIER EXPERIENCE"
          labelledBy="resume-earlier-experience"
        >
          <h2 id="resume-earlier-experience" className="sr-only">
            Earlier experience
          </h2>
          <div className="flex flex-col gap-14">
            {resume.earlierExperience.map((role) => (
              <article key={`${role.title}-${role.company}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-xl font-medium tracking-[-0.01em] text-ink">
                    {role.title}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.04em] text-muted">
                    {role.dates.toUpperCase()}
                  </p>
                </div>
                <p className="mt-1 text-[15px] text-muted">{role.company}</p>
                <ul className="mt-5 flex max-w-[72ch] flex-col gap-3.5">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-l-2 border-border pl-4 text-[15px] leading-relaxed"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          kicker="05 / SKILLS"
          labelledBy="resume-skills"
        >
          <h2 id="resume-skills" className="sr-only">
            Skills
          </h2>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {resume.skills.map((group) => (
              <div key={group.label}>
                <dt className="font-mono text-xs tracking-[0.06em] text-muted">
                  {group.label}
                </dt>
                <dd className="mt-3 text-[15px] leading-relaxed text-ink">
                  {group.items}
                </dd>
              </div>
            ))}
          </dl>
        </SectionShell>

        <SectionShell kicker="06 / EDUCATION" labelledBy="resume-education">
          <h2 id="resume-education" className="sr-only">
            Education
          </h2>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium tracking-[-0.01em] text-ink">
              {resume.education.degree}
            </p>
            <p className="text-[15px]">{resume.education.school}</p>
            <p className="mt-1 font-mono text-xs tracking-[0.04em] text-muted">
              {resume.education.dates.toUpperCase()}
            </p>
          </div>
        </SectionShell>
      </main>
      <footer
        aria-label="Resume footer"
        className="flex justify-between pb-10 pt-6 font-mono text-[11px] tracking-[0.04em] text-muted"
      >
        <span>{site.location.toUpperCase()}</span>
        <span>
          © {new Date().getFullYear()} {site.name.toUpperCase()}
        </span>
      </footer>
    </div>
  );
}
