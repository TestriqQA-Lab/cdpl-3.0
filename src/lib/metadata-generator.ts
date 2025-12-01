/**
 * ============================================================================
 * CENTRALIZED METADATA GENERATOR FOR CDPL
 * ============================================================================
 * 
 * This file provides a unified function to generate Next.js metadata objects
 * for all pages, ensuring consistency and following Next.js 15 best practices.
 * 
 * @version 2.0.0
 * @updated 2025-11-12
 */

import type { Metadata } from 'next';
import type { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';
import {
  SITE_CONFIG,
  SEO_DEFAULTS,
  SOCIAL_PROFILES,
  VERIFICATION,
  AI_OPTIMIZATION,
  getFullUrl,
  getImageUrl,
} from './seo-config';

export interface MetadataGeneratorInput {
  // Basic SEO
  title: string | TemplateString;
  description: string;
  keywords?: string[];

  // URL & Canonical
  url?: string;
  canonical?: string;

  // Open Graph
  type?: 'website' | 'article';
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;

  // Article-specific (for blog posts)
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];

  // Robots
  noindex?: boolean;
  nofollow?: boolean;

  // Additional
  locale?: string;
  alternateLocales?: string[];
}

export function generateMetadata(input: MetadataGeneratorInput): Metadata {
  const {
    title,
    description,
    keywords = [],
    url = '',
    canonical,
    type = 'website',
    image,
    imageAlt,
    imageWidth = SITE_CONFIG.defaultOgImageWidth,
    imageHeight = SITE_CONFIG.defaultOgImageHeight,
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
    noindex = false,
    nofollow = false,
    locale = SEO_DEFAULTS.locale,
    alternateLocales = SEO_DEFAULTS.alternateLocales,
  } = input;

  // Construct full URLs
  const fullUrl = getFullUrl(url);
  const canonicalUrl = canonical ? getFullUrl(canonical) : fullUrl;
  const ogImage = image ? getImageUrl(image) : getImageUrl(SITE_CONFIG.defaultOgImage);

  // Helper to get string title for OG/Twitter
  const titleString = typeof title === 'string'
    ? title
    : (title as { absolute: string }).absolute || (title as { default: string }).default || '';

  const ogImageAlt = imageAlt || titleString;

  // Merge keywords with defaults
  const allKeywords = [...new Set([...keywords, ...SEO_DEFAULTS.defaultKeywords])];

  return {
    // Basic Metadata
    title,
    description,
    keywords: allKeywords,

    // Authors
    ...(author && {
      authors: [{ name: author }],
    }),

    // Creator & Publisher
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,

    // Category
    category: 'education',

    // Canonical URL & Hreflang
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'x-default': fullUrl,
        'en': fullUrl,
        'en-IN': fullUrl,
        'en-US': fullUrl,
        'en-GB': fullUrl,
      },
    },

    // Open Graph
    openGraph: {
      type,
      locale,
      alternateLocale: alternateLocales,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      title: titleString,
      description,
      images: [
        {
          url: ogImage,
          width: imageWidth,
          height: imageHeight,
          alt: ogImageAlt,
        },
      ],

      // Article-specific fields
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        section,
        tags,
        authors: author ? [author] : undefined,
      }),
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      site: SOCIAL_PROFILES.twitterHandle,
      creator: SOCIAL_PROFILES.twitterHandle,
      title: titleString,
      description,
      images: [ogImage],
    },

    // Robots
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Format Detection
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    // Verification
    verification: {
      google: VERIFICATION.google,
      ...(VERIFICATION.bing && { other: { 'msvalidate.01': VERIFICATION.bing } }),
    },
  };
}

// ...

