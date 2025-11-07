// app/services/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

// ============================================================================
// SEO METADATA - Optimized for Services Page
// ============================================================================
export const metadata: Metadata = generateSEO({
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
  imageAlt: "CDPL Services - Corporate Training, Consulting & Custom Solutions",
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
  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.cinutedigital.com/services#service",
    name: "CDPL Corporate Training & Consulting Services",
    description: "Comprehensive corporate training, consulting, and custom solutions for enterprises in Software Testing, Data Science, AI/ML, and DevOps",
    provider: {
      "@type": "EducationalOrganization",
      "@id": "https://www.cinutedigital.com/#organization",
      name: "CDPL - Cinute Digital Pvt. Ltd.",
      url: "https://www.cinutedigital.com",
    },
    serviceType: [
      "Corporate Training",
      "Software Testing Consulting",
      "Test Automation Services",
      "Custom Training Programs",
      "Technical Workshops",
      "Team Upskilling",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CDPL Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate Training Programs",
            description: "Customized training programs for enterprises in Software Testing, Data Science, AI/ML, and Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Testing Consulting",
            description: "Expert QA consulting and test strategy development for enterprises",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Test Automation Solutions",
            description: "Custom test automation framework development and implementation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical Workshops",
            description: "Hands-on workshops on latest technologies and best practices",
          },
        },
      ],
    },
  };

  // Organization Schema with Services
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.cinutedigital.com/#organization",
    name: "CDPL - Cinute Digital Pvt. Ltd.",
    url: "https://www.cinutedigital.com",
    description: "Leading EdTech providing corporate training and consulting services",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Training",
          serviceType: "Educational Service",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Testing Consulting",
          serviceType: "Professional Service",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Automation Solutions",
          serviceType: "Technical Service",
        },
      },
    ],
  };

  // CollectionPage Schema
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.cinutedigital.com/services#collectionpage",
    url: "https://www.cinutedigital.com/services",
    name: "CDPL Services - Corporate Training & Consulting",
    description: "Explore our comprehensive range of corporate training, consulting, and custom solutions",
    inLanguage: "en-IN",
  };

  return (
    <>
      {/* Structured Data - Multiple Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

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
