import { SectionShell } from "@/components/sections/section-shell";
import { bookkeeper } from "@/lib/content";

export function Bookkeeper() {
  return (
    <SectionShell kicker={bookkeeper.kicker} labelledBy="bookkeeper-heading">
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <h2
          id="bookkeeper-heading"
          className="text-4xl font-medium tracking-[-0.02em] text-ink sm:text-[2.75rem]"
        >
          {bookkeeper.heading}
        </h2>
        <span className="font-mono text-xs text-accent">
          {bookkeeper.status}
        </span>
      </div>
      <p className="mt-5 max-w-[62ch] text-pretty text-[17px] leading-relaxed">
        {bookkeeper.body}
      </p>

      <ol className="mt-10 grid border-l border-t border-t-ink border-l-border lg:grid-cols-3">
        {bookkeeper.details.map((detail) => (
          <li
            key={detail.label}
            className="border-b border-r border-border px-6 py-7"
          >
            <p className="font-mono text-[11px] tracking-[0.06em] text-accent-warm">
              {detail.label}
            </p>
            <h3 className="mt-4 text-xl font-medium tracking-[-0.015em] text-ink">
              {detail.title}
            </h3>
            <p className="mt-3 text-pretty text-[14.5px] leading-relaxed">
              {detail.body}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-7 font-mono text-xs leading-relaxed text-muted">
        {bookkeeper.techLine}
      </p>
    </SectionShell>
  );
}
