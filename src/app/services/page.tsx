// app/services/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";

// ============================================================================
// SEO METADATA - Optimized for Services Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  title: "Our Services | Training, Consulting & Custom Solutions – CDPL",
  description: "CDPL offers comprehensive corporate training, software testing consulting, custom automation solutions, and technical workshops for enterprises. Upskill your team with industry-expert trainers in Software Testing, Data Science, AI/ML, and DevOps.",
  keywords: [
    "CDPL services",
    "corporate training",
    "software testing consulting",
    "automation solutions",
    "technical workshops",
    "enterprise training",
    "custom training programs",
    "QA consulting",
    "test automation services",
    "data science corporate training",
    "AI ML workshops",
    "DevOps training",
    "team upskilling",
  ],
  url: "/services",
  image: "/og-images/og-image-services.webp",
});

// Simple loading UI used by all sections
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-10">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled) ----------
const ServicesHeroSection = dynamic(
  () => import("@/components/sections/ServicesHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const ServicesGridSection = dynamic(
  () => import("@/components/sections/ServicesGridSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading services..." /> }
);

const ServicesWhyChooseUsSection = dynamic(
  () => import("@/components/sections/ServicesWhyChooseUsSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const ServicesCTASection = dynamic(
  () => import("@/components/sections/ServicesCTASection"),
  { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> }
);

// ============================================================================
// SERVICES PAGE COMPONENT
// ============================================================================
export default function TrainingServicesPage() {

  return (
    <>


      {/* Main Content - Semantic HTML Structure */}
      <div
        className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        {/* Hidden metadata for schema.org */}
        <meta itemProp="name" content="CDPL Services - Corporate Training & Consulting" />
        <meta itemProp="description" content="Comprehensive corporate training, consulting, and custom solutions" />
        <meta itemProp="url" content="https://www.cinutedigital.com/services" />

        <ServicesHeroSection />
        <ServicesGridSection />
        <ServicesWhyChooseUsSection />
        <ServicesCTASection />
      </div>
    </>
  );
}
