// /app/testimonials/page.tsx

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateSEO } from "@/lib/seo";

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
  return (
    <div className="bg-white text-neutral-900">



      {/* Sections (unchanged) */}
      <ReviewsHeroSection />
      <JobsLiveJobsTestimonialSection />
      <ReviewsFeedbackSection />
      <JobsLiveJobsReviewSection />
      <ReviewsCTAJoinSection />
    </div>
  );
}
