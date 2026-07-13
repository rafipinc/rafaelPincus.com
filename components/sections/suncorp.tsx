import { SectionShell } from "@/components/sections/section-shell";
import { suncorp } from "@/lib/content";

export function Suncorp() {
  return (
    <SectionShell kicker={suncorp.kicker} labelledBy="suncorp-heading">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2
          id="suncorp-heading"
          className="text-3xl font-medium tracking-[-0.02em] text-ink"
        >
          {suncorp.heading}
        </h2>
        <span className="font-mono text-xs text-muted">{suncorp.sub}</span>
      </div>
      <ul className="mt-8 border-t border-ink">
        {suncorp.items.map((item) => (
          <li
            key={item.body}
            className="grid items-baseline gap-2 border-b border-border py-5 sm:grid-cols-[120px_1fr] sm:gap-8"
          >
            <span className="font-mono text-xl font-medium text-accent-warm tabular-nums">
              {item.stat}
            </span>
            <p className="text-pretty text-[15.5px] leading-relaxed">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
