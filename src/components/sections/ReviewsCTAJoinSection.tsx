"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { CSSProperties } from "react";

export default function CTAJoinSection() {
  return (
    <section id="cta-join" aria-label="Join CDPL programs" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-5 sm:p-8 lg:p-12 shadow-[0_24px_80px_-40px_rgba(0,0,0,.35)]">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[860px] -translate-x-1/2 rounded-full bg-[var(--color-brand)]/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-brand)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
                Limited seats for this cohort
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-neutral-900">
                Ready to turn practice into <span className="text-[var(--color-brand)]">offers</span>?
              </h2>

              <p className="mt-2 max-w-2xl text-[15px] sm:text-base text-neutral-700">
                Join our hands-on programs in <span className="font-medium text-neutral-900">Testing</span>,{" "}
                <span className="font-medium text-neutral-900">Data</span>, and{" "}
                <span className="font-medium text-neutral-900">Marketing</span>. Build portfolio projects, get real feedback, and ship with confidence.
              </p>

              <div className="mt-4 sm:mt-5 lg:mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-sm lg:px-7 lg:py-4 lg:text-sm bg-[var(--color-brand)] text-white font-semibold shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/40"
                >
                  Join 1000+ Successful Students
                </Link>

                <Link
                  href="#all-reviews"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm sm:px-5 sm:py-3 sm:text-sm lg:px-6 lg:py-3.5 lg:text-sm font-semibold text-neutral-900 transition hover:-translate-y-[1px] hover:shadow-sm"
                >
                  Read student stories
                </Link>
              </div>

              <div className="mt-3 sm:mt-4 flex items-center gap-3 text-xs text-neutral-600">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--color-brand)]" fill="currentColor" />
                  ))}
                </div>
                <span>4.8/5 average rating · Alumni at leading teams</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <StatCard kpi="500+" label="alumni placed" tone="orange" />
                <StatCard kpi="94%" label="job-ready projects" tone="sky" />
                <StatCard kpi="6–12w" label="to first offer" tone="emerald" />
                <StatCard kpi="1:1" label="mentor reviews" tone="violet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** ---------- Pretty, blended numeric cards ---------- **/

type ToneKey = "orange" | "sky" | "emerald" | "violet";

const NOISE: string =
  "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" opacity=\"0.08\" width=\"80\" height=\"80\" viewBox=\"0 0 80 80\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\"/></svg>')";

const TONES: Record<
  ToneKey,
  { border: string; number: string; style: CSSProperties }
> = {
  orange: {
    border: "border-orange-200",
    number: "text-orange-600",
    style: {
      backgroundImage: [
        // conic sweep highlight (peach → orange)
        "conic-gradient(from 220deg at 25% 0%, rgba(255,212,170,0.65), rgba(255,166,77,0.35) 35%, rgba(255,212,170,0.65) 65%, rgba(255,166,77,0.35))",
        // corner glow
        "radial-gradient(100% 90% at 100% 0%, rgba(255,176,102,0.42) 0%, rgba(255,176,102,0) 60%)",
        // texture
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    },
  },
  sky: {
    border: "border-sky-200",
    number: "text-sky-600",
    style: {
      backgroundImage: [
        "conic-gradient(from 210deg at 25% 0%, rgba(186,230,253,0.65), rgba(125,211,252,0.35) 35%, rgba(186,230,253,0.65) 65%, rgba(125,211,252,0.35))",
        "radial-gradient(100% 90% at 100% 0%, rgba(148,216,255,0.42) 0%, rgba(148,216,255,0) 60%)",
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    },
  },
  emerald: {
    border: "border-emerald-200",
    number: "text-emerald-600",
    style: {
      backgroundImage: [
        "conic-gradient(from 225deg at 25% 0%, rgba(187,247,208,0.65), rgba(134,239,172,0.35) 35%, rgba(187,247,208,0.65) 65%, rgba(134,239,172,0.35))",
        "radial-gradient(100% 90% at 100% 0%, rgba(160,240,195,0.42) 0%, rgba(160,240,195,0) 60%)",
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    },
  },
  violet: {
    border: "border-violet-200",
    number: "text-violet-600",
    style: {
      backgroundImage: [
        "conic-gradient(from 200deg at 25% 0%, rgba(221,214,254,0.68), rgba(196,181,253,0.38) 35%, rgba(221,214,254,0.68) 65%, rgba(196,181,253,0.38))",
        "radial-gradient(100% 90% at 100% 0%, rgba(210,200,255,0.45) 0%, rgba(210,200,255,0) 60%)",
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    },
  },
};

function StatCard({
  kpi,
  label,
  tone = "orange",
}: {
  kpi: string;
  label: string;
  tone?: ToneKey;
}) {
  const cfg = TONES[tone];

  return (
    <div
      className={`relative rounded-2xl border ${cfg.border} p-3 sm:p-4 text-center shadow-[0_10px_30px_-20px_rgba(0,0,0,.35)] overflow-hidden bg-white`}
      style={cfg.style}
    >
      {/* subtle sheen arc */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "conic-gradient(from 140deg at 0% 0%, rgba(255,255,255,0.6), transparent 20%, transparent 80%, rgba(255,255,255,0.35))",
          opacity: 0.22,
          WebkitMask:
            "radial-gradient(120% 80% at 0% 0%, black 45%, transparent 70%)",
          mask: "radial-gradient(120% 80% at 0% 0%, black 45%, transparent 70%)",
        }}
      />
      <div className={`text-xl font-extrabold ${cfg.number}`}>{kpi}</div>
      <div className="mt-1 text-xs font-medium text-neutral-700">{label}</div>
    </div>
  );
}
