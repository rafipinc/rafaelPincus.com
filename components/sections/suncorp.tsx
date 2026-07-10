import { suncorp } from "@/lib/content";

export function Suncorp() {
  return (
    <section
      aria-labelledby="suncorp-heading"
      className="border-t border-border py-20 sm:py-24"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {suncorp.kicker}
      </p>
      <h2
        id="suncorp-heading"
        className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {suncorp.heading}
      </h2>
      <p className="mt-2 font-mono text-sm text-muted">{suncorp.sub}</p>
      <ul className="mt-8 space-y-5">
        {suncorp.bullets.map((bullet) => (
          <li key={bullet} className="flex max-w-2xl gap-4">
            <span
              aria-hidden="true"
              className="mt-[0.7em] h-px w-4 shrink-0 bg-accent"
            />
            <span className="leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
