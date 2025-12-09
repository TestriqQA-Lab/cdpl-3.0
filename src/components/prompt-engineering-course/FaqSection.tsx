// components/sections/FaqSection.tsx
// Server component — clean, modern, responsive FAQ with subtle futuristic accents + SEO (Prompt Engineering edition).
"use client";


import React, { useState } from "react";
import CareerSessionModal from "@/components/CareerSessionModal";

type Faq = {
  q: string;
  a: string;
  accent: {
    bar: string;     // top bar
    border: string;  // card border
    text: string;    // accent text
    ring: string;    // focus ring
    chip: string;    // small chip bg
  };
};

const FAQS: Faq[] = [
  {
    q: "Do I need AI experience?",
    a: "No. We start from the fundamentals of prompt engineering, model behavior, and safety. You’ll practice with patterns, guardrails, and evaluation to build confidence quickly.",
    accent: { bar: "bg-emerald-500", border: "border-emerald-200", text: "text-emerald-700", ring: "focus:ring-emerald-300", chip: "bg-emerald-50" },
  },
  {
    q: "What is the course duration and format?",
    a: "About 20 hours across 2–4 weeks, with ~80% hands-on labs and portfolio-grade mini projects. Live doubt solving and weekly checkpoints included.",
    accent: { bar: "bg-sky-500", border: "border-sky-200", text: "text-sky-700", ring: "focus:ring-sky-300", chip: "bg-sky-50" },
  },
  {
    q: "Will I get a certification?",
    a: "Yes. You’ll receive an AAA global certificate with QR verification. Guidance provided to showcase projects on LinkedIn and GitHub.",
    accent: { bar: "bg-violet-500", border: "border-violet-200", text: "text-violet-700", ring: "focus:ring-violet-300", chip: "bg-violet-50" },
  },
  {
    q: "What tools and use-cases are covered?",
    a: "Prompt patterns for content, code, chat, and workflows; guardrails; structured outputs (JSON); and evaluation basics. Optional RAG add-on for citations and reliability.",
    accent: { bar: "bg-amber-500", border: "border-amber-200", text: "text-amber-700", ring: "focus:ring-amber-300", chip: "bg-amber-50" },
  },
  {
    q: "Do you offer placement support?",
    a: "Yes—resume/ATS keywords, mock interviews, and portfolio reviews. Target roles include Prompt Engineer, AI Automations Specialist, and Applied AI.",
    accent: { bar: "bg-rose-500", border: "border-rose-200", text: "text-rose-700", ring: "focus:ring-rose-300", chip: "bg-rose-50" },
  },
];

export default function FaqSection() {
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const courseName = "Prompt Engineering Course";
  const source = "Prompt Engineering Course Page - FAQ Section";

  const seoKeywords =
    "prompt engineering faq, generative ai course questions, llm prompting certification, job assistance ai india, structured outputs json, guardrails evaluation, rag citations";


  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-8 md:py-14 bg-white">
      {/* Subtle futuristic backdrop: fine grid + soft emerald glow (no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-DS">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Everything about our <strong>Prompt Engineering with Gen&nbsp;AI</strong> program-curriculum,
            tools, projects, timelines, certification, and <strong>career support</strong>.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* FAQ list */}
        <div role="list" aria-label="Program frequently asked questions" className="mx-auto mt-10 grid grid-cols-1 gap-4 sm:gap-5 max-w-4xl">
          {FAQS.map((f) => (
            <details
              key={f.q}
              role="listitem"
              className={[
                "group relative rounded-2xl border bg-white p-4 sm:p-5 shadow-sm transition-all duration-200",
                "open:shadow-md hover:-translate-y-0.5 focus-within:-translate-y-0.5",
                f.accent.border,
              ].join(" ")}
            >
              {/* top accent bar */}
              <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", f.accent.bar].join(" ")} aria-hidden />

              <summary className={["flex cursor-pointer list-none items-start justify-between gap-3", "focus:outline-none focus-visible:ring-2", f.accent.ring].join(" ")}>
                <h3 className="text-base md:text-lg font-bold text-slate-900">
                  <span className={f.accent.text}>Q. </span>
                  {f.q}
                </h3>
                {/* chevron */}
                <span
                  className={[
                    "mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold transition",
                    f.accent.border,
                    f.accent.chip,
                    f.accent.text,
                    "group-open:rotate-180",
                  ].join(" ")}
                  aria-hidden
                >
                  ▾
                </span>
              </summary>

              <div className="mt-3 text-sm md:text-base text-slate-700">{f.a}</div>

              {/* micro underline */}
              <div className="mt-4 h-1 w-full rounded-full bg-slate-100" aria-hidden>
                <div className={["h-1 w-1/2 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out", f.accent.bar, "group-open:scale-x-100 group-hover:scale-x-100"].join(" ")} />
              </div>
            </details>
          ))}
        </div>

        {/* Small reassurance strip */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Still have questions?{" "}
            <button
              onClick={() => setIsSessionOpen(true)}
              className="font-semibold text-sky-700 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-300 rounded bg-transparent border-none cursor-pointer"
            >
              Talk to an advisor
            </button>{" "}
            for a personalized walkthrough of the curriculum and outcomes.
          </p>
        </div>

        <CareerSessionModal
          isOpen={isSessionOpen}
          onClose={() => setIsSessionOpen(false)}
          source={`${source} - Talk to Advisor`}
          courseName={courseName}
        />
      </div>

    </section>
  );
}

