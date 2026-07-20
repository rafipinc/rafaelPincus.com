import { links, site } from "@/lib/content";

const navLinkClasses =
  "text-ink transition-colors duration-150 hover:text-accent-warm";

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-4 border-b border-ink py-7 font-mono text-xs tracking-[0.04em] sm:flex-row sm:items-baseline sm:justify-between">
      <div className="font-medium text-ink">{site.name.toUpperCase()}</div>
      <nav
        aria-label="Contact links"
        className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-7"
      >
        <a href={links.resume} className={navLinkClasses}>
          RÉSUMÉ
        </a>
        <a href={links.github} className={navLinkClasses}>
          GITHUB
        </a>
        <a href={links.linkedin} className={navLinkClasses}>
          LINKEDIN
        </a>
        <a href={`mailto:${links.email}`} className={navLinkClasses}>
          EMAIL
        </a>
      </nav>
    </header>
  );
}
