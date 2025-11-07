// components/sections/TestimonialsSection.tsx
"use client";

import { useMemo } from "react";
import { Star, Quote, ShieldCheck, Sparkles, Trophy } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  rating: number; // 1–5
  highlight?: string; // optional short headline
  bg: string; // card background
  border: string; // card border
  nameColor: string; // name accent
};

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "This masterclass is the best for advancing in DS & ML. The evaluation mindset and reproducible pipelines helped me ship confidently.",
      name: "Rohan Mehta",
      role: "Data Scientist",
      company: "Analytics Consulting",
      rating: 5,
      bg: "bg-amber-50",
      border: "border-amber-200",
      nameColor: "text-amber-700",
    },
    {
      quote:
        "Projects were challenging and rewarding—end-to-end ML with MLflow, feature stores, and clear READMEs made my portfolio stand out.",
      name: "Sneha Patel",
      role: "ML Engineer",
      company: "E-commerce",
      rating: 5,
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      nameColor: "text-emerald-700",
    },
    {
      highlight: "Landed 12 LPA!",
      quote:
        "The 200-hour program was worth it. Deployed a FastAPI model on cloud with monitoring and got offers quickly.",
      name: "Arjun Singh",
      role: "Fresher → ML Engineer",
      company: "FinTech",
      rating: 5,
      bg: "bg-sky-50",
      border: "border-sky-200",
      nameColor: "text-sky-700",
    },
    {
      quote:
        "Strong focus on MLOps, drift detection, and cost control. Exactly what hiring managers asked about.",
      name: "Anita Desai",
      role: "Senior Data Scientist",
      company: "HealthTech",
      rating: 5,
      bg: "bg-rose-50",
      border: "border-rose-200",
      nameColor: "text-rose-700",
    },
    {
      quote:
        "Clear coverage of classical ML to deep learning—solid baselines, fair comparisons, and great storytelling in dashboards.",
      name: "Faizan Khan",
      role: "Applied Scientist",
      company: "SaaS",
      rating: 5,
      bg: "bg-violet-50",
      border: "border-violet-200",
      nameColor: "text-violet-700",
    },
    {
      quote:
        "Mock interviews + DSA warm-ups + system design primer gave me confidence. I recommend it for serious career switchers.",
      name: "Priya Sharma",
      role: "Data Analyst → DS",
      company: "Retail BI",
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
        name: "Advanced Data Science & Machine Learning Masterclass",
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
          "data science course reviews, machine learning masterclass testimonials, MLOps training ratings, TensorFlow scikit-learn feedback",
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <section
      className="relative py-14 md:py-24 bg-white"
      aria-labelledby="testimonials-heading"
    >
      {/* Sleek top accent (thin gradient line only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-500 opacity-80" />

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
            Authentic reviews from our{" "}
            <strong>Advanced Data Science & Machine Learning</strong> cohort—highlighting{" "}
            <strong>MLOps</strong>, <strong>model deployment</strong>,{" "}
            <strong>drift monitoring</strong>, and <strong>job outcomes</strong>.
          </p>

          {/* Trust strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Sparkles className="w-4 h-4 text-purple-600" />
              4.9/5 Average Rating
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Verified Alumni
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Trophy className="w-4 h-4 text-amber-600" />
              Portfolio & Offers
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
          Read independent reviews of our Data Science and ML masterclass. Alumni highlight MLOps,
          deployment, monitoring, and job placements.
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

      {t.highlight && (
        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
          <Trophy className="w-3.5 h-3.5 text-amber-600" />
          {t.highlight}
        </div>
      )}

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
