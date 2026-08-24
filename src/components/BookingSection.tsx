"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CalendarCheck, Lock } from "lucide-react";
import type { PricingPlan } from "@/types";

const plansData: PricingPlan[] = [
  {
    id: 1,
    name: "Complete Package",
    subtitle: "(Best Value)",
    price: 499,
    isBestValue: true,
  },
  { id: 2, name: "Single Session", price: 249 },
];

const platforms = ["Zoom", "Google Meet", "Microsoft Teams"];

export default function BookingSection() {
  const [selectedPlanId, setSelectedPlanId] = useState<number>(
    plansData[0].id
  );
  const [platform, setPlatform] = useState<string>(platforms[0]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id="book-session" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg shadow-indigo-100/50 lg:grid-cols-2 lg:p-10 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20">
          {/* Plans */}
          <div>
            <h2 className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 sm:text-base dark:text-gray-400">
              Choose the option that suits you and book your session easily!
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {plansData.map((plan) => {
                const isSelected = plan.id === selectedPlanId;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlanId(plan.id)}
                    aria-pressed={isSelected}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-6 text-center transition-all ${
                      isSelected
                        ? "border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600 dark:bg-indigo-950/60"
                        : "border-gray-200 bg-white hover:border-indigo-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-600"
                    }`}
                  >
                    <span className="font-bold text-gray-900 dark:text-white">{plan.name}</span>
                    {plan.subtitle && (
                      <span className="mt-0.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                        {plan.subtitle}
                      </span>
                    )}
                    <span className="mt-3 text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                      ${plan.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 dark:bg-gray-800">
            <h2 className="text-center text-2xl font-extrabold text-gray-900 dark:text-white">
              Book Your Free Session
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Fill in your details and I&apos;ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="full-name"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-indigo-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-indigo-900"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 555 000 0000"
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-indigo-900"
                />
              </div>

              <div>
                <label
                  htmlFor="platform"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Preferred Platform
                </label>
                <select
                  id="platform"
                  name="platform"
                  value={platform}
                  onChange={(event) => setPlatform(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:focus:ring-indigo-900"
                >
                  {platforms.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 dark:hover:bg-indigo-500"
              >
                <CalendarCheck className="size-4" />
                Book Free Session
              </button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                <Lock className="size-3" />
                Your information is safe and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
