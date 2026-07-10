import { Button } from "@/components/ui/button";
import { footer, links, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer aria-label="Availability and contact">
      <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-20 sm:pt-24">
        <div className="border-t border-border pt-20 sm:pt-24">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {footer.kicker}
          </p>
          <p className="mt-4 max-w-2xl font-display text-2xl font-medium leading-snug text-ink">
            {footer.line}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button asChild size="lg" className="hover:bg-accent-hover">
              <a href={`mailto:${links.email}`}>{footer.emailCta}</a>
            </Button>
            <a
              href={links.linkedin}
              className="text-sm text-accent underline underline-offset-4 transition-colors duration-150 hover:text-accent-hover"
            >
              {footer.linkedinLabel}
            </a>
          </div>
          <p className="mt-16 font-mono text-xs text-muted">
            {site.location} · © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
