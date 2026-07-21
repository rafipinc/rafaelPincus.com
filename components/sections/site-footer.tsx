import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer aria-label="Site footer">
      <div className="flex justify-between border-t border-ink pb-10 pt-6 font-mono text-[11px] tracking-[0.04em] text-muted">
        <span>{site.location.toUpperCase()}</span>
        <span>
          © {new Date().getFullYear()} {site.name.toUpperCase()}
        </span>
      </div>
    </footer>
  );
}
