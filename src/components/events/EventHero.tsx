import React from "react";
import { PastEvent } from "@/data/eventsData";
import { ArrowLeft, Calendar, MapPin, Share2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface EventHeroProps {
    event: PastEvent;
}

export default function EventHero({ event }: EventHeroProps) {
    return (
        <div className="relative w-full min-h-[60vh] flex items-end justify-start overflow-hidden bg-slate-900">
            {/* Immersive Background Image */}
            <div className="absolute inset-0 z-0">
                {event.heroImageUrl ? (
                    <img
                        src={event.heroImageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
                    />
                ) : (
                    <div className={`w-full h-full opacity-30 ${event.categoryColor || "bg-blue-600"}`} />
                )}
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 pb-16 pt-32">
                {/* Back Link */}
                <Link
                    href="/events"
                    className="inline-flex items-center text-sm text-white/80 hover:text-white mb-8 transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:bg-white/20"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Events
                </Link>

                <div className="grid lg:grid-cols-12 gap-8 items-end">
                    <div className="lg:col-span-8">
                        {/* Category & Status */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md",
                                    event.categoryColor || "bg-blue-600"
                                )}
                            >
                                {event.category}
                            </span>
                            {event.featured && (
                                <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-500 text-black shadow-lg">
                                    Featured
                                </span>
                            )}
                        </div>

                        {/* Title with Gradient Text */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                            {event.title}
                        </h1>

                        {/* Subtitle */}
                        {event.subtitle && (
                            <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-3xl mb-8 drop-shadow-md">
                                {event.subtitle}
                            </p>
                        )}

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-6 text-white/90 text-sm md:text-base font-medium">
                            <div className="flex items-center backdrop-blur-md bg-black/20 px-4 py-2 rounded-lg border border-white/10">
                                <Calendar className="w-5 h-5 mr-2 text-yellow-400" />
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center backdrop-blur-md bg-black/20 px-4 py-2 rounded-lg border border-white/10">
                                <MapPin className="w-5 h-5 mr-2 text-red-400" />
                                <span>{event.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
