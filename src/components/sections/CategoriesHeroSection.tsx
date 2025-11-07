"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface HeroSectionProps {
    onSearch?: (query: string) => void;
}

export const CategoriesHeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && onSearch) {
            onSearch(searchQuery);
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-teal-900 via-emerald-800 to-gray-900 text-white">
            {/* Hero Content */}
            <div className="py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        <span className='text-brand'>Cinute Digital</span> Learning Hub
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 text-blue-100">
                        Explore Expert Insights on Digital Skills, Technology & Career Growth
                    </p>
                    <p className="text-lg text-blue-50 max-w-3xl mx-auto">
                        Stay ahead with tutorials, industry trends, and professional development resources
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-6xl mx-auto px-4 pb-8">
                <div className="relative max-w-3xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search articles, tutorials, and guides..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full px-6 py-4 pl-14 rounded-lg shadow-lg border-2 border-transparent focus:border-blue-300 focus:outline-none text-gray-800 bg-white"
                        aria-label="Search blog posts"
                    />
                    <Search
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 cursor-pointer"
                        onClick={() => onSearch && onSearch(searchQuery)}
                    />
                </div>
            </div>
        </section>
    );
};
