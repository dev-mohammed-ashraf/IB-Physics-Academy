"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Email contact */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=maha.physics2020@gmail.com&su=Inquiry%20about%20Course%20Access"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Support"
        title="Contact Support"
        className="fixed bottom-6 left-6 z-50 flex size-12 cursor-pointer touch-manipulation select-none items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-900/30 transition-transform duration-300 hover:scale-110 hover:bg-indigo-700 dark:shadow-black/40"
      >
        <Mail className="size-5" />
      </a>

      {/* Scroll to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll back to top"
        title="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex size-12 cursor-pointer touch-manipulation select-none items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-900/30 transition-all duration-300 hover:scale-110 hover:bg-indigo-700 dark:shadow-black/40 ${
          showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" />
      </button>
    </>
  );
}
