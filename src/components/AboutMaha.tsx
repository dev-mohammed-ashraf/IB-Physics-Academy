import { GraduationCap, BookOpenCheck, Target } from "lucide-react";

const highlights = [
  {
    id: 1,
    icon: GraduationCap,
    title: "12+ Years Experience",
    description: "Experienced Physics tutor and academic researcher teaching in English.",
  },
  {
    id: 2,
    icon: BookOpenCheck,
    title: "Concept-First Approach",
    description: "Understand the concept, think through the problem, then solve step by step.",
  },
  {
    id: 3,
    icon: Target,
    title: "Strategic Exam Prep",
    description: "Focused preparation so you walk into the exam with confidence.",
  },
];

export default function AboutMaha() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 p-6 text-white shadow-xl shadow-indigo-200/50 sm:p-10 lg:p-14 dark:shadow-black/20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-indigo-100 ring-1 ring-white/20 sm:text-sm">
              <GraduationCap className="size-4" />
              Expert IB Physics Tutor | Exam Preparation
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              About <span className="text-indigo-200">Maha</span>
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center">
            <p className="text-sm leading-relaxed text-indigo-100 sm:text-base">
              Hi, I&apos;m Maha, an experienced Physics tutor and academic
              researcher with over 12 years of teaching experience in English.
              I specialize in IB Physics and help students build a strong
              understanding of physics, solve problems step by step, and
              prepare strategically for their exams.
            </p>
            <p className="text-sm leading-relaxed text-indigo-100 sm:text-base">
              My approach is simple: understand the concept, learn how to think
              through the problem, practice effectively, and walk into the exam
              with confidence. Whether you need help with a difficult chapter,
              step-by-step problem solving, or focused exam preparation,
              I&apos;m here to help you aim for your{" "}
              <span className="font-bold text-white">7</span>.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-white/15"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-white/15 text-indigo-100">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-indigo-100">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#book-session"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-indigo-700 shadow-lg transition-colors hover:bg-indigo-50"
            >
              Aim for Your 7 — Book a Free Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
