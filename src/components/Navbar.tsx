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
    <>
      <header className="fixed inset-x-0 top-0 z-9999 w-full border-b border-line-subtle bg-surface">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop links */}
        <div className="pointer-events-auto relative z-10 hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="touch-manipulation text-sm font-medium text-subtle transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="#book-session"
            className="touch-manipulation inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover"
          >
            <CalendarCheck className="size-4" />
            Book Free Session
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="pointer-events-auto relative z-20 flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen((prev) => !prev);
            }}
            className="relative z-50 flex h-11 w-11 cursor-pointer touch-manipulation select-none items-center justify-center rounded-lg transition-transform active:scale-95"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="pointer-events-none size-6 text-heading" />
            ) : (
              <Menu className="pointer-events-none size-6 text-heading" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-10000 overflow-y-auto border-t border-line-subtle bg-surface px-4 pb-4 pt-2 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="touch-manipulation rounded-md px-3 py-2.5 text-base font-medium text-subtle transition-colors hover:bg-hover-fill-soft hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#book-session"
              onClick={() => setIsMenuOpen(false)}
              className="touch-manipulation mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-hover"
            >
              <CalendarCheck className="size-4" />
              Book Free Session
            </Link>
          </div>
        </div>
      )}
      </header>
      {/* Spacer to offset the fixed header height */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}
