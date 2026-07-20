import { contact, links, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer aria-label="Availability and contact">
      <section aria-labelledby="contact-heading" className="pb-28 pt-24 sm:pt-28">
        <p
          className="mb-7 font-mono text-xs tracking-[0.06em] text-accent-warm"
          id="contact-kicker"
        >
          {contact.kicker}
        </p>
        <h2
          id="contact-heading"
          className="max-w-[24ch] text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.025em] text-ink"
        >
          {contact.heading}
        </h2>
        <p className="mt-7 max-w-[62ch] text-pretty text-[16px] leading-relaxed">
          {contact.body}
        </p>
        <div className="mt-11 flex flex-wrap gap-3.5 font-mono text-[13px] tracking-[0.04em]">
          <a
            href={`mailto:${links.email}`}
            className="bg-ink px-7 py-3.5 text-background transition-colors duration-150 hover:bg-accent-warm"
          >
            {contact.emailCta}
          </a>
          <a
            href={links.linkedin}
            className="border border-ink px-7 py-3.5 text-ink transition-colors duration-150 hover:bg-ink hover:text-background"
          >
            {contact.linkedinLabel}
          </a>
        </div>
      </section>
      <div className="flex justify-between border-t border-ink pb-10 pt-6 font-mono text-[11px] tracking-[0.04em] text-muted">
        <span>{site.location.toUpperCase()}</span>
        <span>
          © {new Date().getFullYear()} {site.name.toUpperCase()}
        </span>
      </div>
    </footer>
  );
}
