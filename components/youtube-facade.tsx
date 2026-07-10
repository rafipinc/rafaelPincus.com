"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type YouTubeFacadeProps = {
  videoId: string | null;
  title: string;
};

const hatchClasses =
  "bg-[repeating-linear-gradient(45deg,#F1F1EC,#F1F1EC_10px,#EAEAE4_10px,#EAEAE4_20px)]";

export function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);

  if (videoId === null) {
    return (
      <div
        role="img"
        aria-label={`${title}. Demo video coming soon.`}
        className={`flex aspect-4/3 w-full flex-col items-center justify-center gap-3 border border-border ${hatchClasses}`}
      >
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-background text-muted"
        >
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </span>
        <p className="font-mono text-xs text-muted">90S DEMO · COMING SOON</p>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="aspect-4/3 w-full overflow-hidden border border-border bg-ink">
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
      className="group relative block aspect-4/3 w-full overflow-hidden border border-border bg-ink"
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
