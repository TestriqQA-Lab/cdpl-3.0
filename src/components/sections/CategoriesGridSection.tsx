"use client";
import React from 'react';
import { Code, TrendingUp, Briefcase, BookOpen, Users, Award, ChevronRight } from 'lucide-react';
// import { Category } from '@/types/blog.types';

interface BrowseByCategoryProps {
    onCategoryClick?: (slug: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
    code: <Code className="w-7 h-7 text-white" />,
    trending: <TrendingUp className="w-7 h-7 text-white" />,
    briefcase: <Briefcase className="w-7 h-7 text-white" />,
    book: <BookOpen className="w-7 h-7 text-white" />,
    users: <Users className="w-7 h-7 text-white" />,
    award: <Award className="w-7 h-7 text-white" />,
};

export const CategoriesGridSection: React.FC<BrowseByCategoryProps> = ({ onCategoryClick }) => {
    const categories = [
        {
            id: '1',
            title: 'Web Development',
            description: 'Master frontend, backend, and full-stack development with modern frameworks and best practices',
            icon: 'code',
            postCount: 45,
            slug: 'web-development',
            color: 'bg-blue-500'
        },
        {
            id: '2',
            title: 'Digital Marketing',
            description: 'Learn SEO, social media marketing, content strategy, and digital advertising techniques',
            icon: 'trending',
            postCount: 38,
            slug: 'digital-marketing',
            color: 'bg-green-500'
        },
        {
            id: '3',
            title: 'Career Development',
            description: 'Professional growth strategies, interview tips, resume building, and workplace skills',
            icon: 'briefcase',
            postCount: 32,
            slug: 'career-development',
            color: 'bg-purple-500'
        },
        {
            id: '4',
            title: 'Online Learning',
            description: 'Effective study techniques, course reviews, and tips for successful online education',
            icon: 'book',
            postCount: 28,
            slug: 'online-learning',
            color: 'bg-orange-500'
        },
        {
            id: '5',
            title: 'Industry Insights',
            description: 'Latest tech trends, market analysis, and expert perspectives on digital transformation',
            icon: 'users',
            postCount: 25,
            slug: 'industry-insights',
            color: 'bg-indigo-500'
        },
        {
            id: '6',
            title: 'Certifications',
            description: 'Professional certification guides, exam preparation, and credential recommendations',
            icon: 'award',
            postCount: 22,
            slug: 'certifications',
            color: 'bg-red-500'
        }
    ];

    return (
        <section className="py-8 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Browse by Category
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover articles tailored to your learning journey and career goals
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <article
                            key={category.id}
                            onClick={() => onCategoryClick && onCategoryClick(category.slug)}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:border-blue-300 group"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {iconMap[category.icon]}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {category.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {category.description}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500 font-medium">
                                    {category.postCount} Articles
                                </span>
                                <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
