import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Download } from "lucide-react";
import type { HeroProps } from "@/types";

export default function HeroSection({
  badgeText = "12+ Years Experience Teaching In English",
  titleLine1 = "Master IB Physics",
  highlightText = "Aim for a 7.",
  description = "Understand the concept. Solve step by step. Prepare with confidence. I help IB Physics students move beyond memorizing formulas and develop the deeper understanding needed to maximize exam performance.",
  imageUrl = "/header.jpg",
  imageAlt = "IB Physics Tutoring",
}: Partial<HeroProps>) {
  return (
    <section className="bg-linear-to-b from-hero-start from-0% via-hero-mid via-70% to-surface to-100%">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="relative z-0 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-primary-soft px-4 py-1.5 text-xs font-medium text-accent-deep sm:text-sm">
              <ShieldCheck className="size-4" />
              {badgeText}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl xl:text-6xl">
              {titleLine1}{" "}
              <div className="text-accent">
                {highlightText}
              </div>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg lg:mx-0">
              {description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="#chapters"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-glow-cta transition-colors hover:bg-primary-hover sm:w-auto"
              >
                EXPLORE IB PHYSICS
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#book-session"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line-input-alt bg-card px-7 py-3.5 text-sm font-semibold text-emphasis transition-colors hover:border-accent-line-soft hover:bg-primary-hover-soft sm:w-auto"
              >
                <Download className="size-4 text-accent" />
                Book A Free Session
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative z-0 mx-auto w-full max-w-lg lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-glow-hero blur-2xl"
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
