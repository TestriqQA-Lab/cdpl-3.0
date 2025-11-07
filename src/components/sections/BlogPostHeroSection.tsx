'use client';

import Image from 'next/image';
import { getPostBySlug, getAuthorById } from '@/data/BlogPostData';
import { notFound } from 'next/navigation';

interface BlogPostHeroSectionProps {
    slug: string;
}

export const BlogPostHeroSection: React.FC<BlogPostHeroSectionProps> = ({ slug }) => {
    const post = getPostBySlug(slug);
    
    if (!post) {
        notFound();
    }

    const author = getAuthorById(post.authorId);

    if (!author) {
        return null;
    }

    // Format date
    const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center md:text-left text-gray-600">
                {post.title}
            </h1>

            {/* Author Bio */}
            <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0">
                    <Image
                        src={author.avatar || "/images/user1.jpg"}
                        alt={author.name}
                        fill
                        className="rounded-full border-2 border-blue-600 object-cover"
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                    />
                </div>
                <div className="text-center sm:text-left">
                    <p className="font-semibold text-base sm:text-lg text-gray-600">{author.name}</p>
                    <p className="text-xs sm:text-sm text-gray-700">
                        {author.bio}
                    </p>
                    <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                        <span className="text-xs text-gray-500">{formattedDate}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                        
                    </div>
                </div>
            </div>

            {/* Featured Image - OPTIMIZED: Smaller, responsive heights for better blog layout */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 mb-6 sm:mb-8 rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={post.featuredImage || "/images/automation-testing.webp"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 1200px"
                    priority
                />
            </div>

            {/* Introduction */}
            <div className="space-y-4">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    {post.excerpt}
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    {post.description}
                </p>
            </div>
        </section>
    );
};
