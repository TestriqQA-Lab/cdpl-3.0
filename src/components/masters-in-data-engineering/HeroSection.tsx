"use client";

import { ArrowRight, ChevronDown, ChevronRight, Clock, Home, Check } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

/** Accessible custom select (keyboard + mouse + click-outside) */
function FancySelect({
  value,
  onChange,
  options,
  placeholder = "Select country",
  className = "",
  buttonClassName = "",
  optionHeight = 36,
  maxHeight = 280,
  leadingIcon,
}: {
  value: string;
  onChange: (v: string) => void;
  options: Array<{ label: string; value: string }>;
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  optionHeight?: number;
  maxHeight?: number;
  leadingIcon?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const label =
    options.find((o) => (value ?? "") === o.value)?.label ||
    (value || placeholder);

  // Close on outside click / Esc
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggle = () => {
    setOpen((o) => !o);
    setActiveIdx(Math.max(0, options.findIndex((o) => o.value === value)));
  };

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setOpen(true);
      setActiveIdx(Math.max(0, options.findIndex((o) => o.value === value)));
      return;
    }
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(options.length - 1, (i < 0 ? -1 : i) + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(0, (i < 0 ? 0 : i) - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick = options[Math.max(0, activeIdx)];
      if (pick) {
        onChange(pick.value);
        setOpen(false);
        btnRef.current?.focus();
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      btnRef.current?.focus();
    }
  }

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={onKeyDown}
        className={`flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-left text-sm text-slate-900 shadow-sm backdrop-blur focus:outline-none focus:ring-2 focus:ring-teal-300 ${buttonClassName}`}
        title={label}
      >
        <span className="flex min-w-0 items-center gap-2">
          {leadingIcon}
          <span className="truncate">{label}</span>
        </span>
        <ChevronDown
          className={`ml-2 h-4 w-4 shrink-0 text-slate-500 transition ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={activeIdx >= 0 ? `opt-${activeIdx}` : undefined}
          className="custom-options absolute left-0 z-30 mt-2 overflow-auto rounded-xl border border-slate-200 bg-white shadow-lg w-max"
          style={{ maxHeight }}
          onKeyDown={onKeyDown}
        >
          {options.map((opt, i) => {
            const active = i === activeIdx;
            const selected = value === opt.value;
            return (
              <button
                id={`opt-${i}`}
                key={opt.value || opt.label}
                role="option"
                aria-selected={selected}
                type="button"
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                  btnRef.current?.focus();
                }}
                className={`flex w-full items-center justify-between px-3 text-left text-sm transition ${active ? "bg-teal-50/60" : "bg-white"
                  } ${selected ? "font-semibold text-slate-900" : "text-slate-800"}`}
                style={{ height: optionHeight }}
                title={opt.label}
              >
                <span className="whitespace-nowrap">{opt.label}</span>
                {selected ? (
                  <Check className="ml-2 h-4 w-4 text-teal-500" />
                ) : (
                  <span className="ml-2 h-4 w-4" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* dropdown scrollbar & outline polish */}
      <style jsx global>{`
        .custom-options {
          scrollbar-width: thin;
          scrollbar-color: rgba(20,184,166,0.6) transparent;
        }
        .custom-options::-webkit-scrollbar {
          width: 10px;
        }
        .custom-options::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            rgba(20,184,166,0.6),
            rgba(13,148,136,0.6)
          );
          border-radius: 9999px;
          border: 3px solid transparent;
          background-clip: padding-box;
        }
        .custom-options::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            rgba(20,184,166,0.8),
            rgba(13,148,136,0.8)
          );
        }
      `}</style>
    </div>
  );
}

/** --- Reusable Form --- */
function LeadForm({ className = "" }: { className?: string }) {
  const countries = [
    { code: "IN", dial: "+91", label: "India", flag: "🇮🇳" },
    { code: "US", dial: "+1", label: "United States", flag: "🇺🇸" },
    { code: "GB", dial: "+44", label: "United Kingdom", flag: "🇬🇧" },
    { code: "AE", dial: "+971", label: "United Arab Emirates", flag: "🇦🇪" },
    { code: "SG", dial: "+65", label: "Singapore", flag: "🇸🇬" },
    { code: "AU", dial: "+61", label: "Australia", flag: "🇦🇺" },
  ];

  const options = countries.map((c) => ({
    value: c.code,
    label: `${c.flag} (${c.dial}) ${c.label}`,
  }));

  const [country, setCountry] = useState("IN");

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
      aria-label="Enroll for Data Analytics with BI and Big Data Engineering Master Program"
    >
      <h2 className="text-xl font-semibold text-slate-900">
        Request Syllabus & Free Consultation
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Get the detailed BI & Big Data curriculum, career roadmap, and upcoming batch information.
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
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
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
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>

        {/* Phone with country code + flag */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Mobile Number
          </label>
          <div className="mt-1 flex items-stretch gap-2">
            <FancySelect
              value={country}
              onChange={setCountry}
              options={options}
              className="min-w-[7.5rem]"
              buttonClassName="rounded-lg px-2 py-2 text-sm"
            />
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              required
              placeholder="98765 43210"
              pattern="^[0-9\\s\\-()+]{7,20}$"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          <p className="mt-1 text-xs text-slate-500">
            We’ll never share your number. Standard rates may apply.
          </p>
        </div>

        <input type="hidden" name="country" value={country} />

        <button
          type="submit"
          className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 px-5 py-3 font-semibold text-white shadow-lg transition-all hover:from-teal-600 hover:to-teal-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          Get Syllabus & Pricing
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        </button>

        <p className="text-xs text-slate-500">
          By submitting, you agree to our{" "}
          <Link href="/privacy-policy" className="underline hover:text-slate-700">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

const highlights = [
  { icon: "⏱️", label: "155 Hours of Structured Training" },
  { icon: "🎖️", label: "8 Industry-Recognized Certifications" },
  { icon: "📂", label: "10+ Real-World BI & Big Data Projects" },
  { icon: "💼", label: "Guaranteed Job Assistance & Placement Support" },
];

export default function HeroSection() {

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Business Intelligence", href: null }, // non-clickable middle breadcrumb
    { label: "Data Analytics with BI & Big Data Engineering", href: "/masters-in-data-engineering" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
      {/* Decorative background */}
      <div className="absolute overflow-hidden">
        <div className="animate-blob animation-delay-0 absolute right-10 top-20 h-72 w-72 rounded-full bg-teal-200 opacity-20 mix-blend-multiply blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute left-10 top-40 h-72 w-72 rounded-full bg-sky-200 opacity-20 mix-blend-multiply blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-indigo-200 opacity-20 mix-blend-multiply blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-6 md:pb-16">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                {c.href ? (
                  <Link
                    href={c.href}
                    className={`hover:text-orange-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-slate-700 font-medium cursor-default">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Main grid (form aligned to top on the right) */}
        <div className="grid min-h-[70vh] grid-cols-1 gap-10 sm:py-2 md:grid-cols-12 md:items-start">
          {/* Left: Content */}
          <div className="flex flex-col md:col-span-7 lg:col-span-8">
            {/* Duration Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
              <Clock className="h-4 w-4 text-teal-500" />
              <span className="text-sm font-semibold text-slate-700">
                Duration: <span className="text-teal-600">155 Hours · 5.5 Months</span>
              </span>
            </div>

            {/* H1 (same style as reference, updated text) */}
            <h1 className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              <span>Master </span>
              <span className="bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Data Analytics & Business Intelligence
              </span>
              <span> with </span>
              <span className="bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent">
                Big Data Engineering
              </span>
              <span> Master Program</span>
            </h1>

            {/* Mobile form (under H1) */}
            <LeadForm className="mt-3 md:hidden" />

            {/* Subheading */}
            <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600 md:text-left md:text-lg">
              Master the complete data lifecycle from enterprise BI reporting and dashboards
              to designing robust Big Data pipelines, ETL workflows, and cloud-based data
              platforms. Build dual expertise in analytics and engineering to future-proof your
              career.
            </p>

            {/* SEO keywords line */}
            <p className="mt-3 max-w-3xl text-center text-sm text-slate-600 md:text-left">
              Topics: Power BI, Tableau, SQL, Python, data warehousing, ETL, Hadoop, Spark,
              data lakes, cloud data engineering, data modeling, reporting automation, and
              real-world BI & Big Data projects.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-teal-600 hover:to-teal-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-300">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                href="#curriculum"
                className="rounded-lg border-2 border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-teal-400 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                View Curriculum
              </Link>
            </div>

            {/* Highlights (using your program stats) */}
            <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white/60 p-4 backdrop-blur-sm transition-colors hover:border-teal-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-center text-xs font-semibold text-slate-700 md:text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
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
                  <strong className="text-slate-900">14+ Years</strong> Industry Experience
                </span>
              </div>
            </div>

            {/* Extra SEO copy */}
            <div className="mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500 md:text-left">
              This BI and Big Data engineering master program is designed for students and
              working professionals who want to transition into high-growth roles such as Data
              Analyst, BI Developer, or Data Engineer. Build a job-ready portfolio using
              end-to-end projects that cover data ingestion, modeling, visualization, and
              performance optimization for real business use cases.
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
}