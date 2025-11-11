// src/app/events/[slug]/page.tsx
import { getEventBySlug, pastEvents } from "@/data/eventsData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { CorporateRegistrationModal } from "@/components/events";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";
import { Suspense } from "react";
import EventDetailPageContent from "./EventDetailPageContent";

type PageProps = { params: Promise<{ slug: string }> };

// Small loader for dynamic sections
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// Sections (SSR enabled by default – OK in Server Components)
const EventDetailsHeroSection = dynamic(
  () => import("@/components/sections/EventDetailsHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const EventDetailsTwoColumnSection = dynamic(
  () => import("@/components/sections/EventDetailsTwoColumnSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading details..." /> }
);

const EventDetailsOrganizerSection = dynamic(
  () => import("@/components/sections/EventDetailsOrganizerSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading organizer..." /> }
);

const EventDetailsVenueSection = dynamic(
  () => import("@/components/sections/EventDetailsVenueSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading venue..." /> }
);

const EventDetailsImageGallerySection = dynamic(
  () => import("@/components/sections/EventDetailsImageGallerySection"),
  { ssr: true, loading: () => <SectionLoader label="Loading gallery..." /> }
);

export async function generateStaticParams() {
  return pastEvents.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };

  return generateSEO({
    title: `${event.title} - ${event.category} Event | CDPL`,
    description: `${event.purpose || event.subtitle} - ${event.category} event organized by ${event.organization || "CDPL"} at ${event.location}. ${event.attendees ? `Attended by ${event.attendees}+ participants.` : ""} View highlights, sessions, and key takeaways.`,
    keywords: [
      event.category,
      event.title,
      "CDPL event",
      "corporate training",
      "workshop",
      event.organization || "CDPL",
      event.location,
      "technical training",
      "professional development",
      "industry event",
      ...(event.category.toLowerCase().includes("testing") ? ["software testing", "QA training"] : []),
      ...(event.category.toLowerCase().includes("data") ? ["data science", "analytics"] : []),
      ...(event.category.toLowerCase().includes("ai") ? ["artificial intelligence", "machine learning"] : []),
    ],
    url: `/events/${slug}`,
    image: "/og-images/og-image-events.webp",
    imageAlt: `${event.title} - ${event.category} Event`,
  });
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const totalSessions = event.sessionHighlights?.length ?? 0;
  const totalBullets =
    event.sessionHighlights?.reduce(
      (n: number, s: { points: string[] }) => n + (s.points?.length ?? 0),
      0
    ) ?? 0;

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Events", url: "/events/past-events" },
    { name: event.title, url: `/events/${slug}` },
  ]);

  // Event Schema
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `https://www.cinutedigital.com/events/${slug}#event`,
    name: event.title,
    description: event.purpose || event.subtitle,
    startDate: event.date,
    endDate: event.date,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.location,
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: event.organization || "CDPL - Cinute Digital Pvt. Ltd.",
      url: "https://www.cinutedigital.com",
    },
    image: "https://www.cinutedigital.com/og-images/og-image-events.webp",
    ...(event.attendees && {
      attendee: {
        "@type": "AudienceCount",
        audienceSize: event.attendees,
      },
    }),
    about: {
      "@type": "Thing",
      name: event.category,
      description: `${event.category} training and professional development`,
    },
    ...(event.highlights && event.highlights.length > 0 && {
      description: `${event.purpose || event.subtitle}. Key highlights: ${event.highlights.slice(0, 3).join(", ")}`,
    }),
  };

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://www.cinutedigital.com/events/${slug}#article`,
    headline: event.title,
    description: event.purpose || event.subtitle,
    datePublished: event.date,
    author: {
      "@type": "Organization",
      name: event.organization || "CDPL - Cinute Digital Pvt. Ltd.",
    },
    publisher: {
      "@type": "Organization",
      name: "CDPL - Cinute Digital Pvt. Ltd.",
      logo: {
        "@type": "ImageObject",
        url: "https://www.cinutedigital.com/logo.png",
      },
    },
    image: "https://www.cinutedigital.com/og-images/og-image-events.webp",
    articleSection: event.category,
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Main Content */}
      <div itemScope itemType="https://schema.org/Event">
        <meta itemProp="name" content={event.title} />
        <meta itemProp="description" content={event.purpose || event.subtitle} />
        <meta itemProp="startDate" content={event.date} />
        <meta itemProp="location" content={event.location} />

        <EventDetailsHeroSection event={event} />

        <EventDetailsTwoColumnSection
          event={event}
          totalSessions={totalSessions}
          totalBullets={totalBullets}
          extras={
            <>
              <EventDetailsOrganizerSection event={event} />
              <EventDetailsVenueSection event={event} />
              <EventDetailsImageGallerySection event={event} />
            </>
          }
        />
      </div>

      <CorporateRegistrationModal />

      {/* Handle referral tracking on client */}
      <Suspense fallback={null}>
        <EventDetailPageContent />
      </Suspense>
    </>
  );
}