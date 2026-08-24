import { CalendarDays, BookMarked, Target } from "lucide-react";
import Link from "next/link";
import type { HelpStep } from "@/types";

const stepsData: HelpStep[] = [
  {
    id: 1,
    step: 1,
    title: "Book Free Session",
    description: "Meet & Understand Step by Step",
    points: [
      "Book a free 20–30 minute introductory session.",
      "Discuss your academic goals and target grades.",
      "Create a personalized roadmap for your success.",
    ],
    ctaLabel: "Book Now",
    ctaHref: "#book-session",
    icon: CalendarDays,
    theme: {
      accent: "text-rose-700",
      iconBg: "bg-rose-200",
      iconText: "text-rose-700",
      buttonBg: "bg-rose-700 hover:bg-rose-800",
      checkText: "text-rose-600",
    },
  },
  {
    id: 2,
    step: 2,
    title: "View Material",
    description: "Review & Select Step by Step",
    points: [
      "Access carefully selected resources and past papers.",
      "Clear, detailed, step-by-step solutions to build strong understanding.",
      "Practice at your own pace.",
    ],
    ctaLabel: "View Material",
    ctaHref: "#chapters",
    icon: BookMarked,
    theme: {
      accent: "text-indigo-600",
      iconBg: "bg-indigo-100",
      iconText: "text-indigo-600",
      buttonBg: "bg-indigo-600 hover:bg-indigo-700",
      checkText: "text-indigo-500",
    },
  },
  {
    id: 3,
    step: 3,
    title: "Exam Preparation",
    description: "Ideas & Final Step by Step",
    points: [
      "Focused exam strategy and techniques.",
      "Top exam-style questions & key concepts.",
      "Exam-style questions with full step-by-step solutions.",
      "Build confidence and aim for your 7!",
    ],
    ctaLabel: "Start Preparing",
    ctaHref: "#book-session",
    icon: Target,
    theme: {
      accent: "text-emerald-600",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-600",
      buttonBg: "bg-emerald-600 hover:bg-emerald-700",
      checkText: "text-emerald-500",
    },
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-16 lg:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            How I Can Help You
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
            Choose the service that fits your needs and get closer to your
            target grade 7.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="contents">
                <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:bg-gray-900">
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex size-14 shrink-0 items-center justify-center rounded-xl ${step.theme.iconBg} ${step.theme.iconText}`}
                    >
                      <Icon className="size-7" />
                    </span>
                    <h3 className={`text-lg font-extrabold sm:text-xl ${step.theme.accent}`}>
                      {step.step}. {step.title}
                    </h3>
                  </div>

                  {step.points.length === 0 ? (
                    <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  ) : (
                    <>
                      <p className="mt-5 text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {step.description}
                      </p>
                      <ul className="mt-4 space-y-3">
                        {step.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                          >
                            <span className={`mt-0.5 font-bold ${step.theme.checkText}`}>
                              ✓
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <div className="mt-auto pt-6">
                    <Link
                      href={step.ctaHref}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors ${step.theme.buttonBg}`}
                    >
                      <Icon className="size-4" />
                      {step.ctaLabel}
                    </Link>
                  </div>
                </article>

                {index < stepsData.length - 1 && (
                  <div
                    className="hidden items-center justify-center lg:flex"
                    aria-hidden="true"
                  >
                    <span className="text-2xl font-bold text-indigo-400">→</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
