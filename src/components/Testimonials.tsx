import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "The video lessons made complex topics so easy to understand. I went from a predicted 4 to achieving a 7 in my final exams!",
    author: "Sarah K.",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Maha's step-by-step past paper solutions were exactly what I needed. The Q&A support was incredibly fast and helpful.",
    author: "Ahmed R.",
    rating: 5,
  },
];

function TestimonialStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }, (_, index) => (
        <Star key={index} className="size-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="students-say"
      className="py-16 lg:py-24 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What Our IB Students Say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-indigo-200 sm:text-lg">
            Real results from real students who trusted the process.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonialsData.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col justify-between rounded-3xl bg-white/95 backdrop-blur-sm p-8 shadow-xl shadow-indigo-900/10 border border-white/20 transition-transform hover:-translate-y-1 dark:bg-gray-900/95 dark:border-gray-700"
            >
              <div>
                <TestimonialStars rating={testimonial.rating} />
                <p className="mt-5 text-base leading-relaxed text-gray-800 font-medium dark:text-gray-200">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="/avatar-placeholder.svg"
                  alt={`${testimonial.author} avatar`}
                  width={48}
                  height={48}
                  className="size-10 rounded-full object-cover ring-2 ring-indigo-100 dark:ring-gray-700"
                />
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {testimonial.author}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
