import Link from "next/link";

export default function HowItWorksSimple() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-12 lg:scroll-mt-20 bg-surface py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="heading-animated text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
          How It Works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
          Start learning today
        </p>
        <div className="mt-8">
          <Link
            href="#chapters"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-glow-cta transition-colors hover:bg-primary-hover"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}
