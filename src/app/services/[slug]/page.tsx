// app/services/[slug]/page.tsx
import { getServiceBySlug } from '@/data/servicesData';
import { getEventsByService } from '@/data/eventsData';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ServiceClient } from '@/types/service';
import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';

// --- infer the concrete service type from your data function ---
type TrainingService = ReturnType<typeof getServiceBySlug> extends infer T
  ? NonNullable<T>
  : never;

// --- map server model -> serializable client model (no React components) ---
function toClientService(s: TrainingService): ServiceClient {
  // some datasets may not declare these extras in the TS type
  const extras = s as unknown as {
    iconName?: string;
    stats?: ServiceClient['stats'];
    keywords?: ServiceClient['keywords'];
  };

  return {
    id: s.id,
    slug: s.slug,
    iconName: extras.iconName ?? 'GraduationCap', // send only a string, never a component
    title: s.title,
    tagline: s.tagline,
    shortDescription: s.shortDescription,
    fullDescription: s.fullDescription,
    color: s.color,
    features: s.features,
    benefits: s.benefits,
    whoShouldAttend: s.whoShouldAttend,
    deliveryFormats: s.deliveryFormats,
    outcomes: s.outcomes,
    methodology: s.methodology,
    stats: extras.stats,
    keywords: extras.keywords,
  };
}

