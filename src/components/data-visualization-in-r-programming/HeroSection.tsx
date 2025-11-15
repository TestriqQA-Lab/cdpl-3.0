"use client";

import React from "react";
import Link from "next/link";
import { content } from "@/components/data-visualization-in-r-programming/data/content";
import { ArrowRight, ChevronRight, Clock, Home } from "lucide-react";

/** --- Reusable Form (same style as reference) --- */
function LeadForm({ className = "" }: { className?: string }) {
  const countries = [
    { code: "IN", dial: "+91", label: "India", flag: "🇮🇳" },
    { code: "US", dial: "+1", label: "United States", flag: "🇺🇸" },
    { code: "GB", dial: "+44", label: "United Kingdom", flag: "🇬🇧" },
    { code: "AE", dial: "+971", label: "United Arab Emirates", flag: "🇦🇪" },
    { code: "SG", dial: "+65", label: "Singapore", flag: "🇸🇬" },
    { code: "AU", dial: "+61", label: "Australia", flag: "🇦🇺" },
  ];

  return (
    <form
      className={[
        "w-full rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-lg",
        "p-5 sm:p-6",
        className,
      ].join(" ")}
      onSubmit={(e) => {
        e.preventDefault();
        // submit handling here
      }}
      aria-label="Request syllabus for Data Visualization & Machine Learning with R"
    >
      <h2 className="text-xl font-semibold text-slate-900">
        Request Syllabus & Free Consultation
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Get the detailed curriculum, career guidance, and upcoming batch info.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        {/* Phone with country code + flag */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Mobile Number
          </label>
          <div className="mt-1 flex items-stretch gap-2">
            <div className="flex min-w-[7.5rem] items-center rounded-lg border border-slate-300 bg-white px-2">
              <select
                name="country"
                aria-label="Country code"
                defaultValue="IN"
                className="w-full bg-transparent py-2 text-slate-900 focus:outline-none"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.label} ({c.dial})
                  </option>
                ))}
              </select>
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              required
              placeholder="98765 43210"
              pattern="^[0-9\\s\\-()+]{7,20}$"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>
          <p className="mt-1 text-xs text-slate-500">
            We’ll never share your number. Standard rates may apply.
          </p>
        </div>

        <button
          type="submit"
          className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          Get Syllabus & Pricing
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        </button>

        <p className="text-xs text-slate-500">
          By submitting, you agree to our{" "}
          <Link href="/privacy" className="underline hover:text-slate-700">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

export const HeroSection: React.FC = () => {
  const { hero_section, course_title } = content;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: course_title || "Advanced Data Analytics with R",
      href: "/data-visualization-in-r-programming",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      {/* Decorative background blobs (same style as reference) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob animation-delay-0 absolute right-10 top-20 h-72 w-72 rounded-full bg-orange-200 opacity-20 mix-blend-multiply blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute left-10 top-40 h-72 w-72 rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-indigo-200 opacity-20 mix-blend-multiply blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-6 md:pb-16 relative z-10">
        {/* Breadcrumbs (same layout as reference) */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                <Link
                  href={c.href}
                  className={`hover:text-orange-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""
                    }`}
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Main grid (form right, top-aligned) */}
        <div className="grid min-h-[70vh] grid-cols-1 gap-10 sm:py-2 md:grid-cols-12 md:items-start">
          {/* Left: Content */}
          <div className="flex flex-col md:col-span-7 lg:col-span-8">
            {/* Duration Badge (using hero_section.duration) */}
            <div className="mb-4 w-fit inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
              <Clock className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-semibold text-slate-700">
                Duration: <span className="text-orange-600">{hero_section.duration}</span>
              </span>
            </div>

            {/* H1 — same style as reference, R-specific text */}
            <h1 className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              <span>Master </span>
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                Machine Learning
              </span>
              <span> and </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Data Visualization using R
              </span>
            </h1>

            {/* Mobile form under H1 */}
            <LeadForm className="mt-3 md:hidden" />

            {/* Subheading (uses hero_section.description) */}
            <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600 md:text-left md:text-lg">
              {hero_section.description}
            </p>

            {/* Optional SEO-ish line (can tweak or remove if not needed) */}
            <p className="mt-3 max-w-3xl text-center text-sm text-slate-600 md:text-left">
              Learn R for data visualization, statistics, predictive modeling, dashboards, and real-world analytics projects tailored for business decision-making.
            </p>

            {/* Highlights – same layout style as reference */}
            <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {[
                { icon: "📊", label: "Real Projects" },
                { icon: "👨‍🏫", label: "Expert Trainers" },
                { icon: "🎓", label: "Certification" },
                { icon: "💼", label: "Job Ready" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white/60 p-4 backdrop-blur-sm transition-colors hover:border-orange-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-center text-xs font-semibold text-slate-700 md:text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs (same style as reference) */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="rounded-lg border-2 border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-orange-400 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
                Download Syllabus
              </button>
            </div>

            {/* Trust indicators (optional but keep layout parity) */}
            <div className="mt-10 flex flex-col items-center justify-center gap-6 text-sm text-slate-600 sm:flex-row md:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>
                  <strong className="text-slate-900">4.8/5</strong> Average Rating
                </span>
              </div>
              <div className="hidden h-6 w-px bg-slate-300 sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span>
                  <strong className="text-slate-900">500+</strong> Successful Learners
                </span>
              </div>
              <div className="hidden h-6 w-px bg-slate-300 sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span>
                  <strong className="text-slate-900">5+ Years</strong> Industry Experience
                </span>
              </div>
            </div>

            {/* Extra copy for SEO / depth */}
            <div className="mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500 md:text-left">
              This R programming course for data visualization & machine learning is designed
              for students and working professionals who want to move into analytics and data
              science roles. Build a job-ready portfolio with real datasets, learn R for EDA,
              visualization, statistical modeling, and communicate insights that drive business impact.
            </div>
          </div>

          {/* Right: Desktop form (top-aligned) */}
          <div className="hidden md:block md:col-span-5 lg:col-span-4 md:top-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};
