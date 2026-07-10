import { Apple, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { links, site } from "@/lib/content";

const iconLinkClasses =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors duration-150 hover:border-accent hover:text-accent";

export function Hero() {
  return (
    <section aria-label="Introduction" className="pb-20 pt-28 sm:pb-24">
      <h1 className="font-display text-[clamp(2.75rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-ink">
        {site.name}
      </h1>
      <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted">
        {site.oneLiner}
      </p>
      <p className="mt-4 font-mono text-sm text-muted">{site.location}</p>
      <ul className="mt-8 flex flex-wrap items-center gap-3">
        <li>
          {links.appStore ? (
            <a
              href={links.appStore}
              className={iconLinkClasses}
              aria-label="Pub Thursdays on the App Store"
            >
              <Apple className="h-5 w-5" aria-hidden="true" />
            </a>
          ) : (
            <span
              className={`${iconLinkClasses} cursor-default opacity-50 hover:border-border hover:text-muted`}
              title="App Store link coming soon"
              aria-label="Pub Thursdays on the App Store, link coming soon"
            >
              <Apple className="h-5 w-5" aria-hidden="true" />
            </span>
          )}
        </li>
        <li>
          <a href={links.github} className={iconLinkClasses} aria-label="GitHub">
            <GitHubIcon className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href={links.linkedin}
            className={iconLinkClasses}
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${links.email}`}
            className={iconLinkClasses}
            aria-label={`Email ${site.nickname}`}
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>
  );
}
