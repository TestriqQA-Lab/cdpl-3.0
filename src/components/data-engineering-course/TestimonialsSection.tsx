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
        "Landed a Big Data Engineer role at an MNC in 8 weeks. Kafka streams + Spark tuning helped me ace the system design round.",
      name: "Vikram Singh",
      role: "Big Data Engineer",
      company: "Global Banking",
      rating: 5,
      bg: "bg-amber-50",
      border: "border-amber-200",
      nameColor: "text-amber-700",
    },
    {
      quote:
        "The Spark and Kafka projects were industry-grade. I deployed a streaming pipeline with checkpoints and exactly-once semantics.",
      name: "Neha Gupta",
      role: "Data Engineer",
      company: "AdTech",
      rating: 5,
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      nameColor: "text-emerald-700",
    },
    {
      quote:
        "Best investment for my cloud data engineering career. Lakehouse with Delta + Airflow orchestration stood out in interviews.",
      name: "Rohit Sharma",
      role: "Cloud Engineer",
      company: "SaaS",
      rating: 5,
      bg: "bg-sky-50",
      border: "border-sky-200",
      nameColor: "text-sky-700",
    },
    {
      quote:
        "Hands-on governance and cost optimization. Learned to right-size clusters and add data quality with dbt tests.",
      name: "Anita Desai",
      role: "Senior Data Engineer",
      company: "E-commerce",
      rating: 5,
      bg: "bg-rose-50",
      border: "border-rose-200",
      nameColor: "text-rose-700",
    },
    {
      quote:
        "From on-prem Hadoop to cloud-native pipelines on AWS. Clear rubrics, PR reviews, and strong portfolio storytelling.",
      name: "Faiz Khan",
      role: "Data Platform Engineer",
      company: "Healthcare",
      rating: 5,
      bg: "bg-violet-50",
      border: "border-violet-200",
      nameColor: "text-violet-700",
    },
    {
      quote:
        "Interview prep mirrored real scenarios—CDC ingestion, schema evolution, and SLA monitoring using metrics & alerts.",
      name: "Ritika Iyer",
      role: "Analytics Engineer",
      company: "FinTech",
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
        name: "Big Data Engineering — Scalable Data Infrastructure Program",
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
          "big data engineering reviews, Kafka Spark Hadoop course testimonials, data engineer training ratings, cloud data pipelines feedback",
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <section
      className="relative py-16 md:py-20 bg-white"
      aria-labelledby="testimonials-heading"
    >
      {/* Sleek top accent (subtle gradient line only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 opacity-80" />

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
            Real reviews from graduates of our{" "}
            <strong>Big Data Engineering</strong> program—covering{" "}
            <strong>Kafka</strong>, <strong>Spark</strong>, <strong>Hadoop</strong>,{" "}
            <strong>Airflow</strong>, <strong>dbt</strong>, and cloud (AWS/GCP/Azure).
            Portfolio-ready projects and job-focused outcomes.
          </p>

          {/* Trust strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Sparkles className="w-4 h-4 text-teal-600" />
              4.9/5 Average Rating
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
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
          Read independent reviews of our Big Data Engineering course. Alumni highlight Kafka and
          Spark projects, cloud deployments, orchestration with Airflow, and job placements.
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
