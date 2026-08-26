"use client";

import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";
import type { Chapter } from "@/types";

interface ChapterModalProps {
  chapter: Chapter;
  onClose: () => void;
}

export default function ChapterModal({ chapter, onClose }: ChapterModalProps) {
  const price = chapter.price.toString();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chapter-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* زر الإغلاق */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 flex size-9 cursor-pointer touch-manipulation select-none items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
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
        <p className="mt-4">
          <span className="text-xl font-bold text-white">${chapter.price}</span>
          <span className="ml-2 text-sm text-gray-400">one-time purchase</span>
        </p>

        {/* قائمة المواضيع */}
        <ul className="mt-5 space-y-3 border-t border-gray-800 pt-5">
          {chapter.subtopics.map((subtopic) => (
            <li
              key={subtopic}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-300"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-400" />
              {subtopic}
            </li>
          ))}
        </ul>

        {/* زر الدفع عبر PayPal */}
        <div className="mt-6">
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
                  You now have access to this chapter.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-1 cursor-pointer touch-manipulation select-none rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                Start Learning
              </button>
            </div>
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
                      body: JSON.stringify({ orderID: data.orderID }),
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
