import Link from "next/link";

export default function HowItWorksSimple() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-12 lg:scroll-mt-20 bg-white py-16 lg:py-20 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="heading-animated text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          How It Works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
          Start learning today
        </p>
        <div className="mt-8">
          <Link
            href="#chapters"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-colors hover:bg-indigo-700 dark:hover:bg-indigo-500"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}
