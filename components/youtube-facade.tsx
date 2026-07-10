"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type YouTubeFacadeProps = {
  videoId: string | null;
  title: string;
};

export function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);

  if (videoId === null) {
    return (
      <div
        role="img"
        aria-label={`${title}. Demo video coming soon.`}
        className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-linear-to-br from-[#33271e] to-[#1b1815]"
      >
        <div className="flex h-full flex-col items-start justify-end gap-3 p-6 sm:p-8">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white"
          >
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          </span>
          <p className="font-display text-lg text-[#faf8f5]">{title}</p>
          <p className="font-mono text-xs uppercase tracking-wider text-[#a89f96]">
            Demo video coming soon
          </p>
        </div>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-border bg-[#1b1815]">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-lg border border-border bg-[#1b1815]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- YouTube-hosted thumbnail, intentionally unoptimized */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white transition-colors duration-150 group-hover:bg-accent-hover">
          <Play className="ml-1 h-6 w-6 fill-current" />
        </span>
      </span>
    </button>
  );
}
