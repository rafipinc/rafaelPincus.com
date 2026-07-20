import { SectionShell } from "@/components/sections/section-shell";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <SectionShell kicker={skills.kicker} labelledBy="skills-heading">
      <h2
        id="skills-heading"
        className="text-3xl font-medium tracking-[-0.02em] text-ink"
      >
        {skills.heading}
      </h2>
      <p className="mt-4 max-w-[62ch] text-pretty leading-relaxed">
        {skills.body}
      </p>

      <dl className="mt-10 grid gap-x-12 gap-y-7 border-t border-ink pt-7 md:grid-cols-2">
        {skills.groups.map((group) => (
          <div key={group.label}>
            <dt className="font-mono text-xs tracking-[0.05em] text-accent-warm">
              {group.label}
            </dt>
            <dd className="mt-2.5 text-pretty text-[14.5px] leading-relaxed text-foreground">
              {group.items}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-12 max-w-[62ch] text-pretty text-[14.5px] leading-relaxed text-muted">
        {skills.metricsIntro}
      </p>
      <dl className="mt-5 grid grid-cols-1 border-l border-t border-t-ink border-l-border sm:grid-cols-3">
        {skills.metrics.map((metric) => (
          <div
            key={metric.label}
            className="border-b border-r border-border px-5 pb-7 pt-6"
          >
            <dd className="text-4xl font-medium tracking-[-0.02em] text-ink tabular-nums sm:text-[2.625rem]">
              {metric.value}
            </dd>
            <dt className="mt-2 font-mono text-[11px] tracking-[0.05em] text-muted">
              {metric.label}
            </dt>
          </div>
        ))}
      </dl>
      <p className="mt-8 border-t border-border pt-5 font-mono text-[11px] leading-relaxed tracking-[0.05em] text-muted">
        {skills.footnote}
      </p>
    </SectionShell>
  );
}
