"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Lock, LoaderCircle } from "lucide-react";
import { getCountries } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";

const platforms = ["Zoom", "Google Meet"];

const globalCountries = (getCountries() as Array<keyof typeof en>)
  .map((country) => en[country])
  .sort((a, b) => a.localeCompare(b));

interface TimezoneOption {
  value: string;
  label: string;
}

export default function BookingSection() {
  let timezones: TimezoneOption[] = [];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    timezone: "",
    platform: "Zoom",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const calculatedTimezones = Intl.supportedValuesOf("timeZone").map((tz) => {
    const formatter = new Intl.DateTimeFormat("en", {
      timeZone: tz,
      timeZoneName: "shortOffset",
    });
    const parts = formatter.formatToParts(new Date());
    const offsetString =
      parts.find((part) => part.type === "timeZoneName")?.value || "";

    return {
      value: tz,
      label: `${tz.replace(/_/g, " ")} ${offsetString ? `(${offsetString})` : ""}`,
    };
  });
  timezones = calculatedTimezones;

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const isFormValid =
    formData.name.trim().length >= 2 &&
    isValidEmail &&
    formData.country !== "" &&
    formData.timezone !== "";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/book-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to book session");
      }
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        country: "",
        timezone: "",
        platform: "Zoom",
      });
    } catch (error) {
      console.error("Booking failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="book-session"
      className="scroll-mt-0 lg:scroll-mt-20 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-line-card bg-panel p-8 shadow-xl shadow-glow-panel sm:p-12">
          <div className="text-center">
            <h2 className="heading-animated text-3xl font-extrabold text-heading sm:text-4xl">
              Book Your Free Session
            </h2>
          </div>

          {isSuccess ? (
            <div className="mt-10 flex flex-col items-center gap-3 rounded-xl border border-green-500/30 bg-green-50 p-8 text-center dark:bg-green-500/10">
              <span className="flex size-14 items-center justify-center rounded-full bg-green-500/20">
                <svg
                  className="size-8 text-green-600 dark:text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <p className="text-lg font-bold text-heading">
                Booking Received!
              </p>
              <p className="text-sm text-body-soft">
                Thank you! Your free session request has been sent. You will be
                contacted shortly to schedule your session.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="mb-2 block text-sm font-semibold text-subtle"
                    >
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: event.target.value,
                        }))
                      }
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-line-input bg-input px-4 py-3 text-sm text-heading outline-none transition-all focus:border-primary focus:bg-focus-surface focus:ring-1 focus:ring-primary dark:placeholder-faint"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-subtle"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: event.target.value,
                        }))
                      }
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-line-input bg-input px-4 py-3 text-sm text-heading outline-none transition-all focus:border-primary focus:bg-focus-surface focus:ring-1 focus:ring-primary dark:placeholder-faint"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="country"
                      className="mb-2 block text-sm font-semibold text-subtle"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      required
                      value={formData.country}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          country: event.target.value,
                        }))
                      }
                      className={`${selectClasses}`}
                    >
                      <option value="" disabled>
                        Select your country
                      </option>
                      {globalCountries.map((countryName) => (
                        <option key={countryName} value={countryName}>
                          {countryName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timezone"
                      className="mb-2 block text-sm font-semibold text-subtle"
                    >
                      Timezone
                    </label>
                    <select
                      id="timezone"
                      required
                      value={formData.timezone}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          timezone: event.target.value,
                        }))
                      }
                      className={`${selectClasses}`}
                    >
                      <option value="" disabled>
                        Select your timezone
                      </option>
                      {timezones.map((tz) => (
                        <option key={tz.value} value={tz.value}>
                          {tz.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="platform"
                    className="mb-2 block text-sm font-semibold text-subtle"
                  >
                    Preferred Platform
                  </label>
                  <select
                    id="platform"
                    value={formData.platform}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        platform: event.target.value,
                      }))
                    }
                    className={`${selectClasses}`}
                  >
                    {platforms.map((platform) => (
                      <option key={platform} value={platform}>
                        {platform}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="flex w-full cursor-pointer touch-manipulation select-none items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-primary-hover hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-ring-base disabled:cursor-not-allowed disabled:bg-inactive disabled:hover:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle className="mr-2 size-5 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      "Book Free Session"
                    )}
                  </button>
                </div>

                <p className="flex items-center justify-center gap-2 mt-4 text-xs text-faint">
                  <Lock className="size-4" />
                  Your information is safe and will never be shared.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

const selectClasses =
  "w-full appearance-none cursor-pointer rounded-xl border border-line-input bg-input bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%222%22%20stroke%3D%22%236b7280%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[position:right_1rem_center] bg-no-repeat px-4 pr-12 py-3 text-sm text-heading outline-none transition-all focus:border-primary focus:bg-focus-surface focus:ring-1 focus:ring-primary dark:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%222%22%20stroke%3D%22%239ca3af%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%2F%3E%3C%2Fsvg%3E')] dark:[&>option]:bg-field";
