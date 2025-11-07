// app/events/past-events/page.tsx
import type { Metadata } from "next";
import type { ComponentProps } from "react";
import dynamic from "next/dynamic";
import { pastEvents } from "@/data/eventsData";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

// Type-only imports so we can still infer props and event shape
import type {
  default as EventsPastEventsAllEventsSectionType,
} from "@/components/sections/EventsPastEventsAllEventsSection";
import type { FeaturedEvent } from "@/components/sections/EventsPastEventsFeaturedEventsSliderSection";

// ============================================================================
// SEO METADATA - Enhanced for Past Events Page
// ============================================================================
export const metadata: Metadata = generateSEO({
  title: "Past Events - Workshops, Webinars & Training Sessions | CDPL",
  description: "Explore CDPL's past events including corporate training workshops, technical webinars, industry conferences, and hands-on training sessions on Software Testing, Data Science, AI/ML, and Automation. See highlights, attendees, and success stories from our events.",
  keywords: [
    "CDPL past events",
    "software testing workshops",
    "data science webinars",
    "technical training sessions",
    "corporate training events",
    "AI ML workshops",
    "automation testing events",
    "industry conferences",
    "CDPL events gallery",
    "training highlights",
    "tech events India",
    "developer workshops",
    "QA training events",
    "cloud computing workshops",
    "DevOps training sessions",
  ],
  url: "/events/past-events",
  image: "/og-images/og-image-events.webp",
  imageAlt: "CDPL Past Events - Workshops, Webinars & Training Sessions",
});

// Small inline loader for dynamic sections
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-8">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled) ----------
const EventsPastEventsAllEventsSection = dynamic(
  () => import("@/components/sections/EventsPastEventsAllEventsSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading events..." />,
  }
);

const EventsPastEventsFeaturedEventsSliderSection = dynamic(
  () => import("@/components/sections/EventsPastEventsFeaturedEventsSliderSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading featured events..." />,
  }
);

const EventsPastEventsFeatureEventsRequestTrainingButton = dynamic(
  () => import("@/components/sections/EventsPastEventsFeatureEventsRequestTrainingButton"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Preparing CTA..." />,
  }
);

const EventsPastEventsHeroSection = dynamic(
  () => import("@/components/sections/EventsPastEventsHeroSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading hero..." />,
  }
);

const EventsPastEventsCTASection = dynamic(
  () => import("@/components/sections/EventsPastEventsCTASection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading call-to-action..." />,
  }
);

// Infer prop types from the AllEvents section to avoid `any`
type AllEventsProps = ComponentProps<
  typeof EventsPastEventsAllEventsSectionType
>;

const CATEGORY_STYLES: Record<
  string,
  { badgeBg: string; btnBg: string; text: string }
> = {
  "AI & Machine Learning": {
    badgeBg: "bg-purple-600",
    btnBg: "bg-purple-600",
    text: "text-purple-600",
  },
  "Software Testing": {
    badgeBg: "bg-green-600",
    btnBg: "bg-green-600",
    text: "text-green-600",
  },
  "Data Science": {
    badgeBg: "bg-blue-600",
    btnBg: "bg-blue-600",
    text: "text-blue-600",
  },
  "Academic Training": {
    badgeBg: "bg-orange-600",
    btnBg: "bg-orange-600",
    text: "text-orange-600",
  },
  "Web Development": {
    badgeBg: "bg-cyan-600",
    btnBg: "bg-cyan-600",
    text: "text-cyan-600",
  },
  "Industrial Training": {
    badgeBg: "bg-teal-600",
    btnBg: "bg-teal-600",
    text: "text-teal-600",
  },
  "Corporate Training": {
    badgeBg: "bg-pink-600",
    btnBg: "bg-pink-600",
    text: "text-pink-600",
  },
  Technology: {
    badgeBg: "bg-indigo-600",
    btnBg: "bg-indigo-600",
    text: "text-indigo-600",
  },
};

const FALLBACK = {
  badgeBg: "bg-slate-700",
  btnBg: "bg-slate-700",
  text: "text-slate-700",
};

