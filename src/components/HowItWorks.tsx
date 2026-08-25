import { CalendarDays, BookMarked } from "lucide-react";
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
      accent: "text-teal-700 dark:text-teal-400",
      iconBg: "bg-teal-100 dark:bg-teal-500/10",
      iconText: "text-teal-700 dark:text-teal-400",
      buttonBg: "bg-teal-600 hover:bg-teal-700",
      checkText: "text-teal-600 dark:text-teal-400",
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
      accent: "text-indigo-700 dark:text-indigo-400",
      iconBg: "bg-indigo-100 dark:bg-indigo-500/10",
      iconText: "text-indigo-700 dark:text-indigo-400",
      buttonBg: "bg-indigo-600 hover:bg-indigo-700",
      checkText: "text-indigo-500 dark:text-indigo-400",
    },
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-gray-50 py-16 lg:py-24 mt-18 mb-4 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-animated text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            How I Can Help You
          </h2>
          {/* <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
            Choose the service that fits your needs and get closer to your
            target grade 7.
          </p> */}
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
            {stepsData.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.id}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-900/10 sm:p-8 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex size-14 shrink-0 items-center justify-center rounded-xl ${step.theme.iconBg} ${step.theme.iconText}`}
                    >
                      <Icon className="size-7" />
                    </span>
                    <h3
                      className={`text-lg font-extrabold sm:text-xl ${step.theme.accent}`}
                    >
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
                            <span
                              className={`mt-0.5 font-bold ${step.theme.checkText}`}
                            >
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
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg ${step.theme.buttonBg}`}
                    >
                      <Icon className="size-4" />
                      {step.ctaLabel}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
            aria-hidden="true"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-white text-xl font-bold text-indigo-500 shadow-md ring-1 ring-gray-100 dark:bg-gray-800 dark:text-indigo-400 dark:ring-gray-700">
              →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
