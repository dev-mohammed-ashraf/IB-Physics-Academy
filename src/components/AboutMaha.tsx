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
      className="scroll-mt-8 lg:scroll-mt-20 py-16 lg:py-8 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* الجزء العلوي (العنوان) يظل في المنتصف */}
        <div className="flex flex-col items-center mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-200 dark:ring-indigo-800">
            <GraduationCap className="size-4" />
            Expert IB Physics Tutor | Exam Preparation
          </span>

          <h2 className="heading-animated mt-7 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Maha</span>
          </h2>
        </div>

        {/* جزء النص: تم تعديله ليكون قائمة منسقة ومحاذاة لليسار */}
        <div className="mx-auto mt-10 max-w-3xl text-left">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Atom
                className="mt-1 size-5 shrink-0 text-indigo-500 dark:text-indigo-400"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                Hi, I&apos;m Maha, an experienced Physics tutor and academic
                researcher with over 12 years of teaching experience in English.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Atom
                className="mt-1 size-5 shrink-0 text-indigo-500 dark:text-indigo-400"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                My goal is simple: to make Physics understandable. Many students struggle because they were taught to memorize instead of understand.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Atom
                className="mt-1 size-5 shrink-0 text-indigo-500 dark:text-indigo-400"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                We break complex ideas into simple parts, connect the math to the physics, and build a clear way of solving problems step by step.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Atom
                className="mt-1 size-5 shrink-0 text-indigo-500 dark:text-indigo-400"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                You don&apos;t need to be &quot;naturally good&quot; at Physics. You need the right method.
              </span>
            </li>
          </ul>
        </div>

        {/* الكروت (Highlights) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="rounded-2xl bg-gray-50 dark:bg-gray-800/50 p-6 ring-1 ring-gray-100 dark:ring-gray-700 transition-shadow hover:shadow-md"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* الزرار */}
        <div className="mt-12 text-center">
          <a
            href="#book-session"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Aim for Your 7 — Book a Free Session
          </a>
        </div>
      </div>
    </section>
  );
}

