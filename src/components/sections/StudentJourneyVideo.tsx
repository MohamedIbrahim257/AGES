"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { studentJourneyCopy, studentJourneyVideo } from "@/data/content";

export function StudentJourneyVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video min-h-[200px] w-full overflow-hidden bg-slate-200">
      {playing ? (
        <iframe
          src={`${studentJourneyVideo.embedUrl}?autoplay=1`}
          title={studentJourneyCopy.videoTitle}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <>
          <Image
            src={studentJourneyVideo.posterSrc}
            alt={studentJourneyVideo.posterAlt}
            fill
            className="object-cover object-[center_45%]"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(10,37,64,0.55)_0%,rgba(37,99,235,0.22)_45%,rgba(255,255,255,0.08)_100%)]"
            aria-hidden
          />
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="focus-ring group absolute inset-0 flex flex-col items-center justify-center gap-4 p-6"
            aria-label="Play study abroad journey video"
          >
            <span className="flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-white/95 shadow-[0_12px_40px_-8px_rgba(6,21,38,0.35)] ring-4 ring-white/50 transition group-hover:scale-105 group-hover:bg-white sm:h-[4.75rem] sm:w-[4.75rem]">
              <Play className="ml-1 h-9 w-9 fill-[var(--accent-mid)] text-[var(--accent-mid)] sm:h-10 sm:w-10" aria-hidden />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
