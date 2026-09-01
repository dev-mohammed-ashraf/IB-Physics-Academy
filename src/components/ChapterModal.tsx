"use client";

import { useState } from "react";
import { X, LoaderCircle } from "lucide-react";
import PhoneInput, {
  isValidPhoneNumber,
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import en from "react-phone-number-input/locale/en.json";
import type { Country } from "react-phone-number-input";
import type { Chapter, ModalIntent } from "@/types";

const customLabels: Record<Country, string> = { ...en };
getCountries().forEach((country) => {
  customLabels[country] = `${en[country]} (+${getCountryCallingCode(country)})`;
});

const globalCountries = getCountries()
  .map((country) => en[country])
  .sort((a, b) => a.localeCompare(b));

interface ChapterModalProps {
  chapter: Chapter;
  intent: ModalIntent;
  onClose: () => void;
}

const intentConfig: Record<
  ModalIntent,
  {
    modalTitle: string;
    description: string;
    accessLabel: string;
    submitLabel: string;
    disabledLabel: string;
  }
> = {
  enroll: {
    modalTitle: "Get Course Access",
    description:
      "Fill in your details and we'll contact you within 24 hours to grant you access to this chapter.",
    accessLabel: "Free Access",
    submitLabel: "Request Access Now",
    disabledLabel: "Please fill all fields to enroll",
  },
  sample: {
    modalTitle: "Request Free Sample",
    description:
      "Fill in your details and we'll send the free sample for this chapter straight to your inbox.",
    accessLabel: "Free Sample",
    submitLabel: "Get Free Sample",
    disabledLabel: "Please fill all fields to request the sample",
  },
};

const inputClasses =
  "w-full rounded-xl border border-line-strong bg-field px-4 py-3 text-sm text-white outline-none transition-all placeholder-faint-static focus:border-primary-subtle focus:ring-1 focus:ring-primary-subtle";

export default function ChapterModal({
  chapter,
  intent,
  onClose,
}: ChapterModalProps) {
  const config = intentConfig[intent];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    country: "",
  });

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    formData.email.trim()
  );
  const isValidWhatsApp = formData.whatsapp
    ? isValidPhoneNumber(formData.whatsapp)
    : false;
  const isValidName = formData.name.trim().length >= 2;
  const isValidCountry = formData.country !== "";

  const isFormValid = isValidName && isValidEmail && isValidWhatsApp && isValidCountry;

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent,
          buyerData: formData,
          unitName: chapter.unit,
          chapterName: chapter.title,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit request");
      }
      setFormData({ name: "", email: "", whatsapp: "", country: "" });
      setIsSubmitting(false);
      onClose();
    } catch (error) {
      console.error("Request failed:", error);
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chapter-modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto bg-deep border border-line-divider rounded-2xl p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 z-10 flex size-9 cursor-pointer touch-manipulation select-none items-center justify-center rounded-full text-muted-static transition-colors hover:bg-hover-fill-field hover:text-white"
        >
          <X className="size-5" />
        </button>

        <p className="text-xs font-semibold uppercase tracking-wide text-primary-subtle">
          CHAPTER {chapter.number}
          {chapter.isHL && (
            <span className="ml-2 rounded-full bg-primary-pulse px-2 py-0.5 text-[10px] font-bold text-primary-whisper">
              HL
            </span>
          )}
        </p>
        <h3
          id="chapter-modal-title"
          className="mt-1.5 pr-10 text-xl font-bold text-white sm:text-2xl"
        >
          {config.modalTitle}
        </h3>
        <p className="mt-0.5 text-sm text-muted-static">{chapter.title}</p>

        <p className="mt-2">
          <span className="text-xl font-bold text-white">Free</span>
          <span className="ml-2 text-sm text-muted-static">
            {config.accessLabel}
          </span>
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-static">
          {config.description}
        </p>

        <form className="mt-6 space-y-4 border-t border-line-divider pt-5">
          <div>
            <label
              htmlFor="checkout-name"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-static"
            >
              Full Name
            </label>
            <input
              id="checkout-name"
              type="text"
              required
              value={formData.name}
              onChange={(event) => handleInputChange("name", event.target.value)}
              placeholder="Enter your full name"
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="checkout-email"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-static"
            >
              Email
            </label>
            <input
              id="checkout-email"
              type="email"
              required
              value={formData.email}
              onChange={(event) =>
                handleInputChange("email", event.target.value)
              }
              placeholder="you@example.com"
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="checkout-whatsapp"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-static"
            >
              WhatsApp Number
            </label>
            <div
              className={`flex items-center w-full rounded-xl border border-line-strong bg-field px-4 transition-all focus-within:border-primary-subtle focus-within:ring-1 focus-within:ring-primary-subtle ${
                formData.whatsapp && !isValidWhatsApp
                  ? "border-red-500/60"
                  : ""
              }`}
            >
              <PhoneInput
                id="checkout-whatsapp"
                defaultCountry="EG"
                international
                labels={customLabels}
                value={formData.whatsapp}
                onChange={(value) => handleInputChange("whatsapp", value ?? "")}
                placeholder="Enter WhatsApp number"
                className="h-11.5 w-full [&_.PhoneInputCountry]:gap-2 [&_input]:h-full [&_input]:flex-1 [&_input]:bg-transparent [&_input]:text-sm [&_input]:text-white [&_input]:placeholder-faint-static [&_input]:outline-none [&_select]:bg-field [&_select]:text-white"
              />
            </div>
            {formData.whatsapp && !isValidWhatsApp && (
              <p className="mt-1 text-xs text-red-400">
                Please enter a valid WhatsApp number.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="checkout-country"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-static"
            >
              Country
            </label>
            <select
              id="checkout-country"
              required
              value={formData.country}
              onChange={(event) =>
                handleInputChange("country", event.target.value)
              }
              className={`${inputClasses} cursor-pointer appearance-none`}
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
        </form>

        <div className="mt-5">
          {!isFormValid ? (
            <button
              type="button"
              disabled
              className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-inactive-alt px-6 py-3.5 text-sm font-semibold text-muted-static"
            >
              {config.disabledLabel}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex w-full cursor-pointer touch-manipulation select-none items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-primary/60"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="size-5 animate-spin" />
                  Sending...
                </>
              ) : (
                config.submitLabel
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
