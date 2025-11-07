import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";


// SEO METADATA - Enhanced for Careers Page
// ============================================================================
export const metadata: Metadata = generateSEO({
    title: "CDPL Careers | Join Our EdTech Team: Software, Data, Product",
    description: "Explore career opportunities at Cinute Digital (CDPL) across Engineering, Data Science, Product Management, Growth, and Student Success. Work on high-impact EdTech products, ship fast, learn faster. Join our product-led team building the future of tech education.",
    keywords: [
        "CDPL careers",
        "Cinute Digital jobs",
        "EdTech jobs",
        "software engineer jobs",
        "data scientist jobs",
        "product manager jobs",
        "growth marketing jobs",
        "student success jobs",
        "tech jobs India",
        "startup jobs",
        "work at CDPL",
    ],
    url: "/jobs/careers",
    image: "/og-images/cdpl-careers-images.webp",
    imageAlt: "Careers at CDPL - Build the future of outcomes-first EdTech",
});



// ====== Shared Types / Data ======
export type Job = {
    id: string;
    title: string;
    team:
    | "Engineering"
    | "Data"
    | "Product"
    | "Growth"
    | "Student Success"
    | "Operations";
    location: "Bengaluru" | "Pune" | "Remote (India)" | "Hybrid (Bengaluru)";
    type: "Full-time" | "Contract" | "Internship";
    experience: "0–1 yrs" | "1–3 yrs" | "3–5 yrs" | "5–8 yrs" | "8+ yrs";
    summary: string;
    responsibilities: string[];
    requirements: string[];
    applyEmail?: string;
    applyLink?: string;
};

const JOBS: Job[] = [
    {
        id: "se-fe-1",
        title: "Frontend Engineer (React/Next.js)",
        team: "Engineering",
        location: "Hybrid (Bengaluru)",
        type: "Full-time",
        experience: "1–3 yrs",
        summary:
            "Build fast, accessible, SEO-friendly product surfaces used by learners and mentors every day.",
        responsibilities: [
            "Ship pixel-perfect UI with React/Next.js and Tailwind",
            "Own SSR, routing, and performance budgets (Core Web Vitals)",
            "Collaborate with Design on design systems & accessibility",
        ],
        requirements: [
            "Solid TypeScript, React, Next.js app router",
            "Good grasp of a11y, SEO, and testing (Vitest/RTL/Playwright)",
            "Understanding of API integration and caching",
        ],
        applyEmail: "careers@cinutedigital.com",
    },
    {
        id: "se-be-1",
        title: "Backend Engineer (Node/Express)",
        team: "Engineering",
        location: "Bengaluru",
        type: "Full-time",
        experience: "3–5 yrs",
        summary:
            "Design resilient APIs and data pipelines powering placements and live-learning experiences.",
        responsibilities: [
            "Own services in Node/Express with Postgres",
            "Improve reliability, tracing, and error budgets",
            "Partner with Data team for reporting and analytics",
        ],
        requirements: [
            "Strong SQL schema design and query tuning",
            "Observability (logs/metrics/traces) and cloud fundamentals",
            "Security mindset and clean code practices",
        ],
        applyLink: "https://forms.gle/abcd-careers-backend",
    },
    {
        id: "ds-analyst-1",
        title: "Data Analyst (Product Insights)",
        team: "Data",
        location: "Remote (India)",
        type: "Full-time",
        experience: "1–3 yrs",
        summary:
            "Turn learner telemetry into actionable product insights and placement outcomes.",
        responsibilities: [
            "Define KPIs and build Looker/Metabase dashboards",
            "Run funnels, cohorts, and A/B tests with Product",
            "Maintain data quality and documentation",
        ],
        requirements: [
            "SQL fluency and data viz best practices",
            "Strong communication and stakeholder alignment",
            "Experiment design basics",
        ],
        applyEmail: "careers@cinutedigital.com",
    },
    {
        id: "pm-1",
        title: "Product Manager (Outcomes)",
        team: "Product",
        location: "Hybrid (Bengaluru)",
        type: "Full-time",
        experience: "5–8 yrs",
        summary:
            "Own learner outcomes, define roadmap, validate bets, and ship value every sprint.",
        responsibilities: [
            "Craft PRDs, align cross-functional teams, and ship",
            "Measure impact and iterate ruthlessly",
            "Partner with Growth & Student Success",
        ],
        requirements: [
            "Demonstrated 0→1 and 1→n product wins",
            "Strong qualitative + quantitative decision making",
            "Great writing and storytelling",
        ],
        applyEmail: "careers@cinutedigital.com",
    },
    {
        id: "mentor-ops-1",
        title: "Student Success Specialist",
        team: "Student Success",
        location: "Pune",
        type: "Full-time",
        experience: "0–1 yrs",
        summary:
            "Coach learners, track progress, and unlock referrals to help them get placed.",
        responsibilities: [
            "Own learner progress reviews & follow-ups",
            "Coordinate interview prep & mock interviews",
            "Work with Hiring Partners for referrals",
        ],
        requirements: [
            "Empathy, ownership, and ops discipline",
            "Comfort with spreadsheets/CRMs",
            "Excellent written & spoken English",
        ],
        applyLink: "https://forms.gle/abcd-careers-success",
    },
];

