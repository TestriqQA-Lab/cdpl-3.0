// /app/testimonials/page.tsx

import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

// ✅ Use shared reviews data (no local example array/types)
import { getAllReviews } from "@/data/reviews/reviewsData";

// Revalidate content periodically (change to 0 if you fetch SSR)
export const revalidate = 120;

// ---------- Small, reusable loading UI ----------
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled, with lightweight fallbacks) ----------
const ReviewsHeroSection = dynamic(
  () => import("@/components/sections/ReviewsHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading testimonials..." /> }
);

const JobsLiveJobsTestimonialSection = dynamic(
  () => import("@/components/sections/JobsLiveJobsTestimonialSection"),
  { ssr: true, loading: () => <SectionLoader label="Preparing CTA..." /> }
);

const ReviewsFeedbackSection = dynamic(
  () => import("@/components/sections/ReviewsFeedbackSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading reviews..." /> }
);

const JobsLiveJobsReviewSection = dynamic(
  () => import("@/components/sections/JobsLiveJobsReviewSection"),
  { ssr: true, loading: () => <SectionLoader label="Preparing CTA..." /> }
);

const ReviewsCTAJoinSection = dynamic(
  () => import("@/components/sections/ReviewsCTAJoinSection"),
  { ssr: true, loading: () => <SectionLoader label="Preparing CTA..." /> }
);

// ---------- SEO Metadata ----------
export const metadata: Metadata = generateSEO({
  title: "Customer Testimonials & Reviews - Success Stories | CDPL",
  description:
    "See why product leaders and students choose CDPL. Read authentic client testimonials, student reviews, and success stories across training, consulting, and software development. Trusted by 1000+ professionals.",
  keywords: [
    "CDPL testimonials",
    "CDPL reviews",
    "client success stories",
    "student testimonials",
    "customer reviews",
    "training testimonials",
    "software development partner",
    "product engineering reviews",
    "UI UX design testimonials",
    "testing training reviews",
    "CDPL student feedback",
    "course reviews",
    "certification testimonials",
    "tech training reviews",
    "EdTech testimonials",
  ],
  url: "/testimonials",
  image: "/og-images/og-image-testimonials.webp",
  type: "website",
});

export default function Page() {
  // ✅ Pull reviews from shared data file
  const testimonials = getAllReviews();

  // Aggregate rating for Org schema
  const totalRating = testimonials.reduce((sum, t) => sum + (t.rating ?? 0), 0);
  const averageRating =
    testimonials.length > 0 ? (totalRating / testimonials.length).toFixed(1) : "0.0";

  // ---------- Enhanced Schema.org (rich results) ----------
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Testimonials", url: "/testimonials" },
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // BreadcrumbList Schema
      breadcrumbSchema,
      // Organization Schema with AggregateRating (from shared data)
      {
        "@type": "Organization",
        "@id": "https://www.cinutedigital.com/#organization",
        name: "CDPL - Cinute Digital Pvt. Ltd.",
        url: "https://www.cinutedigital.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.cinutedigital.com/logo.png",
          width: 250,
          height: 60,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: averageRating,
          reviewCount: testimonials.length,
          bestRating: 5,
          worstRating: 1,
        },
        review: testimonials.map((t) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: t.name,
            jobTitle: t.role,
          },
          itemReviewed: {
            "@type": "Organization",
            name: "CDPL - Cinute Digital Pvt. Ltd.",
          },
          reviewBody: t.quote,
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating,
            bestRating: 5,
            worstRating: 1,
          },
          // Your dataset doesn't carry dates—keep a safe default
          datePublished: "2025-01-01",
          inLanguage: "en-IN",
        })),
      },
      // CollectionPage Schema
      {
        "@type": "CollectionPage",
        "@id": "https://www.cinutedigital.com/testimonials#collectionpage",
        url: "https://www.cinutedigital.com/testimonials",
        name: "Customer Testimonials & Reviews | CDPL",
        description:
          "A collection of verified customer testimonials, student reviews, and success stories for CDPL.",
        isPartOf: { "@id": "https://www.cinutedigital.com/#website" },
        breadcrumb: { "@id": "https://www.cinutedigital.com/testimonials#breadcrumb" },
        mainEntity: { "@id": "https://www.cinutedigital.com/#organization" },
        inLanguage: "en-IN",
      },
      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": "https://www.cinutedigital.com/testimonials",
        url: "https://www.cinutedigital.com/testimonials",
        name: "Testimonials - CDPL",
        description: "Customer testimonials and reviews for CDPL",
        isPartOf: { "@id": "https://www.cinutedigital.com/#website" },
        breadcrumb: { "@id": "https://www.cinutedigital.com/testimonials#breadcrumb" },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <div className="bg-white text-neutral-900" itemScope itemType="https://schema.org/CollectionPage">
      {/* Enhanced JSON-LD Structured Data */}
      <Script
        id="cdpl-testimonials-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hidden metadata for schema.org */}
      <meta itemProp="name" content="Customer Testimonials & Reviews | CDPL" />
      <meta itemProp="description" content="Verified customer testimonials and success stories for CDPL" />
      <meta itemProp="url" content="https://www.cinutedigital.com/testimonials" />

      {/* SEO-friendly H1 - Hidden visually but available for SEO */}
      <h1 className="sr-only">
        Customer Testimonials and Reviews - Success Stories from CDPL Clients and Students
      </h1>

      {/* Sections (unchanged) */}
      <ReviewsHeroSection />
      <JobsLiveJobsTestimonialSection />
      <ReviewsFeedbackSection />
      <JobsLiveJobsReviewSection />
      <ReviewsCTAJoinSection />
    </div>
  );
}
