// app/cdpl-affiliate-program/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateBreadcrumbSchema } from "@/lib/schema-generators";

// ---------- SEO ----------
export const metadata: Metadata = generateStaticPageMetadata({
  title: "CDPL Affiliate Program - Earn Commission Promoting Training & Services",
  description:
    "Join the CDPL Affiliate Program and earn recurring commissions by promoting world-class IT training, certification courses, events, and services. Get transparent tracking, fast payouts, and dedicated support. Start earning 15-25% commission today!",
  keywords: [
    "CDPL affiliate program",
    "IT training affiliate",
    "affiliate marketing training",
    "corporate training affiliate",
    "certification course affiliate",
    "tech training partner program",
    "earn commission online",
    "passive income affiliate",
    "software testing affiliate",
    "data science affiliate",
    "cloud training affiliate",
    "DevOps training affiliate",
    "recurring commission program",
    "affiliate partner India",
    "tech education affiliate",
  ],
  url: "/cdpl-affiliate-program",
  image: "/og-image-affiliate.jpg",
});

// ---------- Inline Loader ----------
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-8">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled) ----------
const AffiliateHeroSection = dynamic(
  () => import("@/components/sections/AffiliateHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Booting the hero..." /> }
);

const AffiliateBenefitsSection = dynamic(
  () => import("@/components/sections/AffiliateBenefitsSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const AffiliateHowItWorksSection = dynamic(
  () => import("@/components/sections/AffiliateHowItWorksSection"),
  { ssr: true, loading: () => <SectionLoader label="Wiring the flow..." /> }
);

const AffiliateTiersSection = dynamic(
  () => import("@/components/sections/AffiliateTiersSection"),
  { ssr: true, loading: () => <SectionLoader label="Setting up tiers..." /> }
);

const AffiliatePayoutsSection = dynamic(
  () => import("@/components/sections/AffiliatePayoutsSection"),
  { ssr: true, loading: () => <SectionLoader label="Fetching payouts..." /> }
);

const AffiliateFAQSection = dynamic(
  () => import("@/components/sections/AffiliateFAQSection"),
  { ssr: true, loading: () => <SectionLoader label="Preparing FAQs..." /> }
);

const AffiliateCTASection = dynamic(
  () => import("@/components/sections/AffiliateCTASection"),
  { ssr: true, loading: () => <SectionLoader label="Final touch..." /> }
);

export default async function AffiliateProgramPage() {
  // ---------- Embedded JSON-LD (relevant to this page) ----------
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Affiliate Program", url: "/cdpl-affiliate-program" },
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
      "CDPL delivers industry-aligned training, developer events, and engineering services with practitioner-led content and measurable outcomes.",
    sameAs: [
      "https://www.facebook.com/cinutedigital",
      "https://www.linkedin.com/company/cinute-digital",
      "https://twitter.com/cinutedigital",
      "https://www.instagram.com/cinutedigital",
    ],
    department: [
      { "@type": "Organization", name: "Software Testing" },
      { "@type": "Organization", name: "Data Science & AI" },
      { "@type": "Organization", name: "Cloud & DevOps" },
      { "@type": "Organization", name: "Full-Stack Engineering" },
      { "@type": "Organization", name: "Developer Events" },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.cinutedigital.com/cdpl-affiliate-program#webpage",
    name: "CDPL Affiliate Program",
    url: "https://www.cinutedigital.com/cdpl-affiliate-program",
    description:
      "Join the CDPL Affiliate Program to earn commissions by promoting CDPL training, developer events, and services with transparent tracking and fast payouts.",
    isPartOf: organizationSchema,
    about: {
      "@type": "Offer",
      name: "CDPL Affiliate Commission",
      description:
        "Performance-based affiliate commissions across training, events, and services.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        price: "15–25% commission by tier",
      },
      availabilityStarts: "2020-01-01",
      eligibleRegion: "Worldwide",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://www.cinutedigital.com/cdpl-affiliate-program#howto",
    name: "How to Join CDPL Affiliate Program",
    description: "Step-by-step guide to becoming a CDPL affiliate partner and earning commissions",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Sign Up",
        text: "Complete the affiliate application form with your details and promotional channels",
        url: "https://www.cinutedigital.com/cdpl-affiliate-program#apply",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Get Approved",
        text: "Our team reviews your application and approves qualified partners within 2-3 business days",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Promote CDPL",
        text: "Use your unique affiliate links to promote CDPL courses, events, and services on your platforms",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Earn Commissions",
        text: "Earn 15-25% recurring commissions on every successful referral with transparent tracking",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Get Paid",
        text: "Receive fast payouts monthly via bank transfer or preferred payment method",
      },
    ],
    totalTime: "PT10M",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.cinutedigital.com/cdpl-affiliate-program#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much commission can I earn as a CDPL affiliate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CDPL affiliates earn between 15-25% commission based on their tier level. Commission rates increase as you refer more students and generate higher revenue.",
        },
      },
      {
        "@type": "Question",
        name: "When do I get paid as an affiliate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Affiliate commissions are paid monthly via bank transfer or your preferred payment method. Minimum payout threshold applies.",
        },
      },
      {
        "@type": "Question",
        name: "What can I promote as a CDPL affiliate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can promote all CDPL offerings including certification courses (AAA, ACTD), corporate training programs, developer events, workshops, and professional services.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a cost to join the CDPL affiliate program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, joining the CDPL Affiliate Program is completely free. There are no signup fees or hidden costs.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a website to become an affiliate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While having a website helps, it's not mandatory. You can promote CDPL through social media, YouTube, email lists, or other digital channels.",
        },
      },
    ],
  };

  return (
    <main
      className="relative min-h-screen bg-white text-slate-800 [color-scheme:light] dark:[color-scheme:light]"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(1000px 400px at 20% 0%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(800px 300px at 80% 20%, rgba(16,185,129,0.08), transparent 60%)",
        }}
      />

      {/* Sections (100% width wrapper, content bounded to max-w-7xl) */}
      <AffiliateHeroSection />

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <AffiliateBenefitsSection />
        </div>
      </section>

      <section className="w-full" id="how-it-works">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <AffiliateHowItWorksSection />
        </div>
      </section>

      <section className="w-full" id="tiers">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <AffiliateTiersSection />
        </div>
      </section>

      <section className="w-full" id="payouts">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <AffiliatePayoutsSection />
        </div>
      </section>

      <section className="w-full" id="faq">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <AffiliateFAQSection />
        </div>
      </section>

      <section className="w-full" id="apply">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <AffiliateCTASection />
        </div>
      </section>
    </main>
  );
}
