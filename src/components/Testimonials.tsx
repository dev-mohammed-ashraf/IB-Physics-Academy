"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/types";

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "The video lessons made complex topics so easy to understand. I went from a predicted 4 to achieving a 7 in my final exams!",
    author: "Sarah K.",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Maha's step-by-step past paper solutions were exactly what I needed. The Q&A support was incredibly fast and helpful.",
    author: "Ahmed R.",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "As someone who struggled with HL Math for two years, I can honestly say this platform changed everything for me. The recorded lessons broke down every topic into manageable pieces, and the weekly quizzes kept me accountable. My teacher noticed the improvement within a single term, and I ended up scoring far beyond what I thought was possible.",
    author: "Lina M.",
    rating: 5,
  },
  {
    id: 4,
    quote: "Great explanations. Highly recommended!",
    author: "Omar T.",
    rating: 4,
  },
  {
    id: 5,
    quote:
      "The past paper walkthroughs are pure gold. Each solution is explained twice: once quickly for the exam strategy, then again slowly covering every underlying concept. I finally understood why certain formulas work instead of just memorizing them, which made Paper 2 feel almost easy by comparison.",
    author: "Fatima H.",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "I joined three weeks before my finals in complete panic mode. The structured revision plan and the fast Q&A responses saved me. Best decision I made all year.",
    author: "Youssef A.",
    rating: 5,
  },
];

function TestimonialStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }, (_, index) => (
        <Star key={index} className="size-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const perView = isDesktop ? 2 : 1;
  const maxIndex = testimonialsData.length - perView;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
      setActiveIndex((prev) => Math.min(prev, testimonialsData.length - (mediaQuery.matches ? 2 : 1)));
    };
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const goToPrevious = () =>
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const goToNext = () =>
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  return (
    <section
      id="students-say"
      // 1. تبسيط الخلفية مع الحفاظ على وضع الـ Dark Mode
      className="scroll-mt-16 py-16 lg:pt-24 lg:pb-30 bg-gray-50 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-animated text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            WHAT OUR IB STUDENTS SAY
          </h2>
        </div>

        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg shadow-indigo-900/10 transition-all hover:bg-indigo-600 hover:text-white hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-indigo-500 dark:hover:text-white"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg shadow-indigo-900/10 transition-all hover:bg-indigo-600 hover:text-white hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-indigo-500 dark:hover:text-white"
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="overflow-hidden px-12 md:px-14 py-6">
            <div
              className="-mx-3 flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / perView)}%)`,
              }}
            >
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex shrink-0 grow-0 basis-full px-3 ${
                    isDesktop ? "md:basis-1/2" : ""
                  }`}
                >
                  <article
                    // 3. إضافة relative و overflow-hidden للكارت عشان الأيقونات متخرجش براه
                    className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-6 shadow-xl shadow-indigo-900/10 dark:shadow-none border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-1"
                  >
                    {/* العلامة الأولى: أعلى اليمين (مقلوبة) */}
                    <Quote
                      className="absolute right-4 top-4 size-20 -rotate-180 text-indigo-50 dark:text-gray-700/30"
                      aria-hidden="true"
                    />

                    {/* العلامة الثانية: أسفل اليسار */}
                    <Quote
                      className="absolute bottom-4 left-4 size-20 text-indigo-50 dark:text-gray-700/30"
                      aria-hidden="true"
                    />

                    {/* تغليف المحتوى بـ relative z-10 عشان النص يظهر فوق الأيقونات */}
                    <div className="relative z-10">
                      <TestimonialStars rating={testimonial.rating} />
                      <p className="mt-5 line-clamp-5 text-base leading-relaxed text-gray-800 font-medium dark:text-gray-200">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 flex flex-row-reverse justify-start items-center gap-3">
                      <Image
                        src="/avatar-placeholder.svg"
                        alt={`${testimonial.author} avatar`}
                        width={48}
                        height={48}
                        className="size-10 rounded-full object-cover ring-2 ring-indigo-100 dark:ring-gray-700"
                      />
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </span>
                    </div>
            </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
