import dynamic from "next/dynamic";
import type { Metadata } from "next";

import { buildLocationsHierarchy } from "@/data/courseData/buildLocationsHierarchy";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

// Types
import type { CourseData } from "@/types/courseData";

// Your data (currently a Record<string, CourseData>)
import { courseData } from "@/types/courseData";

/* -------------------------------- Loaders -------------------------------- */

/* -------------------------- Dynamic (client) sections -------------------------- */

const LocationsHeroSection = dynamic(
  () => import("@/components/sections/LocationsHeroSection")
);

const HierarchicalLocationsSection = dynamic(
  () => import("@/components/sections/LocationsHierarchicalLocationsSection")
);

const LocationsBenefitsSection = dynamic(
  () => import("@/components/sections/LocationsBenefitsSection")
);

const LocationsCTASection = dynamic(
  () => import("@/components/sections/LocationsCTASection")
);

// NEW: Services section (replaces the client map section)
const LocationsServicesSection = dynamic(
  () => import("@/components/sections/LocationsServicesSection"),
  { ssr: true }
);

/* --------------------------------- Metadata --------------------------------- */

// ============================================================================
// ENHANCED METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = generateSEO({
  title: "Locations We Serve | Software Testing & Programming Courses in India & UAE - CDPL",
  description:
    "Explore CDPL training centers across India and the UAE. Find the nearest software testing, programming, and QA courses in Maharashtra, Karnataka, Delhi NCR, Dubai, Abu Dhabi, and more. 50+ cities served.",
  keywords: [
    "software testing courses locations India",
    "programming training centers Maharashtra",
    "QA testing institutes Bangalore",
    "coding bootcamps Delhi NCR",
    "software testing courses UAE",
    "programming training Dubai Abu Dhabi",
    "CDPL training centers",
    "Cinute Digital locations",
    "software testing Mumbai",
    "programming courses Pune",
    "QA training Bangalore",
    "coding courses Delhi",
    "tech training Hyderabad",
    "software courses Chennai",
    "IT training Dubai",
    "programming training Abu Dhabi",
    "training centers India",
    "course locations near me"
  ],
  url: "/locations-we-serve",
  image: "/og-images/og-locations-we-serve.webp",
  type: "website"
});

/* ------------------------------- Utilities ------------------------------- */

function normalizeCourses(
  raw: CourseData[] | Record<string, CourseData> | undefined | null
): CourseData[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  if (typeof raw === "object") return Object.values(raw);
  return [];
}

/* --------------------------------- Page --------------------------------- */

export default function LocationsWeServePage() {
  // Normalize your dataset to CourseData[]
  const courses: CourseData[] = normalizeCourses(courseData);

  // Build Country → State → District("Cities") → City hierarchy
  const countriesData = buildLocationsHierarchy(courses);

  // Extract unique locations for structured data
  const uniqueStates = new Set<string>();
  const uniqueCities = new Set<string>();

  courses.forEach(course => {
    if (course.state) uniqueStates.add(course.state);
    if (course.location) uniqueCities.add(course.location);
  });

  const statesArray = Array.from(uniqueStates);
  const citiesArray = Array.from(uniqueCities);

  // ============================================================================
  // ENHANCED STRUCTURED DATA (JSON-LD)
  // ============================================================================
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations We Serve", url: "/locations-we-serve" }
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // BreadcrumbList Schema
      breadcrumbSchema,

      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": "https://www.cinutedigital.com/locations-we-serve",
        "url": "https://www.cinutedigital.com/locations-we-serve",
        "name": "Locations We Serve | Software Testing & Programming Courses",
        "description": "Explore CDPL training centers across India and the UAE. Find the nearest software testing, programming, and QA courses in 50+ cities.",
        "isPartOf": {
          "@id": "https://www.cinutedigital.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.cinutedigital.com/locations-we-serve#breadcrumb"
        },
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.cinutedigital.com/locations-we-serve?search={search_term}",
          "query-input": "required name=search_term"
        }
      },

      // Organization Schema with Multiple Locations
      {
        "@type": "Organization",
        "@id": "https://www.cinutedigital.com/#organization",
        "name": "CDPL - Cinute Digital Pvt. Ltd.",
        "url": "https://www.cinutedigital.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.cinutedigital.com/logo.png",
          "width": 250,
          "height": 60
        },
        "description": "Leading provider of software testing, programming, and professional training across India and UAE with 50+ locations.",
        "areaServed": [
          {
            "@type": "Country",
            "name": "India",
            "containsPlace": statesArray.map(state => ({
              "@type": "State",
              "name": state
            }))
          },
          {
            "@type": "Country",
            "name": "United Arab Emirates"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://twitter.com/cinutedigital"
        ]
      },

      // ItemList Schema for Locations
      {
        "@type": "ItemList",
        "@id": "https://www.cinutedigital.com/locations-we-serve#locationlist",
        "name": "CDPL Training Locations",
        "description": "Complete list of cities where CDPL offers software testing and programming courses",
        "numberOfItems": citiesArray.length,
        "itemListElement": citiesArray.slice(0, 20).map((city, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Place",
            "name": city,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city,
              "addressCountry": "IN"
            }
          }
        }))
      },

      // Service Schema
      {
        "@type": "Service",
        "@id": "https://www.cinutedigital.com/locations-we-serve#service",
        "serviceType": "Professional Training Services",
        "name": "Software Testing & Programming Training",
        "description": "Comprehensive training programs in software testing, programming, and professional development across multiple locations in India and UAE.",
        "provider": {
          "@id": "https://www.cinutedigital.com/#organization"
        },
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United Arab Emirates" }
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://www.cinutedigital.com/locations-we-serve",
          "availableLanguage": ["en-IN", "hi-IN", "en-AE", "ar-AE"]
        }
      }
    ]
  };

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Semantic HTML Structure */}
      <div
        className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 transition-colors duration-300"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Hidden metadata for schema.org */}
        <meta itemProp="name" content="Locations We Serve | CDPL Training Centers" />
        <meta itemProp="description" content="Explore CDPL training centers across India and the UAE in 50+ cities." />

        {/* SEO-friendly H1 - Hidden visually but available for SEO */}
        <h1 className="sr-only">
          CDPL Locations We Serve - Software Testing & Programming Courses in India & UAE
        </h1>

        {/* Page content */}
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="pt-6 sm:pt-8">
            <LocationsHeroSection />
          </div>

          <section className="w-full mt-8 sm:mt-10" aria-label="Training Locations by Country and State">
            <HierarchicalLocationsSection data={countriesData} />
          </section>
        </div>

        {/* Services already has its own internal container; keep outside wrapper minimal */}
        <section className="w-full mt-8 sm:mt-12" aria-label="Services We Provide">
          <LocationsServicesSection />
        </section>

        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <section className="w-full mt-8 sm:mt-12" aria-label="Benefits of Our Locations">
            <LocationsBenefitsSection />
          </section>

          <section className="w-full mt-8 sm:mt-12 mb-10 sm:mb-16" aria-label="Contact Us">
            <LocationsCTASection />
          </section>
        </div>
      </div>
    </>
  );
}
