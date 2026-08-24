import { UsersRound, FileText, Video } from "lucide-react";
import type { WhyChooseItem } from "@/types";

const whyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    title: "Continuous Support",
    description:
      "Get in touch anytime for questions, guidance, and personalized advice to help you achieve your goals.",
    icon: UsersRound,
  },
  {
    id: 2,
    title: "Notes & Resources",
    description:
      "Access high-quality notes, concise summaries, and past paper solutions curated to save your time and boost your performance.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Recorded Lessons",
    description:
      "Missed a class? No worries. Access recorded lessons anytime to review and reinforce your learning.",
    icon: Video,
  },
];

export default function WhyChoose() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-6 sm:p-10 lg:p-14 dark:from-indigo-950/30 dark:via-gray-900 dark:to-indigo-950/30">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Why Choose{" "}
              <span className="text-indigo-600 dark:text-indigo-400">&ldquo;Get 7 with Maha&rdquo;?</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
              A complete learning platform with the tools and support you need
              to succeed.
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
