"use client";

import { ArrowRight } from "lucide-react";
import type { Chapter } from "@/types";

interface ChapterCardProps {
  chapter: Chapter;
  onDetails: () => void;
}

export default function ChapterCard({ chapter, onDetails }: ChapterCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-600">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            CHAPTER {chapter.number}
          </span>
          {chapter.isHL && (
            <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              HL
            </span>
          )}
        </div>
        <h3 className="mt-2 text-sm font-bold leading-snug text-gray-900 sm:text-base dark:text-white">
          {chapter.title}
        </h3>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-extrabold text-gray-900 dark:text-white">
          ${chapter.price}
        </span>
        <button
          type="button"
          onClick={onDetails}
          className="cursor-pointer touch-manipulation select-none inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700 transition-colors hover:bg-indigo-600 hover:text-white sm:text-sm dark:bg-indigo-950 dark:text-indigo-300 dark:hover:bg-indigo-600 dark:hover:text-white"
        >
          Details
          <ArrowRight className="size-3.5" />
        </button>
      </div>
    </article>
  );
}
