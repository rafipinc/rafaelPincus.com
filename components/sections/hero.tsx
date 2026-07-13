import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="border-b border-border pb-20 pt-20 sm:pb-22 sm:pt-24"
    >
      <p className="font-mono text-xs tracking-[0.06em] text-accent-warm">
        {hero.kicker}
      </p>
      <h1 className="mt-8 max-w-[15ch] text-balance text-[clamp(2.75rem,6.5vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
        {hero.heading}
      </h1>
      <p className="mt-9 max-w-[46ch] text-pretty text-xl leading-normal text-foreground">
        {hero.sub}
      </p>
      <div className="mt-11 flex flex-wrap gap-3 font-mono text-xs">
        <span className="rounded-full border border-ink bg-ink px-4 py-2 text-background">
          {hero.pillPrimary}
        </span>
        <span className="rounded-full border border-accent-warm px-4 py-2 text-accent-warm">
          {hero.pillSecondary}
        </span>
      </div>
    </section>
  );
}
