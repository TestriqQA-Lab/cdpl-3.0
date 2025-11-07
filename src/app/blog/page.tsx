import dynamic from 'next/dynamic';
import React from 'react';
import { BlogCategoryMenu, BlogHero, BlogSidebar } from '@/components/blog';
import type { Metadata } from 'next';
import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';

// Dynamically import BlogArticleList for better performance
const BlogArticleList = dynamic(
    () => import("@/components/blog/BlogArticleList"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        ),
    }
);

// ============================================================================
// SEO METADATA - Enhanced with generateSEO utility
// ============================================================================
export const metadata: Metadata = generateSEO({
    title: 'Tech Blog - Latest Insights, Tutorials & Industry Trends | CDPL',
    description: 'Discover expert-written articles on AI/ML, web development, React, Next.js, software testing, and DevOps. Get actionable tutorials, best practices, and industry insights to level up your tech skills. Updated daily with fresh content from CDPL experts.',
    keywords: [
        'tech blog',
        'technology blog',
        'web development tutorials',
        'AI machine learning articles',
        'React tutorials',
        'Next.js guides',
        'software testing blog',
        'DevOps best practices',
        'programming guides',
        'coding tutorials',
        'software development blog',
        'tech industry insights',
        'developer resources',
        'software engineering blog',
        'full stack development',
    ],
    url: '/blog',
    image: '/blog/og-image.jpg',
    imageAlt: 'CDPL Tech Blog - Expert Articles and Tutorials on Modern Technology',
});

// ============================================================================
// MAIN BLOG PAGE COMPONENT
// ============================================================================
export default function BlogPage() {
    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
    ]);

    // Organization Schema
    const organizationSchema = {
        '@type': 'Organization',
        '@id': 'https://www.cinutedigital.com/#organization',
        name: 'CDPL - Cinute Digital Pvt. Ltd.',
        url: 'https://www.cinutedigital.com',
        logo: {
            '@type': 'ImageObject',
            url: 'https://www.cinutedigital.com/logo.png',
            width: 250,
            height: 60
        },
        sameAs: [
            'https://twitter.com/cinutedigital',
            'https://linkedin.com/company/cinute-digital',
            'https://github.com/cinutedigital'
        ]
    };

    // Blog Schema
    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': 'https://www.cinutedigital.com/blog/#blog',
        url: 'https://www.cinutedigital.com/blog',
        name: 'CDPL Tech Blog',
        description: 'Expert articles on AI/ML, web development, React, Next.js, DevOps, software testing, and modern technology from CDPL industry experts',
        publisher: organizationSchema,
        inLanguage: 'en-IN',
        about: [
            {
                '@type': 'Thing',
                name: 'Software Testing',
                description: 'Articles about QA, automation testing, and testing best practices'
            },
            {
                '@type': 'Thing',
                name: 'Web Development',
                description: 'Tutorials on React, Next.js, and modern web technologies'
            },
            {
                '@type': 'Thing',
                name: 'AI & Machine Learning',
                description: 'Insights on artificial intelligence and machine learning'
            },
            {
                '@type': 'Thing',
                name: 'DevOps',
                description: 'Best practices for DevOps, CI/CD, and cloud computing'
            }
        ]
    };

    // WebSite Schema with SearchAction
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://www.cinutedigital.com/#website',
        url: 'https://www.cinutedigital.com',
        name: 'CDPL - Cinute Digital',
        description: 'Expert technology training and blog with tutorials, insights, and best practices',
        publisher: organizationSchema,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.cinutedigital.com/blog/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        },
        inLanguage: 'en-IN'
    };

    // FAQ Schema - NEW!
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://www.cinutedigital.com/blog/#faq',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What topics does the CDPL blog cover?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The CDPL blog covers a wide range of technology topics including Software Testing, Web Development (React, Next.js), AI/ML, Data Science, DevOps, Automation, Cloud Computing, and software engineering best practices. All articles are written by industry experts with practical experience.'
                }
            },
            {
                '@type': 'Question',
                name: 'How often is the CDPL blog updated?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The CDPL blog is updated regularly with fresh content, tutorials, and industry insights. New articles are published multiple times per week covering the latest trends and technologies.'
                }
            },
            {
                '@type': 'Question',
                name: 'Are the blog tutorials suitable for beginners?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! The CDPL blog features content for all skill levels - from beginner tutorials to advanced technical guides. Each article clearly indicates the difficulty level and prerequisites.'
                }
            },
            {
                '@type': 'Question',
                name: 'Can I search for specific topics on the blog?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, the CDPL blog includes a search function and category filters to help you find articles on specific topics. You can browse by category, search by keywords, or filter by tags.'
                }
            },
            {
                '@type': 'Question',
                name: 'Who writes the CDPL blog articles?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'CDPL blog articles are written by experienced technology professionals, trainers, and industry experts who specialize in software testing, web development, AI/ML, and DevOps. All authors have real-world experience in their respective fields.'
                }
            }
        ]
    };

    return (
        <>
            {/* Structured Data (JSON-LD) - Multiple Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Semantic HTML with proper structure */}
            <article itemScope itemType="https://schema.org/Blog">
                {/* Hidden metadata for schema.org */}
                <meta itemProp="name" content="CDPL Tech Blog" />
                <meta itemProp="description" content="Expert articles on technology, development, and testing" />
                <meta itemProp="url" content="https://www.cinutedigital.com/blog" />

                {/* Category Navigation Menu - Scrollable */}
                <nav aria-label="Blog categories">
                    <BlogCategoryMenu />
                </nav>

                {/* Hero Section with Featured Article */}
                <header>
                    <BlogHero />
                </header>

                {/* Main Content Area */}
                <div className="bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* SEO-friendly heading - Hidden visually but available for screen readers and SEO */}
                        <h1 className="sr-only">
                            CDPL Tech Blog - Latest Articles on Web Development, AI/ML, React, Software Testing, and DevOps
                        </h1>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Article List - 2 columns */}
                            <main className="lg:col-span-2" role="main" aria-label="Blog articles">
                                <BlogArticleList />
                            </main>

                            {/* Sidebar - 1 column */}
                            <aside className="lg:col-span-1" role="complementary" aria-label="Blog sidebar">
                                <div className="lg:sticky lg:top-[200px]">
                                    <BlogSidebar />
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
