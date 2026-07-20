import { SectionShell } from "@/components/sections/section-shell";
import { forwardDeployed } from "@/lib/content";

export function ForwardDeployed() {
  return (
    <SectionShell
      kicker={forwardDeployed.kicker}
      labelledBy="forward-deployed-heading"
    >
      <h2
        id="forward-deployed-heading"
        className="max-w-[24ch] text-balance text-3xl font-medium tracking-[-0.02em] text-ink"
      >
        {forwardDeployed.heading}
      </h2>
      <p className="mt-5 max-w-[62ch] text-pretty leading-relaxed">
        {forwardDeployed.body}
      </p>

      <ol className="mt-10 border-t border-ink">
        {forwardDeployed.details.map((detail, index) => (
          <li
            key={detail.label}
            className="grid gap-3 border-b border-border py-6 sm:grid-cols-[120px_1fr] sm:gap-7 lg:grid-cols-[120px_190px_1fr]"
          >
            <span className="font-mono text-xs tracking-[0.05em] text-accent-warm">
              0{index + 1} / {detail.label}
            </span>
            <h3 className="text-pretty text-[17px] font-medium leading-snug text-ink">
              {detail.title}
            </h3>
            <p className="text-pretty text-[14.5px] leading-relaxed sm:col-start-2 lg:col-start-auto">
              {detail.body}
            </p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
