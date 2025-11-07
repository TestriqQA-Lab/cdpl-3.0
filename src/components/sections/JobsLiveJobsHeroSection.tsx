// components/Sections/JobsLiveJobsHero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Rocket,
  Sparkles,
  GitBranch,
  LineChart,
} from "lucide-react";

const BRAND = "#ff8c00"; // CDPL primary
const BRAND_GRAD =
  "linear-gradient(90deg, #ff8c00 0%, #ffb558 45%, #ff7043 100%)";
const ACCENT_BLUE = "#1e88e5"; // complementary blue

export default function JobsLiveJobsHeroSection() {
  return (
    // keep overflow contained (Firefox-safe) and make background full-bleed
    <section className="relative isolate overflow-hidden mx-auto max-w-7xl px-4 pt-6 pb-10 sm:px-6 lg:px-8">
      {/* ==== FULL-BLEED CDPL moving gradient — only in the MIDDLE ==== */}
      {/* Tiny top glow centered (won’t touch corners) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-20 h-full w-[100vw] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(700px 140px at 50% -60px, rgba(255,140,0,0.06), transparent 60%)",
        }}
      />
      {/* Center-limited sweep with a radial mask so corners stay plain */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-20 h-full w-[100vw] -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, backgroundPositionX: ["0%", "100%", "0%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,140,0,0.12) 0%, rgba(255,181,88,0.16) 33%, rgba(255,112,67,0.14) 66%, rgba(30,136,229,0.10) 100%)",
          backgroundSize: "300% 100%",
          // Mask confines the gradient to the visual center (no corners)
          maskImage:
            "radial-gradient(70% 60% at 50% 52%, black 55%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 52%, black 55%, transparent 72%)",
          willChange: "background-position",
        }}
      />

      {/* ===== Breadcrumbs ===== */}
      <nav aria-label="Breadcrumb" className="mb-3 sm:mb-4">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          <li><Link href="/" className="hover:text-slate-800">Home</Link></li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li><Link href="/jobs" className="hover:text-slate-800">Jobs</Link></li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="font-medium text-slate-700">Live Jobs</li>
        </ol>
      </nav>

      {/* ===== Grid (extra space added ONLY on the left column via mt-*) ===== */}
      <div className="relative z-10 grid items-start gap-8 md:grid-cols-[minmax(360px,1fr)_minmax(420px,520px)] lg:grid-cols-[minmax(420px,1fr)_minmax(520px,1fr)]">
        {/* Left: copy (requested extra spacing below breadcrumb) */}
        <div className="mt-4 sm:mt-6 flex flex-col items-start gap-3 self-start">
          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-clip-text text-transparent"
            style={{
              background: BRAND_GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Live Jobs curated by Cinute Digital (CDPL)
          </h1>

          <p className="max-w-3xl text-base leading-7 text-slate-700">
            Fresh, verified openings from our hiring partner network across{" "}
            <strong>QA, SDET, Automation</strong>, <strong>Full-Stack</strong>,{" "}
            <strong>Data</strong>, and <strong>DevOps</strong>. Apply with
            <span className="font-medium"> mentor guidance</span> and build a
            job-ready portfolio.{" "}
            <span style={{ color: "#0069A8" }}>
              to help CDPL students get placed
            </span>
          </p>

          <div className="mt-1 flex flex-wrap gap-2">
            <Chip>Updated weekly</Chip>
            <Chip>ISO-aligned training support</Chip>
            <Chip>Interview prep & referrals</Chip>
          </div>
        </div>

        {/* Right: hero art (capped size, lifted slightly, slow float) */}
        <div className="relative mx-auto w-full self-start md:-mt-1">
          <div className="relative mx-auto h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] w-full">
            <div className="absolute inset-0">
              <Image
                src="/testimonial_images/find-job-shadow.png" // update if needed
                alt="Find your next job with CDPL’s verified openings"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 44vw, 40vw)"
                className="object-contain"
              />
            </div>
          </div>

          {/* Floating icons around the image area only */}
          <FloatingIcon
            Icon={BriefcaseBusiness}
            className="left-[-14px] top-2 md:left-[-18px]"
            hue={BRAND}
            delay={0}
          />
          <FloatingIcon
            Icon={Rocket}
            className="right-[-14px] top-1/3 md:right-[-18px]"
            hue={ACCENT_BLUE}
            delay={0.2}
          />
          <FloatingIcon
            Icon={Sparkles}
            className="left-6 bottom-[-14px] md:left-10"
            hue={BRAND}
            delay={0.35}
          />
          <FloatingIcon
            Icon={GitBranch}
            className="right-8 bottom-[-18px] md:right-12"
            hue={ACCENT_BLUE}
            delay={0.5}
          />
          <FloatingIcon
            Icon={LineChart}
            className="right-1/2 top-[-18px] translate-x-1/2"
            hue={BRAND}
            delay={0.65}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- UI bits ---------- */

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{ background: BRAND }}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

function FloatingIcon({
  Icon,
  className,
  hue
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  hue: string;
  delay?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute hidden select-none md:block ${className ?? ""}`}
      style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.08))" }}
    >
      <div
        className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white shadow-sm"
        style={{ boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.05)" }}
      >
        <Icon className="h-5 w-5" style={{ color: hue }} />
      </div>
    </div>
  );
}
