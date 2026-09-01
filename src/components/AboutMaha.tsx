import { GraduationCap, BookOpenCheck, Target, Atom } from "lucide-react";

const highlights = [
  {
    id: 1,
    icon: GraduationCap,
    title: "12+ Years Experience",
    description: "Over a decade of teaching Physics in English across different levels.",
  },
  {
    id: 2,
    icon: BookOpenCheck,
    title: "Concept-First Approach",
    description: "We don't start with formulas. We start with understanding.",
  },
  {
    id: 3,
    icon: Target,
    title: "Strategic Exam Prep",
    description: "Focused practice with IB-style questions, past papers, and mark schemes.",
  },
];

export default function AboutMaha() {
  return (
    <section
      id="about-maha"
      className="scroll-mt-8 lg:scroll-mt-20 py-16 lg:py-8 bg-surface"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft-alt px-4 py-1.5 text-xs font-semibold text-accent-deep ring-1 ring-accent-line">
            <GraduationCap className="size-4" />
            Expert IB Physics Tutor | Exam Preparation
          </span>

          <h2 className="heading-animated mt-7 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            About{" "}
            <span className="text-accent">Maha</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-left">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Atom
                className="mt-1 size-5 shrink-0 text-accent-icon"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-body sm:text-base">
                Hi, I&apos;m Maha, an experienced Physics tutor and academic
                researcher with over 12 years of teaching experience in English.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Atom
                className="mt-1 size-5 shrink-0 text-accent-icon"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-body sm:text-base">
                My goal is simple: to make Physics understandable. Many students
                struggle because they were taught to memorize instead of
                understand.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Atom
                className="mt-1 size-5 shrink-0 text-accent-icon"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-body sm:text-base">
                We break complex ideas into simple parts, connect the math to
                the physics, and build a clear way of solving problems step by
                step.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Atom
                className="mt-1 size-5 shrink-0 text-accent-icon"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-body sm:text-base">
                I&apos;ll show you that you don&apos;t need to be &apos;naturally good&apos; at
                Physics, you just need the right method.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="rounded-2xl bg-raised p-6 ring-1 ring-line-hairline transition-shadow hover:shadow-md"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-card text-accent shadow-sm ring-1 ring-line-hairline">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-heading">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#book-session"
            className="inline-flex items-center justify-center rounded-xl bg-primary-alt px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-alt-hover"
          >
            Aim for Your 7 — Book a Free Session
          </a>
        </div>
      </div>
    </section>
  );
}

