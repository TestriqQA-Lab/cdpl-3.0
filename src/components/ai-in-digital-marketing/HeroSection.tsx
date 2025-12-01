"use client";

import { courseData } from "@/components/ai-in-digital-marketing/courseData";
import { ArrowRight, ChevronRight, Clock, Home, ChevronDown, Check } from "lucide-react";
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
    label: `${c.flag} ${c.label} (${c.dial})`,
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
      aria-label="Enroll for AI in Digital Marketing Program"
    >
      <h2 className="text-xl font-semibold text-slate-900">
        Request Syllabus & Free Consultation
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Get the detailed AI-powered digital marketing curriculum, career roadmap, and next batch details.
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
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>
          <p className="mt-1 text-xs text-slate-500">
            We’ll never share your number. Standard rates may apply.
          </p>
        </div>

        <input type="hidden" name="country" value={country} />

        <button
          type="submit"
          className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
            <h2 className="text-xl font-semibold text-slate-900">
                Request Syllabus & Free Consultation
            </h2>
            <p className="mt-1 text-sm text-slate-600">
                Get the detailed AI-powered digital marketing curriculum, career roadmap, and next batch details.
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
                    <Link href="/privacy-policy" className="underline hover:text-slate-700">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </form>
    );
}

export default function HeroSection() {
    const { basic } = courseData;

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "AI in Digital Marketing" },
    ];

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50 to-indigo-50 pt-10 md:pt-6">
            {/* Decorative background (same style as reference) */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="animate-blob animation-delay-0 absolute right-10 top-20 h-72 w-72 rounded-full bg-orange-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-2000 absolute left-10 top-40 h-72 w-72 rounded-full bg-indigo-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-3xl" />
            </div>



            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? (
                                        <Home className="h-4 w-4" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4" />
                                    )}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
                                            className={`hover:text-orange-700 ${isLast
                                                ? "font-semibold text-slate-900"
                                                : ""
                                                }`}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-orange-700 ${isLast
                                                ? "font-semibold text-slate-900"
                                                : ""
                                                }`}
                                        >
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                {/* Main grid: left content, right sticky form */}
                <div className="grid min-h-[70vh] grid-cols-1 gap-10 sm:py-2 md:grid-cols-12 md:items-start">
                    {/* Left: Content */}
                    <div className="flex flex-col md:col-span-8">
                        {/* Duration Badge (using basic.duration) */}
                        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
                            <Clock className="h-4 w-4 text-orange-500" />
                            <span className="text-sm font-semibold text-slate-700">
                                Duration:{" "}
                                <span className="text-orange-600">{basic.duration}</span>
                            </span>
                        </div>

                        {/* H1 styled same as reference */}
                        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:mt-0 md:text-4xl xl:text-5xl">
                            <span>Master </span>
                            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                                Digital Marketing
                            </span>
                            <span> & </span>
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                AI Automation
                            </span>
                        </h1>

                        {/* Mobile form under H1 */}
                        <LeadForm className="mt-3 md:hidden" />

                        {/* Subheading – using basic.subtitle */}
                        <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600 md:text-left md:text-lg">
                            {basic.subtitle}
                        </p>

                        {/* Description – using basic.description */}
                        <p className="mt-3 max-w-3xl text-center text-sm text-slate-600 md:text-left">
                            {basic.description}
                        </p>

                        {/* Key SEO topics line */}
                        <p className="mt-3 max-w-3xl text-center text-xs text-slate-600 md:text-left">
                            Topics: AI content creation, performance marketing with AI, Meta & Google Ads,
                            AI-powered SEO, marketing automation, funnels, lead generation, marketing
                            analytics, chatbot automation, email workflows, and more.
                        </p>

                        {/* Highlights (similar layout to reference) */}
                        <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                            {[
                                { icon: "📊", label: "Real Projects" },
                                { icon: "🤖", label: "AI Tools Training" },
                                { icon: "🎓", label: "Industry Certification" },
                                { icon: "💼", label: "Job & Business Ready" },
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

                        {/* CTAs (adapted from your original copy) */}
                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                            <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300">
                                Enroll Now &amp; 10X Your Business
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            <button className="rounded-lg border-2 border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-orange-400 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
                                Download Free Syllabus
                            </button>
                        </div>

                        {/* Trust Indicators using your stats */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-6 text-sm text-slate-600 sm:flex-row md:justify-start">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">⭐</span>
                                <span>
                                    <strong className="text-slate-900">9.6/10</strong> Program Rating
                                </span>
                            </div>
                            <div className="hidden h-6 w-px bg-slate-300 sm:block" />
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">👥</span>
                                <span>
                                    <strong className="text-slate-900">500+</strong> Successful Graduates
                                </span>
                            </div>
                            <div className="hidden h-6 w-px bg-slate-300 sm:block" />
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🏆</span>
                                <span>
                                    <strong className="text-slate-900">14+ Years</strong> Expertise
                                </span>
                            </div>
                        </div>

                        {/* Extra SEO copy */}
                        <div className="mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500 md:text-left">
                            This AI-powered digital marketing course is built for students, entrepreneurs,
                            freelancers, and working professionals who want to dominate social media, ads,
                            and organic marketing using modern AI tools. Learn how to plan campaigns, create
                            high-converting content, optimize ads, and automate your marketing to grow
                            revenue faster.
                        </div>
                    </div>

                    {/* Right: Desktop form (top-aligned) */}
                    <div className="hidden md:block md:col-span-4 lg:col-span-4 md:top-8">
                        <LeadForm />
                    </div>
                </div>
            </div>

            {/* CTAs (adapted from your original copy) */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300">
                Enroll Now &amp; 10X Your Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="rounded-lg border-2 border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-orange-400 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
                Download Free Syllabus
              </button>
            </div>

            {/* Trust Indicators using your stats */}
            <div className="mt-10 flex flex-col items-center justify-center gap-6 text-sm text-slate-600 sm:flex-row md:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>
                  <strong className="text-slate-900">9.6/10</strong> Program Rating
                </span>
              </div>
              <div className="hidden h-6 w-px bg-slate-300 sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span>
                  <strong className="text-slate-900">500+</strong> Successful Graduates
                </span>
              </div>
              <div className="hidden h-6 w-px bg-slate-300 sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span>
                  <strong className="text-slate-900">14+ Years</strong> Expertise
                </span>
              </div>
            </div>

            {/* Extra SEO copy */}
            <div className="mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500 md:text-left">
              This AI-powered digital marketing course is built for students, entrepreneurs,
              freelancers, and working professionals who want to dominate social media, ads,
              and organic marketing using modern AI tools. Learn how to plan campaigns, create
              high-converting content, optimize ads, and automate your marketing to grow
              revenue faster.
            </div>
          </div>

          {/* Right: Desktop form (top-aligned) */}
          <div className="hidden md:block md:col-span-4 lg:col-span-4 md:top-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
