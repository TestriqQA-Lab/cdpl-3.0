import React from "react";
import { PastEvent } from "@/data/eventsData";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface EventHeroProps {
    event: PastEvent;
}

export default function EventHero({ event }: EventHeroProps) {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Hero Image Section */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-slate-800 to-slate-900">
                {/* Background Image */}
                {event.heroImageUrl && (
                    <img
                        src={event.heroImageUrl}
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                {/* Content Container */}
                <div className="relative z-10 h-full">
                    <div className="container mx-auto px-4 h-full flex flex-col justify-between py-8">
                        {/* Back Button */}
                        <div>
                            <Link
                                href="/events"
                                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="text-sm font-medium">Back to Events</span>
                            </Link>
                        </div>

                        {/* Title and Meta Info */}
                        <div className="pb-8">
                            {/* Category Badge */}
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${event.categoryColor || "bg-blue-600"}`}>
                                    {event.category}
                                </span>
                                {event.featured && (
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-500 text-slate-900">
                                        Featured
                                    </span>
                                )}
                            </div>

                            {/* Event Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl">
                                {event.title}
                            </h1>

                            {/* Subtitle */}
                            {event.subtitle && (
                                <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-3xl mb-6">
                                    {event.subtitle}
                                </p>
                            )}

                            {/* Meta Information */}
                            <div className="flex flex-wrap gap-4 text-white/90">
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm font-medium">{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-sm font-medium">{event.location}</span>
                                </div>
                                {event.attendees && (
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="text-sm font-medium">{event.attendees}+ Attendees</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
