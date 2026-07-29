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

      <p className="mt-12 max-w-[62ch] border-t border-border pt-5 text-pretty text-[14.5px] leading-relaxed text-muted">
        {skills.closing}
      </p>
    </SectionShell>
  );
}
