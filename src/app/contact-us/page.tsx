import type { Metadata } from 'next';
import { ContactHeroSection } from '@/components/sections/ContactHeroSection';
import { ContactMethodsSection } from '@/components/sections/ContactMethodSection';
import { ContactOfficeMapSection } from '@/components/sections/ContactOfficeMapSection';
import { ContactBookCallSection } from '@/components/sections/ContactBookCall';
import { ContactFAQSection } from '@/components/sections/ContactFAQSection';
import ContactReviewSection from '@/components/sections/ContactReviewSection';
import { generateSEO, generateContactPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo';

// ============================================================================
// SEO METADATA - Optimized for Contact Page
// ============================================================================
export const metadata: Metadata = generateSEO({
  title: 'Contact us Cinute Digital | Get in Touch Today',
  description: 'Contact CDPL (Cinute Digital) for course inquiries, admissions support, and career guidance. Reach us via phone, email, WhatsApp, or visit our office in Mumbai. Expert advisors available to help with Software Testing, Data Science, and AI/ML courses.',
  keywords: [
    'contact CDPL',
    'Cinute Digital contact',
    'CDPL admissions',
    'software testing course inquiry',
    'data science training contact',
    'CDPL Mumbai office',
    'CDPL phone number',
    'CDPL email',
    'course inquiry',
    'admissions support',
    'career guidance',
    'training institute contact',
  ],
  url: '/contact-us',
  image: '/og-images/cdpl-og-image-contact.webp',
  imageAlt: 'Contact CDPL - Cinute Digital for Course Inquiries and Admissions Support',
});

// ============================================================================
// CONTACT PAGE COMPONENT
// ============================================================================
export default function ContactPage() {
  // Contact information (update with actual details)
  const contactInfo = {
    telephone: '+91-788-83-83-788',
    email: 'contact@cinutedigital.com',
    whatsapp: '+91-9152929342',
    address: {
      streetAddress: 'Office #1, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East, Mira Bhayandar, Maharashtra 401107', // Update with actual address
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '401107', // 
      addressCountry: 'IN',
    },
    geo: {
      latitude: 19.2935415786131,
      longitude: 72.87165844178195,
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact-us' },
  ]);

  // ContactPage Schema
  const contactPageSchema = generateContactPageSchema({
    telephone: contactInfo.telephone,
    email: contactInfo.email,
    address: contactInfo.address,
  });

  // LocalBusiness Schema (for better local SEO)
  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'Contact us Cinute Digital | Get in Touch Today',
    description: 'Leading EdTech institute offering industry-ready training in Software Testing, Data Science, AI/ML, and Automation with live projects, mentorship, and placement support.',
    telephone: contactInfo.telephone,
    email: contactInfo.email,
    address: contactInfo.address,
    geo: contactInfo.geo,
    openingHours: [
      'Monday 09:00-18:00',
      'Tuesday 09:00-18:00',
      'Wednesday 09:00-18:00',
      'Thursday 09:00-18:00',
      'Friday 09:00-18:00',
      'Saturday 09:00-15:00',
    ],
    priceRange: '₹₹',
  });

  // Organization Schema with Contact Points
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': 'https://www.cinutedigital.com/#organization',
    name: 'CDPL - Cinute Digital Pvt. Ltd.',
    alternateName: 'Cinute Digital',
    url: 'https://www.cinutedigital.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.cinutedigital.com/cdpl-logo.png',
      width: 600,
      height: 60,
    },
    description: 'Leading EdTech platform offering industry-ready training in Software Testing, Data Science, AI/ML, and Automation',
    telephone: contactInfo.telephone,
    email: contactInfo.email,
    address: {
      '@type': 'PostalAddress',
      ...contactInfo.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contactInfo.geo.latitude,
      longitude: contactInfo.geo.longitude,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contactInfo.telephone,
        contactType: 'Admissions',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: contactInfo.telephone,
        contactType: 'Customer Support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: contactInfo.telephone,
        contactType: 'Technical Support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/cinutedigital',
      'https://www.facebook.com/cinutedigital',
      'https://twitter.com/cinutedigital',
      'https://www.instagram.com/cinutedigital',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Main Content - Semantic HTML Structure */}
      <main className="relative min-h-[220vh]" itemScope itemType="https://schema.org/ContactPage">
        {/* Hidden metadata for schema.org */}
        <meta itemProp="name" content="Contact CDPL - Cinute Digital" />
        <meta itemProp="description" content="Get in touch with CDPL for course inquiries, admissions support, and career guidance" />
        <meta itemProp="url" content="https://www.cinutedigital.com/contact-us" />

        <ContactHeroSection />
        <ContactMethodsSection />
        <ContactOfficeMapSection />
        <ContactReviewSection />
        <ContactBookCallSection />
        <ContactFAQSection />
      </main>
    </>
  );
}
