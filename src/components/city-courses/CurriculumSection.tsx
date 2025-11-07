"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import type { CourseData } from "@/types/courseData";
import { CheckCircle2, BookOpen } from "lucide-react";

interface Track {
  id?: number | string;
  title: string;
  weeks: Week[];
}

interface Week {
  number?: string | number;
  title: string;
  description: string;
  deliverables?: string[];
}

/** ---- Framer variants ---- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: 12, transition: { duration: 0.2 } },
};

/** ---- Match tab colors to CourseOverview VARIANTS order ---- */
type Variant = {
  header: string;      // ACTIVE background class (gradient)
  button: string;      // (kept for your future buttons)
  hoverBorder: string; // subtle hover border tint for INACTIVE tabs
};

const VARIANTS: Variant[] = [
  {
    header: "bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white",
    button: "bg-gradient-to-r from-indigo-600 to-fuchsia-600",
    hoverBorder: "hover:border-indigo-300",
  },
  {
    header: "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white",
    button: "bg-gradient-to-r from-emerald-600 to-cyan-600",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    header: "bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white",
    button: "bg-gradient-to-r from-rose-600 to-orange-500",
    hoverBorder: "hover:border-rose-300",
  },
];

function pickVariant(i: number): Variant {
  return VARIANTS[i % VARIANTS.length];
}

interface CurriculumSectionProps {
  data: CourseData;
}

const CurriculumSection: React.FC<CurriculumSectionProps> = ({ data }) => {
  const { curriculumContent } = data;

  // tracks-based data model
  const tracks = useMemo(() => curriculumContent?.tracks ?? [], [curriculumContent?.tracks]) as Track[];
  const [activeTrack, setActiveTrack] = useState<number>(0);
  const current = tracks[activeTrack];

  const totalWeeks = current?.weeks?.length ?? 0;

  return (
    <section id="curriculum-section" className="relative py-16 sm:py-20 bg-white">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-violet-700 uppercase"
            variants={itemVariants}
          >
            <BookOpen className="h-4 w-4" />
            Curriculum Tracks
          </motion.p>
          <motion.h2
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
            variants={itemVariants}
          >
            {curriculumContent.title}
          </motion.h2>
          {curriculumContent.subtitle && (
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600"
              variants={itemVariants}
            >
              {curriculumContent.subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div variants={itemVariants}>
            <div
              role="tablist"
              aria-label="Curriculum tracks"
              className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full"
            >
              {tracks.map((t: Track, i: number) => {
                const active = i === activeTrack;
                const variant = pickVariant(i);

                return (
                  <button
                    key={t.id ?? i}
                    role="tab"
                    aria-selected={active}
                    aria-controls={`track-panel-${t.id ?? i}`}
                    id={`track-tab-${t.id ?? i}`}
                    onClick={() => setActiveTrack(i)}
                    title={t.title}
                    className={[
                      // sizing & layout
                      "flex items-center text-center justify-center",
                      "sm:flex-none flex-1 min-w-[100px] sm:min-w-[140px] max-w-[150px] sm:max-w-none",
                      "px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300",
                      // ACTIVE: keep your gradient; INACTIVE: simple pill
                      active
                        ? [
                          variant.header,
                          "border border-transparent shadow-sm opacity-100 ring-2 ring-white/40 [text-shadow:0_1px_0_rgba(0,0,0,0.25)]",
                        ].join(" ")
                        : [
                          "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:shadow-sm",
                          variant.hoverBorder,
                        ].join(" "),
                    ].join(" ")}
                  >
                    <span className="sm:whitespace-normal truncate">{t.title}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Quick meta */}
          {current && (
            <motion.div variants={itemVariants} className="mt-4 text-center text-sm text-slate-600">
              <span className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1">
                {totalWeeks} {totalWeeks === 1 ? "Module" : "Modules"}
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Tab Panel */}
        <div className="mt-8 lg:mt-10">
          <AnimatePresence mode="wait">
            {current ? (
              <motion.div
                key={current.id ?? activeTrack}
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                id={`track-panel-${current.id ?? activeTrack}`}
                role="tabpanel"
                aria-labelledby={`track-tab-${current.id ?? activeTrack}`}
                className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-blue-50 p-4 sm:p-6 lg:p-7 shadow-sm"
              >
                {/* Table-like card */}
                <div className="rounded-xl border border-slate-200 bg-white">
                  {/* Header row */}
                  <div className="hidden sm:grid sm:grid-cols-12 gap-0 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
                    <div className="col-span-2">Week</div>
                    <div className="col-span-3">Module</div>
                    <div className="col-span-5">What you&apos;ll learn</div>
                    <div className="col-span-2">Deliverables</div>
                  </div>

                  {/* Rows */}
                  <ul className="divide-y divide-slate-200">
                    {current.weeks.map((w: Week, idx: number) => (
                      <li key={idx} className="sm:grid sm:grid-cols-12 gap-0 px-4 py-4">
                        {/* Mobile labels */}
                        <div className="sm:hidden mb-2">
                          <div className="text-xs font-semibold uppercase text-slate-500">Week</div>
                          <div className="mt-0.5 inline-flex items-center rounded-md bg-violet-600/10 text-violet-700 px-2 py-1 text-xs font-semibold">
                            {w.number || String(idx + 1)}
                          </div>
                        </div>

                        {/* Week */}
                        <div className="hidden sm:block col-span-2">
                          <span className="inline-flex items-center rounded-md bg-violet-600/10 text-violet-700 px-2 py-1 text-xs font-semibold">
                            {w.number || String(idx + 1)}
                          </span>
                        </div>

                        {/* Module title */}
                        <div className="sm:col-span-3">
                          <div className="sm:hidden text-xs font-semibold uppercase text-slate-500">Module</div>
                          <div className="text-base font-semibold text-slate-900 truncate">{w.title}</div>
                        </div>

                        {/* Description */}
                        <div className="mt-2 sm:mt-0 sm:col-span-5">
                          <div className="sm:hidden text-xs font-semibold uppercase text-slate-500 mb-1">
                            What you&apos;ll learn
                          </div>
                          <p className="text-sm text-slate-700 line-clamp-3">{w.description}</p>
                        </div>

                        {/* Deliverables */}
                        <div className="mt-3 sm:mt-0 sm:col-span-2">
                          <div className="sm:hidden text-xs font-semibold uppercase text-slate-500 mb-1">
                            Deliverables
                          </div>
                          {Array.isArray(w.deliverables) && w.deliverables.length > 0 ? (
                            <ul className="space-y-1">
                              {w.deliverables.map((d: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-800">
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 flex-shrink-0" />
                                  <span className="line-clamp-2">{d}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-sm text-slate-500">—</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-600"
              >
                Select a track to view its curriculum.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
