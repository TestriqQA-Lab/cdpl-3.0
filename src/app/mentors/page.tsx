// app/mentors/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

// ============================================================================
// SEO METADATA - Optimized for Mentors Page
// ============================================================================
export const metadata: Metadata = generateSEO({
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
  imageAlt: "CDPL Mentors - 1:1 Career Mentorship & Guidance",
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

// --------- Local data shape ----------
type UIMentor = {
  id: string;
  name: string;
  title: string; // maps to BrowserMentor.role
  company?: string;
  domain: string;
  experience?: string;
  avatar?: string; // maps to BrowserMentor.image
  bio?: string;
  highlights?: string[]; // maps to skills
  socials?: { platform: "linkedin" | string; url: string }[];
};

// Your data
const MENTORS_DATA: UIMentor[] = [
  {
    id: "pravin-mhaske",
    name: "Pravin Mhaske",
    title: "Data Science Manager",
    company: "@ Infosys (India)",
    domain: "Data Science",
    experience: "20+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "Seasoned professional with two decades across data science, analytics, and ML.",
    highlights: [
      "Led enterprise analytics programs",
      "Scaled ML in production",
      "Mentors mid-senior data talent",
    ],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "piyali-mondal",
    name: "Piyali Mondal",
    title: "Program Leader | M.Sc (DS/AI/ML)",
    company: "@ Exeed College (UAE)",
    domain: "Data Science",
    experience: "10+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "Academician, engineering professor, and Ph.D. scholar with extensive experience.",
    highlights: ["Curriculum design", "Research mentoring", "Statistics & ML"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "revathi-soundarrajan",
    name: "Revathi Soundarrajan",
    title: "Data Scientist (PhD)",
    company: "@ Electra Vehicles (USA)",
    domain: "Data Science",
    experience: "10+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "Dr. S. Revathi brings rich experience in research, teaching, and applied ML across domains.",
    highlights: ["Applied ML", "Academic to industry transition", "Publications"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "dnyaneshwar-bhabad",
    name: "Dnyaneshwar Bhabad",
    title: "Assistant Manager – Technology",
    company: "@ Deloitte – Technology Academy (India)",
    domain: "Engineering",
    experience: "11+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "IT professional spanning software development and technical training.",
    highlights: ["Backend engineering", "Training & enablement", "Career switch guidance"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "abhirupa-manna",
    name: "Abhirupa Manna",
    title: "Consultant",
    company: "@ KPMG (India)",
    domain: "Data Analytics",
    experience: "5+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "Helps clients make the most of data with SQL, Tableau, Power BI, QlikView, ETL, and Python.",
    highlights: ["Dashboarding", "BI strategy", "ETL pipelines"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "urvi-verma",
    name: "Urvi Verma",
    title: "AVP – Data Engineering",
    company: "@ Deutsche Bank (Germany)",
    domain: "Data Engineering",
    experience: "5+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "Big data, Java, Python, SQL, and cloud (AWS/GCP).",
    highlights: ["Data platforms", "Cloud data stacks", "Streaming & batch"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "eshita-gangwar",
    name: "Eshita Gangwar",
    title: "Application Engineer",
    company: "@ Oracle (USA)",
    domain: "Engineering",
    experience: "5+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "USC CS graduate with hands-on software development and genomic data analysis experience.",
    highlights: ["Full-stack dev", "Data engineering for genomics", "Scalable services"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
];

// ============================================================================
// MENTORS PAGE COMPONENT
// ============================================================================
export default function MentorsPage() {
  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Mentors", url: "/mentors" },
  ]);

  // Enhanced CollectionPage Schema
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.cinutedigital.com/mentors#collectionpage",
    name: "CDPL Mentors",
    description: "Meet the mentors guiding learners across QA, Data, Product, and Engineering at CDPL.",
    about: "Mentorship, interview prep, career support",
    url: "https://www.cinutedigital.com/mentors",
    inLanguage: "en-IN",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: MENTORS_DATA.map((m, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: m.name,
          jobTitle: m.title,
          description: m.bio,
          worksFor: {
            "@type": "Organization",
            name: m.company?.replace("@ ", "") || "CDPL - Cinute Digital",
          },
          ...(m.avatar && {
            image: {
              "@type": "ImageObject",
              url: `https://www.cinutedigital.com${m.avatar}`,
            },
          }),
          ...(m.highlights && {
            knowsAbout: m.highlights,
          }),
          ...(m.socials && m.socials.length > 0 && {
            sameAs: m.socials.map((s) => s.url).filter((url) => url !== "#"),
          }),
        },
      })),
    },
  };

  // Service Schema for Mentorship
  const mentorshipServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.cinutedigital.com/mentors#service",
    name: "1:1 Career Mentorship Program",
    description: "Personalized career mentorship from industry experts covering resume reviews, interview preparation, and career guidance",
    provider: {
      "@type": "EducationalOrganization",
      "@id": "https://www.cinutedigital.com/#organization",
      name: "CDPL - Cinute Digital",
    },
    serviceType: "Career Mentorship",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
  };

  // Organization Schema with Mentors
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.cinutedigital.com/#organization",
    name: "CDPL - Cinute Digital Pvt. Ltd.",
    url: "https://www.cinutedigital.com",
    description: "EdTech platform with expert mentors providing 1:1 career guidance",
    employee: MENTORS_DATA.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.title,
      description: m.bio,
      worksFor: {
        "@type": "Organization",
        name: "CDPL - Cinute Digital",
      },
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mentorshipServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

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
