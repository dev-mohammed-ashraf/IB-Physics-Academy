"use client";

import { CheckCircle2 } from "lucide-react";
import type { Chapter } from "@/types";

interface ChapterCardProps {
  chapter: Chapter;
  onBuy: () => void;
}

export default function ChapterCard({ chapter, onBuy }: ChapterCardProps) {
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

        {/* قائمة المواضيع */}
        <ul className="mt-3 space-y-2 border-t border-gray-100 pt-3 dark:border-gray-700">
          {chapter.subtopics.map((subtopic) => (
            <li
              key={subtopic}
              className="flex items-start gap-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300"
            >
              <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-indigo-500 dark:text-indigo-400" />
              {subtopic}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* السعر */}
        <p className="mt-4 flex items-baseline gap-1.5">
          <span className="text-xl font-extrabold text-gray-900 dark:text-white">
            ${chapter.price}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            one-time purchase
          </span>
        </p>

        <button
          type="button"
          onClick={onBuy}
          className="mt-3 w-full cursor-pointer touch-manipulation select-none rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-700 sm:text-sm dark:bg-indigo-600 dark:hover:bg-indigo-500"
        >
          Buy Now
        </button>
      </div>
    </article>
  );
}
