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
        <div className="rounded-3xl bg-linear-to-br from-why-start via-surface to-why-start p-6 sm:p-10 lg:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
              Why Choose{" "}
              <span className="text-accent">
                &ldquo;Get 7 with Maha&rdquo;?
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
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
                  className="flex flex-col items-start rounded-2xl bg-card p-6 shadow-md shadow-glow ring-1 ring-card-ring transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-chip text-accent">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
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
