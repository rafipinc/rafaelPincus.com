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
        aria-label={`${title}. Video coming soon.`}
        className={`flex aspect-video w-full flex-col items-center justify-center gap-3 border border-border ${hatchClasses}`}
      >
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-background text-muted"
        >
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </span>
        <p className="font-mono text-xs text-muted">VIDEO · COMING SOON</p>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="aspect-video w-full overflow-hidden border border-border bg-ink">
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
      className="group relative block aspect-video w-full overflow-hidden border border-border bg-ink"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- YouTube-hosted thumbnail, intentionally unoptimized */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform duration-150 group-hover:scale-105 group-hover:bg-accent-hover sm:h-20 sm:w-20">
          <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
        </span>
      </span>
    </button>
  );
}
