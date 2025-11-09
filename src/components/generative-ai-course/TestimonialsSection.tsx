// components/sections/TestimonialsSection.tsx
"use client";

import { useMemo } from "react";
import { Quote, ShieldCheck, Sparkles } from "lucide-react";
import ReviewsMarquee from "../sections/ReviewMarque";

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
        "This program helped me move from theory to production. The LLM fine-tuning and RAG modules were exactly what hiring teams asked me about.",
      name: "Rohan Mehta",
      role: "AI Engineer",
      company: "FinTech Unicorn",
      rating: 5,
      bg: "bg-amber-50",
      border: "border-amber-200",
      nameColor: "text-amber-700",
    },
    {
      quote:
        "Hands-on NLP projects, clean evaluation checkpoints, and clear rubrics. I shipped a transformer pipeline to the cloud in week three.",
      name: "Sneha Patel",
      role: "NLP Specialist",
      company: "Healthcare Analytics",
      rating: 5,
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      nameColor: "text-emerald-700",
    },
    {
      quote:
        "I landed my first role in Generative AI. The portfolio reviews and mock interviews made a real difference in my confidence.",
      name: "Arjun Singh",
      role: "Junior ML Engineer",
      company: "AI Startup",
      rating: 5,
      bg: "bg-sky-50",
      border: "border-sky-200",
      nameColor: "text-sky-700",
    },
    {
      quote:
        "Crystal-clear teaching, strong MLOps focus, and ethical AI practices. The program mirrors real-world workflows and expectations.",
      name: "Nandini Rao",
      role: "Machine Learning Scientist",
      company: "E-Commerce",
      rating: 5,
      bg: "bg-rose-50",
      border: "border-rose-200",
      nameColor: "text-rose-700",
    },
    {
      quote:
        "Vector search, embeddings, and FastAPI deployment in one stack. I showcased measurable metrics recruiters loved.",
      name: "Aditya Kulkarni",
      role: "Data Scientist",
      company: "SaaS Platform",
      rating: 5,
      bg: "bg-violet-50",
      border: "border-violet-200",
      nameColor: "text-violet-700",
    },
    {
      quote:
        "Up-to-date curriculum on Transformers, LoRA/QLoRA, and guardrails. The capstone aligned perfectly with interview questions.",
      name: "Priya Sharma",
      role: "Generative AI Engineer",
      company: "EdTech",
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
        name: "Deep Learning, NLP & Generative AI with Python",
        brand: {
          "@type": "Organization",
          name: "Cinute Digital Pvt. Ltd.",
        },
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
          "AI course reviews, Deep Learning testimonials, NLP student feedback, Generative AI training, Python AI program ratings",
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <section
      className="relative py-16 md:py-20 bg-white"
      aria-labelledby="testimonials-heading"
    >
      {/* sleek accent line (subtle gradient allowed) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Student Success <span className="text-DS">Stories</span> &amp; <span className="text-DS">Reviews</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            Real feedback from graduates who advanced their careers in{" "}
            <strong>Deep Learning</strong>, <strong>NLP</strong>, and{" "}
            <strong>Generative AI</strong>. Verified, job-focused, and packed with{" "}
            <strong>Python + Transformer</strong> projects recruiters recognize.
          </p>

          {/* trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              4.9/5 Average Rating
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Verified Alumni
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Quote className="w-4 h-4 text-rose-600" />
              Industry-Relevant Curriculum
            </span>
          </div>
        </header>

        <ReviewsMarquee />

        {/* SEO helper text (keyword-rich, subtle) */}
        <p className="sr-only">
          Read independent reviews and ratings for our Python-based Deep Learning, NLP,
          and Generative AI training program. Alumni highlight real-world projects,
          interview preparation, and production deployment skills.
        </p>
      </div>

      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </section>
  );
}
