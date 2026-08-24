import type { LucideIcon } from "lucide-react";

export interface Chapter {
  id: number;
  number: number;
  title: string;
  price: number;
  subtopics: string[];
  unit: string;
  isHL?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroProps {
  badgeText: string;
  titleLine1: string;
  highlightText: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface HelpStepTheme {
  accent: string;
  iconBg: string;
  iconText: string;
  buttonBg: string;
  checkText: string;
}

export interface HelpStep {
  id: number;
  step: number;
  title: string;
  description: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
  icon: LucideIcon;
  theme: HelpStepTheme;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  rating: number;
}

export interface PricingPlan {
  id: number;
  name: string;
  subtitle?: string;
  price: number;
  isBestValue?: boolean;
}
