import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateBreadcrumbSchema } from "@/lib/schema-generators";

/* ---------- Small, reusable loading UI ---------- */
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

/* ---------- Dynamic sections (client components) ---------- */
const ACTDCertificationHeroSection = dynamic(
  () => import("@/components/sections/ACTDCertificationHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const ACTDCertificationTracksSection = dynamic(
  () => import("@/components/sections/ACTDCertificationTracksSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading tracks..." /> }
);

const ACTDCertificationProgressFaqSection = dynamic(
  () => import("@/components/sections/ACTDCertificationProgressFaqSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading details..." /> }
);

/* ---------- SEO ---------- */
export const metadata: Metadata = generateStaticPageMetadata({
  title: "ACTD Certification Training - Agile, Cloud & Test-Driven Development | CDPL",
  description:
    "Master Agile methodologies, Cloud technologies, and Test-Driven Development with CDPL's ACTD certification program. Comprehensive training with hands-on projects, industry mentors, and recognized certification.",
  keywords: [
    "ACTD certification",
    "agile certification",
    "cloud testing training",
    "test-driven development course",
    "agile testing certification",
    "cloud automation training",
    "TDD certification",
    "CDPL ACTD course",
    "agile cloud testing",
    "DevOps testing certification",
    "continuous testing",
    "agile QA training",
    "cloud QA engineer",
    "scrum testing certification",
    "agile test automation",
  ],
  url: "/actd-certification-training",
  image: "/og-image-actd-certification.jpg",
});

/* ---------- JSON-LD ---------- */
function StructuredData() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "ACTD Certification", url: "/actd-certification-training" },
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
    "@id": "https://www.cinutedigital.com/actd-certification-training#course",
    name: "ACTD Certification Training - Agile, Cloud & Test-Driven Development",
    description:
      "Comprehensive certification program covering Agile testing methodologies, cloud-based testing strategies, and test-driven development practices.",
    provider: organizationSchema,
    url: "https://www.cinutedigital.com/actd-certification-training",
    courseCode: "ACTD-CERT-2024",
    educationalLevel: "Intermediate to Advanced",
    teaches: [
      "Agile Testing Methodologies",
      "Cloud Testing Strategies",
      "Test-Driven Development (TDD)",
      "Continuous Integration/Continuous Deployment",
      "Scrum and Kanban for QA",
      "Cloud Platform Testing (AWS, Azure, GCP)",
    ],
    coursePrerequisites: "Basic software testing knowledge and programming fundamentals",
    timeRequired: "P10W", // TODO: Update with actual duration (e.g., "P10W" for 10 weeks)
    inLanguage: "en-IN",
    availableLanguage: ["English", "Hindi"],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["online", "onsite"],
      courseWorkload: "PT15H", // TODO: Update with actual hours per week (e.g., "PT15H" for 15 hours)
      instructor: {
        "@type": "Person",
        name: "CDPL Certified Instructors",
        description: "Agile and cloud testing experts with industry certifications",
      },
    },
    offers: {
      "@type": "Offer",
      category: "Paid",
      availability: "https://schema.org/InStock",
      price: "39999", // TODO: Update with actual price
      priceCurrency: "INR",
      url: "https://www.cinutedigital.com/actd-certification-training",
      validFrom: "2024-01-01",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
    educationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      name: "ACTD Certification",
      credentialCategory: "certificate",
      recognizedBy: organizationSchema,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.cinutedigital.com/actd-certification-training#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does ACTD stand for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ACTD stands for Agile, Cloud, and Test-Driven Development. It's a comprehensive certification that covers modern testing practices in agile and cloud environments.",
        },
      },
      {
        "@type": "Question",
        name: "How long is the ACTD certification program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ACTD Certification program is a 10-week intensive course with approximately 15 hours of learning per week, including live sessions, practical labs, and project work.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need prior cloud experience for ACTD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prior cloud experience is helpful but not mandatory. The course covers cloud fundamentals and gradually progresses to advanced cloud testing strategies.",
        },
      },
      {
        "@type": "Question",
        name: "What are the career opportunities after ACTD certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ACTD certification opens doors to roles like Agile QA Engineer, Cloud Test Engineer, DevOps Tester, Test Automation Specialist, and Senior QA positions in companies adopting agile and cloud practices.",
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
export default function ACTDCertificationTrainingPage() {
  return (
    <main
      className="bg-white text-slate-900"
      itemScope
      itemType="https://schema.org/Course"
    >
      <StructuredData />
      <meta itemProp="name" content="ACTD Certification Training" />
      <meta itemProp="description" content="Agile, Cloud & Test-Driven Development certification" />
      <meta itemProp="url" content="https://www.cinutedigital.com/actd-certification-training" />

      <ACTDCertificationHeroSection />
      <ACTDCertificationTracksSection />
      <ACTDCertificationProgressFaqSection />
    </main>
  );
}
