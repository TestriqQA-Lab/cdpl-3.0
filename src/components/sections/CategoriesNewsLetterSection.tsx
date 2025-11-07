"use client";
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export const CategoriesNewsletterSection: React.FC = () => {
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
                    <Image src='/images/cdpl-logo.png' alt='cdpl-logo' width={100} height={100}/>
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
                            onKeyUp={handleKeyPress}
                            className="flex-1 px-6 py-3 rounded-lg bg-amber-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg"
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
