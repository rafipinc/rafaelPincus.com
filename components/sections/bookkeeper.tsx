import { bookkeeper } from "@/lib/content";

export function Bookkeeper() {
  return (
    <section
      aria-labelledby="bookkeeper-heading"
      className="border-t border-border py-20 sm:py-24"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {bookkeeper.kicker}
      </p>
      <h2
        id="bookkeeper-heading"
        className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {bookkeeper.heading}
      </h2>
      <p className="mt-6 max-w-2xl leading-relaxed">{bookkeeper.body}</p>
    </section>
  );
}
