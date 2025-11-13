/**
 * ============================================================================
 * COMPREHENSIVE SCHEMA GENERATORS FOR CDPL
 * ============================================================================
 * 
 * This file contains all schema.org structured data generators following
 * Google's rich results guidelines and best practices for educational
 * organizations.
 * 
 * @version 2.0.0
 * @updated 2025-11-12
 */

import {
  SITE_CONFIG,
  BUSINESS_INFO,
  STATISTICS,
  CERTIFICATIONS,
  getSocialMediaUrls,
  getFullUrl,
  getImageUrl,
  getOrganizationId,
  getWebsiteId,
} from './seo-config';

// Type definitions for schema.org structured data
type WithContext<T> = T & { '@context': string };

// ============================================================================
// ORGANIZATION SCHEMA (Knowledge Graph)
// ============================================================================

/**
 * Generate comprehensive Organization schema for knowledge graph
 * This appears on all pages via root layout
 */
export function generateOrganizationSchema(): WithContext<Record<string, unknown>> {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': getOrganizationId(),
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_CONFIG.url}/#logo`,
      url: getImageUrl(SITE_CONFIG.logo),
      width: SITE_CONFIG.logoWidth,
      height: SITE_CONFIG.logoHeight,
      caption: SITE_CONFIG.name,
    },
    image: {
      '@type': 'ImageObject',
      url: getImageUrl(SITE_CONFIG.defaultOgImage),
      width: SITE_CONFIG.defaultOgImageWidth,
      height: SITE_CONFIG.defaultOgImageHeight,
    },
    description: 'Leading EdTech company providing industry-focused training in Software Testing, Data Science, AI/ML, and Digital Marketing with 100% placement support.',
    slogan: SITE_CONFIG.tagline,
    
    // Contact Information
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    
    // Address
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    
    // Geo Location
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    
    // Contact Points
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phone,
        contactType: 'customer service',
        email: BUSINESS_INFO.email,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phone,
        contactType: 'admissions',
        email: BUSINESS_INFO.admissionsEmail,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phone,
        contactType: 'technical support',
        email: BUSINESS_INFO.supportEmail,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    
    // Social Media Profiles (Knowledge Graph)
    sameAs: getSocialMediaUrls(),
    
    // Aggregate Rating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: STATISTICS.rating,
      reviewCount: STATISTICS.reviewCount,
      bestRating: STATISTICS.maxRating,
      worstRating: 1,
    },
    
    // Founding Date
    foundingDate: BUSINESS_INFO.foundedYear,
    
    // Number of Employees
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: BUSINESS_INFO.numberOfEmployees,
    },
    
    // Opening Hours
    openingHoursSpecification: BUSINESS_INFO.openingHours.map((hours) => {
      const [day, timeRange] = hours.split(' ');
      const [opens, closes] = timeRange.split('-');
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day,
        opens,
        closes,
      };
    }),
    
    // Area Served
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    
    // Credentials
    hasCredential: CERTIFICATIONS.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: cert.type,
      recognizedBy: {
        '@type': 'Organization',
        name: cert.issuer,
      },
      name: cert.name,
    })),
    
    // Course Offerings
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Training Courses',
      itemListElement: [
        {
          '@type': 'Course',
          name: 'Software Testing Training',
          description: 'Comprehensive software testing course with manual and automation testing. Learn test case design, defect management, automation frameworks, and API testing with hands-on projects.',
          url: `${SITE_CONFIG.url}/manual-testing-course`,
          provider: {
            '@type': 'EducationalOrganization',
            '@id': getOrganizationId(),
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          },
          hasCourseInstance: [
            {
              '@type': 'CourseInstance',
              courseMode: ['online', 'onsite'],
              courseWorkload: 'P3M',
              instructor: {
                '@type': 'Person',
                name: 'Expert QA Mentors',
              },
            },
          ],
          offers: {
            '@type': 'Offer',
            price: '25000',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_CONFIG.url}/manual-testing-course`,
            category: 'Paid',
          },
        },
        {
          '@type': 'Course',
          name: 'Data Science Training',
          description: 'Complete data science course with Python, ML, and AI. Master data analysis, visualization, statistical modeling, and machine learning with real-world projects.',
          url: `${SITE_CONFIG.url}/data-science-course`,
          provider: {
            '@type': 'EducationalOrganization',
            '@id': getOrganizationId(),
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          },
          hasCourseInstance: [
            {
              '@type': 'CourseInstance',
              courseMode: ['online', 'onsite'],
              courseWorkload: 'P4M',
              instructor: {
                '@type': 'Person',
                name: 'Expert Data Scientists',
              },
            },
          ],
          offers: {
            '@type': 'Offer',
            price: '45000',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_CONFIG.url}/data-science-course`,
            category: 'Paid',
          },
        },
        {
          '@type': 'Course',
          name: 'AI & Machine Learning Training',
          description: 'Advanced AI/ML course with hands-on projects. Learn deep learning, neural networks, NLP, computer vision, and generative AI with industry applications.',
          url: `${SITE_CONFIG.url}/machine-learning-course`,
          provider: {
            '@type': 'EducationalOrganization',
            '@id': getOrganizationId(),
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          },
          hasCourseInstance: [
            {
              '@type': 'CourseInstance',
              courseMode: ['online', 'onsite'],
              courseWorkload: 'P5M',
              instructor: {
                '@type': 'Person',
                name: 'Expert AI/ML Engineers',
              },
            },
          ],
          offers: {
            '@type': 'Offer',
            price: '45000',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_CONFIG.url}/machine-learning-course`,
            category: 'Paid',
          },
        },
      ],
    },
  };
}

// ============================================================================
// WEBSITE SCHEMA
// ============================================================================

/**
 * Generate Website schema with search action
 */
export function generateWebsiteSchema(): WithContext<Record<string, unknown>> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': getWebsiteId(),
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: 'Professional training in Software Testing, Data Science, AI/ML with 100% placement support',
    publisher: {
      '@id': getOrganizationId(),
    },
    inLanguage: 'en-IN',
    
    // Search Action (enables Google Search Box)
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ============================================================================
// LOCAL BUSINESS SCHEMA
// ============================================================================

/**
 * Generate LocalBusiness schema for location-based searches
 */
export function generateLocalBusinessSchema(): WithContext<Record<string, unknown>> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    image: getImageUrl(SITE_CONFIG.defaultOgImage),
    url: SITE_CONFIG.url,
    telephone: BUSINESS_INFO.phone,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: BUSINESS_INFO.openingHours.map((hours) => {
      const [day, timeRange] = hours.split(' ');
      const [opens, closes] = timeRange.split('-');
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day,
        opens,
        closes,
      };
    }),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: STATISTICS.rating,
      reviewCount: STATISTICS.reviewCount,
    },
  };
}

// ============================================================================
// COURSE SCHEMA
// ============================================================================

interface CourseSchemaInput {
  name: string;
  description: string;
  url: string;
  slug: string;
  price?: number;
  currency?: string;
  duration?: string; // ISO 8601 format (e.g., "P12W" for 12 weeks)
  level?: string;
  image?: string;
  rating?: number;
  reviewCount?: number;
  enrollmentCount?: number;
  syllabus?: string[];
  prerequisites?: string[];
  learningOutcomes?: string[];
  instructor?: string;
  startDate?: string;
  endDate?: string;
}

/**
 * Generate Course schema for individual course pages
 */
export function generateCourseSchema(course: CourseSchemaInput): WithContext<Record<string, unknown>> {
  const fullUrl = getFullUrl(course.url);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${fullUrl}#course`,
    name: course.name,
    description: course.description,
    url: fullUrl,
    
    // Provider
    provider: {
      '@type': 'EducationalOrganization',
      '@id': getOrganizationId(),
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    
    // Image
    ...(course.image && {
      image: getImageUrl(course.image),
    }),
    
    // Course Instance
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['online', 'blended'],
      courseWorkload: course.duration || 'P12W',
      ...(course.instructor && {
        instructor: {
          '@type': 'Person',
          name: course.instructor,
        },
      }),
      ...(course.startDate && { startDate: course.startDate }),
      ...(course.endDate && { endDate: course.endDate }),
    },
    
    // Pricing
    ...(course.price !== undefined && {
      offers: {
        '@type': 'Offer',
        category: 'Paid',
        priceCurrency: course.currency || 'INR',
        price: course.price,
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString(),
        url: fullUrl,
      },
    }),
    
    // Educational Level
    ...(course.level && {
      educationalLevel: course.level,
    }),
    
    // Prerequisites
    ...(course.prerequisites && course.prerequisites.length > 0 && {
      coursePrerequisites: course.prerequisites,
    }),
    
    // Learning Outcomes
    ...(course.learningOutcomes && course.learningOutcomes.length > 0 && {
      teaches: course.learningOutcomes,
    }),
    
    // Syllabus
    ...(course.syllabus && course.syllabus.length > 0 && {
      syllabusSections: course.syllabus.map((section, index) => ({
        '@type': 'Syllabus',
        position: index + 1,
        name: section,
      })),
    }),
    
    // Aggregate Rating
    ...(course.rating && course.reviewCount && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: course.rating,
        reviewCount: course.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    
    // Total enrollment
    ...(course.enrollmentCount && {
      numberOfStudents: course.enrollmentCount,
    }),
  };
}

