// components/Sections/JobsLiveJobsSplitView.tsx
// Tablet-safe: single column up to lg; two-column equal-height from lg+.

"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  CalendarDays,
  ExternalLink,
  MapPin,
  Mail,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";

const BRAND = "#ff8c00";
const HARD_CAP_PX = 800; // max height for LEFT list (only when two-column)
const GAP_BELOW_LEFT_HEADER_PX = 16; // mt-4 on list

export type Job = {
  id: string;
  title: string;
  company: string;
  companySite?: string;
  type: "Full-time" | "Internship" | "Contract" | "Walk-in";
  mode?: "Onsite" | "Hybrid" | "Remote";
  location: string;
  postedOn: string;
  eventDate?: string;
  timeWindow?: string;
  venue?: string;
  exp: string;
  salary?: string;
  highlights: string[];
  responsibilities?: string[];
  applyEmail?: string;
  applyLink?: string;
  contacts?: string[];
};

export default function JobsLiveJobsSplitViewSection({ jobs }: { jobs: Job[] }) {
  const [q, setQ] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);

  // Mobile detail toggle (WhatsApp-like UX)
  const [showDetailMobile, setShowDetailMobile] = useState(false);

  // Breakpoints: we only apply equal-height logic from lg (≥1024px)
  const [isTwoCol, setIsTwoCol] = useState(false);
  useLayoutEffect(() => {
    const onResize = () => setIsTwoCol(window.innerWidth >= 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // measurement refs (used only when isTwoCol)
  const rightNaturalRef = useRef<HTMLDivElement | null>(null);
  const leftHeaderRef = useRef<HTMLDivElement | null>(null);

  const [rightNaturalHeight, setRightNaturalHeight] = useState(0);
  const [vhCap, setVhCap] = useState(0); // 80vh px
  const [leftHeaderHeight, setLeftHeaderHeight] = useState(0);

  // default selection: latest
  useEffect(() => {
    if (!activeId && jobs.length) {
      const latest = [...jobs].sort(
        (a, b) => +new Date(b.postedOn) - +new Date(a.postedOn)
      )[0];
      setActiveId(latest.id);
    }
  }, [jobs, activeId]);

  // 80vh cap for desktop (safe for all, but used when isTwoCol)
  useLayoutEffect(() => {
    const updateCap = () => setVhCap(Math.round(window.innerHeight * 0.8));
    updateCap();
    window.addEventListener("resize", updateCap);
    return () => window.removeEventListener("resize", updateCap);
  }, []);

  // measure left header (search + count)
  useLayoutEffect(() => {
    if (!leftHeaderRef.current) return;
    const el = leftHeaderRef.current;
    const measure = () => {
      const styles = getComputedStyle(el);
      const marginY =
        parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
      setLeftHeaderHeight(Math.round(el.offsetHeight + marginY));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    if (!qq) return jobs;
    return jobs.filter(
      (j) =>
        j.title.toLowerCase().includes(qq) ||
        j.company.toLowerCase().includes(qq) ||
        j.location.toLowerCase().includes(qq) ||
        j.highlights?.some((h) => h.toLowerCase().includes(qq))
    );
  }, [jobs, q]);

  const active = useMemo(
    () => filtered.find((j) => j.id === activeId) ?? filtered[0],
    [filtered, activeId]
  );

  useEffect(() => {
    if (active && active.id !== activeId) setActiveId(active.id);
    else if (!active && filtered[0]) setActiveId(filtered[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  // measure right content (used to sync heights)
  useLayoutEffect(() => {
    if (!rightNaturalRef.current) return;
    const el = rightNaturalRef.current;
    const measure = () => setRightNaturalHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [active]);

  // heights (only applied when two-column)
  const capByViewport = vhCap ? Math.min(HARD_CAP_PX, vhCap) : HARD_CAP_PX;
  const leftListHeight = Math.min(
    rightNaturalHeight || capByViewport,
    capByViewport
  );
  const leftTotalHeight =
    leftHeaderHeight + GAP_BELOW_LEFT_HEADER_PX + leftListHeight;

  // === MOBILE SINGLE-COLUMN RENDERING (WhatsApp-style) ===
  if (!isTwoCol) {
    return (
      <section className="relative py-8">
        <AnimatePresence mode="wait">
          {/* LIST VIEW */}
          {!showDetailMobile && (
            <motion.div
              key="job-list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="min-w-0"
            >
              <div ref={leftHeaderRef} className="shrink-0">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    aria-label="Search jobs"
                    placeholder="Search roles, skills, company, or city…"
                    className="w-full rounded-xl border border-slate-200 bg-white px-9 py-2.5 text-sm text-slate-800 shadow-sm outline-none ring-0 placeholder:text-slate-400"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                  />
                </div>
                <p className="mt-3 text-xs text-slate-600">
                  {filtered.length} job{filtered.length !== 1 ? "s" : ""} found
                </p>
              </div>

              <ul className="mt-4 min-h-0 space-y-3 overscroll-contain pr-1 pb-2">
                <AnimatePresence initial={false}>
                  {filtered.map((j) => {
                    const selected = j.id === active?.id;
                    return (
                      <motion.li
                        key={j.id}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                      >
                        <button
                          onClick={() => {
                            setActiveId(j.id);
                            setShowDetailMobile(true);
                          }}
                          aria-pressed={selected}
                          className={[
                            "w-full text-left rounded-2xl border p-4 transition",
                            "hover:shadow-sm focus:outline-none focus:ring-2",
                            selected
                              ? "border-orange-200 bg-orange-50/60 focus:ring-orange-200"
                              : "border-slate-200 bg-white focus:ring-slate-200",
                          ].join(" ")}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <h3 className="truncate text-sm font-semibold text-slate-900">
                                {j.title}
                              </h3>
                              <p className="mt-0.5 line-clamp-1 text-xs text-slate-600">
                                <span className="font-medium text-slate-800">
                                  {j.company}
                                </span>{" "}
                                · {j.location} · {j.mode ?? "—"}
                              </p>
                            </div>
                            <span
                              className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                              style={{
                                background:
                                  "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))",
                                boxShadow:
                                  "inset 0 0 0 1px rgba(15,23,42,0.06)",
                                color: "#7a4a00",
                              }}
                            >
                              {j.type}
                            </span>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {(j.highlights ?? []).slice(0, 4).map((h) => (
                              <span
                                key={h}
                                className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] text-slate-700 shadow-sm"
                              >
                                {h}
                              </span>
                            ))}
                          </div>

                          <dl className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-600">
                            <div className="flex items-center gap-1 truncate">
                              <Briefcase className="h-3.5 w-3.5 text-slate-400" />
                              <span className="truncate">{j.exp}</span>
                            </div>
                            <div className="flex items-center gap-1 truncate">
                              <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                              <span className="truncate">
                                {new Date(j.postedOn).toLocaleDateString(
                                  "en-IN",
                                  {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 truncate">
                              <Clock className="h-3.5 w-3.5 text-slate-400" />
                              <span className="truncate">
                                {j.salary ? j.salary : "CTC: —"}
                              </span>
                            </div>
                          </dl>
                        </button>
                      </motion.li>
                    );
                  })}
                </AnimatePresence>

                {filtered.length === 0 && (
                  <li className="grid place-items-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                    <Image
                      src="/images/empty-jobs.svg"
                      alt="No jobs"
                      width={120}
                      height={120}
                      className="opacity-80"
                    />
                    <p className="mt-4 text-sm text-slate-600">
                      No matches. Try a different search.
                    </p>
                  </li>
                )}
              </ul>
            </motion.div>
          )}

          {/* DETAIL VIEW */}
          {showDetailMobile && active && (
            <motion.div
              key="job-detail"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.22 }}
              className="min-w-0"
            >
              {/* Sticky back bar */}
              <div className="sticky top-0 z-10 -mx-4 mb-4 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                <button
                  onClick={() => setShowDetailMobile(false)}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm active:scale-[0.99]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                <div className="min-w-0 truncate text-sm text-slate-600">
                  {active.company} · {active.location}
                </div>
              </div>

              <DetailArticle
                active={active}
                isTwoCol={false}
                rightNaturalRef={rightNaturalRef}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* cross-browser nice thin scrollbars (mobile page uses system scrollbars) */}
        <style jsx>{`
          .custom-scroll {
            /* Firefox */
            scrollbar-width: thin;
            scrollbar-color: rgba(15, 23, 42, 0.35) rgba(15, 23, 42, 0.06);

            /* Prevent layout jump when scrollbar shows (Chrome/Edge/Firefox) */
            scrollbar-gutter: stable both-edges;

            /* Small inset to keep content off the thumb on Windows */
            padding-right: 8px;
          }

          /* WebKit/Blink (Chrome/Edge/Safari) */
          .custom-scroll::-webkit-scrollbar {
            width: 12px;
            height: 12px;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: rgba(15, 23, 42, 0.35);
            border-radius: 999px;
            border: 3px solid transparent; /* inner padding ring */
            background-clip: padding-box;
            min-height: 36px;
          }
          .custom-scroll::-webkit-scrollbar-thumb:hover {
            background: rgba(15, 23, 42, 0.45);
            background-clip: padding-box;
          }
          .custom-scroll::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.06);
            border-radius: 999px;
          }
          .custom-scroll::-webkit-scrollbar-corner {
            background: transparent;
          }

          /* High-contrast/forced colors accessibility */
          @media (forced-colors: active) {
            .custom-scroll {
              scrollbar-color: ButtonText Canvas;
            }
          }
        `}</style>
      </section>
    );
  }

  // === DESKTOP/TABLET SPLIT VIEW (unchanged) ===
  return (
    <section className="relative py-8">
      <div className="isolate grid grid-cols-1 gap-6 lg:grid-cols-[minmax(300px,520px)_minmax(640px,1fr)]">
        {/* LEFT */}
        <div className="flex min-h-0 min-w-0 flex-col">
          <div ref={leftHeaderRef} className="shrink-0">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                aria-label="Search jobs"
                placeholder="Search roles, skills, company, or city…"
                className="w-full rounded-xl border border-slate-200 bg-white px-9 py-2.5 text-sm text-slate-800 shadow-sm outline-none ring-0 placeholder:text-slate-400"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
            <p className="mt-3 text-xs text-slate-600">
              {filtered.length} job{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <ul
            className={[
              "mt-4 min-h-0 space-y-3 overscroll-contain pr-1 pb-2 custom-scroll",
              "overflow-y-auto",
            ].join(" ")}
            style={{ height: leftListHeight || HARD_CAP_PX }}
          >
            <AnimatePresence initial={false}>
              {filtered.map((j) => {
                const selected = j.id === active?.id;
                return (
                  <motion.li
                    key={j.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                  >
                    <button
                      onClick={() => setActiveId(j.id)}
                      aria-pressed={selected}
                      className={[
                        "w-full text-left rounded-2xl border p-4 transition",
                        "hover:shadow-sm focus:outline-none focus:ring-2",
                        selected
                          ? "border-orange-200 bg-orange-50/60 focus:ring-orange-200"
                          : "border-slate-200 bg-white focus:ring-slate-200",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-semibold text-slate-900">
                            {j.title}
                          </h3>
                          <p className="mt-0.5 line-clamp-1 text-xs text-slate-600">
                            <span className="font-medium text-slate-800">
                              {j.company}
                            </span>{" "}
                            · {j.location} · {j.mode ?? "—"}
                          </p>
                        </div>
                        <span
                          className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))",
                            boxShadow:
                              "inset 0 0 0 1px rgba(15,23,42,0.06)",
                            color: "#7a4a00",
                          }}
                        >
                          {j.type}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {(j.highlights ?? []).slice(0, 4).map((h) => (
                          <span
                            key={h}
                            className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] text-slate-700 shadow-sm"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      <dl className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-600">
                        <div className="flex items-center gap-1 truncate">
                          <Briefcase className="h-3.5 w-3.5 text-slate-400" />
                          <span className="truncate">{j.exp}</span>
                        </div>
                        <div className="flex items-center gap-1 truncate">
                          <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                          <span className="truncate">
                            {new Date(j.postedOn).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 truncate">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          <span className="truncate">
                            {j.salary ? j.salary : "CTC: —"}
                          </span>
                        </div>
                      </dl>
                    </button>
                  </motion.li>
                );
              })}
            </AnimatePresence>

            {filtered.length === 0 && (
              <li className="grid place-items-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                <Image
                  src="/images/empty-jobs.svg"
                  alt="No jobs"
                  width={120}
                  height={120}
                  className="opacity-80"
                />
                <p className="mt-4 text-sm text-slate-600">
                  No matches. Try a different search.
                </p>
              </li>
            )}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="min-h-0 min-w-0">
          <AnimatePresence mode="wait">
            {active && (
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                style={{
                  height:
                    leftTotalHeight ||
                    leftListHeight + GAP_BELOW_LEFT_HEADER_PX,
                }}
              >
                <DetailArticle
                  active={active}
                  isTwoCol={true}
                  rightNaturalRef={rightNaturalRef}
                />
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* cross-browser nice thin scrollbars */}
      <style jsx>{`
        .custom-scroll {
          /* Firefox */
          scrollbar-width: thin;
          scrollbar-color: rgba(15, 23, 42, 0.35) rgba(15, 23, 42, 0.06);

          /* Prevent layout shift when scrollbar shows */
          scrollbar-gutter: stable both-edges;

          /* Keep content off the thumb on Windows */
          padding-right: 8px;
        }
        /* WebKit/Blink */
        .custom-scroll::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(15, 23, 42, 0.35);
          border-radius: 999px;
          border: 3px solid transparent;
          background-clip: padding-box;
          min-height: 36px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(15, 23, 42, 0.45);
          background-clip: padding-box;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.06);
          border-radius: 999px;
        }
        .custom-scroll::-webkit-scrollbar-corner {
          background: transparent;
        }
        @media (forced-colors: active) {
          .custom-scroll {
            scrollbar-color: ButtonText Canvas;
          }
        }
      `}</style>
    </section>
  );
}

/* === Extracted detail article so we can use it in both mobile & desktop paths === */
function DetailArticle({
  active,
  isTwoCol,
  rightNaturalRef,
}: {
  active: Job;
  isTwoCol: boolean;
  rightNaturalRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      className={[
        "flex min-h-0 flex-col custom-scroll",
        isTwoCol ? "overflow-y-auto h-full" : "overflow-visible",
      ].join(" ")}
    >
      <div ref={rightNaturalRef}>
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-lg font-bold leading-tight text-slate-900">
              {active.title}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              <span className="font-medium text-slate-800">
                {active.company}
              </span>{" "}
              · {active.location} · {active.mode ?? "—"}
            </p>
          </div>
        </div>

        {/* Quick facts */}
        <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-700 sm:grid-cols-3">
          <Fact icon={<Briefcase className="h-4 w-4" />} label="Type" value={active.type} />
          <Fact icon={<Building2 className="h-4 w-4" />} label="Experience" value={active.exp} />
          <Fact
            icon={<CalendarDays className="h-4 w-4" />}
            label="Posted"
            value={new Date(active.postedOn).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          />
          {active.salary && (
            <Fact icon={<Clock className="h-4 w-4" />} label="CTC" value={active.salary} />
          )}
          {active.companySite && (
            <Fact
              icon={<ExternalLink className="h-4 w-4" />}
              label="Company"
              value={
                <a
                  className="break-words underline decoration-slate-300 underline-offset-2 hover:text-slate-900"
                  href={active.companySite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site
                </a>
              }
            />
          )}
          <Fact icon={<MapPin className="h-4 w-4" />} label="Mode" value={active.mode ?? "—"} />
        </div>

        {/* Walk-in details */}
        {active.type === "Walk-in" && (
          <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50/70 p-3 text-xs text-slate-800">
            <p>
              <span className="font-semibold">Event:</span>{" "}
              {active.eventDate} {active.timeWindow ? `· ${active.timeWindow}` : ""}
            </p>
            {active.venue && (
              <p>
                <span className="font-semibold">Venue:</span> {active.venue}
              </p>
            )}
            {active.contacts && active.contacts.length > 0 && (
              <p>
                <span className="font-semibold">Contact:</span>{" "}
                {active.contacts.join(" / ")}
              </p>
            )}
          </div>
        )}

        {/* Actions — full width ≤ md; row from md+ */}
        <div className="mt-5 flex flex-col md:flex-row flex-wrap items-stretch md:items-center gap-3">
          {active.applyLink ? (
            <a
              href={active.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center rounded-xl border border-transparent bg-[color:#ff8c00] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Apply now <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          ) : active.applyEmail ? (
            <a
              href={`mailto:${active.applyEmail}?subject=Application: ${encodeURIComponent(
                active.title
              )}`}
              className="w-full md:w-auto inline-flex items-center justify-center rounded-xl border border-transparent bg-[color:#ff8c00] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Email resume <Mail className="ml-1.5 h-4 w-4" />
            </a>
          ) : null}

          {active.companySite && (
            <a
              href={active.companySite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300"
            >
              Company site
            </a>
          )}
        </div>

        {/* Key skills */}
        {!!active.highlights?.length && (
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-slate-900">Key skills</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {active.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 shadow-sm"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Responsibilities */}
        {!!active.responsibilities?.length && (
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-slate-900">What you’ll do</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {active.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Requirements / Nice to have */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <h3 className="text-sm font-semibold text-slate-900">Requirements</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Solid understanding of SDLC & testing fundamentals</li>
              <li>
                Hands-on with tools listed in <span className="font-medium">Key skills</span>
              </li>
              <li>Ability to write clear test cases & defect reports</li>
              <li>Good communication & collaboration skills</li>
              <li>
                {active.type === "Internship"
                  ? "Availability for a 3–6 month internship"
                  : "Availability to join within 30–45 days"}
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <h3 className="text-sm font-semibold text-slate-900">
              Nice to have & Benefits
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "Git/GitHub",
                "Basic DSA",
                "CI/CD exposure",
                "Agile/Scrum",
                "Mentor guidance",
                "Interview prep",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom tips */}
        <div
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,140,0,0.06), rgba(255,255,255,0.4))",
          }}
        >
          <div className="flex items-start gap-3">
            <span
              className="grid h-9 w-9 place-items-center rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,140,0,0.14), rgba(255,140,0,0.07))",
                boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.06)",
                color: BRAND,
              }}
            >
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900">
                Stand-out tips before you apply
              </p>
              <ul className="mt-2 grid gap-2 text-xs text-slate-700 sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:#ff8c00]" />
                  Match your resume keywords to “Key skills”
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:#ff8c00]" />
                  Link a small GitHub demo or test suite
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:#ff8c00]" />
                  Prepare 2–3 STAR stories for past projects
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:#ff8c00]" />
                  Refresh basics: APIs, SQL, and debugging
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ——— Fact chip ——— */
function Fact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
      <span
        className="grid h-7 w-7 place-items-center rounded-md"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,140,0,0.10), rgba(255,140,0,0.05))",
          boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.06)",
          color: BRAND,
        }}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[11px] font-medium text-slate-500">{label}</div>
        <div className="truncate text-xs font-semibold text-slate-900">
          {value}
        </div>
      </div>
    </div>
  );
}

/* ——— demo dataset (unchanged) ——— */
export const DEMO_JOBS: Job[] = [
  ...Array.from({ length: 28 }).map((_, i) => ({
    id: `job-${i + 1}`,
    title: `QA / SDET Role ${i + 1}`,
    company: ["TechNest", "BlueOrbit", "InsightPeak", "SkyForge"][i % 4],
    companySite: "https://example.com",
    type: (["Full-time", "Internship", "Contract", "Walk-in"] as const)[i % 4],
    mode: (["Onsite", "Hybrid", "Remote"] as const)[i % 3],
    location: ["Bengaluru", "Pune", "Mumbai", "Remote (India)"][i % 4],
    postedOn: `2025-10-${((i % 28) + 1).toString().padStart(2, "0")}`,
    exp: i % 2 ? "Fresher" : "0–1 yrs",
    salary: i % 2 ? "₹20–30k/mo" : "₹4–6 LPA",
    highlights: ["API Testing", "Postman", "Basic SQL", "Agile"].slice(
      0,
      3 + (i % 2)
    ),
    responsibilities: [
      "Write functional test cases and sanity checks",
      "Execute API tests using Postman",
      "Log, track, and verify defects",
      ...(i % 3 === 0
        ? [
            "Collaborate with cross-functional teams",
            "Contribute to CI/CD quality gates",
            "Create test data & maintain environments",
            "Own regression suites and flakiness triage",
          ]
        : []),
    ],
    applyLink: "https://jobs.example/apply",
  })),
];
