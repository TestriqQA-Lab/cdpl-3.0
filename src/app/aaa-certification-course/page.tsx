import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

/* ---------- Small, reusable loading UI ---------- */
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

/* ---------- Dynamic sections (client components) ---------- */
const AAACerticationHeroSection = dynamic(
  () => import("@/components/sections/AAACerticationHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const AAACertificationWhySection = dynamic(
  () => import("@/components/sections/AAACertificationWhySection"),
  { ssr: true, loading: () => <SectionLoader label="Loading highlights..." /> }
);

const AAACertificationCurriculumSection = dynamic(
  () => import("@/components/sections/AAACertificationCurriculumSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading curriculum..." /> }
);

const AAACertificationOutcomesCtaSection = dynamic(
  () => import("@/components/sections/AAACertificationOutcomesCtaSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading outcomes..." /> }
);

/* ---------- SEO ---------- */
export const metadata: Metadata = generateSEO({
  title: "AAA Certification Course - Advanced Automation Architecture | CDPL",
  description:
    "Master Advanced Automation Architecture (AAA) with CDPL's comprehensive certification course. Learn test automation frameworks, CI/CD, cloud testing, and API automation. Includes hands-on labs, capstone project, and industry-recognized certificate.",
  keywords: [
    "AAA certification",
    "advanced automation architecture",
    "test automation certification",
    "automation framework training",
    "CI/CD automation",
    "cloud testing course",
    "API automation training",
    "selenium certification",
    "CDPL AAA course",
    "automation testing certification",
    "test automation engineer",
    "QA automation course",
    "automation architect training",
    "DevOps automation",
    "continuous testing certification",
  ],
  url: "/aaa-certification-course",
  image: "/og-image-aaa-certification.jpg",
  imageAlt: "AAA Certification Course - Advanced Automation Architecture by CDPL",
});

/* ---------- JSON-LD ---------- */
function StructuredData() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "AAA Certification", url: "/aaa-certification-course" },
  ]);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.cinutedigital.com/#organization",
    name: "Cinute Digital Pvt. Ltd. (CDPL)",
    alternateName: "CDPL",
    url: "https://www.cinutedigital.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cinutedigital.com/logo.png",
      width: 250,
      height: 60,
    },
    description:
      "CDPL provides industry-leading training in Software Testing, Data Science, AI/ML, and Automation with placement support and certification programs.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address", // TODO: Update
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411001", // TODO: Update
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX", // TODO: Update
      contactType: "customer service",
      email: "info@cinutedigital.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.facebook.com/cinutedigital",
      "https://www.linkedin.com/company/cinute-digital",
      "https://twitter.com/cinutedigital",
      "https://www.instagram.com/cinutedigital",
    ],
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://www.cinutedigital.com/aaa-certification-course#course",
    name: "AAA Certification Course - Advanced Automation Architecture",
    description:
      "Comprehensive certification program covering advanced test automation architecture, frameworks, CI/CD integration, and cloud-based testing.",
    provider: organizationSchema,
    url: "https://www.cinutedigital.com/aaa-certification-course",
    courseCode: "AAA-CERT-2024",
    educationalLevel: "Intermediate to Advanced",
    teaches: [
      "Test Automation Frameworks",
      "CI/CD Pipeline Integration",
      "Cloud Testing Strategies",
      "API Automation",
      "Performance Testing",
      "Security Testing Automation",
    ],
    coursePrerequisites: "Basic programming knowledge and testing fundamentals",
    timeRequired: "P12W", // TODO: Update with actual duration (e.g., "P12W" for 12 weeks)
    inLanguage: "en-IN",
    availableLanguage: ["English", "Hindi"],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["online", "onsite"],
      courseWorkload: "PT20H", // TODO: Update with actual hours per week (e.g., "PT20H" for 20 hours)
      instructor: {
        "@type": "Person",
        name: "CDPL Expert Instructors",
        description: "Industry professionals with 10+ years of automation experience",
      },
    },
    offers: {
      "@type": "Offer",
      category: "Paid",
      availability: "https://schema.org/InStock",
      price: "49999", // TODO: Update with actual price
      priceCurrency: "INR",
      url: "https://www.cinutedigital.com/aaa-certification-course",
      validFrom: "2024-01-01",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        author: {
          "@type": "Person",
          name: "Rajesh Kumar",
        },
        reviewBody:
          "Excellent course! The hands-on labs and real-world projects helped me land a senior automation role.",
      },
    ],
    educationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      name: "AAA Certification",
      credentialCategory: "certificate",
      recognizedBy: organizationSchema,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.cinutedigital.com/aaa-certification-course#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AAA Certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AAA (Advanced Automation Architecture) Certification is an industry-recognized credential that validates your expertise in designing and implementing advanced test automation frameworks, CI/CD integration, and cloud-based testing strategies.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the AAA course take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The AAA Certification course is a 12-week program with approximately 20 hours of learning per week, including live sessions, hands-on labs, and project work.",
        },
      },
      {
        "@type": "Question",
        name: "Is the AAA certificate recognized by employers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the AAA Certification from CDPL is recognized by leading tech companies and demonstrates your advanced skills in test automation architecture.",
        },
      },
      {
        "@type": "Question",
        name: "What are the prerequisites for AAA certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic programming knowledge and understanding of software testing fundamentals are required. Prior experience with test automation tools is helpful but not mandatory.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

/* ---------- Page (server component) ---------- */
export default function AAACertificationCoursePage() {
  return (
    <main 
      className="bg-white text-slate-900"
      itemScope
      itemType="https://schema.org/Course"
    >
      <StructuredData />
      <meta itemProp="name" content="AAA Certification Course" />
      <meta itemProp="description" content="Advanced Automation Architecture certification" />
      <meta itemProp="url" content="https://www.cinutedigital.com/aaa-certification-course" />
      
      <AAACerticationHeroSection />
      <AAACertificationWhySection />
      <AAACertificationCurriculumSection />
      <AAACertificationOutcomesCtaSection />
    </main>
  );
}
