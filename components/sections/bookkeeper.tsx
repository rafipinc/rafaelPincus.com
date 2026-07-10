import { SectionShell } from "@/components/sections/section-shell";
import { bookkeeper } from "@/lib/content";

export function Bookkeeper() {
  return (
    <SectionShell kicker={bookkeeper.kicker} labelledBy="bookkeeper-heading">
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h2
            id="bookkeeper-heading"
            className="text-3xl font-medium tracking-[-0.02em] text-ink"
          >
            {bookkeeper.heading}
          </h2>
          <p className="mt-4 max-w-[55ch] text-pretty leading-relaxed">
            {bookkeeper.body}
          </p>
        </div>
        <dl className="border-t border-ink pt-5 font-mono text-xs leading-[2.1] text-muted">
          {bookkeeper.specs.map((spec) => (
            <div key={spec.label} className="flex justify-between gap-4">
              <dt>{spec.label}</dt>
              <dd className={spec.accent ? "text-accent" : "text-ink"}>
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionShell>
  );
}
