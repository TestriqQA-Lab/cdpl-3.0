// components/sections/TestimonialsSection.tsx
"use client";

import { useMemo } from "react";
import { Star, Quote, ShieldCheck, Sparkles } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  rating: number; // 1–5
  bg: string; // card background
  border: string; // card border
  nameColor: string; // name accent
};

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Mastered prompt engineering in 20 hours—frameworks like ReAct and CRISPE improved my output quality instantly.",
      name: "Rohan Mehta",
      role: "AI Specialist",
      company: "MediaTech",
      rating: 5,
      bg: "bg-amber-50",
      border: "border-amber-200",
      nameColor: "text-amber-700",
    },
    {
      quote:
        "Portfolio-ready GenAI projects boosted my visibility. I now automate content workflows with measurable quality.",
      name: "Sneha Patel",
      role: "Content Creator",
      company: "Creator Studio",
      rating: 5,
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      nameColor: "text-emerald-700",
    },
    {
      quote:
        "Landed a Prompt Engineer role. Evaluation harness + guardrails made my interviews a breeze.",
      name: "Arjun Singh",
      role: "Prompt Engineer",
      company: "EdTech",
      rating: 5,
      bg: "bg-sky-50",
      border: "border-sky-200",
      nameColor: "text-sky-700",
    },
    {
      quote:
        "Multi-model fluency across ChatGPT and open-source LLMs. Learned to adapt prompts and control cost/latency.",
      name: "Nandini Rao",
      role: "Automation Engineer",
      company: "SaaS",
      rating: 5,
      bg: "bg-rose-50",
      border: "border-rose-200",
      nameColor: "text-rose-700",
    },
    {
      quote:
        "Great mix of safety, bias mitigation, and practical templates. My support bot now performs with higher CSAT.",
      name: "Aditya Kulkarni",
      role: "Product Analyst",
      company: "FinTech",
      rating: 5,
      bg: "bg-violet-50",
      border: "border-violet-200",
      nameColor: "text-violet-700",
    },
    {
      quote:
        "The evaluation rubric and A/B testing mindset were game-changers. Clear, repeatable improvement process.",
      name: "Priya Sharma",
      role: "Technical Writer",
      company: "HealthTech",
      rating: 5,
      bg: "bg-lime-50",
      border: "border-lime-200",
      nameColor: "text-lime-700",
    },
  ];

  // SEO: AggregateRating + Review JSON-LD
  const jsonLd = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Prompt Engineering with Generative AI",
        brand: { "@type": "Organization", name: "Cinute Digital Pvt. Ltd." },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: testimonials.length.toString(),
          bestRating: "5",
          worstRating: "1",
        },
        review: testimonials.slice(0, 3).map((t) => ({
          "@type": "Review",
          reviewBody: t.quote,
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating.toString(),
            bestRating: "5",
            worstRating: "1",
          },
          author: { "@type": "Person", name: t.name },
        })),
        keywords:
          "prompt engineering reviews, generative AI course testimonials, LLM prompting ratings, ChatGPT prompt training feedback",
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <section
      className="relative py-14 md:py-20 bg-white"
      aria-labelledby="testimonials-heading"
    >
      {/* Sleek top accent (thin gradient line only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            What Our <span className="text-DS">Students Say</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Real feedback from graduates of our{" "}
            <strong>Prompt Engineering with Gen&nbsp;AI</strong> program—covering{" "}
            <strong>prompt frameworks</strong>, <strong>evaluation</strong>,{" "}
            <strong>guardrails</strong>, and <strong>automation</strong>. Portfolio-first and
            job-focused outcomes.
          </p>

          {/* Trust strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              4.9/5 Average Rating
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              Verified Alumni
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Quote className="w-4 h-4 text-rose-600" />
              Industry-Relevant Projects
            </span>
          </div>
        </header>

        {/* Cards — mobile: horizontal snap; sm+: grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [--card-min:280px]">
          {/* Mobile scroller for xs screens */}
          <div className="lg:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex gap-4 sm:hidden">
            {testimonials.map((t, i) => (
              <figure
                key={`m-${i}`}
                className={`min-w-[var(--card-min)] snap-start rounded-2xl ${t.bg} border ${t.border} p-6 shadow-sm`}
              >
                <CardInner t={t} />
              </figure>
            ))}
          </div>

          {/* Grid for sm and up */}
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`hidden sm:block rounded-2xl ${t.bg} border ${t.border} p-6 shadow-sm hover:shadow-md transition-shadow`}
            >
              <CardInner t={t} />
            </figure>
          ))}
        </div>

        {/* Screen-reader SEO hint */}
        <p className="sr-only">
          Read independent reviews of our Prompt Engineering course. Alumni highlight frameworks,
          evaluation methods, guardrails, automation, and job placements.
        </p>
      </div>

      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </section>
  );
}

/* ---------- Subcomponent ---------- */

function CardInner({ t }: { t: Testimonial }) {
  return (
    <>
      <div className="flex items-start justify-between">
        <Quote className="w-5 h-5 text-gray-500" aria-hidden="true" />
        <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, s) => (
            <Star
              key={s}
              className={`w-4 h-4 ${
                s < t.rating ? "text-yellow-500 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <blockquote className="mt-3 text-gray-800 leading-relaxed">“{t.quote}”</blockquote>
      <figcaption className="mt-4">
        <div className={`font-semibold ${t.nameColor}`}>{t.name}</div>
        <div className="text-sm text-gray-600">
          {t.role}
          {t.company ? ` • ${t.company}` : ""}
        </div>
      </figcaption>
    </>
  );
}
