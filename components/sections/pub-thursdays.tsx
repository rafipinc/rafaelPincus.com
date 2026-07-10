import Image from "next/image";
import { Button } from "@/components/ui/button";
import { YouTubeFacade } from "@/components/youtube-facade";
import { links, pubThursdays, video } from "@/lib/content";

export function PubThursdays() {
  return (
    <section
      aria-labelledby="pub-thursdays-heading"
      className="border-t border-border py-20 sm:py-24"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {pubThursdays.kicker}
      </p>
      <h2
        id="pub-thursdays-heading"
        className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {pubThursdays.heading}
      </h2>
      <p className="mt-2 font-mono text-sm text-muted">{pubThursdays.sub}</p>
      <p className="mt-6 max-w-2xl leading-relaxed">{pubThursdays.body}</p>

      <div className="mt-10">
        <YouTubeFacade
          videoId={video.demoId}
          title={pubThursdays.demoVideoTitle}
        />
        {video.fullId !== null && (
          <p className="mt-3 text-sm">
            <a
              href={`https://www.youtube.com/watch?v=${video.fullId}`}
              className="text-accent underline underline-offset-4 transition-colors duration-150 hover:text-accent-hover"
            >
              {pubThursdays.fullVideoLabel}
            </a>
          </p>
        )}
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
        {pubThursdays.stats.map((stat) => (
          <div key={stat.label} className="border-l border-border pl-4">
            <dd className="font-mono text-4xl tracking-tight text-ink">
              {stat.value}
            </dd>
            <dt className="mt-2 font-mono text-xs text-muted">{stat.label}</dt>
          </div>
        ))}
      </dl>

      <figure className="mt-12">
        <Image
          src={pubThursdays.pipelineImage.src}
          alt={pubThursdays.pipelineImage.alt}
          width={pubThursdays.pipelineImage.width}
          height={pubThursdays.pipelineImage.height}
          unoptimized
          className="w-full rounded-lg border border-border"
        />
        <figcaption className="mt-3 font-mono text-xs text-muted">
          {pubThursdays.pipelineImage.caption}
        </figcaption>
      </figure>

      <div className="mt-10">
        {links.appStore ? (
          <Button asChild size="lg" className="hover:bg-accent-hover">
            <a href={links.appStore}>{pubThursdays.cta}</a>
          </Button>
        ) : (
          <span title={pubThursdays.ctaPendingTitle} className="inline-block">
            <Button size="lg" disabled aria-disabled="true">
              {pubThursdays.cta}
            </Button>
          </span>
        )}
      </div>
      <p className="mt-6 font-mono text-xs text-muted">
        {pubThursdays.techLine}
      </p>
    </section>
  );
}
