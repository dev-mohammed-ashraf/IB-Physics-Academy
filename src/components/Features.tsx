import { MonitorPlay, BookOpenText, MessagesSquare } from "lucide-react";
import type { Feature } from "@/types";

const featuresData: Feature[] = [
  {
    id: 1,
    title: "High-Quality Videos",
    description:
      "In-depth explanations of concepts & examples, simplified so you can grasp them quickly and effectively.",
    icon: MonitorPlay,
  },
  {
    id: 2,
    title: "Study Guides & Notes",
    description:
      "Concise PDF notes, summary sheets, topics, syllabus checkpoints, and IB past paper solutions and markschemes.",
    icon: BookOpenText,
  },
  {
    id: 3,
    title: "Q&A Support",
    description:
      "Direct support from experienced IB tutors to answer your questions and review your Internal Assessments (IAs).",
    icon: MessagesSquare,
  },
];

export default function Features() {
  return (
    <section className="bg-surface py-16 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 rounded-2xl bg-card p-6 shadow-lg shadow-glow ring-1 ring-line-hairline md:grid-cols-3 md:p-8">
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.id}
                className="flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-primary-hover-chip"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-chip text-accent">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-heading sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
