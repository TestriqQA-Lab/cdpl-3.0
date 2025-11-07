// src/components/sections/EventsPastEventsHeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

export default function EventsPastEventsHeroSection() {
  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const featured = document.getElementById("featured-events");
    const all = document.getElementById("all-past-events");
    (featured ?? all)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* subtle geometric bg (full-bleed) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* container (relative) so floating lanterns respect max width */}
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* decorative floating lanterns (bounded by max-w-7xl) */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden sm:block"
          aria-hidden="true"
        >
          {/* left edge */}
          <div className="absolute top-10 left-0 md:left-2 lg:left-4 animate-float">
            <Image
              src="/events/fire_lantern.png"
              alt=""
              width={64}
              height={64}
              className="w-8 md:w-10 lg:w-12 h-auto opacity-90"
            />
          </div>

          {/* right edge */}
          <div
            className="absolute top-6 right-0 md:right-3 lg:right-6 animate-float-slow"
            style={{ animationDelay: "0.8s" }}
          >
            <Image
              src="/events/fire_lantern.png"
              alt=""
              width={64}
              height={64}
              className="w-7 md:w-9 lg:w-11 h-auto opacity-90"
            />
          </div>

          {/* upper center */}
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 animate-float-slower"
            style={{ animationDelay: "1.6s" }}
          >
            <Image
              src="/events/fire_lantern.png"
              alt=""
              width={56}
              height={56}
              className="w-7 md:w-8 lg:w-10 h-auto opacity-80"
            />
          </div>

          {/* low right, below CTA */}
          <div
            className="absolute bottom-4 right-2 md:bottom-8 md:right-8 animate-float"
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/events/fire_lantern.png"
              alt=""
              width={52}
              height={52}
              className="w-6 md:w-7 lg:w-9 h-auto opacity-75"
            />
          </div>
        </div>

        {/* ✅ Breadcrumb (kept) */}
        <nav aria-label="Breadcrumb" className="relative z-10 mb-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <Link href="/" className="hover:text-indigo-700">Home</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              <span>Events</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              <span className="font-semibold text-slate-900">Past Events</span>
            </li>
          </ol>
        </nav>

        {/* split */}
        <div className="relative z-10 grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2">
          {/* LEFT — content */}
          <div className="order-1 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Our Training Portfolio
            </span>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-[#0069A8]">Past Events</span>{" "}
              <span className="text-slate-900">&amp;</span>{" "}
              <span className="text-[#FF8C00]">Training Programs</span>
            </h1>

            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-700 sm:text-base md:text-lg">
              Explore our portfolio of successfully conducted training events, workshops, and corporate programs across India.
            </p>

            {/* scroll button */}
            <div className="mt-5">
              <button
                onClick={handleScrollDown}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                style={{ backgroundColor: "#FF8C00" }}
                aria-label="Scroll to events"
              >
                Browse events
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="order-2 lg:order-2 mt-4 lg:mt-0">
            <Image
              src="/events/services_past-events-hero.png"
              alt="CDPL training events collage"
              width={1280}
              height={960}
              className="w-full h-auto object-contain"
              style={{ filter: "none", mixBlendMode: "normal" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* float animations */}
      <style jsx>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float { animation: floatY 6s ease-in-out infinite; }
        .animate-float-slow { animation: floatY 7.5s ease-in-out infinite; }
        .animate-float-slower { animation: floatY 9s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
