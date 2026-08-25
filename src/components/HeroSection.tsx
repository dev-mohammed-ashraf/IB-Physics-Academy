import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Download } from "lucide-react";
import type { HeroProps } from "@/types";

export default function HeroSection({
  badgeText = "12+ Years Experience Teaching In English",
  titleLine1 = "Expert IB physics Tutor",
  highlightText = "Exam Preparation",
  description = "Hi, I'm Maha, an experienced Physics tutor and academic researcher with over 12 years of teaching experience in English. I specialize in IB Physics and help students build a strong understanding of physics, solve problems step by step, and prepare strategically for their exams.",
  imageUrl = "/hero.jpg",
  imageAlt = "Whiteboard with IB physics formulas and study materials",
}: Partial<HeroProps>) {
  return (
    <section className="bg-gradient-to-b from-indigo-50/60 from-0% via-indigo-50/30 via-70% to-white to-100% dark:from-indigo-950/40 dark:via-gray-900 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="relative z-0 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-medium text-indigo-700 sm:text-sm dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
              <ShieldCheck className="size-4" />
              {badgeText}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl dark:text-white">
              {titleLine1}{" "}
              <div className="text-indigo-600 dark:text-indigo-400">
                {highlightText}
              </div>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 dark:text-gray-400">
              {description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="#chapters"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-colors hover:bg-indigo-700 sm:w-auto dark:hover:bg-indigo-500"
              >
                Explore Chapters
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#book-session"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 transition-colors hover:border-indigo-300 hover:bg-indigo-50 sm:w-auto dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-indigo-700 dark:hover:bg-gray-700"
              >
                <Download className="size-4 text-indigo-600 dark:text-indigo-400" />
                Download Free Sample
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative z-0 mx-auto w-full max-w-lg lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-indigo-100/60 blur-2xl dark:bg-indigo-900/30"
              aria-hidden="true"
            />
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={800}
              height={600}
              priority
              className="relative w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
