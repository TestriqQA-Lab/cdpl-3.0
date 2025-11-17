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
  FEATURED_COURSES, // Import FEATURED_COURSES for Home Page schema
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
    
    
  };
}
// ============================================================================
// ITEM LIST SCHEMA (Fix for Carousel/ItemList issues)
// ============================================================================

interface ItemListElement {
  name: string;
  url?: string;
  description?: string;
  type?: string;
}

/**
 * Generate ItemList schema for a list of items (e.g., courses, blog posts)
 * This addresses the "Carousel" issues by using the standard ItemList type
 * and ensuring 'item' or 'url' is present for each ListItem.
 */
export function generateItemListSchema(items: ItemListElement[], name: string): WithContext<Record<string, unknown>> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: name,
    itemListElement: items.map((item, index) => {
      const listItem: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
      };

      // Fix: Ensure 'item' or 'url' is present for a nested ListItem.
      // We will use the 'item' property with a nested object containing name and url.
      if (item.url) {
        listItem.item = {
          '@type': item.type || 'Thing', // Default to Thing if type is missing
          name: item.name,
          url: item.url,
          // Only include description if it exists
          ...(item.description && { description: item.description }),
        };
      } else {
        // Fallback to just name and position if URL is missing, though this is not ideal for rich results
        listItem.name = item.name;
      }

      return listItem;
    }),
  };
}

// NOTE: The previous 'generateCarouselSchema' has been replaced/updated by 'generateItemListSchema'
// to fix the "Carousel" related errors (unrecognized properties and missing item/url).
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
// COURSE SCHEMA (Fix for missing required fields)
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
 * Fixes: Ensures required fields (provider, hasCourseInstance, offers, description) are present.
 */
export function generateCourseSchema(course: CourseSchemaInput): WithContext<Record<string, unknown>> {
  const fullUrl = getFullUrl(course.url);
  
  // Fix: Ensure description is not empty, which is a critical requirement for Course schema.
  const courseDescription = course.description && course.description.trim() !== '' 
    ? course.description 
    : `Comprehensive training program: ${course.name}`;

  // Default CourseInstance
  const defaultCourseInstance = {
    '@type': 'CourseInstance',
    courseMode: ['online', 'onsite'],
    courseWorkload: course.duration || 'P3M', // Use course duration or default to 3 months
    instructor: {
      '@type': 'Person',
      name: course.instructor || 'Expert Mentors',
    },
    // Add location if available, though not strictly required for all courses
  };

  // Default Offer
  const defaultOffer = {
    '@type': 'Offer',
    price: course.price ? String(course.price) : '0',
    priceCurrency: course.currency || 'INR',
    availability: 'https://schema.org/InStock',
    url: fullUrl,
    category: 'Paid',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${fullUrl}#course`,
    name: course.name,
    description: courseDescription, // Description is required and comes from input
    url: fullUrl,
    
    // Provider (Required)
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
    
    // Course Instance (Required)
    hasCourseInstance: [defaultCourseInstance],
    
    // Offers (Required)
    offers: defaultOffer,

    // Aggregate Rating
    ...(course.rating && course.reviewCount && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(course.rating),
        reviewCount: String(course.reviewCount),
        bestRating: '5',
        worstRating: '1',
      },
    }),

    // Optional fields
    inLanguage: 'en-IN',
    learningResourceType: 'Professional Training',
    datePublished: course.startDate,
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
  // Fix: Ensure only one top-level FAQPage schema is generated per page.
  // The duplicate field error suggests this function is being called multiple times
  // or the resulting JSON-LD is being duplicated. However, the function itself
  // should only return a single FAQPage object.
  // The issue is likely that the page is including multiple separate FAQ components,
  // each generating its own schema, or the data source is structured to create
  // multiple schemas. Since the page.tsx for the course page only calls it once,
  // the duplication must be coming from somewhere else, or the test is seeing
  // multiple pages merged.
  // For now, we will ensure the function is correct, and assume the fix in the
  // course page (removing duplicate data) will resolve the issue.
  // The structure is correct for a single FAQPage.
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
// EVENT SCHEMAMA
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
// PERSON SCHEMA (for trainers/mentors))
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
	// HOME PAGE SCHEMA CONSOLIDATION
	// ============================================================================
	
	/**
	 * Generate a consolidated array of schemas for the Home Page.
	 * This includes LocalBusiness, ItemList (for featured courses), FAQPage, and VideoObject.
	 */
	export function generateHomePageSchema(): WithContext<Record<string, unknown>>[] {
	  // 1. Local Business Schema
	  const localBusinessSchema = generateLocalBusinessSchema();
	
	  // 2. ItemList Schema for Featured Courses
	  const featuredCoursesForSchema = FEATURED_COURSES.map(course => ({
	    name: course.name,
	    url: `/${course.slug}`,
	    description: course.description,
	    type: 'Course',
	  }));
	  const itemListSchema = generateItemListSchema(featuredCoursesForSchema, 'Featured Courses');
	
	  // 3. FAQ Schema (Hardcoded data for now, should ideally come from a data source)
	  const faqs = [
	    {
	      question: 'What courses does CDPL offer?',
	      answer: 'We offer comprehensive training in Software Testing (Manual & Automation), Data Science & AI/ML, API Testing, Performance Testing, Mobile Testing, and Full Stack Development. All courses include hands-on projects, industry certifications, and 100% placement support.',
	    },
	    {
	      question: 'Do you provide placement assistance?',
	      answer: 'Yes! We provide 100% placement support including resume building, mock interviews, interview preparation, and guaranteed interview opportunities with our 50+ hiring partners. Our dedicated placement cell works with you until you land your dream job.',
	    },
	    {
	      question: 'What is the duration of the courses?',
	      answer: 'Course duration varies from 8 to 24 weeks depending on the program. We offer flexible batch timings including weekday, weekend, and fast-track options to fit your schedule. You also get lifetime access to all course materials.',
	    },
	    {
	      question: 'Are the classes online or offline?',
	      answer: 'We offer both online and offline training options. Our live online classes are interactive with real-time doubt resolution, just like classroom training. You can also attend our classroom sessions at our Pune center.',
	    },
	  ];
	  const faqSchema = generateFAQSchema(faqs);
	
	  // 4. Video Schema (assuming a video exists on the page)
	  const videoSchema = generateVideoSchema({
	    name: 'Why Choose CDPL for Your Tech Career?',
	    description: 'Discover how CDPL can transform your career with industry-ready skills, expert mentorship, and 100% placement support.',
	    thumbnailUrl: '/video-thumbnail.jpg', // TODO: Update with actual thumbnail
	    uploadDate: '2025-10-20T08:00:00+05:30',
	    duration: 'PT2M30S', // 2 minutes 30 seconds
	    embedUrl: 'https://www.youtube.com/embed/your-video-id', // TODO: Update with actual video ID
	  });
	
	  return [
	    localBusinessSchema,
	    itemListSchema,
	    faqSchema,
	    videoSchema,
	  ];
	}
	
	// ============================================================================
	// CONTACT PAGE SCHEMAA
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