// ============================================================================
// PAST EVENTS PAGE COMPONENT
// ============================================================================
export default function PastEventsPage() {
  const featuredEvents: FeaturedEvent[] = pastEvents
    .filter((e) => e.featured)
    .map((e) => ({
      id: e.id,
      slug: e.slug,
      title: e.title,
      subtitle: e.subtitle,
      date: e.date,
      location: e.location,
      attendees: e.attendees,
      organization: e.organization,
      purpose: e.purpose,
      highlights: e.highlights,
      category: e.category,
      categoryColor: (CATEGORY_STYLES[e.category] ?? FALLBACK).badgeBg,
      featured: e.featured,
    }));

  // Type this exactly as the AllEvents section expects
  const regularEvents: AllEventsProps["events"] = pastEvents.filter(
    (e) => !e.featured
  ) as AllEventsProps["events"];

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Events", url: "/events/past-events" },
    { name: "Past Events", url: "/events/past-events" },
  ]);

  // CollectionPage Schema with Events
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.cinutedigital.com/events/past-events#collectionpage",
    url: "https://www.cinutedigital.com/events/past-events",
    name: "CDPL Past Events",
    description: "Browse our past workshops, webinars, and training events",
    inLanguage: "en-IN",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pastEvents.slice(0, 10).map((event, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Event",
          name: event.title,
          description: event.subtitle || event.purpose,
          startDate: event.date,
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: event.location,
          },
          organizer: {
            "@type": "Organization",
            name: event.organization || "CDPL - Cinute Digital",
          },
          ...(event.attendees && {
            attendee: {
              "@type": "AudienceCount",
              audienceSize: event.attendees,
            },
          }),
        },
      })),
    },
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.cinutedigital.com/#organization",
    name: "CDPL - Cinute Digital Pvt. Ltd.",
    url: "https://www.cinutedigital.com",
    event: pastEvents.slice(0, 5).map((event) => ({
      "@type": "Event",
      name: event.title,
      description: event.subtitle || event.purpose,
      startDate: event.date,
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: event.location,
      },
      organizer: {
        "@type": "Organization",
        name: "CDPL - Cinute Digital",
      },
    })),
  };

  // FAQ Schema - NEW!
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.cinutedigital.com/events/past-events#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of events does CDPL organize?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CDPL organizes various events including corporate training workshops, technical webinars, hands-on training sessions, industry conferences, and developer meetups covering Software Testing, Data Science, AI/ML, Automation, Cloud Computing, and DevOps.",
        },
      },
      {
        "@type": "Question",
        name: "Can I attend CDPL events online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, CDPL offers both online and offline events. Many of our webinars and training sessions are available online, while workshops and corporate training can be conducted both onsite and remotely.",
        },
      },
      {
        "@type": "Question",
        name: "How can I register for upcoming CDPL events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can register for upcoming CDPL events through our events page or by contacting our team directly. We announce new events through our website, social media, and email newsletters.",
        },
      },
      {
        "@type": "Question",
        name: "Are CDPL events free or paid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CDPL offers both free and paid events. Webinars and community meetups are often free, while comprehensive training workshops and certification programs are paid events with certificates of completion.",
        },
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Main Content - Semantic HTML Structure */}
      <div 
        className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"
        itemScope 
        itemType="https://schema.org/CollectionPage"
      >
        {/* Hidden metadata for schema.org */}
        <meta itemProp="name" content="CDPL Past Events" />
        <meta itemProp="description" content="Browse our past workshops, webinars, and training events" />
        <meta itemProp="url" content="https://www.cinutedigital.com/events/past-events" />

        {/* HERO (separate component) */}
        <EventsPastEventsHeroSection />

        {/* Featured */}
        {featuredEvents.length > 0 && (
          <section id="featured-events" className="py-10 w-full">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <h2 className="mb-6 text-4xl font-bold">
                <span style={{ color: "rgb(0, 105, 168)" }}>Featured</span>{" "}
                <span style={{ color: "rgb(255, 140, 0)" }}>Events</span>
              </h2>
              <EventsPastEventsFeaturedEventsSliderSection
                events={featuredEvents}
                autoplayMs={4500}
                cardHClass="h-[480px]"
              />
            </div>
          </section>
        )}

        {/* All Past Events */}
        <section id="all-past-events" className="py-10 w-full">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              All Past Events
            </h2>
            <EventsPastEventsAllEventsSection
              events={regularEvents}
              cardMinHClass="min-h-[480px]"
            />
          </div>
        </section>

        {/* CTA (separate component) */}
        <EventsPastEventsCTASection>
          <EventsPastEventsFeatureEventsRequestTrainingButton />
        </EventsPastEventsCTASection>
      </div>
    </>
  );
}
