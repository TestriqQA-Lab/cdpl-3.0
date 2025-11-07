import { Metadata } from 'next';
import { BlogCategoryMenu } from '@/components/blog';
import BlogSidebarCategory from '@/components/blog/BlogSidebarCategory';
import { getCategoryBySlug, getPostsByCategory, getAllCategories } from '@/data/BlogPostData';
import { notFound } from 'next/navigation';
import CategoryHero from '@/components/blog/CategoryHero';
import CategoryArticleList from '@/components/blog/CategoryArticleList';

// ============================================================================
// STATIC SITE GENERATION - Generate pages for all categories
// ============================================================================
export async function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

// ============================================================================
// DYNAMIC METADATA GENERATION - SEO Optimized
// ============================================================================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        return {
            title: 'Category Not Found | CDPL Tech Blog',
            description: 'The requested category could not be found. Browse all categories to discover expert articles on technology and software development.',
            robots: {
                index: false,
                follow: true,
            },
        };
    }

    const posts = getPostsByCategory(category.id);
    const latestPost = posts[0];

    return {
        // Primary Meta Tags - Enhanced
        title: `${category.name} Articles & Tutorials - Expert Insights | CDPL Blog`,
        description: `${category.description} Explore ${posts.length}+ in-depth articles, tutorials, and best practices on ${category.name.toLowerCase()}. Learn from CDPL industry experts and stay updated with the latest trends.`,
        
        // Keywords - Category-specific
        keywords: [
            category.name,
            `${category.name} tutorials`,
            `${category.name} articles`,
            `${category.name} blog`,
            `${category.name} best practices`,
            `${category.name} guides`,
            `learn ${category.name}`,
            `${category.name} tips`,
            'CDPL blog',
            'tech blog',
            'programming tutorials',
            'software development',
        ].join(', '),
        
        // Author Information
        authors: [{ name: 'CDPL Tech Experts Team', url: 'https://www.cinutedigital.com/our-team' }],
        creator: 'CDPL - Cinute Digital Pvt. Ltd.',
        publisher: 'CDPL - Cinute Digital Pvt. Ltd.',
        
        // Format Detection
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        
        // Base URL
        metadataBase: new URL('https://www.cinutedigital.com'),
        
        // Canonical URL
        alternates: {
            canonical: `/blog/category/${category.slug}`,
            languages: {
                'en-IN': `/blog/category/${category.slug}`,
            },
        },
        
        // Open Graph - Enhanced
        openGraph: {
            title: `${category.name} - Expert Articles, Tutorials & Best Practices | CDPL`,
            description: `${category.description} ${posts.length}+ articles to help you master ${category.name.toLowerCase()}.`,
            url: `https://www.cinutedigital.com/blog/category/${category.slug}`,
            siteName: 'CDPL Tech Blog',
            images: [
                {
                    url: latestPost?.featuredImage || '/blog/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: `${category.name} Articles and Tutorials`,
                    type: 'image/jpeg',
                },
            ],
            locale: 'en_IN',
            type: 'website',
        },
        
        // Twitter Card - Enhanced
        twitter: {
            card: 'summary_large_image',
            title: `${category.name} - Expert Articles & Tutorials | CDPL`,
            description: `${category.description} ${posts.length}+ articles available.`,
            images: [latestPost?.featuredImage || '/blog/og-image.jpg'],
            creator: '@cinutedigital',
            site: '@cinutedigital',
        },
        
        // Robots Configuration
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        
        // Additional Properties
        category: category.name,
        classification: 'Technology Category',
    };
}

