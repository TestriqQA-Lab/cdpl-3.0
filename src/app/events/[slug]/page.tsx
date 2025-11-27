// src/app/events/[slug]/page.tsx
import { getEventBySlug, pastEvents } from "@/data/eventsData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateSEO } from "@/lib/seo";
import EventHero from "@/components/events/EventHero";
import EventContent from "@/components/events/EventContent";
import EventSidebar from "@/components/events/EventSidebar";
import EventGallery from "@/components/events/EventGallery";
import RelatedEvents from "@/components/events/RelatedEvents";

type PageProps = { params: Promise<{ slug: string }> };

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
    image: event.heroImageUrl || "/og-images/og-image-events.webp",
    imageAlt: `${event.title} - ${event.category} Event`,
  });
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: event.title,
            description: event.purpose || event.subtitle,
            startDate: event.date,
            location: {
              "@type": "Place",
              name: event.location,
              address: event.venueAddress,
            },
            organizer: {
              "@type": "Organization",
              name: event.organization,
              url: "https://cinutedigital.com",
            },
            image: event.heroImageUrl ? [event.heroImageUrl] : undefined,
          }),
        }}
      />

      {/* Hero Section - Full Width */}
      <EventHero event={event} />

      {/* Main Content Area - Contained */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column (2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-8">
            <EventContent event={event} />
            
            {event.gallery && event.gallery.length > 0 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <EventGallery event={event} />
              </div>
            )}
          </div>

          {/* Sidebar Column (1/3 width on desktop) */}
          <div className="lg:col-span-1">
            <EventSidebar event={event} />
          </div>
        </div>

        {/* Related Events Section - Full Width within Container */}
        {pastEvents.length > 1 && (
          <div className="mt-16">
            <RelatedEvents currentSlug={slug} />
          </div>
        )}
      </div>
    </div>
  );
}
