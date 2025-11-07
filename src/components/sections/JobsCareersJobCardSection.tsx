"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Briefcase,
  Building2,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Info,
  Star,
  Tag,
  X,
  CheckCircle,
} from "lucide-react";

// Define Job type locally to avoid import issues
type Job = {
  id: string;
  title: string;
  team:
    | "Engineering"
    | "Data"
    | "Product"
    | "Growth"
    | "Student Success"
    | "Operations";
  location: "Bengaluru" | "Pune" | "Remote (India)" | "Hybrid (Bengaluru)";
  type: "Full-time" | "Contract" | "Internship";
  experience: "0–1 yrs" | "1–3 yrs" | "3–5 yrs" | "5–8 yrs" | "8+ yrs";
  summary: string;
  responsibilities: string[];
  requirements: string[];
  applyEmail?: string;
  applyLink?: string;
};

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    const el = document.documentElement; // safer than body for some UAs
    const prev = el.style.overflow;
    if (locked) el.style.overflow = "hidden";
    return () => {
      el.style.overflow = prev;
    };
  }, [locked]);
}

function ModalPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export function JobsCareersJobCardSection({ job }: { job: Job }) {
  const [openForm, setOpenForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useBodyScrollLock(openForm);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  // Visible text/placeholder on inputs & textarea
  const fieldBase =
    "rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm " +
    "text-slate-900 placeholder:text-slate-400 outline-none " +
    "focus:border-slate-300 focus:ring-2 focus:ring-orange-200";

  return (
    <article className="relative flex h-full flex-col lg:sticky lg:top-4">
      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-3 top-3 h-16 w-16 rounded-full blur-xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(125,211,252,.45), rgba(255,140,0,.0))",
        }}
      />

      {/* Sticky Header — stays visible while scrolling */}
      <div className="sticky z-30 top-0">
        <div className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 border-b border-slate-100 pt-4">
          <div className="py-2">
            <div className="flex items-start gap-3">
              <div
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))",
                  boxShadow: "inset 0 0 0 1px rgba(15, 23, 42, 0.06)",
                }}
              >
                <Briefcase className="h-5 w-5" style={{ color: "#ff8c00" }} />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-xl font-extrabold leading-tight text-slate-900">
                  {job.title}
                </h3>
                <p className="mt-0.5 flex flex-wrap items-center gap-2 text-[13px] text-slate-600">
                  <span className="inline-flex items-center">
                    <Building2 className="mr-1 h-3.5 w-3.5" />
                    Cinute Digital Pvt Ltd (CDPL) • {job.team}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center">
                    <MapPin className="mr-1 h-3.5 w-3.5" />
                    {job.location}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    {job.type} • {job.experience}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pills */}
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
          CDPL
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
          {job.team}
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
          {job.type}
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
          Exp: {job.experience}
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
          {job.location}
        </span>
      </div>

      {/* Summary */}
      {job.summary ? (
        <p className="mt-3 text-[13.5px] leading-relaxed text-slate-700">
          {job.summary}
        </p>
      ) : null}

      {/* Responsibilities / Requirements */}
      <div className="mt-4 grid gap-6 lg:grid-cols-2">
        {job.responsibilities?.length ? (
          <div>
            <div className="mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-slate-500" />
              <h4 className="text-sm font-semibold text-slate-900">
                Responsibilities
              </h4>
            </div>
            <ul className="grid gap-1.5">
              {job.responsibilities.slice(0, 8).map((r: string, i: number) => (
                <li
                  key={`${r}-${i}`}
                  className="text-[13.5px] leading-relaxed text-slate-700"
                >
                  • {r}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {job.requirements?.length ? (
          <div>
            <div className="mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-slate-500" />
              <h4 className="text-sm font-semibold text-slate-900">
                Requirements
              </h4>
            </div>
            <ul className="grid gap-1.5">
              {job.requirements.slice(0, 8).map((r: string, i: number) => (
                <li
                  key={`${r}-${i}`}
                  className="text-[13.5px] leading-relaxed text-slate-700"
                >
                  • {r}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {/* Success + Nice-to-haves */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div
          className="rounded-2xl border border-amber-100 bg-gradient-to-b from-amber-50 to-white p-3"
          style={{ boxShadow: "inset 0 0 0 1px rgba(245, 158, 11, 0.08)" }}
        >
          <div className="mb-2 flex items-center gap-2">
            <Star className="h-4 w-4 text-amber-600" />
            <h4 className="text-sm font-semibold text-slate-900">
              What success looks like (first 90 days)
            </h4>
          </div>
          <ul className="grid gap-1.5">
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Ship 1–2 meaningful improvements in your area.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Create solid docs and crisp decision records.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Raise quality bars in reviews and demos.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-3">
          <div className="mb-2 flex items-center gap-2">
            <Tag className="h-4 w-4 text-slate-500" />
            <h4 className="text-sm font-semibold text-slate-900">Nice-to-haves</h4>
          </div>
          <ul className="grid gap-1.5">
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Portfolio/PRs showing thoughtful craft.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Experience in small, product-led teams.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Comfort writing clear docs/PRDs.
            </li>
          </ul>
        </div>
      </div>

      {/* Perks & benefits */}
      <div className="mt-6">
        <h4 className="mb-2 text-sm font-semibold text-slate-900">Perks & benefits</h4>
        <ul className="grid gap-2 sm:grid-cols-2">
          {[
            "Hybrid flexibility; remote-friendly sprints",
            "Learning budget (courses/books/confs)",
            "Mentor ecosystem & hiring-partner access",
            "Outcome-focused culture, low-meeting bias",
            "Competitive comp; ESOPs for key roles",
            "Quality gear & modern tooling",
          ].map((p) => (
            <li key={p} className="text-[13.5px] leading-relaxed text-slate-700">
              • {p}
            </li>
          ))}
        </ul>
      </div>

      {/* How we work / Process snapshot */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-3">
          <div className="mb-2 flex items-center gap-2">
            <Info className="h-4 w-4 text-slate-500" />
            <h4 className="text-sm font-semibold text-slate-900">How we work</h4>
          </div>
          <ul className="grid gap-1.5">
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Outcomes over vanity; small, fast teams.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Written culture, clear docs beat meetings.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Accessibility, stability & quality first.
            </li>
          </ul>
        </div>

        <div
          className="rounded-2xl border border-sky-100 bg-gradient-to-b from-sky-50 to-white p-3"
          style={{ boxShadow: "inset 0 0 0 1px rgba(14, 165, 233, 0.06)" }}
        >
          <div className="mb-2 flex items-center gap-2">
            <Clock className="h-4 w-4 text-sky-600" />
            <h4 className="text-sm font-semibold text-slate-900">Hiring process (quick)</h4>
          </div>
          <ol className="grid gap-1.5 text-[13.5px] leading-relaxed text-slate-700 list-decimal list-inside">
            <li>Apply with links (portfolio/GitHub/LinkedIn).</li>
            <li>Intro call (30 mins): expectations &amp; fit.</li>
            <li>Craft exercise aligned to real CDPL work.</li>
            <li>Panel deep-dive; async doc review.</li>
            <li>Offer, we move fast.</li>
          </ol>
        </div>
      </div>

      {/* CTA row */}
      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
        <button
          type="button"
          onClick={() => {
            setOpenForm(true);
            setSubmitted(false);
          }}
          className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          style={{ backgroundColor: "var(--color-brand, #ff8c00)" }}
          aria-haspopup="dialog"
          aria-expanded={openForm}
        >
          Apply
        </button>

        <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
          <Clock className="h-3.5 w-3.5" />
          CDPL hiring • 1–2 weeks
        </span>
      </div>

      {/* Application tip + EEO note */}
      <div
        className="mt-4 rounded-2xl border border-slate-100 bg-white p-3"
        style={{ boxShadow: "inset 0 0 0 1px rgba(15, 23, 42, 0.04)" }}
      >
        <div className="mb-2 flex items-start gap-2">
          <Info className="mt-0.5 h-4 w-4 text-slate-500" />
          <p className="text-[13.5px] leading-relaxed text-slate-700">
            <span className="font-semibold text-slate-900">Tip:</span> Keep a
            short note on why CDPL + 2 links that show your craft (PRs, case
            studies, dashboards, demos). Strong writing and outcomes beat long
            resumes.
          </p>
        </div>
        <p className="text-[12.5px] text-slate-500">
          We&apos;re an equal-opportunity employer. We value diversity and are
          committed to an inclusive, respectful workplace.
        </p>
      </div>

      {/* ----------------- Apply Form Modal (Portal) ----------------- */}
      {openForm && (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[2147483647] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`apply-title-${job.id}`}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpenForm(false)}
            />

            {/* Dialog */}
            <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl md:mx-0 mx-auto">
              <div className="flex items-start justify-between border-b border-slate-100 px-5 py-4">
                <div className="min-w-0">
                  <h4
                    id={`apply-title-${job.id}`}
                    className="truncate text-lg font-bold text-slate-900"
                  >
                    Apply — {job.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Cinute Digital Pvt Ltd (CDPL) • {job.location} • {job.type}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenForm(false)}
                  aria-label="Close"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body (scrolls independently if needed) */}
              <div className="max-h-[80vh] overflow-auto px-5 py-4">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <CheckCircle className="h-12 w-12 text-emerald-500" />
                    <p className="mt-3 text-base font-semibold text-slate-900">
                      Application submitted!
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      We’ll review your profile and get back to you soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => setOpenForm(false)}
                      className="mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
                      style={{ backgroundColor: "#10b981" }}
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="grid gap-3">
                    <div className="grid gap-1.5">
                      <label className="text-sm font-medium text-slate-800">
                        Full Name
                      </label>
                      <input
                        required
                        name="name"
                        className={fieldBase}
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid gap-1.5">
                      <label className="text-sm font-medium text-slate-800">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        className={fieldBase}
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="grid gap-1.5">
                      <label className="text-sm font-medium text-slate-800">
                        Portfolio / GitHub / LinkedIn
                      </label>
                      <input
                        name="links"
                        className={fieldBase}
                        placeholder="URLs separated by comma"
                      />
                    </div>

                    <div className="grid gap-1.5">
                      <label className="text-sm font-medium text-slate-800">
                        Resume Link (Drive/URL)
                      </label>
                      <input
                        name="resume"
                        className={fieldBase}
                        placeholder="https://..."
                      />
                    </div>

                    <div className="grid gap-1.5">
                      <label className="text-sm font-medium text-slate-800">
                        Short Note
                      </label>
                      <textarea
                        name="note"
                        rows={4}
                        className={fieldBase}
                        placeholder="Why CDPL? What impact do you want to create?"
                      />
                    </div>

                    <div className="mt-2 flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setOpenForm(false)}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:opacity-60"
                        style={{ backgroundColor: "var(--color-brand, #ff8c00)" }}
                      >
                        {submitting ? "Submitting..." : "Submit Application"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Optional: tame autofill colors for Safari/Chrome */}
            <style jsx global>{`
              input:-webkit-autofill,
              textarea:-webkit-autofill {
                -webkit-text-fill-color: #0f172a !important; /* slate-900 */
                -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
              }
            `}</style>
          </div>
        </ModalPortal>
      )}
    </article>
  );
}
