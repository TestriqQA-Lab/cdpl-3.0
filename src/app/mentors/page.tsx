// app/mentors/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";

// ============================================================================
// SEO METADATA - Optimized for Mentors Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  title: "Mentors - 1:1 Career Mentorship & Guidance | CDPL",
  description: "Get personalized 1:1 mentorship from industry experts at CDPL. Our mentors guide learners in QA, Data Science, Product Management, and Engineering with resume reviews, interview prep, and career support. 20+ years combined experience from top companies.",
  keywords: [
    "CDPL mentors",
    "career mentorship",
    "1:1 mentoring",
    "QA mentors",
    "data science mentors",
    "product management mentors",
    "engineering mentors",
    "interview preparation",
    "resume review",
    "career guidance",
    "industry expert mentors",
    "tech career mentorship",
  ],
  url: "/mentors",
  image: "og-images/og-image-mentors.webp",
});

// ---------- Small, reusable loading UI ----------
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled like your example) ----------
const MentorHeroSection = dynamic(
  () => import("@/components/sections/MentorHeroSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading hero..." />,
  }
);

const MentorProcessFlowSection = dynamic(
  () => import("@/components/sections/MentorProcessFlowSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading process..." />,
  }
);

const MentorHelpCTASection = dynamic(
  () => import("@/components/sections/MentorHelpCTASection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading help..." />,
  }
);

const MentorsImpactSection = dynamic(
  () => import("@/components/sections/MentorsImpactSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading impact..." />,
  }
);

const MentorOutcomesSection = dynamic(
  () => import("@/components/sections/MentorOutcomesSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading outcomes..." />,
  }
);




// ============================================================================
// MENTORS PAGE COMPONENT
// ============================================================================
export default function MentorsPage() {


  return (
    <>


      {/* Main Content - Semantic HTML Structure */}
      <main
        className="relative bg-white text-slate-900"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        {/* Hidden metadata for schema.org */}
        <meta itemProp="name" content="CDPL Mentors" />
        <meta itemProp="description" content="Meet the mentors guiding learners across QA, Data, Product, and Engineering" />
        <meta itemProp="url" content="https://www.cinutedigital.com/mentors" />

        <MentorHeroSection />
        <MentorsImpactSection />
        <MentorOutcomesSection />
        <MentorProcessFlowSection />
        <MentorHelpCTASection />
      </main>
    </>
  );
}
