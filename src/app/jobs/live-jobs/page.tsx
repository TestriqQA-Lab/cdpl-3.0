// SERVER COMPONENT — Live Jobs (CDPL)
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { JOBS } from "@/lib/jobsData";
import type { Job } from "@/lib/jobsData";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateCollectionPageSchema, generateJobPostingSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export const metadata: Metadata = generateStaticPageMetadata({
  title: {
    absolute: "Live Jobs & Placement Alerts | CDPL",
  },
  description:
    "Verified live jobs and walk-in drives curated by CDPL. QA, Automation, Data, and Engineering roles across India with internships, fresher support, and interview prep guidance",
  url: "/jobs/live-jobs",
  keywords: [
    "live jobs",
    "placement alerts",
    "walk-in drives",
    "freshers jobs",
    "QA jobs",
    "automation testing jobs",
    "data science jobs",
    "CDPL jobs",
  ],
  image: "/testimonial_images/job_image.jpg",
});

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

  // 1. Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs" },
    { name: "Live Jobs", url: "/jobs/live-jobs" },
  ]);

  // 2. CollectionPage Schema
  const collectionPageSchema = generateCollectionPageSchema({
    name: "Live Jobs & Placement Alerts | CDPL",
    description: "Verified live jobs and walk-in drives curated by CDPL.",
    url: "/jobs/live-jobs",
  });

  // 3. JobPosting Schemas
  const jobSchemas = JOBS.map((job) => generateJobPostingSchema({
    title: job.title,
    description: job.highlights?.join('. ') || `${job.title} at ${job.company}`,
    datePosted: job.postedOn,
    validThrough: job.eventDate,
    employmentType: job.type === "Full-time" ? "FULL_TIME" : job.type === "Internship" ? "INTERN" : job.type === "Contract" ? "CONTRACTOR" : "OTHER",
    hiringOrganization: {
      name: job.company,
      sameAs: job.companySite,
    },
    jobLocation: {
      addressLocality: job.location,
      streetAddress: job.venue,
      addressCountry: "IN",
    },
    url: `/jobs/live-jobs?jobId=${job.id}`, // Assuming this query param works or just pointing to the page
  }));

  return (
    <main className="bg-white text-slate-900 relative">
      {/* Structured Data */}
      <JsonLd id="live-jobs-breadcrumb" schema={breadcrumbSchema} />
      <JsonLd id="live-jobs-collection" schema={collectionPageSchema} />
      {jobSchemas.map((schema, index) => (
        <JsonLd key={index} id={`job-posting-${index}`} schema={schema} />
      ))}

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #f8fafc, #ffffff 30%)" }}
        />
      </div>


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