// ============================================================================
// ITEM LIST SCHEMA (for course listings)
// ============================================================================

interface ItemListItem {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

/**
 * Generate ItemList schema for course listings
 */
export function generateItemListSchema(
  items: ItemListItem[],
  listName: string = 'Courses'
): WithContext<Record<string, unknown>> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: item.name,
        url: getFullUrl(item.url),
        description: item.description || `Professional training course in ${item.name}`,
        image: item.image ? getImageUrl(item.image) : getImageUrl('/cdpl-logo.png'),
        brand: {
          '@type': 'Brand',
          name: SITE_CONFIG.name,
        },
        offers: {
          '@type': 'Offer',
          price: '25000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };
}

// ============================================================================
// FAQ SCHEMA
// ============================================================================

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: FAQItem[]): WithContext<Record<string, unknown>> {
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

// ============================================================================
// BREADCRUMB SCHEMA
// ============================================================================

interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): WithContext<Record<string, unknown>> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getFullUrl(item.url),
    })),
  };
}

// ============================================================================
// ARTICLE SCHEMA (for blog posts)
// ============================================================================

interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  image?: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  keywords?: string[];
  wordCount?: number;
  category?: string;
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(article: ArticleSchemaInput): WithContext<Record<string, unknown>> {
  const fullUrl = getFullUrl(article.url);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${fullUrl}#article`,
    headline: article.title,
    description: article.description,
    url: fullUrl,
    
    // Image
    ...(article.image && {
      image: {
        '@type': 'ImageObject',
        url: getImageUrl(article.image),
        width: 1200,
        height: 630,
      },
    }),
    
    // Author
    author: {
      '@type': 'Person',
      name: article.author,
    },
    
    // Publisher
    publisher: {
      '@type': 'Organization',
      '@id': getOrganizationId(),
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: getImageUrl(SITE_CONFIG.logo),
      },
    },
    
    // Dates
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    
    // Keywords
    ...(article.keywords && article.keywords.length > 0 && {
      keywords: article.keywords.join(', '),
    }),
    
    // Word Count
    ...(article.wordCount && {
      wordCount: article.wordCount,
    }),
    
    // Category
    ...(article.category && {
      articleSection: article.category,
    }),
    
    // Main Entity
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    
    // Language
    inLanguage: 'en-IN',
  };
}

