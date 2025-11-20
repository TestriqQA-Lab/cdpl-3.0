// components/sections/FaqSection.tsx
// Sleek, responsive, SEO-friendly FAQ with subtle futuristic accents.
// Unique colors per item (no repeats), fully self-contained.

"use client";

import React from "react";
import {
  GraduationCap,
  Briefcase,
  CalendarClock,
  Award,
  Wrench,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

type QA = {
  q: string;
  a: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  bg: string;   // unique background
  text: string; // matching text color
  ring: string; // matching ring color
};

const FAQS: QA[] = [
  {
    q: "Do I need coding experience?",
    a: (
      <>
        No-this Java course is beginner-friendly. We start with programming
        fundamentals, Core Java, and hands-on exercises before moving to Spring Boot
        and Microservices. You’ll get guided labs and mentor feedback to accelerate
        learning.
      </>
    ),
    icon: GraduationCap,
    bg: "bg-sky-50",
    text: "text-sky-900",
    ring: "ring-sky-200",
  },
  {
    q: "Will I get placement support?",
    a: (
      <>
        Yes. We provide{" "}
        <strong>100% job assistance</strong>-resume building, mock interviews,
        profile optimization, and referrals where applicable. You’ll graduate with
        portfolio projects that showcase production-style Java, REST APIs, and Cloud.
      </>
    ),
    icon: Briefcase,
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    ring: "ring-emerald-200",
  },
  {
    q: "What is the weekly time commitment?",
    a: (
      <>
        The typical plan is <strong>6–8 hours per week</strong> (live sessions +
        guided self-study). Flexible tracks are available if you need a lighter or
        faster pace.
      </>
    ),
    icon: CalendarClock,
    bg: "bg-amber-50",
    text: "text-amber-900",
    ring: "ring-amber-200",
  },
  {
    q: "Do I get a certificate?",
    a: (
      <>
        Yes. You’ll earn a shareable{" "}
        <strong>Certificate of Completion</strong> with verifiable details. It’s
        designed to help with employer screening and LinkedIn visibility.
      </>
    ),
    icon: Award,
    bg: "bg-rose-50",
    text: "text-rose-900",
    ring: "ring-rose-200",
  },
  {
    q: "Which tools and technologies are covered?",
    a: (
      <>
        You’ll work with <strong>Java, IntelliJ IDEA, Spring Boot, JPA/Hibernate,
        Maven, Git/GitHub, Docker</strong> and <strong>AWS</strong>. We also use
        Postman for API testing and basic CI/CD flows.
      </>
    ),
    icon: Wrench,
    bg: "bg-violet-50",
    text: "text-violet-900",
    ring: "ring-violet-200",
  },
  {
    q: "Is the program industry-relevant and secure by design?",
    a: (
      <>
        Yes. The curriculum emphasizes <strong>clean architecture, security best
        practices,</strong> environment configs, and <strong>observability</strong>{" "}
        so your apps are ready for real-world deployments.
      </>
    ),
    icon: ShieldCheck,
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    ring: "ring-cyan-200",
  },
];

export default function FaqSection() {
  const title = "Frequently Asked Questions";
  const subtitle =
    "Everything you need to know about our Java program—admissions, outcomes, tools, certificates, and weekly schedule.";
  const keywords =
    "Java course FAQ, Spring Boot FAQ, Java certification, placement assistance, Java developer tools, microservices training questions";



  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-8 md:py-14 bg-white"
    >
      {/* Subtle futuristic accent (thin grid line) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full w-full max-w-7xl opacity-50">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#eeeeee_0_12px,transparent_12px_24px)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-FS"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
            {subtitle}
          </p>
          <p className="sr-only">{keywords}</p>
        </header>

        {/* FAQ list */}
        <div className="mx-auto mt-10 space-y-6">
          {FAQS.map((item, i) => (
            <details
              key={item.q}
              className={[
                "group rounded-2xl p-5 shadow-sm transition-all duration-200",
                "border border-white/70 backdrop-blur-sm ring-1",
                "open:shadow-md",
                item.bg,
                item.ring,
              ].join(" ")}
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4"
                aria-label={item.q}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-black/5 shadow-sm">
                    <item.icon className="h-5 w-5 text-gray-900" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">
                    {item.q}
                  </h3>
                </div>
                <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-gray-800 transition-transform group-open:rotate-180" />
              </summary>

              <div className="mt-3 pl-13 text-sm leading-relaxed text-gray-700 md:text-base">
                {item.a}
              </div>

              {/* subtle accent bar (non-gradient) */}
              <div className="mt-4 h-1 w-full rounded-full bg-white/70" aria-hidden="true">
                <div
                  className={["h-1 rounded-full", item.text.replace("text-", "bg-")].join(" ")}
                  style={{ width: ["82%","74%","76%","70%","78%","72%"][i] }}
                />
              </div>
            </details>
          ))}
        </div>

        {/* Contact/help row */}
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 text-center sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-gray-900">Email Support</p>
            <p className="text-xs text-gray-600">Response within 24 hrs</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-gray-900">Live Q&A</p>
            <p className="text-xs text-gray-600">Weekly mentor sessions</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-gray-900">Demo Class</p>
            <p className="text-xs text-gray-600">Try before you enroll</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <Link
            href="contact-us"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Still have questions? Talk to a Mentor
          </Link>
          <button
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            Download Full Syllabus (PDF)
          </button>
        </div>
      </div>


      {/* Accessible helpers */}
      <h1 className="sr-only">{title}</h1>
      <p className="sr-only">{subtitle}</p>
    </section>
  );
}