export function generateStaticPageMetadata(input: {
  title: string | { absolute: string };
  description: string;
  url: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const title = typeof input.title === 'string'
    ? `${input.title} | CDPL`
    : input.title;

  return generateMetadata({
    title,
    description: input.description,
    keywords: input.keywords,
    url: input.url,
    image: input.image,
    type: 'website',
  });
}

/**
 * Generate metadata for category/listing pages
 */
export function generateCategoryMetadata(input: {
  categoryName: string;
  description: string;
  slug: string;
  itemCount?: number;
}): Metadata {
  const title = `${input.categoryName} Courses - ${input.itemCount ? `${input.itemCount}+ ` : ''}Training Programs | CDPL`;

  const keywords = [
    `${input.categoryName.toLowerCase()} courses`,
    `${input.categoryName.toLowerCase()} training`,
    `best ${input.categoryName.toLowerCase()} courses`,
    'online training',
    'placement support',
  ];

  return generateMetadata({
    title,
    description: input.description,
    keywords,
    url: `/courses/${input.slug}`,
    type: 'website',
  });
}

/**
 * Generate metadata for event pages
 */
export function generateEventMetadata(input: {
  title: string;
  description: string;
  slug: string;
  category: string;
  organizer?: string;
  location?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const title = `${input.title} - ${input.category} Event | CDPL`;

  const keywords = [
    ...(input.keywords || []),
    input.category,
    input.title,
    "CDPL event",
    "corporate training",
    "workshop",
    input.organizer || "CDPL",
    input.location || "",
    "technical training",
    "professional development",
    "industry event",
  ];

  return generateMetadata({
    title,
    description: input.description,
    keywords: keywords.filter(Boolean),
    url: `/events/${input.slug}`,
    image: input.image,
    type: 'website',
  });
}

// ============================================================================
// AI CRAWLER META TAGS
// ============================================================================

/**
 * Generate AI-specific meta tags for better AI crawler understanding
 * These should be added to the <head> section
 */
export function generateAIMetaTags(customSummary?: string, customKeyPoints?: string[]): Record<string, string> {
  return {
    'ai:summary': customSummary || AI_OPTIMIZATION.summary,
    'ai:key_points': (customKeyPoints || AI_OPTIMIZATION.keyPoints).join(' | '),
    'ai:target_audience': AI_OPTIMIZATION.targetAudience,
    'ai:primary_services': AI_OPTIMIZATION.primaryServices.join(' | '),
  };
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Extract keywords from text content
 */
export function extractKeywords(text: string, maxKeywords: number = 10): string[] {
  // Remove common stop words
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'be',
    'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will',
    'would', 'should', 'could', 'may', 'might', 'must', 'can', 'this',
    'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they',
  ]);

  // Extract words
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));

  // Count frequency
  const frequency: Record<string, number> = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  // Sort by frequency and return top keywords
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

/**
 * Generate meta description from content
 */
export function generateMetaDescription(content: string, maxLength: number = 160): string {
  // Remove HTML tags if any
  const cleanContent = content.replace(/<[^>]*>/g, ' ');

  // Get first sentence or paragraph
  const sentences = cleanContent.split(/[.!?]+/);
  let description = sentences[0].trim();

  // If too short, add more sentences
  let i = 1;
  while (description.length < maxLength && i < sentences.length) {
    const nextSentence = sentences[i].trim();
    if (description.length + nextSentence.length + 2 <= maxLength) {
      description += '. ' + nextSentence;
      i++;
    } else {
      break;
    }
  }

  // Truncate if too long
  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + '...';
  }

  return description;
}

/**
 * Validate metadata for SEO best practices
 */
export function validateMetadata(metadata: MetadataGeneratorInput): {
  isValid: boolean;
  warnings: string[];
} {
  const warnings: string[] = [];

  // Title length check (50-60 characters is ideal)
  const titleLength = typeof metadata.title === 'string'
    ? metadata.title.length
    : (metadata.title as { absolute: string }).absolute?.length || 0;

  if (titleLength < 30) {
    warnings.push('Title is too short. Aim for 50-60 characters.');
  } else if (titleLength > 60) {
    warnings.push('Title is too long. Keep it under 60 characters.');
  }

  // Description length check (150-160 characters is ideal)
  if (metadata.description.length < 120) {
    warnings.push('Description is too short. Aim for 150-160 characters.');
  } else if (metadata.description.length > 160) {
    warnings.push('Description is too long. Keep it under 160 characters.');
  }

  // Keywords check
  if (!metadata.keywords || metadata.keywords.length === 0) {
    warnings.push('No keywords provided. Add relevant keywords for better SEO.');
  }

  // Image check
  if (!metadata.image) {
    warnings.push('No custom image provided. Using default OG image.');
  }

  return {
    isValid: warnings.length === 0,
    warnings,
  };
}