// ============================================================================
// REVIEW SCHEMA
// ============================================================================

interface ReviewItem {
  author: string;
  rating: number;
  text: string;
  datePublished?: string;
}

interface ReviewSchemaInput {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
  reviews?: ReviewItem[];
}

/**
 * Generate Review/AggregateRating schema
 */
export function generateReviewSchema(reviewData: ReviewSchemaInput): WithContext<Record<string, unknown>> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': getOrganizationId(),
    name: SITE_CONFIG.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviewData.ratingValue,
      reviewCount: reviewData.reviewCount,
      bestRating: reviewData.bestRating || 5,
      worstRating: reviewData.worstRating || 1,
    },
    ...(reviewData.reviews && reviewData.reviews.length > 0 && {
      review: reviewData.reviews.map((review) => ({
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

// ============================================================================
// VIDEO SCHEMA
// ============================================================================

interface VideoSchemaInput {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 format (e.g., "PT1M30S" for 1 min 30 sec)
  contentUrl?: string;
  embedUrl?: string;
}

/**
 * Generate VideoObject schema
 */
export function generateVideoSchema(video: VideoSchemaInput): WithContext<Record<string, unknown>> {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: getImageUrl(video.thumbnailUrl),
    uploadDate: video.uploadDate,
    ...(video.duration && { duration: video.duration }),
    ...(video.contentUrl && { contentUrl: video.contentUrl }),
    ...(video.embedUrl && { embedUrl: video.embedUrl }),
    publisher: {
      '@type': 'Organization',
      '@id': getOrganizationId(),
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: getImageUrl(SITE_CONFIG.logo),
      },
    },
  };
}

// ============================================================================
// EVENT SCHEMA
// ============================================================================

interface EventSchemaInput {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: {
    name: string;
    address?: string;
  };
  image?: string;
  eventAttendanceMode?: 'OnlineEventAttendanceMode' | 'OfflineEventAttendanceMode' | 'MixedEventAttendanceMode';
  eventStatus?: 'EventScheduled' | 'EventCancelled' | 'EventPostponed';
  isAccessibleForFree?: boolean;
}

/**
 * Generate Event schema for webinars, workshops, etc.
 */
export function generateEventSchema(event: EventSchemaInput): WithContext<Record<string, unknown>> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    ...(event.endDate && { endDate: event.endDate }),
    
    // Event attendance mode
    eventAttendanceMode: `https://schema.org/${event.eventAttendanceMode || 'OnlineEventAttendanceMode'}`,
    
    // Event status
    eventStatus: `https://schema.org/${event.eventStatus || 'EventScheduled'}`,
    
    // Location
    ...(event.location && {
      location: {
        '@type': 'Place',
        name: event.location.name,
        ...(event.location.address && {
          address: {
            '@type': 'PostalAddress',
            streetAddress: event.location.address,
          },
        }),
      },
    }),
    
    // Image
    ...(event.image && {
      image: getImageUrl(event.image),
    }),
    
    // Organizer
    organizer: {
      '@type': 'Organization',
      '@id': getOrganizationId(),
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    
    // Free or Paid
    isAccessibleForFree: event.isAccessibleForFree !== undefined ? event.isAccessibleForFree : true,
  };
}

// ============================================================================
// PERSON SCHEMA (for trainers/mentors)
// ============================================================================

interface PersonSchemaInput {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[]; // Social media profiles
  email?: string;
}

/**
 * Generate Person schema for trainers/mentors
 */
export function generatePersonSchema(person: PersonSchemaInput): WithContext<Record<string, unknown>> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    ...(person.description && { description: person.description }),
    ...(person.image && { image: getImageUrl(person.image) }),
    ...(person.url && { url: getFullUrl(person.url) }),
    ...(person.email && { email: person.email }),
    worksFor: {
      '@type': 'EducationalOrganization',
      '@id': getOrganizationId(),
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    ...(person.sameAs && person.sameAs.length > 0 && { sameAs: person.sameAs }),
  };
}

// ============================================================================
// CONTACT PAGE SCHEMA
// ============================================================================

/**
 * Generate ContactPage schema
 */
export function generateContactPageSchema(): WithContext<Record<string, unknown>> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_CONFIG.url}/contact-us#contactpage`,
    url: `${SITE_CONFIG.url}/contact-us`,
    name: 'Contact Us',
    description: 'Get in touch with CDPL - Cinute Digital for course inquiries, admissions, and support',
    mainEntity: {
      '@type': 'EducationalOrganization',
      '@id': getOrganizationId(),
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      address: {
        '@type': 'PostalAddress',
        ...BUSINESS_INFO.address,
      },
    },
  };
}
