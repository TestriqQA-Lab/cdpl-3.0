import { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

// Dynamic imports with SSR enabled
const AboutHeroSection = dynamic(
  () => import("@/components/sections/AboutHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
);

const AboutStatsSection = dynamic(
  () => import("@/components/sections/AboutStats.Section"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
);

const AboutWhyJoinUs = dynamic(
  () => import("@/components/sections/AboutWhyJoinUs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
);

const AboutStorySection = dynamic(
  () => import("@/components/sections/AboutStorySection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
);

const AboutFacultyStrip = dynamic(
  () => import("@/components/sections/AboutFacultyStrip"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
);

const AboutMissionVision = dynamic(
  () => import("@/components/sections/AboutVisionMission"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
);

const AboutFAQSection = dynamic(
  () => import("@/components/sections/AboutFAQSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
);

const AboutCTASection = dynamic(
  () => import("@/components/sections/AboutCTASection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
);

const AboutAccreditations = dynamic(
  () => import("@/components/sections/AboutAccreditations"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
);

// ============================================================================
// SEO METADATA - Optimized for About Page
// ============================================================================
export const metadata: Metadata = generateSEO({
  title: "About CDPL - Leading EdTech for Software Testing, Data Science & AI Training",
  description: "CDPL (Cinute Digital) is India's leading EdTech institute delivering industry-ready training in Software Testing, Data Science, AI/ML, and Automation with live projects, expert mentors, and guaranteed placement support. Founded in 2015, we've trained 5000+ professionals.",
  keywords: [
    "about CDPL",
    "about Cinute Digital",
    "CDPL history",
    "EdTech institute India",
    "software testing training institute",
    "data science training Mumbai",
    "AI ML course Pune",
    "automation testing institute",
    "job-ready programs",
    "placement guarantee",
    "industry mentors",
    "live projects training",
    "ISTQB certified training",
    "Mumbai Pune India",
  ],
  url: "/about-us",
  image: "/og-images/og-image-about.webp",
  imageAlt: "About CDPL - Cinute Digital | Leading EdTech Training Institute",
});

// Force light theme wrapper: ensures light UI even if site prefers dark mode
const LightTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white text-slate-800 [color-scheme:light] dark:bg-white dark:text-slate-800">
    {children}
  </div>
);

// ============================================================================
// ABOUT PAGE COMPONENT
// ============================================================================
export default function AboutPage() {
  // EducationalOrganization Schema (Enhanced)
  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.cinutedigital.com/#organization",
    name: "CDPL - Cinute Digital Pvt. Ltd.",
    alternateName: "Cinute Digital",
    legalName: "Cinute Digital Private Limited",
    url: "https://www.cinutedigital.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cinutedigital.com/logo.png",
      width: 600,
      height: 60,
    },
    description: "Leading EdTech institute offering industry-aligned training in Software Testing, Data Science, AI/ML, and Automation with live projects, expert mentorship, and placement assistance.",
    foundingDate: "2015", // Update with actual founding year
    slogan: "Transform Your Career with Industry-Ready Skills",

    // Contact Information
    email: "contact@cinutedigital.com",
    telephone: "+91-788-83-83-788",

    // Address
    address: {
      "@type": "Office # 1, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East, Mira Bhayandar, Maharashtra 401107dress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },

    // Area Served
    areaServed: [
      {
        "@type": "Place",
        name: "India",
      },
      {
        "@type": "Place",
        name: "Mumbai",
      },
      {
        "@type": "Place",
        name: "Pune",
      },
      {
        "@type": "Place",
        name: "Maharashtra",
      },
    ],

    // Social Media Profiles
    sameAs: [
      "https://www.linkedin.com/company/cinutedigital",
      "https://www.facebook.com/cinutedigital",
      "https://twitter.com/cinutedigital",
      "https://www.instagram.com/cinutedigital",
      "https://www.youtube.com/@cinutedigital",
    ],

    // Departments/Programs
    department: [
      {
        "@type": "Organization",
        name: "Software Testing Division",
        description: "Manual Testing, Automation Testing, API Testing, Performance Testing",
      },
      {
        "@type": "Organization",
        name: "Data Science & AI Division",
        description: "Data Analytics, Machine Learning, Artificial Intelligence, Python Programming",
      },
      {
        "@type": "Organization",
        name: "Automation & DevOps Division",
        description: "Test Automation, CI/CD, DevOps Practices",
      },
      {
        "@type": "Organization",
        name: "Digital Skills Division",
        description: "Full-Stack Development, Digital Marketing, Cloud Computing",
      },
    ],

    // Accreditations & Certifications
    accreditationStatus: "ISTQB Certified Training Partner", // Update if applicable

    // Number of employees (update with actual)
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50-100",
    },

    // Alumni count (update with actual)
    alumni: {
      "@type": "QuantitativeValue",
      value: "5000+",
    },
  };

  // AboutPage Schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.cinutedigital.com/about-us#aboutpage",
    url: "https://www.cinutedigital.com/about-us",
    name: "About CDPL - Cinute Digital",
    description: "Learn about CDPL's mission, vision, history, and commitment to delivering industry-ready training in Software Testing, Data Science, and AI/ML.",
    mainEntity: {
      "@id": "https://www.cinutedigital.com/#organization",
    },
    inLanguage: "en-IN",
  };

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
  ]);

  // Organization Founder Schema (if applicable)
  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sandeep Maske", // Update with actual founder name
    jobTitle: "Founder & Chief Mentor",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "CDPL - Cinute Digital",
      url: "https://www.cinutedigital.com",
    },
    sameAs: [
      "https://www.linkedin.com/in/sandeepmaske", // Update with actual profile
    ],
  };

  // Mission & Vision as Thing
  const missionVisionSchema = {
    "@context": "https://schema.org",
    "@type": "Thing",
    name: "CDPL Mission & Vision",
    description: "Our mission is to empower professionals with industry-ready skills through hands-on training, expert mentorship, and real-world projects. Our vision is to become India's most trusted EdTech platform for tech skill development.",
  };

  return (
    <LightTheme>
      {/* Structured Data - Multiple Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(missionVisionSchema) }}
      />

      {/* Main Content - Semantic HTML Structure */}
      <main className="relative isolate" itemScope itemType="https://schema.org/AboutPage">
        {/* Hidden metadata for schema.org */}
        <meta itemProp="name" content="About CDPL - Cinute Digital" />
        <meta itemProp="description" content="Learn about CDPL's mission, vision, and commitment to industry-ready training" />
        <meta itemProp="url" content="https://www.cinutedigital.com/about-us" />

        {/* Subtle glow background for a futuristic, light aesthetic */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="mx-auto h-[50rem] w-[50rem] -translate-y-40 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.10),transparent)] blur-3xl" />
        </div>

        <AboutHeroSection />
        <AboutStatsSection />
        <AboutWhyJoinUs />
        <AboutStorySection />
        <AboutMissionVision />
        <AboutFacultyStrip />
        <AboutAccreditations />
        <AboutCTASection />
        <AboutFAQSection />
      </main>
    </LightTheme>
  );
}