// ============================================================================
// CATEGORY PAGE COMPONENT
// ============================================================================
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    const posts = getPostsByCategory(category.id);

    // ============================================================================
    // ENHANCED STRUCTURED DATA (JSON-LD) - Multiple Schemas
    // ============================================================================
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            // CollectionPage Schema - Enhanced
            {
                '@type': 'CollectionPage',
                '@id': `https://www.cinutedigital.com/blog/category/${category.slug}#collectionpage`,
                url: `https://www.cinutedigital.com/blog/category/${category.slug}`,
                name: `${category.name} Articles - CDPL Blog`,
                description: category.description,
                isPartOf: {
                    '@id': 'https://www.cinutedigital.com/blog#blog'
                },
                about: {
                    '@type': 'Thing',
                    name: category.name,
                    description: category.description
                },
                mainEntity: {
                    '@id': `https://www.cinutedigital.com/blog/category/${category.slug}#itemlist`
                },
                inLanguage: 'en-IN'
            },
            // ItemList Schema - All Posts in Category
            {
                '@type': 'ItemList',
                '@id': `https://www.cinutedigital.com/blog/category/${category.slug}#itemlist`,
                name: `${category.name} Articles`,
                description: `Collection of ${posts.length} articles about ${category.name}`,
                numberOfItems: posts.length,
                itemListElement: posts.slice(0, 20).map((post, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    item: {
                        '@type': 'BlogPosting',
                        '@id': `https://www.cinutedigital.com/blog/${post.slug}#article`,
                        headline: post.title,
                        description: post.description,
                        image: post.featuredImage,
                        datePublished: new Date(post.publishDate).toISOString(),
                        dateModified: post.lastModified 
                            ? new Date(post.lastModified).toISOString()
                            : new Date(post.publishDate).toISOString(),
                        author: {
                            '@type': 'Person',
                            name: post.author,
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'CDPL - Cinute Digital Pvt. Ltd.',
                            logo: {
                                '@type': 'ImageObject',
                                url: 'https://www.cinutedigital.com/logo.png',
                                width: 250,
                                height: 60
                            }
                        },
                        url: `https://www.cinutedigital.com/blog/${post.slug}`,
                        mainEntityOfPage: `https://www.cinutedigital.com/blog/${post.slug}`,
                        articleSection: category.name,
                        keywords: post.tags.join(', '),
                        inLanguage: 'en-IN'
                    },
                })),
            },
            // BreadcrumbList Schema
            {
                '@type': 'BreadcrumbList',
                '@id': `https://www.cinutedigital.com/blog/category/${category.slug}#breadcrumb`,
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://www.cinutedigital.com'
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Blog',
                        item: 'https://www.cinutedigital.com/blog'
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: 'Categories',
                        item: 'https://www.cinutedigital.com/blog/categories'
                    },
                    {
                        '@type': 'ListItem',
                        position: 4,
                        name: category.name,
                        item: `https://www.cinutedigital.com/blog/category/${category.slug}`
                    }
                ]
            },
            // WebPage Schema
            {
                '@type': 'WebPage',
                '@id': `https://www.cinutedigital.com/blog/category/${category.slug}`,
                url: `https://www.cinutedigital.com/blog/category/${category.slug}`,
                name: `${category.name} Articles - CDPL Blog`,
                description: category.description,
                isPartOf: {
                    '@id': 'https://www.cinutedigital.com/#website'
                },
                breadcrumb: {
                    '@id': `https://www.cinutedigital.com/blog/category/${category.slug}#breadcrumb`
                },
                inLanguage: 'en-IN',
                potentialAction: {
                    '@type': 'ReadAction',
                    target: `https://www.cinutedigital.com/blog/category/${category.slug}`
                }
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
            <div 
                itemScope 
                itemType="https://schema.org/CollectionPage"
                className="category-page"
            >
                {/* Hidden metadata for schema.org */}
                <meta itemProp="name" content={`${category.name} Articles - CDPL Blog`} />
                <meta itemProp="description" content={category.description} />
                <meta itemProp="url" content={`https://www.cinutedigital.com/blog/category/${category.slug}`} />

                {/* Category Navigation Menu */}
                <nav aria-label="Blog categories">
                    <BlogCategoryMenu />
                </nav>

                {/* Category Hero Section */}
                <header>
                    <CategoryHero categoryId={category.id} categoryName={category.name} />
                </header>

                {/* SEO-friendly H1 - Hidden visually but available for SEO */}
                <h1 className="sr-only">
                    {category.name} Articles and Tutorials - Expert Insights and Best Practices from CDPL
                </h1>

                {/* Main Content Area */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content - Article List */}
                        <main className="lg:col-span-2" role="main" aria-label={`${category.name} articles`}>
                            <CategoryArticleList categoryId={category.id} categoryName={category.name} />
                        </main>

                        {/* Sidebar with Category-Specific Content */}
                        <aside className="lg:col-span-1" role="complementary" aria-label="Category sidebar">
                            <BlogSidebarCategory 
                                categoryId={category.id}
                                categoryName={category.name}
                            />
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
