"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getLatestPosts, getCategoryById, getAuthorById } from "@/data/BlogPostData";

const BlogArticleList = () => {
  const [visibleArticles, setVisibleArticles] = useState(6);

  // Get latest posts excluding the featured one
  const latestPosts = getLatestPosts(20); // Get more than we need for load more

  const loadMoreArticles = () => {
    setVisibleArticles((prev) => prev + 3);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Content - Article List */}
          <div className="lg:col-span-2">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Latest Articles
              </h2>
              <Link
                href="/blog/all-posts"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Article Cards */}
            <div className="space-y-6">
              {latestPosts.slice(0, visibleArticles).map((post) => {
                const category = getCategoryById(post.categoryId);
                const author = getAuthorById(post.authorId);

                if (!category || !author) return null;

                // Format date
                const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                });

                return (
                  <article
                    key={post.id}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="md:flex">
                      {/* Article Image */}
                      <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center">
                            <svg
                              className="w-16 h-16 text-indigo-300"
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
                          </div>
                        )}
                      </div>

                      {/* Article Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Category Badge */}
                        <span
                          className={`inline-block w-fit px-3 py-1 ${category.color.bg} ${category.color.text} text-xs font-semibold rounded-full mb-3`}
                        >
                          {category.name}
                        </span>

                        {/* Title - Optimized color on hover */}
                        <Link href={`/blog/${post.slug}`}>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>
                        </Link>

                        {/* Description - Optimal reading color */}
                        <p className="text-gray-700 mb-4 text-base leading-relaxed line-clamp-2 flex-grow">
                          {post.description}
                        </p>

                        {/* Meta Information - Subtle but readable */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-1.5">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white font-semibold text-[10px]">
                              {author.name.charAt(0)}
                            </div>
                            <span className="font-medium text-gray-700">{author.name}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                            <span>{formattedDate}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-indigo-600" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Load More Button */}
            {visibleArticles < latestPosts.length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={loadMoreArticles}
                  className="group bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  Load More Articles
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            )}

            {/* View All Link - Mobile */}
            <div className="flex sm:hidden justify-center mt-8">
              <Link
                href="/blog"
                className="flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200"
              >
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticleList;

