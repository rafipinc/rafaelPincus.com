import { SectionShell } from "@/components/sections/section-shell";
import { pipeline } from "@/lib/content";

export function Pipeline() {
  return (
    <SectionShell kicker={pipeline.kicker} labelledBy="pipeline-heading">
      <h2
        id="pipeline-heading"
        className="mb-10 text-3xl font-medium tracking-[-0.02em] text-ink"
      >
        {pipeline.heading}
      </h2>
      <ol className="grid list-none border-t border-ink sm:grid-cols-3">
        {pipeline.stages.map((stage) => (
          <li
            key={stage.step}
            className="border-b border-border py-7 sm:mr-6 sm:border-b-0 sm:border-r sm:pb-2 sm:pr-6 last:border-b-0 sm:last:mr-0 sm:last:border-r-0"
          >
            <div className="font-mono text-xs text-accent-warm">{stage.step}</div>
            <h3 className="mb-2.5 mt-3.5 text-[19px] font-semibold tracking-[-0.01em] text-ink">
              {stage.title}
            </h3>
            <p className="text-pretty text-[14.5px] leading-relaxed">
              {stage.body}
            </p>
            <div className="mt-4 font-mono text-xs text-accent">
              {stage.stat}
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-10 border-t border-border pt-5 font-mono text-[11px] leading-relaxed tracking-[0.05em] text-muted">
        {pipeline.footnote}
      </p>
    </SectionShell>
  );
}
