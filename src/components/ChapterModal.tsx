"use client";

import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";
import PhoneInput, {
  isValidPhoneNumber,
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import en from "react-phone-number-input/locale/en.json";
import type { Country } from "react-phone-number-input";
import type { Chapter } from "@/types";

const customLabels: Record<Country, string> = { ...en };
getCountries().forEach((country) => {
  customLabels[country] = `${en[country]} (+${getCountryCallingCode(country)})`;
});

const globalCountries = getCountries()
  .map((country) => en[country])
  .sort((a, b) => a.localeCompare(b));

interface ChapterModalProps {
  chapter: Chapter;
  onClose: () => void;
}

const inputClasses =
  "w-full rounded-xl border border-gray-600 bg-gray-800 px-4 py-3 text-sm text-white outline-none transition-all placeholder-gray-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400";

export default function ChapterModal({ chapter, onClose }: ChapterModalProps) {
  const price = chapter.price.toString();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chapter-modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* زر الإغلاق */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 z-10 flex size-9 cursor-pointer touch-manipulation select-none items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
        >
          <X className="size-5" />
        </button>

        {/* الترويسة */}
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
          CHAPTER {chapter.number}
          {chapter.isHL && (
            <span className="ml-2 rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-bold text-indigo-300">
              HL
            </span>
          )}
        </p>
        <h3
          id="chapter-modal-title"
          className="mt-1.5 pr-10 text-xl font-bold text-white sm:text-2xl"
        >
          {chapter.title}
        </h3>

        {/* السعر */}
        <p className="mt-2">
          <span className="text-xl font-bold text-white">${chapter.price}</span>
          <span className="ml-2 text-sm text-gray-400">one-time purchase</span>
        </p>

        {/* نموذج ما قبل الدفع */}
        <form className="mt-6 space-y-4 border-t border-gray-800 pt-5">
          <div>
            <label
              htmlFor="checkout-name"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-400"
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
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-400"
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
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-400"
            >
              WhatsApp Number
            </label>
            <div
              className={`flex items-center w-full rounded-xl border border-gray-600 bg-gray-800 px-4 transition-all focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-400 ${
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
                className="h-[46px] w-full [&_.PhoneInputCountry]:gap-2 [&_input]:h-full [&_input]:flex-1 [&_input]:bg-transparent [&_input]:text-sm [&_input]:text-white [&_input]:placeholder-gray-500 [&_input]:outline-none [&_select]:bg-gray-800 [&_select]:text-white"
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
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-400"
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

        {/* زر الدفع عبر PayPal */}
        <div className="mt-5">
          {isSuccess ? (
            <div className="flex flex-col items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircle2 className="size-8 text-green-500" />
              </span>
              <div>
                <p className="text-base font-bold text-white">
                  Payment Successful!
                </p>
                <p className="mt-1 text-sm text-gray-300">
                  Thank you for your purchase! We will contact you via email
                  within 24 hours to grant you access to this chapter.
                </p>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=maha.physics2020@gmail.com&su=Inquiry%20about%20Course%20Access"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex cursor-pointer touch-manipulation select-none items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                Contact Support via Email
              </a>
            </div>
          ) : !isFormValid ? (
            <button
              type="button"
              disabled
              className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-gray-700 px-6 py-3.5 text-sm font-semibold text-gray-400"
            >
              Please fill all fields to proceed with payment
            </button>
          ) : (
            <PayPalScriptProvider
              options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
                currency: "USD",
                "disable-funding": "card,credit",
              }}
            >
              <PayPalButtons
                fundingSource={FUNDING.PAYPAL}
                style={{
                  layout: "vertical",
                  color: "gold",
                  shape: "rect",
                  label: "paypal",
                }}
                createOrder={async () => {
                  try {
                    const response = await fetch("/api/paypal/create-order", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ price: price }),
                    });
                    if (!response.ok) {
                      throw new Error("Failed to create order");
                    }
                    const data = await response.json();
                    return data.id;
                  } catch (error) {
                    console.error("Create order failed:", error);
                    throw error;
                  }
                }}
                onApprove={async (data) => {
                  if (isCapturing) return; // Prevent double trigger
                  setIsCapturing(true);
                  try {
                    const response = await fetch("/api/paypal/capture-order", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        orderID: data.orderID,
                        buyerData: formData,
                        unitName: chapter.unit,
                        chapterName: chapter.title,
                      }),
                    });
                    if (!response.ok) {
                      const errorData = await response.json();
                      throw new Error(errorData.error || "Failed to capture");
                    }
                    setIsSuccess(true);
                  } catch (error) {
                    console.error("Capture Error:", error);
                  } finally {
                    setIsCapturing(false); // Release lock
                  }
                }}
              />
            </PayPalScriptProvider>
          )}
        </div>
      </div>
    </div>
  );
}
