"use client";

import { CheckCircle2, Download } from "lucide-react";
import type { Chapter } from "@/types";

interface ChapterCardProps {
  chapter: Chapter;
  onEnroll: () => void;
  onRequestSample: () => void;
}

export default function ChapterCard({
  chapter,
  onEnroll,
  onRequestSample,
}: ChapterCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-line-card bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-accent-line-hover hover:shadow-md">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            CHAPTER {chapter.number}
          </span>
          {chapter.isHL && (
            <span className="rounded-full bg-primary-tint px-2 py-0.5 text-[10px] font-bold text-accent-deep">
              HL
            </span>
          )}
        </div>
        <h3 className="mt-2 text-sm font-bold leading-snug text-heading sm:text-base">
          {chapter.title}
        </h3>

        <ul className="mt-3 space-y-2 border-t border-line-hairline pt-3">
          {chapter.subtopics.map((subtopic) => (
            <li
              key={subtopic}
              className="flex items-start gap-2 text-xs leading-relaxed text-body-soft"
            >
              <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-accent-icon" />
              {subtopic}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mt-4 flex items-baseline gap-1.5">
          <span className="text-xl font-extrabold text-heading">
            Free
          </span>
          <span className="text-xs text-faint">
            Free Access
          </span>
        </p>

        <div className="mt-3 flex flex-col gap-2">
          <button
            type="button"
            onClick={onEnroll}
            className="w-full cursor-pointer touch-manipulation select-none rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary-hover sm:text-sm"
          >
            Enroll for Free
          </button>
          <button
            type="button"
            onClick={onRequestSample}
            className="inline-flex w-full cursor-pointer touch-manipulation select-none items-center justify-center gap-2 rounded-lg border border-accent-line-soft bg-transparent px-4 py-2.5 text-xs font-semibold text-accent transition-colors hover:border-accent-line-strong hover:bg-primary-hover-soft-alt sm:text-sm"
          >
            <Download className="size-4" />
            Download Free Sample
          </button>
        </div>
      </div>
    </article>
  );
}