// ====== JSON-LD (JobPosting) for SEO ======
const jobPostingJsonLd = (jobs: Job[]) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: jobs.map((j, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
            "@type": "JobPosting",
            title: j.title,
            employmentType: j.type,
            industry: "Education Technology",
            hiringOrganization: {
                "@type": "Organization",
                name: "Cinute Digital Pvt Ltd (CDPL)",
                sameAs: "https://www.cinutedigital.com",
            },
            jobLocationType: j.location.includes("Remote") ? "TELECOMMUTE" : "ONSITE",
            jobLocation: j.location.includes("Remote")
                ? undefined
                : {
                    "@type": "Place",
                    address: {
                        "@type": "PostalAddress",
                        addressCountry: "IN",
                        addressLocality: j.location,
                    },
                },
            description: j.summary,
            responsibilities: j.responsibilities,
            qualifications: j.requirements,
            url: j.applyLink
                ? j.applyLink
                : "mailto:" + (j.applyEmail ?? "careers@cinutedigital.com"),
        },
    })),
});

// ====== Section Loader ======
function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500 dark:text-gray-500">{label}</p>
        </div>
    );
}

// ====== Dynamic Section Imports (typed) ======
const JobsCareersHeroSection = dynamic(
    () => import("@/components/sections/JobsCareersHeroSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const JobsCareersOpenRolesSection = dynamic<{ jobs: Job[] }>(
    () => import("@/components/sections/JobsCareersOpenRolesSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading roles..." /> }
);

const JobsCareersProcessSection = dynamic(
    () => import("@/components/sections/JobsCareersProcessSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading process..." /> }
);

const JobsCareersBenefitsSection = dynamic(
    () => import("@/components/sections/JobsCareersBenefitsSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const JobsCareersCultureSection = dynamic(
    () => import("@/components/sections/JobsCareersCultureSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading culture..." /> }
);

const JobsCareersFAQSection = dynamic(
    () => import("@/components/sections/JobsCareersFAQSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading FAQs..." /> }
);

const JobsCareersCTASection = dynamic(
    () => import("@/components/sections/JobsCareersCTASection"),
    { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> }
);

// ====== Page =====
export default function Page() {

    
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Jobs", url: "/jobs/careers" },
        { name: "Careers", url: "/jobs/careers" },
    ]);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jobPostingJsonLd(JOBS)),
                }}
            />

             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <main className="w-full bg-white text-neutral-900 dark:bg-white dark:text-neutral-900">
                {/* Sections now manage their own inner container (max-w-7xl px-4 py-12 sm:px-6 lg:px-8) */}
                <JobsCareersHeroSection />
                <JobsCareersOpenRolesSection jobs={JOBS} />
                <JobsCareersProcessSection />
                <JobsCareersBenefitsSection />
                <JobsCareersCultureSection />
                <JobsCareersFAQSection />
                <JobsCareersCTASection />
            </main>
        </>
    );
}