// ------- Reusable loader for dynamic sections -------
function SectionLoader({ label = 'Loading...' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled) ----------
const ServiceDetailHeroSection = dynamic(
  () => import('@/components/sections/ServiceDetailHeroSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);
const ServiceDetailAboutSection = dynamic(
  () => import('@/components/sections/ServiceDetailAboutSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading about..." /> }
);
const ServiceDetailStatsSection = dynamic(
  () => import('@/components/sections/ServiceDetailStatsSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading stats..." /> }
);
const ServiceDetailFeaturesBenefitsSection = dynamic(
  () => import('@/components/sections/ServiceDetailFeaturesBenefitsSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading features..." /> }
);
const ServiceDetailAudienceSection = dynamic(
  () => import('@/components/sections/ServiceDetailAudienceSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading audience..." /> }
);
const ServiceDetailOutcomesSection = dynamic(
  () => import('@/components/sections/ServiceDetailOutcomesSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading outcomes..." /> }
);
const ServiceDetailMethodologySection = dynamic(
  () => import('@/components/sections/ServiceDetailMethodologySection'),
  { ssr: true, loading: () => <SectionLoader label="Loading methodology..." /> }
);
const ServiceDetailPastEventsSection = dynamic(
  () => import('@/components/sections/ServiceDetailPastEventsSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading events..." /> }
);
const ServiceDetailCTASection = dynamic(
  () => import('@/components/sections/ServiceDetailCTASection'),
  { ssr: true, loading: () => <SectionLoader label="Loading call-to-action..." /> }
);

// ============================================================================
// ENHANCED METADATA GENERATION FOR SEO
// ============================================================================
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return { 
      title: 'Service Not Found | 404 - CDPL',
      description: 'The requested service page could not be found. Browse our available training services and corporate programs.',
      robots: { 
        index: false,
        follow: true 
      }
    };
  }

  // Extract keywords from service data
  const extras = service as unknown as { keywords?: string[] };
  const serviceKeywords = extras.keywords || [];

  // Build comprehensive keywords array
  const keywords = [
    service.title,
    `${service.title} training`,
    `${service.title} course`,
    `${service.title} corporate training`,
    `${service.title} workshop`,
    `${service.title} certification`,
    ...serviceKeywords,
    'CDPL training',
    'corporate training India',
    'professional development',
    'skill development',
    'industry training',
    'hands-on training',
    'mentor-led training',
    'job-ready skills',
    'Cinute Digital training'
  ];

  // Generate enhanced metadata using SEO utility
  return generateSEO({
    title: `${service.title} Training & Corporate Programs | CDPL`,
    description: `${service.tagline} — ${service.shortDescription} Learn ${service.title} with industry projects, mentor-led classes, and job-ready skills at CDPL.`,
    keywords,
    url: `/services/${slug}`,
    image: `/og-images/og-service-${slug}.webp`,
    type: 'article'
  });
}

// ============================================================================
// PAGE COMPONENT WITH ENHANCED STRUCTURED DATA
// ============================================================================
export default async function ServiceDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const pastEvents = getEventsByService(slug);

  // map to client-safe shape (no Record<string, unknown> cast; no destructuring of icon)
  const serviceForClient = toClientService(service);

  // ============================================================================
  // ENHANCED STRUCTURED DATA (JSON-LD)
  // ============================================================================
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${slug}` }
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // BreadcrumbList Schema
      breadcrumbSchema,
      
      // Course Schema - Enhanced
      {
        "@type": "Course",
        "@id": `https://www.cinutedigital.com/services/${slug}#course`,
        "name": service.title,
        "description": service.fullDescription || service.shortDescription,
        "provider": {
          "@type": "Organization",
          "name": "CDPL - Cinute Digital Pvt. Ltd.",
          "url": "https://www.cinutedigital.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.cinutedigital.com/logo.png",
            "width": 250,
            "height": 60
          },
          "sameAs": [
            "https://www.cinutedigital.com",
            "https://twitter.com/cinutedigital"
          ]
        },
        "url": `https://www.cinutedigital.com/services/${slug}`,
        "image": `https://www.cinutedigital.com/og-images/og-service-${slug}.webp`,
        "courseCode": slug.toUpperCase(),
        "educationalLevel": "Professional Development",
        "teaches": service.title,
        "inLanguage": "en-IN",
        "availableLanguage": ["en-IN", "hi-IN"],
        "coursePrerequisites": "Basic understanding of professional concepts",
        "occupationalCredentialAwarded": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certificate",
          "name": `${service.title} Training Certificate`
        },
        ...(service.outcomes && service.outcomes.length > 0 && {
          "courseOutcome": service.outcomes.map(outcome => ({
            "@type": "DefinedTerm",
            "name": outcome
          }))
        })
      },

      // Service Schema
      {
        "@type": "Service",
        "@id": `https://www.cinutedigital.com/services/${slug}#service`,
        "serviceType": service.title,
        "name": `${service.title} Training`,
        "description": service.fullDescription || service.shortDescription,
        "provider": {
          "@id": "https://www.cinutedigital.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": `https://www.cinutedigital.com/services/${slug}`,
          "servicePhone": "+91-XXXXXXXXXX",
          "availableLanguage": ["en-IN", "hi-IN"]
        },
        ...(service.features && service.features.length > 0 && {
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${service.title} Features`,
            "itemListElement": service.features.map((feature, index) => ({
              "@type": "Offer",
              "position": index + 1,
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            }))
          }
        })
      },

      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": `https://www.cinutedigital.com/services/${slug}`,
        "url": `https://www.cinutedigital.com/services/${slug}`,
        "name": `${service.title} Training & Corporate Programs`,
        "description": service.shortDescription,
        "isPartOf": {
          "@id": "https://www.cinutedigital.com/#website"
        },
        "breadcrumb": {
          "@id": `https://www.cinutedigital.com/services/${slug}#breadcrumb`
        },
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "ReadAction",
          "target": `https://www.cinutedigital.com/services/${slug}`
        }
      },

      // Organization Schema
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
        "description": "Leading provider of professional training and corporate programs in technology and business skills.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://twitter.com/cinutedigital"
        ]
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
      <main 
        className="overflow-hidden" 
        itemScope 
        itemType="https://schema.org/Course"
      >
        {/* Hidden metadata for schema.org */}
        <meta itemProp="name" content={service.title} />
        <meta itemProp="description" content={service.shortDescription} />
        <meta itemProp="provider" content="CDPL - Cinute Digital Pvt. Ltd." />

        {/* SEO-friendly H1 - Hidden visually but available for SEO */}
        <h1 className="sr-only">
          {service.title} Training & Corporate Programs by CDPL - {service.tagline}
        </h1>

        <ServiceDetailHeroSection service={serviceForClient} />
        <ServiceDetailAboutSection service={serviceForClient} />
        <ServiceDetailStatsSection service={serviceForClient} />
        <ServiceDetailFeaturesBenefitsSection service={serviceForClient} />
        <ServiceDetailAudienceSection service={serviceForClient} />
        <ServiceDetailOutcomesSection service={serviceForClient} />
        <ServiceDetailMethodologySection service={serviceForClient} />
        {pastEvents?.length > 0 && <ServiceDetailPastEventsSection events={pastEvents} />}
        <ServiceDetailCTASection service={serviceForClient} />
      </main>
    </>
  );
}
