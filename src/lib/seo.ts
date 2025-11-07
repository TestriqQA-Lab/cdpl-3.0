import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cinutedigital.com';
const SITE_NAME = 'CDPL - Cinute Digital';
const TWITTER_HANDLE = '@cinutedigital';
const DEFAULT_OG_IMAGE = '/og-image-default.jpg';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

/**
 * Generate standardized SEO metadata for pages
 * @param props SEO configuration
 * @returns Next.js Metadata object
 */
export function generateSEO({
  title,
  description,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  url = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
}: SEOProps): Metadata {
  const fullUrl = `${SITE_URL}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const altText = imageAlt || title;
  
  return {
    title,
    description,
    keywords,
    
    ...(author && { authors: [{ name: author }] }),
    
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: altText,
        },
      ],
      locale: 'en_IN',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      site: TWITTER_HANDLE,
      ...(author && { creator: TWITTER_HANDLE }),
    },
    
    alternates: {
      canonical: fullUrl,
    },
    
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generate Course schema for course pages
 */
export function generateCourseSchema(course: {
  name: string;
  description: string;
  url: string;
  price?: number;
  currency?: string;
  duration?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    url: course.url,
    provider: {
      '@type': 'EducationalOrganization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(course.image && {
      image: course.image.startsWith('http') ? course.image : `${SITE_URL}${course.image}`,
    }),
    ...(course.duration && {
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: course.duration,
      },
    }),
    ...(course.price && {
      offers: {
        '@type': 'Offer',
        category: 'Paid',
        priceCurrency: course.currency || 'INR',
        price: course.price,
      },
    }),
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate Person schema for trainers/mentors
 */
export function generatePersonSchema(person: {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    ...(person.description && { description: person.description }),
    ...(person.image && {
      image: person.image.startsWith('http') ? person.image : `${SITE_URL}${person.image}`,
    }),
    ...(person.url && { url: person.url }),
    worksFor: {
      '@type': 'EducationalOrganization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(person.sameAs && person.sameAs.length > 0 && { sameAs: person.sameAs }),
  };
}

/**
 * Generate Review/AggregateRating schema
 */
export function generateReviewSchema(reviews: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
  reviews?: Array<{
    author: string;
    rating: number;
    text: string;
    datePublished?: string;
  }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviews.ratingValue,
      reviewCount: reviews.reviewCount,
      bestRating: reviews.bestRating || 5,
      worstRating: reviews.worstRating || 1,
    },
    ...(reviews.reviews && reviews.reviews.length > 0 && {
      review: reviews.reviews.map((review) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.author,
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1,
        },
        reviewBody: review.text,
        ...(review.datePublished && { datePublished: review.datePublished }),
      })),
    }),
  };
}

/**
 * Generate ContactPage schema
 */
export function generateContactPageSchema(contact: {
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact-us#contactpage`,
    url: `${SITE_URL}/contact-us`,
    name: 'Contact Us',
    description: 'Get in touch with CDPL - Cinute Digital for course inquiries, admissions, and support',
    mainEntity: {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      ...(contact.telephone && {
        telephone: contact.telephone,
      }),
      ...(contact.email && {
        email: contact.email,
      }),
      ...(contact.address && {
        address: {
          '@type': 'PostalAddress',
          ...contact.address,
        },
      }),
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Admissions',
          ...(contact.telephone && { telephone: contact.telephone }),
          ...(contact.email && { email: contact.email }),
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          ...(contact.telephone && { telephone: contact.telephone }),
          ...(contact.email && { email: contact.email }),
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      ],
    },
  };
}

/**
 * Generate LocalBusiness schema (for contact/location pages)
 */
export function generateLocalBusinessSchema(business: {
  name: string;
  description: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}/#localbusiness`,
    name: business.name,
    description: business.description,
    url: SITE_URL,
    telephone: business.telephone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      ...business.address,
    },
    ...(business.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
    }),
    ...(business.openingHours && {
      openingHoursSpecification: business.openingHours.map((hours) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hours.split(' ')[0],
        opens: hours.split(' ')[1],
        closes: hours.split(' ')[2],
      })),
    }),
    ...(business.priceRange && { priceRange: business.priceRange }),
  };
}
