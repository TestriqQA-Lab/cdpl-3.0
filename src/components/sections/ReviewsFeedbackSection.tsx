"use client";

import { useEffect, useMemo, useState } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

import { getAllReviews, type StudentReview } from "@/data/reviews/reviewsData";
import SafeAvatar from "@/components/sections/SafeAvatar";

const spanClasses: Record<NonNullable<StudentReview["span"]>, string> = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-1",
  tall: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  big: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2",
};

const colsForWidth = (w: number) => (w >= 1024 ? 4 : w >= 768 ? 3 : w >= 640 ? 2 : 1);

export default function ReviewsFeedbackSection() {
  const REVIEWS = useMemo(() => getAllReviews(), []);
  const ROWS_PER_PAGE = 3;
  const [perPage, setPerPage] = useState<number>(12);
  const [visible, setVisible] = useState<number>(12);

  useEffect(() => {
    const compute = () => {
      const cols = colsForWidth(window.innerWidth);
      const pp = cols * ROWS_PER_PAGE;
      setPerPage(pp);
      setVisible((v) => (v === 12 ? pp : Math.max(pp, v)));
    };
    compute();
    let t: number | undefined;
    const onResize = () => {
      clearTimeout(t);
      t = window.setTimeout(compute, 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  const jsonLd = useMemo(() => {
    const slice = REVIEWS.slice(0, visible);
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "CDPL Student Testimonials",
      itemListElement: slice.map((r, i) => ({
        "@type": "Review",
        position: i + 1,
        author: { "@type": "Person", name: r.name },
        itemReviewed: { "@type": "Course", name: r.course },
        reviewBody: r.quote,
        reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
        publisher: { "@type": "Organization", name: "CDPL" },
      })),
    };
  }, [REVIEWS, visible]);

  const canLoadMore = visible < REVIEWS.length;

  return (
    <section
      id="all-reviews"
      className="relative mx-auto w-full max-w-7xl px-4 pb-8 pt-8 sm:pb-12 sm:pt-12 lg:pt-0 sm:px-6 lg:px-8"
      aria-label="Student success stories and testimonials"
    >
      <Script id="cdpl-students-grid-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="mx-auto mb-6 pt-4 max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">What our alumni say</h2>
        <p className="mt-2 text-sm text-neutral-600 sm:text-base">
          All reviewers are ex-students from <span className="font-medium text-neutral-900">Testing</span>,{" "}
          <span className="font-medium text-neutral-900">Data Analyst</span>,{" "}
          <span className="font-medium text-neutral-900">Data Science</span>, and{" "}
          <span className="font-medium text-neutral-900">Marketing</span> programs, sharing how CDPL prepared them for industry.
        </p>
      </header>

      <ul
        className="
          grid grid-cols-1 gap-4
          [grid-auto-rows:auto]
          sm:grid-cols-2 sm:[grid-auto-rows:minmax(10.5rem,_auto)]
          md:grid-cols-3 md:[grid-auto-rows:minmax(11rem,_auto)]
          lg:grid-cols-4 lg:[grid-auto-rows:minmax(12rem,_auto)]
          grid-flow-dense
        "
      >
        <AnimatePresence mode="popLayout">
          {REVIEWS.slice(0, visible).map((r) => (
            <motion.li
              key={r.id}
              layout
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={[
                "group relative overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 shadow-[0_24px_80px_-40px_rgba(0,0,0,.35)]",
                spanClasses[r.span ?? "normal"],
              ].join(" ")}
              itemScope
              itemType="https://schema.org/Review"
            >
              <article className="flex h-full flex-col">
                <div className="flex-1 p-5">
                  <div className="mb-2 inline-flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i + 0.01 < r.rating ? "text-[var(--color-brand)]" : "text-neutral-300"}`}
                        fill={i + 0.01 < r.rating ? "currentColor" : "none"}
                      />
                    ))}
                    <span className="ml-1 text-xs font-medium text-neutral-500">{r.rating.toFixed(1)}</span>
                  </div>
                  <blockquote className="text-sm leading-relaxed text-neutral-800 sm:line-clamp-8" itemProp="reviewBody">
                    “{r.quote}”
                  </blockquote>
                </div>

                <footer className="mt-auto flex items-center gap-3 border-t border-neutral-100 bg-neutral-50/50 p-4">
                  <SafeAvatar name={r.name} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-neutral-900" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">{r.name}</span>
                    </p>
                    <p className="truncate text-xs text-neutral-500">
                      {r.role} • {r.course}
                    </p>
                  </div>
                </footer>

                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[var(--color-brand)]/0 transition group-hover:ring-2 group-hover:ring-[var(--color-brand)]/25" />
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <div className="mt-6 flex justify-center">
        {canLoadMore ? (
          <button
            type="button"
            onClick={() => setVisible((v) => Math.min(v + perPage, REVIEWS.length))}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold cursor-pointer text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/40"
            aria-label="View more reviews"
          >
            View more
          </button>
        ) : (
          <a
            href="#cta-join"
            onClick={(e) => {
              e.preventDefault();
              const CTA_IDS = ["cta-join", "apply", "cta", "join", "hero-cta"];
              const HEADER_OFFSET = 80;
              const el = CTA_IDS.map((id) => document.getElementById(id)).find(Boolean);
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
                window.scrollTo({ top: y, behavior: "smooth" });
              } else {
                window.location.hash = "cta-join";
              }
            }}
            className="text-sm text-neutral-500 cursor-pointer hover:text-[var(--color-brand)] underline decoration-dotted underline-offset-4"
            aria-label="Jump to application call-to-action"
            title="Jump to apply"
          >
            That&apos;s all! — <span className="font-semibold">join 1,000+ successful students</span> →
          </a>
        )}
      </div>
    </section>
  );
}
