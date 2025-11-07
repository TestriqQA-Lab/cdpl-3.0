// components/Sections/JobsLiveJobsJobsFAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Link } from "lucide-react";
import Script from "next/script";

const BRAND = "#ff8c00"; // CDPL accent — locked for light look in both modes

type FAQ = { q: string; a: string };

export default function JobsLiveJobsJobsFAQSection() {
  const faqs: FAQ[] = [
    {
      q: "Are these jobs from Cinute Digital?",
      a: "No. These openings come from CDPL’s partner companies and hiring network. Cinute Digital (CDPL) curates, verifies, and tags each role so learners see only relevant, authentic opportunities.",
    },
    {
      q: "How often is the job board updated?",
      a: "We refresh listings weekly based on partner inputs and hiring cycles. Time-sensitive roles (walk-ins, campus drives) are prioritized and may be posted sooner.",
    },
    {
      q: "Will CDPL mentors help with my application?",
      a: "Yes. Mentors guide you through resume tailoring, portfolio/GitHub review, and mock interviews. For select roles, mentors share domain-specific prep checklists and refer strong profiles.",
    },
    {
      q: "Can non-CDPL learners apply?",
      a: "Most roles are public; some give preference to CDPL cohorts. Each listing clearly mentions eligibility, required experience, interview process, and application method (email or ATS link).",
    },
    {
      q: "What profiles are most common on Live Jobs?",
      a: "SDET/QA Automation, Manual Testing, API Testing, Data Analyst, Junior Data Scientist, and Full-Stack Intern/Junior roles. Filters help you narrow by domain, location, and mode.",
    },
    {
      q: "Does CDPL guarantee placements?",
      a: "No institute can guarantee offers. CDPL provides mentor-led training, real project work, and referrals through partners to improve outcomes. Your skills, readiness, and consistency matter most.",
    },
    {
      q: "How do I get short-listed faster?",
      a: "Keep a clean resume, showcase 2–3 production-style projects (readme, test reports, or demo links), follow the role’s skill keywords, and apply within 24–48 hours of posting.",
    },
    {
      q: "Where can I ask questions about a role?",
      a: "Open the job’s detail pane and use the provided contact or application link. CDPL learners can also ping mentors in cohort channels for quick feedback before applying.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section aria-labelledby="live-jobs-faqs" className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Light theme flourish — subtle, locked to light look */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -z-10 opacity-80"
          style={{
            inset: 0,
            maskImage:
              "radial-gradient(1200px 240px at 50% -120px, black 35%, transparent 60%)",
            WebkitMaskImage:
              "radial-gradient(1200px 240px at 50% -120px, black 35%, transparent 60%)",
            background:
              "radial-gradient(800px 180px at 50% -60px, rgba(255,140,0,0.08), transparent 60%)",
          }}
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <HelpCircle className="h-3.5 w-3.5" />
              CDPL · Live Jobs Help
            </p>
            <h2
              id="live-jobs-faqs"
              className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 bg-clip-text text-transparent"
            >
              Live Jobs — FAQs
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
              Everything you need to know about CDPL’s curated job listings, mentor
              support, eligibility, and application best practices.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
          <ul className="divide-y divide-slate-200">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">
                      {item.q}
                    </span>

                    <span
                      className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white shadow-sm transition"
                      style={{ boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.04)" }}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`}
                        style={{ color: BRAND }}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${idx}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden px-4"
                      >
                        <div className="pb-4">
                          <p className="text-sm leading-6 text-slate-700 sm:text-base">
                            {item.a}
                          </p>
                          {/* subtle highlight bar */}
                          <div
                            className="mt-3 h-px w-24 rounded-full"
                            style={{
                              background:
                                "linear-gradient(90deg, rgba(255,140,0,0.35), rgba(255,140,0,0))",
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Helper band — stack + full-width <= lg; row on lg+ */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            <p className="text-sm text-slate-700 sm:text-base">
              Still have questions?{" "}
              <span className="font-semibold text-slate-900">
                Talk to a CDPL mentor about roles and readiness.
              </span>
            </p>
            <Link
              href="/contact-us"
              className="inline-flex w-full lg:w-auto items-center justify-center rounded-xl bg-[color:#ff8c00] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 min-h-[44px]"
            >
              Get guidance
            </Link>
          </div>
        </div>
      </div>

      {/* FAQPage JSON-LD for SEO */}
      <Script
        id="cdpl-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
