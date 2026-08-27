import { UsersRound, FileText, Video } from "lucide-react";
import type { WhyChooseItem } from "@/types";

const whyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    title: "Concept-First Learning",
    description:
      "Physics isn't about memorizing formulas. We focus on understanding the physics behind the equations so you know exactly how to approach any problem.",
    icon: UsersRound,
  },
  {
    id: 2,
    title: "IB-Focused Preparation",
    description:
      "Learn how to approach IB-style questions, interpret data, structure solutions, use mark schemes, and avoid common sources of lost marks.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Learn at Your Own Pace",
    description:
      "Access recorded lessons, study notes, and step-by-step solutions whenever you need them — whether learning a topic for the first time or revising.",
    icon: Video,
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="scroll-mt-8 lg:scroll-mt-20 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-6 sm:p-10 lg:p-14 dark:from-indigo-950/30 dark:via-gray-900 dark:to-indigo-950/30">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Why Choose{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                &ldquo;Get 7 with Maha&rdquo;?
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
              Master the concepts, solve problems step by step, and prepare with
              confidence.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyChooseData.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="flex flex-col items-start rounded-2xl bg-white p-6 shadow-md shadow-indigo-100/60 ring-1 ring-indigo-100/60 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8 dark:bg-gray-800 dark:shadow-black/20 dark:ring-gray-700"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
