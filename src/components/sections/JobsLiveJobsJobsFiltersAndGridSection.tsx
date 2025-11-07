"use client";

import type { Job } from "@/lib/jobsData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Filters = {
  q: string;
  type: string; // All | Full-time | Internship | Contract | Walk-in
  mode: string; // All | Onsite | Hybrid | Remote
  location: string; // All or city
};

export default function JobsLiveJobsJobsFiltersAndGridSection({ jobs }: { jobs: Job[] }) {
  const [filters, setFilters] = useState<Filters>({
    q: "",
    type: "All",
    mode: "All",
    location: "All",
  });
  const [visible, setVisible] = useState(6);

  const locations = useMemo(() => {
    const set = new Set(jobs.map((j) => j.location));
    return ["All", ...Array.from(set)];
  }, [jobs]);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const q = filters.q.trim().toLowerCase();
      const matchesQ =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.highlights?.some((h) => h.toLowerCase().includes(q));
      const matchesType = filters.type === "All" || j.type === filters.type;
      const matchesMode = filters.mode === "All" || j.mode === filters.mode;
      const matchesLoc =
        filters.location === "All" || j.location === filters.location;
      return matchesQ && matchesType && matchesMode && matchesLoc;
    });
  }, [jobs, filters]);

  useEffect(() => setVisible(6), [filters]); // reset pagination when filters change

  return (
    <div className="py-8">
      {/* Filters row */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            aria-label="Search roles, skills, companies"
            placeholder="Search roles, skills, companies…"
            className="w-full rounded-xl border border-slate-200 bg-white px-9 py-2.5 text-sm text-slate-800 shadow-sm outline-none ring-0 placeholder:text-slate-400"
            value={filters.q}
            onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
          />
        </div>

        <Select
          icon={<Briefcase className="h-4 w-4 text-slate-400" />}
          label="Employment type"
          value={filters.type}
          onChange={(v) => setFilters((f) => ({ ...f, type: v }))}
          options={["All", "Full-time", "Internship", "Contract", "Walk-in"]}
        />

        <Select
          icon={<SlidersHorizontal className="h-4 w-4 text-slate-400" />}
          label="Work mode"
          value={filters.mode}
          onChange={(v) => setFilters((f) => ({ ...f, mode: v }))}
          options={["All", "Onsite", "Hybrid", "Remote"]}
        />

        <Select
          icon={<MapPin className="h-4 w-4 text-slate-400" />}
          label="Location"
          value={filters.location}
          onChange={(v) => setFilters((f) => ({ ...f, location: v }))}
          options={locations}
        />
      </div>

      {/* Count */}
      <div className="mt-4 text-sm text-slate-600">
        Showing{" "}
        <span className="font-semibold text-slate-900">
          {Math.min(visible, filtered.length)}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-slate-900">{filtered.length}</span>{" "}
        jobs
      </div>

      {/* Grid */}
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {filtered.slice(0, visible).map((job) => (
            <motion.li
              key={job.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <JobCard job={job} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* Load more */}
      {visible < filtered.length && (
        <div className="mt-6 grid place-items-center">
          <button
            onClick={() => setVisible((v) => v + 6)}
            className="inline-flex items-center gap-2 rounded-xl border border-transparent bg-[color:#ff8c00] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Load more <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-10 grid place-items-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <Image
            src="/images/empty-jobs.svg"
            alt="No jobs"
            width={120}
            height={120}
            className="opacity-80"
          />
          <p className="mt-4 text-sm text-slate-600">
            No matches. Try different filters or keywords.
          </p>
        </div>
      )}
    </div>
  );
}

function Select({
  icon,
  label,
  value,
  onChange,
  options,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="relative block">
      <span className="mb-1 block text-xs font-medium text-slate-500">
        {label}
      </span>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
          {icon}
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-9 py-2.5 text-sm text-slate-800 shadow-sm outline-none ring-0"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        >
          ▾
        </span>
      </div>
    </label>
  );
}
function JobCard({ job }: { job: Job }) {
  return (
    <article className="grid gap-3">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold leading-tight text-slate-900">
            {job.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            <span className="font-medium text-slate-800">{job.company}</span> ·{" "}
            {job.location} · {job.mode ?? "—"}
          </p>
        </div>
        <span
          className="shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))",
            boxShadow: "inset 0 0 0 1px rgba(15,23,42,.06)",
            color: "#7a4a00",
          }}
        >
          {job.type}
        </span>
      </header>

      <ul className="flex flex-wrap gap-2">
        {(job.highlights ?? []).slice(0, 5).map((h) => (
          <li
            key={h}
            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 shadow-sm"
          >
            {h}
          </li>
        ))}
      </ul>

      <dl className="grid grid-cols-2 gap-2 text-xs text-slate-600 sm:grid-cols-3">
        <div>
          <dt className="text-slate-500">Experience</dt>
          <dd className="font-medium text-slate-800">{job.exp}</dd>
        </div>
        {job.salary && (
          <div>
            <dt className="text-slate-500">CTC</dt>
            <dd className="font-medium text-slate-800">{job.salary}</dd>
          </div>
        )}
        <div>
          <dt className="text-slate-500">Posted</dt>
          <dd className="font-medium text-slate-800">
            {new Date(job.postedOn).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </dd>
        </div>
      </dl>

      {/* Walk-in details */}
      {job.type === "Walk-in" && (
        <div className="rounded-xl border border-slate-200 bg-orange-50/50 p-3 text-xs text-slate-700">
          <p>
            <span className="font-semibold">Event:</span> {job.eventDate} ·{" "}
            {job.timeWindow}
          </p>
          <p>
            <span className="font-semibold">Venue:</span> {job.venue}
          </p>
          {job.contacts && (
            <p>
              <span className="font-semibold">Contact:</span>{" "}
              {job.contacts.join(" / ")}
            </p>
          )}
        </div>
      )}

      <footer className="mt-1 flex items-center gap-3">
        {job.applyLink ? (
          <a
            href={job.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-transparent bg-[color:#ff8c00] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Apply now
          </a>
        ) : job.applyEmail ? (
          <a
            href={`mailto:${
              job.applyEmail
            }?subject=Application: ${encodeURIComponent(job.title)}`}
            className="inline-flex items-center justify-center rounded-xl border border-transparent bg-[color:#ff8c00] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Email resume
          </a>
        ) : null}

        {job.companySite && (
          <a
            href={job.companySite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300"
          >
            Company site
          </a>
        )}
      </footer>
    </article>
  );
}
