// SERVER COMPONENT — Live Jobs (CDPL)
import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import { JOBS } from "@/lib/jobsData";
import type { Job } from "@/lib/jobsData";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Live Jobs & Placement Alerts | Cinute Digital Pvt. Ltd (CDPL)",
  description:
    "Verified live jobs and walk-in drives curated by CDPL. QA, Automation, Data, and Engineering roles across India with internships, fresher support, and interview prep guidance",
  alternates: { canonical: "https://cinutedigital.com/jobs/live-jobs" },
  openGraph: {
    title: "Live Jobs & Placement Alerts | CDPL",
    description: "Verified openings, walk-ins, and trainee roles curated by Cinute Digital.",
    url: "https://cinutedigital.com/jobs/live-jobs",
    siteName: "Cinute Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Jobs & Placement Alerts | CDPL",
    description: "Verified openings curated by Cinute Digital.",
  },
  robots: { index: true, follow: true },
};

// Dynamic sections
const JobsLiveJobsJobsHeroSection = dynamic(
  () => import("@/components/sections/JobsLiveJobsJobsHeroSection").then((m) => m.default),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const JobsLiveJobsJobsTickerSection = dynamic<{ jobs: Job[] }>(
  () =>
    import("@/components/sections/JobsLiveJobsJobsTickerSection").then(
      (m) => m.JobsLiveJobsJobsTickerSection
    ),
  { ssr: true, loading: () => <SectionLoader label="Loading ticker..." /> }
);

const JobsLiveJobsListingSection = dynamic<{ jobs: Job[] }>(
  () =>
    import("@/components/sections/JobsLiveJobsListingSection").then(
      (m) => m.JobsLiveJobsListingSection
    ),
  { ssr: true, loading: () => <SectionLoader label="Loading listings..." /> }
);

const JobsLiveJobsWhyWePostJobsSection = dynamic(
  () => import("@/components/sections/LiveJobsLiveJobsWhyWePostJobsSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading why CDPL posts jobs..." /> }
);

const JobsLiveJobsTestimonialSection = dynamic(
  () => import("@/components/sections/JobsLiveJobsTestimonialSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading testimonials..." /> }
);

const JobsLiveJobsReviewSection = dynamic(
  () => import("@/components/sections/JobsLiveJobsReviewSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading reviews..." /> }
);

const JobsLiveJobsSubscribeCTASection = dynamic(
  () =>
    import("@/components/sections/JobsLiveJobsSubscribeCTASection").then(
      (m) => m.JobsLiveJobsSubscribeCTASection
    ),
  { ssr: true, loading: () => <SectionLoader label="Loading subscribe..." /> }
);

// Default banner
const DEFAULT_BANNER = "/testimonial_images/job_image.jpg";
const JOBS_WITH_BANNER: Job[] = JOBS.map((j) => ({
  ...j,
  bannerImage: j.bannerImage ?? DEFAULT_BANNER,
}));

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CDPL Live Jobs",
    itemListElement: JOBS_WITH_BANNER.map((j, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "JobPosting",
        title: j.title,
        hiringOrganization: { "@type": "Organization", name: j.company },
        employmentType: j.type,
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: j.location,
            addressCountry: "IN",
          },
        },
        datePosted: j.postedOn,
        validThrough: j.eventDate ?? j.postedOn,
        description: (j.highlights ?? []).join(" • "),
        applicantLocationRequirements: "IN",
        directApply: Boolean(j.applyEmail || j.applyLink),
      },
    })),
  };

  return (
    <main className="bg-white text-slate-900 relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #f8fafc, #ffffff 30%)" }}
        />
      </div>

      <Script
        id="cdpl-live-jobs-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <JobsLiveJobsJobsHeroSection />
      <JobsLiveJobsJobsTickerSection jobs={JOBS_WITH_BANNER} />
      <JobsLiveJobsListingSection jobs={JOBS_WITH_BANNER} />
      <JobsLiveJobsWhyWePostJobsSection />
      <JobsLiveJobsTestimonialSection />
      <JobsLiveJobsReviewSection />
      <JobsLiveJobsSubscribeCTASection />
    </main>
  );
}
