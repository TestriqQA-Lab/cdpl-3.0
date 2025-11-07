"use client";

import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedPost, getCategoryById, getAuthorById } from "@/data/BlogPostData";

const BlogHero = () => {
  const featuredPost = getFeaturedPost();
  
  if (!featuredPost) return null;

  const category = getCategoryById(featuredPost.categoryId);
  const author = getAuthorById(featuredPost.authorId);

  if (!category || !author) return null;

  // Format date
  const formattedDate = new Date(featuredPost.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Article Card */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Category Badge */}
              <span
                className={`inline-block px-3 py-1 ${category.color.bg} ${category.color.text} text-xs font-semibold rounded-md`}
              >
                {category.name}
              </span>

              {/* Title - Optimized for readability */}
              <Link href={`/blog/${featuredPost.slug}`}>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {featuredPost.title}
              </h1>
              </Link>

              {/* Description - Optimal reading color */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {featuredPost.description}
              </p>

              {/* Meta Information - Subtle but readable */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-indigo-600" />
                  <span className="font-medium">{author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              {/* CTA Button - High contrast */}
              <div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg h-11 px-6 py-2 transform hover:-translate-y-0.5 duration-200">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Featured Image - FIXED for mobile */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-xl shadow-md overflow-hidden border border-gray-200">
                {featuredPost.featuredImage ? (
                  <Image
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-gray-50 to-gray-100 text-gray-400">
                    <svg
                      className="w-20 h-20 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <p className="text-gray-600 text-sm font-medium">Featured Article Image</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogHero;
