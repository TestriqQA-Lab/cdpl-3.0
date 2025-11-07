"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * CDPL — FAQ (Clean, minimal)
 * Expanded with practical + genuine questions candidates actually ask.
 */

const FAQS = [
  {
    q: "Are placements guaranteed?",
    a: "No. We don’t guarantee jobs. We guarantee rigorous training, interview prep, and access to our hiring network.",
  },
  {
    q: "Do you provide referrals?",
    a: "Yes. Based on performance in projects, attendance, and interview readiness, mentors put you forward to partner companies.",
  },
  {
    q: "Is prior experience required?",
    a: "No. We have beginner-friendly tracks and advanced modules for upskilling professionals.",
  },
  {
    q: "What is the ‘Live Jobs’ track?",
    a: "Mentor-led sprints that simulate real teams: requirements, sprints, code reviews, bug tracking, CI/CD, and stakeholder demos.",
  },
  {
    q: "How long does it take to become job-ready?",
    a: "Typical learners take 8–16 weeks depending on pace, track, and practice time. Fast-track options exist.",
  },
  {
    q: "What tools/tech do you cover?",
    a: "Depends on the track. Examples: Jira, Postman, Selenium/Playwright, Python/SQL, Git/GitHub, Docker basics, and dashboard tools for analytics.",
  },
  {
    q: "Do you help with resume, LinkedIn, and portfolio?",
    a: "Yes. You’ll get templates, 1:1 reviews, ATS checks, and a portfolio checklist with project narration guidance.",
  },
  {
    q: "How many mock interviews do I get?",
    a: "At least 2 structured mocks (HR + technical). Extra mocks are offered based on mentor recommendation.",
  },
  {
    q: "What’s the class schedule?",
    a: "Cohorts run on weekday evenings and weekend slots (IST). Live sessions are recorded; doubt clearing happens daily on Slack.",
  },
  {
    q: "Can I learn fully online?",
    a: "Yes. The program is designed for remote learners with live sessions, recordings, and async mentor feedback.",
  },
  {
    q: "What are the laptop requirements?",
    a: "8 GB RAM minimum (16 GB recommended), i5/Ryzen 5 or better, stable internet. For heavier automation/analytics, 16 GB is ideal.",
  },
  {
    q: "What is the mentor:learner ratio?",
    a: "Small groups with 1 lead mentor and 1–2 associate mentors. Doubts are handled via live sessions + async channels.",
  },
  {
    q: "Do you offer EMI or installment plans?",
    a: "Yes. We support installments/EMI via common payment providers. Speak to the team for available options.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a brief cooling-off window before cohorts start. After project access begins, refunds aren’t offered.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes. You’ll receive a verified completion certificate along with project artifacts and mentor feedback.",
  },
  {
    q: "Do you assist with walk-ins and off-campus drives?",
    a: "Yes. We share openings, help you shortlist roles, tailor resumes, and prep for HR + technical rounds.",
  },
  {
    q: "Do companies require background checks?",
    a: "Most do. Keep your documents (ID, education, experience, PAN/Aadhaar) ready; we’ll guide you on what’s typically needed.",
  },
  {
    q: "What support do I get after placement?",
    a: "Alumni Slack, interview debriefs, and optional upskilling modules. We continue to share better-fit roles for growth.",
  },
];

type Props = {
  contained?: boolean;
};

export default function PlacementsFAQSection({ contained = false }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    contained ? (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    ) : (
      <>{children}</>
    );

  return (
    <section className="w-full py-6 sm:py-8" aria-label="CDPL FAQs">
      <Wrapper>
        {/* Non-hero section title scale */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">FAQs</h3>

        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="divide-y divide-gray-200">
            {FAQS.map((f, idx) => {
              const isOpen = open === idx;
              const panelId = `faq-panel-${idx}`;
              const buttonId = `faq-trigger-${idx}`;
              return (
                <div key={f.q} className="group">
                  <button
                    id={buttonId}
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <div className="flex items-center justify-between">
                      {/* Question text — non-hero label scale */}
                      <span className="text-base sm:text-lg font-semibold text-slate-900">
                        {f.q}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  {/* Collapsible answer */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid overflow-hidden px-5 pt-0 transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-4"
                        : "grid-rows-[0fr] opacity-0 pb-0"
                    }`}
                  >
                    <div className="min-h-0">
                      {/* Non-hero body scale */}
                      <p className="text-sm sm:text-base text-slate-700">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
