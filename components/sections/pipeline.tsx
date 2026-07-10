import { pipeline } from "@/lib/content";

export function Pipeline() {
  return (
    <section
      aria-labelledby="pipeline-heading"
      className="border-t border-border py-20 sm:py-24"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {pipeline.kicker}
      </p>
      <h2
        id="pipeline-heading"
        className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {pipeline.heading}
      </h2>
      <div className="mt-8 space-y-8">
        {pipeline.steps.map((step) => (
          <div key={step.heading}>
            <h3 className="font-display text-xl font-medium text-ink">
              {step.heading}
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
