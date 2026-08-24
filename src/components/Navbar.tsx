"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, CalendarCheck } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import type { NavLink } from "@/types";
import Logo from "./Logo";

const navLinks: NavLink[] = [
  { label: "Chapters", href: "#chapters" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Students Say", href: "#students-say" },
  { label: "About Maha", href: "#about-maha" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="#book-session"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 dark:hover:bg-indigo-500"
          >
            <CalendarCheck className="size-4" />
            Book Free Session
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 lg:hidden dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#book-session"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700 dark:hover:bg-indigo-500"
            >
              <CalendarCheck className="size-4" />
              Book Free Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
