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

const platforms = ["Zoom", "Google Meet"];

export default function BookingSection() {
  const [selectedPlanId, setSelectedPlanId] = useState<number>(
    plansData[0].id
  );
  const [platform, setPlatform] = useState<string>(platforms[0]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      id="book-session"
      className="scroll-mt-0 lg:scroll-mt-20 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* حاوية النموذج الأساسية */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-indigo-100/50 sm:p-12 dark:border-gray-700 dark:bg-gray-800/90 dark:shadow-none">
          {/* عنوان النموذج */}
          <div className="text-center">
            <h2 className="heading-animated text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Book Your Free Session
            </h2>
            {/* <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              Fill in your details below and I'll get back to you to schedule
              our meeting.
            </p> */}
          </div>

          {/* الفورم */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* صف الاسم والبريد الإلكتروني */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* حقل الاسم */}
              <div>
                <label
                  htmlFor="full-name"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:bg-gray-800"
                />
              </div>

              {/* حقل البريد الإلكتروني */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:bg-gray-800"
                />
              </div>
            </div>

            {/* صف الدولة والمنطقة الزمنية */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* حقل الدولة */}
              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  placeholder="Enter your country"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:bg-gray-800"
                />
              </div>

              {/* حقل المنطقة الزمنية */}
              <div>
                <label
                  htmlFor="timezone"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Timezone
                </label>
                <input
                  id="timezone"
                  name="timezone"
                  type="text"
                  required
                  placeholder="e.g. GMT+3, EST, CET"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:bg-gray-800"
                />
              </div>
            </div>

            {/* حقل اختيار المنصة */}
            <div>
              <label
                htmlFor="platform"
                className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Preferred Platform
              </label>
              <select
                id="platform"
                name="platform"
                className="w-full appearance-none rounded-xl border border-gray-300 bg-gray-50 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%222%22%20stroke%3D%22%236b7280%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[position:right_1rem_center] bg-no-repeat px-4 pr-12 py-3 text-sm text-gray-900 outline-none transition-all focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 dark:border-gray-600 dark:bg-gray-700 dark:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%222%22%20stroke%3D%22%239ca3af%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%2F%3E%3C%2Fsvg%3E')] dark:text-white dark:focus:border-indigo-400 dark:focus:bg-gray-800"
              >
                <option value="zoom">Zoom</option>
                <option value="google-meet">Google Meet</option>
              </select>
            </div>

            {/* زر الإرسال */}
            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-base font-bold text-white transition-all hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Book Free Session
              </button>
            </div>

            {/* رسالة الأمان */}
            <p className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500 dark:text-gray-400">
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              Your information is safe and will never be shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
