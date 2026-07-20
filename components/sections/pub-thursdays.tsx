import Image from "next/image";
import { SectionShell } from "@/components/sections/section-shell";
import { YouTubeFacade } from "@/components/youtube-facade";
import { links, pubThursdays, video } from "@/lib/content";
import type { LiveStats } from "@/lib/live-stats";

const ctaClasses =
  "border border-ink px-5 py-2.5 font-mono text-xs tracking-[0.04em] text-ink transition-colors duration-150 hover:bg-ink hover:text-background";

export function PubThursdays({ stats }: { stats: LiveStats }) {
  const metrics = [
    { value: String(stats.approvedDeals), label: "APPROVED DEALS" },
    { value: String(stats.venuesCovered), label: "VENUES COVERED" },
    {
      value: String(stats.pipelineRuns),
      label: `PIPELINE RUNS · ${stats.failedRuns} FAILED`,
    },
    {
      value: stats.avgConfidence.toFixed(2),
      label: "AVG AI CONFIDENCE (0–1)",
    },
  ];
  const fetchedOn = stats.fetchedAt
    ? new Date(stats.fetchedAt)
        .toLocaleDateString("en-AU", {
          day: "numeric",
          month: "short",
          year: "numeric",
          timeZone: "Australia/Sydney",
        })
        .toUpperCase()
    : null;

  return (
    <SectionShell kicker={pubThursdays.kicker} labelledBy="pub-thursdays-heading">
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <h2
          id="pub-thursdays-heading"
          className="text-4xl font-medium tracking-[-0.02em] text-ink sm:text-[2.75rem]"
        >
          {pubThursdays.heading}
        </h2>
        <span className="font-mono text-xs text-accent">
          {pubThursdays.status}
        </span>
      </div>
      <p className="mt-5 max-w-[60ch] text-pretty text-[17px] leading-relaxed">
        {pubThursdays.body}
      </p>

      <dl className="mt-12 grid grid-cols-2 border-l border-t border-t-ink border-l-border md:grid-cols-4">
        {metrics.map((metric) => (
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
      {stats.live && fetchedOn ? (
        <p className="mt-3 font-mono text-[11px] tracking-[0.05em] text-accent">
          {pubThursdays.liveCaptionPrefix} {fetchedOn}
        </p>
      ) : null}

      <div className="mt-5 grid gap-5 md:grid-cols-[1fr_1.4fr] print:grid-cols-1">
        <div className="print:hidden">
          <YouTubeFacade
            videoId={video.id}
            title={pubThursdays.demoVideoTitle}
          />
        </div>
        <Image
          src={pubThursdays.pipelineImage.src}
          alt={pubThursdays.pipelineImage.alt}
          width={pubThursdays.pipelineImage.width}
          height={pubThursdays.pipelineImage.height}
          unoptimized
          className="h-full w-full border border-border object-cover"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">{pubThursdays.techLine}</p>
        {links.appStore ? (
          <a href={links.appStore} className={ctaClasses}>
            {pubThursdays.cta}
          </a>
        ) : (
          <span
            title={pubThursdays.ctaPendingTitle}
            aria-disabled="true"
            className={`${ctaClasses} cursor-default opacity-50 hover:bg-transparent hover:text-ink`}
          >
            {pubThursdays.cta}
          </span>
        )}
      </div>
    </SectionShell>
  );
}
