// components/sections/WhoShouldEnroll.tsx
"use client";

import {
  GraduationCap,
  Briefcase,
  BarChart3,
  Shuffle,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";

type Audience = {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bg: string;        // card background
  text: string;      // text color
  border: string;    // border color
  badge: string;     // small capability tag
};

const AUDIENCES: Audience[] = [
  {
    title: "Students & Fresh Graduates",
    desc: "Build industry-ready DS & ML skills and create a standout portfolio for high-growth roles.",
    icon: GraduationCap,
    bg: "bg-indigo-50",
    text: "text-indigo-900",
    border: "border-indigo-200",
    badge: "Placement Focus",
  },
  {
    title: "Working Professionals",
    desc: "Upskill to lead AI/ML projects, automate workflows, and accelerate career growth.",
    icon: Briefcase,
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    border: "border-emerald-200",
    badge: "Career Accelerator",
  },
  {
    title: "Data Analysts",
    desc: "Transition to Data Scientist roles with modeling, MLOps, and experiment design.",
    icon: BarChart3,
    bg: "bg-amber-50",
    text: "text-amber-900",
    border: "border-amber-200",
    badge: "Role Transition",
  },
  {
    title: "Career Switchers",
    desc: "Break into the booming AI industry with guided projects and interview prep.",
    icon: Shuffle,
    bg: "bg-sky-50",
    text: "text-sky-900",
    border: "border-sky-200",
    badge: "Beginner Friendly",
  },
];

export default function WhoShouldEnroll() {


  return (
    <section
      id="who-should-enroll"
      aria-labelledby="who-should-enroll-heading"
      className="relative py-16 md:py-24 bg-white"
    >
      {/* Sleek top accent (thin, subtle gradient line only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-80" />

      {/* Soft futuristic backdrop (no heavy fills) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(680px_120px_at_50%_0%,rgba(99,102,241,0.10),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto">
          <h2
            id="who-should-enroll-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            Who is this <span className="text-DS">course for</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700">
            Whether you’re starting out or leveling up, this masterclass maps directly to{" "}
            <strong>job-ready skills</strong> in <strong>Data Science</strong> and{" "}
            <strong>Machine Learning</strong>.
          </p>

          {/* Quick trust chips (distinct colors, non-repeating) */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-4xl mx-auto">
            <KPI label="Support" value="Placement & Mentors" icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} accent="bg-emerald-50" />
            <KPI label="Schedule" value="Flexible Batches" icon={<Clock className="h-4 w-4 text-sky-600" />} accent="bg-sky-50" />
            <KPI label="Projects" value="Portfolio-Ready" icon={<Sparkles className="h-4 w-4 text-amber-600" />} accent="bg-amber-50" />
          </div>
        </header>

        {/* Audience grid */}
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {AUDIENCES.map((a) => (
            <li key={a.title}>
              <AudienceCard audience={a} />
            </li>
          ))}
        </ul>

        {/* SR-only helper for SEO */}
        <p className="sr-only">
          This course is ideal for students, fresh graduates, working professionals, data analysts,
          and career switchers who want to learn data science and machine learning.
        </p>
      </div>

    </section>
  );
}

/* ---------- Subcomponents ---------- */

function KPI({
  label,
  value,
  icon,
  accent,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <div
      className={`rounded-xl border border-slate-200 ${accent} p-3 sm:p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur`}
    >
      <div className="text-[11px] font-semibold text-slate-700">{label}</div>
      <div className="mt-1 flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-slate-900">
        {icon}
        <span>{value}</span>
      </div>
    </div>
  );
}

function AudienceCard({ audience }: { audience: Audience }) {
  const Icon = audience.icon;
  return (
    <article
      tabIndex={0}
      className={[
        "rounded-2xl border p-5 md:p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300",
        audience.bg,
        audience.text,
        audience.border,
      ].join(" ")}
      aria-label={audience.title}
    >
      <div className="flex items-start gap-3">
        <span className="p-2.5 rounded-xl bg-white ring-1 ring-black/5" aria-hidden="true">
          <Icon className="w-6 h-6" />
        </span>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold tracking-tight text-slate-900">{audience.title}</h3>
            <span
              className={[
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                audience.border,
                "bg-white/70 text-slate-700",
              ].join(" ")}
            >
              {audience.badge}
            </span>
          </div>
          <p className="mt-1 text-sm md:text-[15px] text-slate-700">{audience.desc}</p>
        </div>
      </div>
    </article>
  );
}
