"use client";

import { X, CheckCircle2 } from "lucide-react";
import type { Chapter } from "@/types";
import Image from "next/image";

interface ChapterModalProps {
  chapter: Chapter;
  onClose: () => void;
}

export default function ChapterModal({ chapter, onClose }: ChapterModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chapter-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* زر الإغلاق */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 flex size-9 cursor-pointer touch-manipulation select-none items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
        >
          <X className="size-5" />
        </button>

        {/* الترويسة */}
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
          CHAPTER {chapter.number}
          {chapter.isHL && (
            <span className="ml-2 rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-bold text-indigo-300">
              HL
            </span>
          )}
        </p>
        <h3
          id="chapter-modal-title"
          className="mt-1.5 pr-10 text-xl font-bold text-white sm:text-2xl"
        >
          {chapter.title}
        </h3>

        {/* السعر */}
        <p className="mt-4">
          <span className="text-xl font-bold text-white">${chapter.price}</span>
          <span className="ml-2 text-sm text-gray-400">one-time purchase</span>
        </p>

        {/* قائمة المواضيع */}
        <ul className="mt-5 space-y-3 border-t border-gray-800 pt-5">
          {chapter.subtopics.map((subtopic) => (
            <li
              key={subtopic}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-300"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-400" />
              {subtopic}
            </li>
          ))}
        </ul>

        {/* زر الدفع (واجهة فقط - سيتم ربط Stripe لاحقاً) */}
        <div className="mt-6">
          <button
            type="button"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FFC439] px-6 py-3.5 text-sm font-bold text-black transition-colors hover:bg-[#F2BA36]"
          >
            <Image
              src="/paypal-logo.png"
              alt="PayPal Logo"
              width={17}
              height={17}
              className="object-contain"
            />
            Pay with PayPal
          </button>
        </div>
      </div>
    </div>
  );
}
