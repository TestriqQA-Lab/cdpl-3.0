
"use client";
// import { BlogPost } from '@/types/blog.types';

interface FeaturedArticlesProps {
  onArticleClick?: (id: string) => void;
}

export const CategoriesCTASection: React.FC<FeaturedArticlesProps> = ({ onArticleClick }) => {
  const featuredPosts = [
    {
      id: '1',
      title: 'Complete Guide to React 18 Features and Best Practices',
      excerpt: 'Explore the latest React 18 features including concurrent rendering, automatic batching, and new hooks for modern web development.',
      category: 'Web Development',
      readTime: '8 min',
      date: 'Oct 1, 2025'
    },
    {
      id: '2',
      title: 'SEO Strategies That Actually Work in 2025',
      excerpt: 'Discover proven SEO techniques to boost your website rankings, including AI optimization and core web vitals improvement.',
      category: 'Digital Marketing',
      readTime: '6 min',
      date: 'Sep 28, 2025'
    },
    {
      id: '3',
      title: 'How to Land Your First Tech Job: A Comprehensive Roadmap',
      excerpt: 'Step-by-step guide covering portfolio building, networking strategies, and interview preparation for aspiring tech professionals.',
      category: 'Career Development',
      readTime: '10 min',
      date: 'Sep 25, 2025'
    },
    {
      id: '4',
      title: 'Mastering TypeScript: From Basics to Advanced Patterns',
      excerpt: 'Learn TypeScript fundamentals, advanced types, generics, and design patterns to write type-safe, maintainable code.',
      category: 'Web Development',
      readTime: '12 min',
      date: 'Sep 22, 2025'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Featured Articles
          </h2>
          <p className="text-lg text-gray-600">
            Hand-picked articles to accelerate your learning
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onArticleClick && onArticleClick(post.id)}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300 cursor-pointer group"
            >
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime} read
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== SECTION 4: NEWSLETTER SECTION ====================
// components/blog/NewsletterSection.tsx
import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with Latest Insights
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join 10,000+ learners receiving weekly tips, tutorials, and industry updates directly to your inbox
        </p>

        {/* Subscription Form */}
        {!isSubscribed ? (
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg"
              aria-label="Email for newsletter"
            />
            <button
              onClick={handleSubscribe}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Subscribe Now
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 text-white text-lg">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">Successfully subscribed! Check your email.</span>
          </div>
        )}

        {/* Privacy Note */}
        <p className="text-sm text-blue-200 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};
