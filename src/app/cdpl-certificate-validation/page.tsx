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
const CertificationValidationHeroSection = dynamic(
  () => import("@/components/sections/CertificationValidationHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const CertificationValidatorSection = dynamic(
  () => import("@/components/sections/CertificationValidatorSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading validator..." /> }
);

/* ---------- SEO ---------- */
export const metadata: Metadata = generateSEO({
  title: "CDPL Certificate Validation - Verify AAA & ACTD Certificates Online",
  description:
    "Instantly validate and verify CDPL certificates online. Check authenticity of AAA, ACTD, and other CDPL certification courses. Enter certificate ID for instant verification. Trusted by employers worldwide.",
  keywords: [
    "CDPL certificate validation",
    "verify CDPL certificate",
    "AAA certificate verification",
    "ACTD certificate verification",
    "certificate authenticity check",
    "online certificate validation",
    "CDPL certification verify",
    "check certificate validity",
    "certificate ID verification",
    "validate training certificate",
    "employer certificate verification",
    "authentic certificate check",
    "CDPL certificate lookup",
    "certification verification tool",
    "digital certificate validation",
  ],
  url: "/cdpl-certificate-validation",
  image: "/og-image-certificate-validation.jpg",
  imageAlt: "CDPL Certificate Validation - Verify Certificates Online",
});

/* ---------- JSON-LD ---------- */
function StructuredData() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Certificate Validation", url: "/cdpl-certificate-validation" },
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
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://www.cinutedigital.com/cdpl-certificate-validation#webapp",
    name: "CDPL Certificate Validation Tool",
    url: "https://www.cinutedigital.com/cdpl-certificate-validation",
    description:
      "Free online tool to instantly validate and verify the authenticity of certificates issued by CDPL. Enter certificate ID for instant verification.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Works on all modern browsers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    featureList: [
      "Instant certificate verification",
      "Check certificate authenticity",
      "Validate AAA certificates",
      "Validate ACTD certificates",
      "Verify certificate details",
      "Employer verification tool",
    ],
    provider: organizationSchema,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.cinutedigital.com/cdpl-certificate-validation?id={certificate_id}",
      },
      "query-input": "required name=certificate_id",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cinutedigital.com/cdpl-certificate-validation#webpage",
    name: "CDPL Certificate Validation",
    url: "https://www.cinutedigital.com/cdpl-certificate-validation",
    description:
      "Verify the authenticity of CDPL certificates including AAA, ACTD, and other certification programs.",
    isPartOf: organizationSchema,
    about: {
      "@type": "Service",
      name: "Certificate Verification Service",
      description:
        "Free service to validate and verify certificates issued by CDPL for employers, institutions, and individuals.",
      provider: organizationSchema,
      areaServed: "Worldwide",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://www.cinutedigital.com/cdpl-certificate-validation",
        serviceType: "Online verification",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.cinutedigital.com/cdpl-certificate-validation#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I verify a CDPL certificate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To verify a CDPL certificate, visit the certificate validation page and enter the unique certificate ID found on your certificate. The system will instantly verify the authenticity and display certificate details.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I find my certificate ID?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your certificate ID is a unique alphanumeric code printed on your CDPL certificate, usually located at the bottom or in the certificate details section.",
        },
      },
      {
        "@type": "Question",
        name: "Can employers verify CDPL certificates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, employers can verify CDPL certificates by entering the certificate ID on this validation page. The verification is instant and shows all certificate details including course name, issue date, and recipient information.",
        },
      },
      {
        "@type": "Question",
        name: "Is the certificate validation service free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, CDPL's certificate validation service is completely free for anyone to use - students, employers, or institutions.",
        },
      },
      {
        "@type": "Question",
        name: "What certificates can be validated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can validate all CDPL-issued certificates including AAA Certification, ACTD Certification, and other training program certificates.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

/* ---------- Page (server component) ---------- */
export default function CertificateValidationPage() {
  return (
    <main 
      className="bg-white text-slate-900"
      itemScope
      itemType="https://schema.org/WebApplication"
    >
      <StructuredData />
      <meta itemProp="name" content="CDPL Certificate Validation Tool" />
      <meta itemProp="description" content="Verify CDPL certificate authenticity online" />
      <meta itemProp="url" content="https://www.cinutedigital.com/cdpl-certificate-validation" />
      <meta itemProp="applicationCategory" content="BusinessApplication" />
      
      <CertificationValidationHeroSection />
      <CertificationValidatorSection />
    </main>
  );
}
